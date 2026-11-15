/* WoW Forever Planner — roster + class guides. Everything is stored in this browser (localStorage). */
(function () {
"use strict";
const D = window.FP_DATA;
const CLS = D.classes, ORDER = D.order;
const BRAND = { color: "#E3B341", ink: "#8A6418" };
const PROFS = ["Alchemy", "Blacksmithing", "Enchanting", "Engineering", "Herbalism", "Leatherworking", "Mining", "Skinning", "Tailoring"];
const SECONDARY = [["cooking", "Cooking"], ["firstaid", "First Aid"], ["fishing", "Fishing"]];
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $("#app");

/* ---------- storage ---------- */
const KEY = "fp:v1", OPENKEY = "fp:open", LOOKKEY = "fp:look";
let S = { v: 1, roster: [], legacy: {} };
function load() {
  try { const d = JSON.parse(localStorage.getItem(KEY)); if (d && Array.isArray(d.roster)) S = { v: 1, roster: d.roster.map(fixChar).filter(Boolean), legacy: d.legacy && typeof d.legacy === "object" ? d.legacy : {} }; } catch (e) {}
}
let saveWarned = false;
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); flashSaved(); }
  catch (e) { if (!saveWarned) { saveWarned = true; toast("Couldn't save: this browser blocks storage. Export your roster to keep it."); } }
}
let openMap = {};
try { openMap = JSON.parse(localStorage.getItem(OPENKEY)) || {}; } catch (e) {}
function saveOpen() { try { localStorage.setItem(OPENKEY, JSON.stringify(openMap)); } catch (e) {} }

/* ---------- helpers ---------- */
function esc(s) { return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function uid() { return Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4); }
function clampLv(n, d = 1) { n = Math.round(Number(n)); return isFinite(n) ? Math.min(60, Math.max(1, n)) : d; }
function factionOf(race) { return D.races.Alliance.includes(race) ? "Alliance" : D.races.Horde.includes(race) ? "Horde" : null; }
function classRaces(k) { return CLS[k].races.map(r => r.race); }
function isNewCombo(k, race) { return !!CLS[k].races.find(r => r.race === race && r.new); }
function firstBuild(k) { return Object.keys(CLS[k].builds)[0]; }
function fixChar(c) {
  if (!c || typeof c !== "object" || !CLS[c.cls]) return null;
  const k = c.cls, B = CLS[k].builds;
  const o = {
    id: typeof c.id === "string" && c.id ? c.id.slice(0, 24) : uid(),
    name: String(c.name || "Unnamed").slice(0, 40), cls: k,
    race: classRaces(k).includes(c.race) ? c.race : classRaces(k)[0],
    realm: c.realm === "PvP" ? "PvP" : "PvE", guild: String(c.guild || "").slice(0, 48),
    main: !!c.main, alt: !!c.alt, build: c.build in B ? c.build : firstBuild(k), level: clampLv(c.level, 1),
    prof1: PROFS.includes(c.prof1) ? c.prof1 : "", prof2: PROFS.includes(c.prof2) ? c.prof2 : "",
    sec: {}, looks: String(c.looks || "").slice(0, 2000), notes: String(c.notes || "").slice(0, 4000), ticks: {}
  };
  o.faction = factionOf(o.race);
  for (const [s] of SECONDARY) o.sec[s] = !!(c.sec && c.sec[s]);
  for (const b in B) {
    const a = c.ticks && c.ticks[b];
    const arr = typeof a === "string" ? [...a].map(x => x === "1") : Array.isArray(a) ? a.map(Boolean) : [];
    o.ticks[b] = B[b].rows.map((_, i) => !!arr[i]);
  }
  return o;
}
function go(h) { if (location.hash === h) route(); else location.hash = h; }
function charById(id) { return S.roster.find(c => c.id === id); }
function rowsOf(k, b) { return CLS[k].builds[b].rows; }
function totalOf(k, b) { return rowsOf(k, b).reduce((n, r) => n + r[5], 0); }
function spentOf(k, b, ticks) { return rowsOf(k, b).reduce((n, r, i) => n + (ticks[i] ? r[5] : 0), 0); }
function range(txt) {
  const t = (txt || "").replace(/\s/g, "").replace(/[–—]/g, "-");
  let m;
  if ((m = t.match(/^(?:Lv)?(\d+)-(\d+)$/))) return [+m[1], +m[2]];
  if ((m = t.match(/^~(\d+)$/))) return [+m[1] - 2, +m[1] + 2];
  if ((m = t.match(/^(\d+)\+$/))) return [+m[1], +m[1] + 5];
  if ((m = t.match(/^(?:Lv)?(\d+)$/))) return [+m[1], +m[1]];
  return null;
}
let toastT = null;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 2600); }
function flashSaved() { const s = $("#savestate"); s.textContent = "Saved in this browser"; s.dataset.s = "local"; }

/* ---------- theme ---------- */
function setColors(color, ink) { const r = document.documentElement; r.style.setProperty("--class", color); r.style.setProperty("--class-ink", ink); }
function lookLabel() { const b = $("#lookbtn"); const light = document.documentElement.dataset.style === "c"; b.textContent = light ? "Dark mode" : "Light mode"; b.setAttribute("aria-pressed", String(light)); }
$("#lookbtn").addEventListener("click", () => {
  const r = document.documentElement; r.dataset.style = r.dataset.style === "c" ? "b" : "c";
  try { localStorage.setItem(LOOKKEY, r.dataset.style === "c" ? "light" : "dark"); } catch (e) {}
  lookLabel();
});
lookLabel();

/* ---------- page chrome ---------- */
function header(title, lede, stamps, active) {
  $("#page-title").innerHTML = title;
  $("#page-lede").innerHTML = lede;
  $("#page-stamp").innerHTML = (stamps || []).map(s => `<span>${s}</span>`).join("");
  const links = [["#/", "Your roster", "roster"], ["#/classes", "Class guides", "classes"], ["#/legacy", "Legacy System", "legacy"], ["#/races", "Races &amp; racials", "races"], ["#/extras", "Extras", "extras"]];
  $("#sitenav").innerHTML = links.map(([h, t, k]) => `<a href="${h}"${k === active ? ' class="on" aria-current="page"' : ""}>${t}</a>`).join("");
  document.title = (title.replace(/<[^>]+>/g, "") + " · WoW Forever Planner").replace(/^WoW Forever Planner · /, "");
}
function sect(id, label, h2, inner, opts = {}) {
  return `<section id="${id}"${opts.jump ? ` data-jump="${esc(opts.jump)}"` : ""}>
  <details class="sect" data-key="sect-${id}" open>
  <summary class="head"><div class="sh"><span class="label">${label}</span>
    <h2${opts.h2id ? ` id="${opts.h2id}"` : ""}>${h2}</h2></div></summary>${opts.desc ? `\n  <p class="sdesc">${opts.desc}</p>` : ""}
${inner}
  </details>
</section>
`;
}
function setLevelBox(show, label) {
  $("#lvbox").hidden = !show;
  if (show) $("#lvlabel").textContent = label;
}
let scope = "";
function afterRender() {
  // collapsible memory
  $$("details.sect, details.gpanel", app).forEach(d => {
    const k = scope + "|" + d.dataset.key;
    if (d.dataset.key && k in openMap) d.open = !!openMap[k];
    d.addEventListener("toggle", () => { if (!d.dataset.key) return; openMap[k] = d.open; saveOpen(); syncAllBtn(); });
  });
  buildJump();
  syncAllBtn();
  markSteps();
}

/* ---------- expand all ---------- */
const allBtn = $("#expandall");
function syncAllBtn() { const ds = $$("details.gpanel, details.sect", app); allBtn.hidden = !ds.length; allBtn.textContent = ds.length && ds.every(d => d.open) ? "Collapse all" : "Expand all"; }
allBtn.addEventListener("click", () => { const ds = $$("details.gpanel, details.sect", app); const open = !ds.every(d => d.open); ds.forEach(d => (d.open = open)); syncAllBtn(); });

/* ---------- jump menu ---------- */
const jbtn = $("#jumpbtn"), jmenu = $("#jumpmenu"), jcur = $("#jumpcur");
let jitems = [], jsecs = [];
function buildJump() {
  jsecs = $$("main > section[id]", app);
  jmenu.innerHTML = jsecs.map(s => `<a role="menuitem" href="#${s.id}">${esc(s.dataset.jump || s.querySelector("h2")?.textContent || s.id)}</a>`).join("");
  jitems = $$("a", jmenu);
  $("#jump").hidden = jsecs.length < 2;
  markJump();
}
function openJump(o) { jmenu.hidden = !o; jbtn.setAttribute("aria-expanded", String(o)); if (o) (jitems.find(a => a.getAttribute("aria-current") === "true") || jitems[0])?.focus(); }
jbtn.addEventListener("click", () => openJump(jmenu.hidden));
document.addEventListener("click", e => { if (!jmenu.hidden && !e.target.closest("#jump")) openJump(false); });
jmenu.addEventListener("click", e => { if (e.target.closest("a")) openJump(false); });
jmenu.addEventListener("keydown", e => {
  const i = jitems.indexOf(document.activeElement);
  if (e.key === "ArrowDown") { e.preventDefault(); jitems[(i + 1) % jitems.length]?.focus(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); jitems[(i - 1 + jitems.length) % jitems.length]?.focus(); }
  else if (e.key === "Escape") { openJump(false); jbtn.focus(); }
});
function markJump() {
  const y = ($("nav.bar")?.getBoundingClientRect().bottom || 0) + 24;
  let active = jsecs[0];
  for (const s of jsecs) if (s.getBoundingClientRect().top <= y) active = s;
  jitems.forEach(a => a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + active?.id)));
  const a = jitems.find(x => x.getAttribute("aria-current") === "true"); jcur.textContent = a ? a.textContent : "Top";
}
let raf = 0; window.addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; markJump(); }); }, { passive: true });

/* in-page anchors (#talents etc.) scroll instead of changing the route */
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const h = a.getAttribute("href");
  if (h.startsWith("#/") || h.startsWith("#import") || h === "#") return;
  const t = document.getElementById(h.slice(1)); if (!t) return;
  e.preventDefault();
  const sec = t.closest("section")?.querySelector(":scope > details.sect"); if (sec && !sec.open) sec.open = true;
  const d = t.matches("details") ? t : t.closest("details"); if (d && !d.open) d.open = true;
  t.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* copy buttons */
document.addEventListener("click", e => {
  const b = e.target.closest(".copy[data-for]"); if (!b) return;
  const el = document.getElementById(b.dataset.for); if (!el) return;
  const reset = () => setTimeout(() => (b.textContent = "Copy"), 2000);
  const select = () => { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Selected, press Ctrl+C"; reset(); };
  try { navigator.clipboard.writeText(el.textContent).then(() => { b.textContent = "Copied"; reset(); }, select); } catch (err) { select(); }
});

/* ---------- planner context (character or browsing a class) ---------- */
let ctx = null; // {k, build, level, ticks, char}
const browse = {}; // per-class temporary state when browsing without a character
function persistCtx() { if (ctx.char) { ctx.char.level = ctx.level; ctx.char.build = ctx.build; ctx.char.ticks = ctx.ticks; save(); } else if (browse[ctx.k]) { browse[ctx.k].level = ctx.level; browse[ctx.k].build = ctx.build; } }
function available() { return Math.max(0, Math.min(totalOf(ctx.k, ctx.build), ctx.level - 9)); }
function lvTxt(r) { return r[3] === r[4] ? r[3] : `${r[3]}–${r[4]}`; }
function renderTalents() {
  const tapp = $("#talents-app", app); if (!tapp || !ctx) return;
  const k = ctx.k, B = CLS[k].builds, b = ctx.build, bd = B[b], rows = bd.rows, ticks = ctx.ticks[b];
  const sp = { all: 0, cols: bd.cols.map(() => 0) };
  rows.forEach((r, i) => { if (ticks[i]) { sp.cols[r[0]] += r[5]; sp.all += r[5]; } });
  const av = available(), nx = ticks.findIndex(x => !x), tot = totalOf(k, b), diff = av - sp.all;
  const keys = Object.keys(B);
  const tabs = keys.length > 1 ? `<div class="tabs" role="tablist" aria-label="Talent build">${keys.map(x => `<button type="button" role="tab" aria-selected="${x === b}" data-build="${x}">${esc(B[x].name)}${B[x].sub ? `<small>· ${esc(B[x].sub)}</small>` : ""}</button>`).join("")}</div>` : "";
  const pct = Math.round(sp.all / tot * 100);
  const note = ctx.level < 10 ? `<span class="okp">Talents start at 10</span>`
    : diff > 0 ? `<span class="warnp">${diff} point${diff > 1 ? "s" : ""} to spend at level ${ctx.level}</span>`
    : diff < 0 ? `<span class="warnp">${-diff} more ticked than level ${ctx.level} allows</span>`
    : `<span class="okp">All ${av} points spent</span>`;
  const colTotal = c => rows.reduce((n, r) => n + (r[0] === c ? r[5] : 0), 0);
  const col = c => rows.map((r, i) => {
    if (r[0] !== c) return "";
    const cl = ticks[i] ? "done" : ((i === nx ? "next" : "") + (r[3] <= ctx.level ? " due" : "")).trim();
    return `<li class="${cl}"><label><input type="checkbox" data-i="${i}" ${ticks[i] ? "checked" : ""}><span class="rk">${esc(r[1])}</span><span><b>${esc(r[2])}</b>${r[6] ? ` <span class="why">· ${esc(r[6])}</span>` : ""}</span><span class="lvl2">Lv ${lvTxt(r)}</span></label></li>`;
  }).join("");
  const cols = bd.cols.map((lab, c) => `<div><span class="label">${esc(lab)} <span class="mono colct">${sp.cols[c]}/${colTotal(c)}</span></span><ul class="tick">${col(c)}</ul></div>`).join("");
  tapp.innerHTML = `${ctx.char ? "" : `<p class="why">You're browsing, so ticks here aren't saved. <a href="#/new/${k}">Add a ${esc(CLS[k].name)}</a> to keep your progress.</p>`}${tabs}
    <div class="tsum"><span class="meter">Points spent <i><b style="width:${pct}%"></b></i> <span class="mono">${sp.all}/${tot}</span></span>${note}</div>
    <div class="cols">${cols}</div>
    <div class="tactions"><button type="button" class="tbtn" data-act="upto">Tick everything up to level ${ctx.level}</button><button type="button" class="tbtn" data-act="clear">Clear ticks</button></div>`;
}
app.addEventListener("click", e => {
  if (!ctx) return;
  const tapp = e.target.closest("#talents-app"); if (!tapp) return;
  const tb = e.target.closest("[data-build]");
  if (tb) { ctx.build = tb.dataset.build; persistCtx(); refresh(); return; }
  const act = e.target.closest("[data-act]"); if (!act) return;
  const rows = rowsOf(ctx.k, ctx.build);
  ctx.ticks[ctx.build] = act.dataset.act === "upto" ? rows.map(r => r[4] <= ctx.level) : rows.map(() => false);
  persistCtx(); refresh();
});
app.addEventListener("change", e => {
  if (!ctx) return;
  const cb = e.target.closest("#talents-app input[data-i]"); if (!cb) return;
  ctx.ticks[ctx.build][+cb.dataset.i] = cb.checked; persistCtx(); refresh();
});

function markSteps() {
  const L = ctx ? ctx.level : 0;
  $$(".gpanel .step", app).forEach(st => {
    const r = range(st.querySelector(".lv")?.textContent);
    st.classList.remove("past", "now", "soon");
    if (!r || !ctx) return;
    if (r[1] < L) st.classList.add("past");
    else if (r[0] <= L) st.classList.add("now");
    else if (r[0] <= L + 4) st.classList.add("soon");
  });
}

/* hunter beasts */
let beastFilter = "all";
function beastTable() { return $("#beasts table", app); }
function beastRows() { const t = beastTable(); return t ? $$("tbody tr:not(.racegroup)", t) : []; }
function beastLv(tr) { const m = (tr.cells[2]?.textContent || "").match(/\d+/); return m ? +m[0] : null; }
function renderBeasts() {
  const t = beastTable(); if (!t || !ctx) return;
  const L = ctx.level;
  beastRows().forEach(tr => {
    const lv = beastLv(tr), path = !!tr.querySelector(".chg");
    tr.querySelector(".tame")?.remove(); tr.classList.remove("over");
    if (lv != null && lv <= L) tr.cells[0].insertAdjacentHTML("beforeend", ` <span class="tame">Can tame</span>`);
    else if (lv != null) tr.classList.add("over");
    tr.hidden = !(beastFilter === "all" || (beastFilter === "now" && lv != null && lv <= L) || (beastFilter === "path" && path));
  });
  $$("tr.racegroup", t).forEach(g => { let n = g.nextElementSibling, any = false; while (n && !n.classList.contains("racegroup")) { if (!n.hidden) any = true; n = n.nextElementSibling; } g.hidden = !any; });
  $$("#beastchips [data-f]", app).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.f === beastFilter)));
}
app.addEventListener("click", e => { const b = e.target.closest("#beastchips [data-f]"); if (!b) return; beastFilter = b.dataset.f; renderBeasts(); });

/* what to do now */
function pill(t, c) { return `<span class="pill${c ? " " + c : ""}">${t}</span>`; }
function nrow(k, p, hot) { return `<div class="nowrow${hot ? " hot" : ""}"><span class="nk">${esc(k)}</span><div class="nv">${p}</div></div>`; }
function renderNow() {
  const el = $("#now-app", app); if (!el || !ctx) return;
  const C = CLS[ctx.k], L = ctx.level, rows = rowsOf(ctx.k, ctx.build), ticks = ctx.ticks[ctx.build];
  const spent = spentOf(ctx.k, ctx.build, ticks), diff = available() - spent;
  const due = rows.map((r, i) => ({ r, i })).filter(x => !ticks[x.i] && x.r[3] <= L);
  const nx = rows.findIndex((r, i) => !ticks[i] && r[3] > L);
  let tal;
  if (L < 10) tal = pill("Talents start at 10", "strong") + (rows[0] ? pill(`First point: ${esc(rows[0][2])}`) : "");
  else if (due.length) tal = (diff > 0 ? pill(`${diff} point${diff > 1 ? "s" : ""} to spend`, "strong") : pill("Tick what you've spent", "strong")) + due.slice(0, 4).map(x => pill(`<b>${esc(x.r[2])}</b> ${esc(x.r[1])}`)).join("") + (due.length > 4 ? pill(`+${due.length - 4} more`, "soft") : "");
  else tal = pill("Up to date", "strong") + (nx >= 0 ? pill(`Next: <b>${esc(rows[nx][2])}</b> ${esc(rows[nx][1])} at ${rows[nx][3]}`, "soft") : pill("All points spent", "soft"));
  let out = nrow("Talents", tal, L >= 10 && due.length > 0);
  for (const R of C.now) {
    if (R.type === "train") {
      const tn = C.spells.filter(s => s[0] <= L && s[0] > L - 2), ns = C.spells.find(s => s[0] > L);
      out += nrow(R.label || "Train", (tn.length ? tn.flatMap(s => s[1].split(", ").map(n => pill(esc(n)))).join("") : pill(R.none || "New ranks only", "soft")) + (ns ? pill(`Next: ${esc(ns[1])} at ${ns[0]}`, "soft") : ""));
    } else if (R.type === "weapon") {
      const have = C.weapons.filter(w => w[0] <= L).pop(), nw = C.weapons.find(w => w[0] > L);
      out += nrow(R.label || "Weapon", (have ? pill(`<b>${esc(have[1])}</b>${have[2] ? ` · ${esc(have[2])}` : ""}`) : pill(R.none || "Starter weapon", "soft")) + (nw ? pill(`Next at ${nw[0]}: ${esc(nw[1])}`, "soft") : ""));
    } else if (R.type === "tame") {
      const bs = beastRows().map(tr => ({ name: tr.cells[0].querySelector("b")?.textContent, fam: tr.cells[1].textContent, lv: beastLv(tr), where: tr.cells[3].textContent, sw: tr.cells[4].textContent.trim(), path: !!tr.querySelector(".chg") })).filter(x => x.lv != null);
      const near = bs.filter(x => x.lv <= L && x.lv >= L - 12), up = bs.filter(x => x.lv > L).sort((a, b) => a.lv - b.lv)[0];
      out += nrow(R.label || "Tame", (L < 10 ? pill("Pet quest at 10", "soft") : near.length ? near.slice(0, 4).map(x => pill(`<b>${esc(x.name)}</b> · ${esc(x.fam)} ${x.lv} · ${esc(x.where)}`)).join("") : pill("Nothing new near your level", "soft")) + (up ? pill(`Next: ${esc(up.name)} at ${up.lv}`, "soft") : ""));
    } else {
      const items = R.items || [], here = items.filter(w => w[0] <= L && L <= w[1]), nw = items.filter(w => w[0] > L).sort((a, b) => a[0] - b[0])[0];
      out += nrow(R.label, (here.length ? here.map(w => pill(esc(w[2]))).join("") : pill(R.none || "Nothing new right now", "soft")) + (nw ? pill(`Next at ${nw[0]}: ${esc(nw[2])}`, "soft") : ""));
    }
  }
  el.innerHTML = out;
  const h = $("#now-title", app); if (h) h.textContent = `Level ${L}: what to do now`;
}
function refresh() { if (!ctx) return; $("#lvinput").value = ctx.level; renderTalents(); renderBeasts(); renderNow(); markSteps(); syncAllBtn(); }

/* level box */
const lvInput = $("#lvinput");
function setLevel(n) { if (!ctx) return; const v = clampLv(n, ctx.level); ctx.level = v; persistCtx(); refresh(); if (ctx.char) updateCharStamp(); }
lvInput.addEventListener("change", () => setLevel(lvInput.value));
lvInput.addEventListener("keydown", e => { if (e.key === "Enter") setLevel(lvInput.value); });
$("#lvdown").addEventListener("click", () => ctx && setLevel(ctx.level - 1));
$("#lvup").addEventListener("click", () => ctx && setLevel(ctx.level + 1));

/* ---------- shared class blocks ---------- */
function classSections(k) {
  return CLS[k].sections.map(s => {
    const jump = s.id === "macros" ? "Macros" : s.id === "notes" ? "Caveats & sources" : s.h2.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");
    return sect(s.id, s.label, s.h2, s.html, { jump });
  }).join("");
}
function specLines(k) {
  const C = CLS[k];
  const pct = n => { const x = C.lvl.find(z => z[0] === n); return x ? `<span class="specpct">${Math.round(x[1])}% of leveling builds</span>` : ""; };
  return `<ul class="speclines">${C.specs.map(([n, t]) => `<li><span class="spechead"><b class="specname">${esc(n)}</b>${pct(n)}</span><span>${esc(t)}</span></li>`).join("")}</ul>${C.general ? `<p class="specgen">${esc(C.general)}</p>` : ""}`;
}
function overviewSection(k) {
  const C = CLS[k], cols = ["var(--accent)", "var(--brass)", "var(--muted)"];
  const ally = C.races.filter(r => factionOf(r.race) === "Alliance").map(r => esc(r.race) + (r.new ? " (new)" : "")).join(", ");
  const horde = C.races.filter(r => factionOf(r.race) === "Horde").map(r => esc(r.race) + (r.new ? " (new)" : "")).join(", ");
  const art = `  <article class="cls classcard">
    <div class="top"><h3><span class="swatch" style="background:${C.color}"></span>${esc(C.name)}</h3><div class="roles">${C.roles.map(r => `<span>${esc(r)}</span>`).join("")}</div></div>
    ${specLines(k)}
    <div class="splits"><span class="label">How beta players level</span><div class="bar3">${C.lvl.map(x => `<div style="width:${x[1]}%"></div>`).join("")}</div><div class="keys">${C.lvl.map((x, i) => `<span><i style="background:${cols[i]}"></i>${esc(x[0])} <span class="mono">${x[1]}%</span></span>`).join("")}</div></div>
    <div class="first"><span class="label">Most common first points · ${esc(C.lvl[0][0])}</span><ol>${C.first.map(f => `<li>${esc(f)}</li>`).join("")}</ol></div>
    <p class="racesfor"><b>At 60:</b> ${esc(C.at60)}</p>
    <dl class="racesline"><dt>Alliance races</dt><dd>${ally || "None"}</dd><dt>Horde races</dt><dd>${horde || "None"}</dd></dl>
  </article>`;
  return sect("class", "What beta players build", `${esc(C.name)} overview`, art, { desc: "Main Forever changes for the class and how calculator users split their leveling specs. These are popularity counts, not a strength ranking.", jump: "Class overview" });
}
function specSection(k) {
  const C = CLS[k];
  if (!C.opts.length) return "";
  return sect("specs", "Spec options", `${esc(C.name)} leveling specs`, `  <div class="optgrid">${C.opts.map(o => `<div class="opt"><div class="t">${o.t}${o.s ? ` <small>· ${o.s}</small>` : ""}</div><p>${o.p}</p></div>`).join("")}</div>${C.keyspells ? `\n  <p class="why" style="margin-top:14px"><b>Key spell levels:</b> ${C.keyspells}</p>` : ""}`, { jump: "Spec options" });
}
function racialTable(race) {
  const rs = D.racials[race] || [];
  return `<div class="scroll"><table class="racials"><thead><tr><th>Racial</th><th>Type</th><th>Effect</th></tr></thead><tbody>${rs.map(r => `<tr><td>${esc(r[0])}</td><td><span class="kind">${esc(r[1])}</span></td><td>${esc(r[2])}</td></tr>`).join("")}</tbody></table></div>`;
}

/* ---------- pages ---------- */
function charCard(c, full) {
  const C = CLS[c.cls];
  const tot = totalOf(c.cls, c.build), sp = spentOf(c.cls, c.build, c.ticks[c.build]);
  const profs = [c.prof1, c.prof2].filter(Boolean).concat(SECONDARY.filter(([s]) => c.sec[s]).map(x => x[1]));
  const badges = (c.main ? `<span class="badge main">Main</span>` : "") + (c.alt ? `<span class="badge alt">Alt</span>` : "") + (isNewCombo(c.cls, c.race) ? `<span class="badge">New in Forever</span>` : "");
  return `<article class="toon" style="--class:${C.color};--class-ink:${C.ink}">
    ${full ? "" : `<a class="cover" href="#/c/${c.id}" aria-label="Open ${esc(c.name)}"></a>`}
    <div><div class="name">${esc(c.name)}</div><div class="sub">${esc(c.race)} · ${esc(C.name)} · ${esc(c.faction)} · ${esc(c.realm)} realm</div></div>
    ${badges ? `<div class="badges">${badges}</div>` : ""}
    <div class="meta"><span>Level <b class="lvtxt">${c.level}</b></span><span>Build <b>${esc(C.builds[c.build].name)}</b></span>${c.guild ? `<span>Guild <b>&lt;${esc(c.guild)}&gt;</b></span>` : ""}</div>
    <div class="prog"><span>Talents</span><i><b style="width:${Math.round(sp / tot * 100)}%"></b></i><span class="mono">${sp}/${tot}</span></div>
    ${full ? `${profs.length ? `<dl><dt>Professions</dt><dd>${profs.map(esc).join(", ")}</dd></dl>` : ""}
    ${c.looks ? `<details class="look"><summary>Character creation</summary><p style="white-space:pre-wrap;margin:8px 0 0">${esc(c.looks)}</p></details>` : ""}
    ${c.notes ? `<div><span class="label">Notes</span><p style="white-space:pre-wrap;margin:6px 0 0">${esc(c.notes)}</p></div>` : ""}` : ""}
    <div class="acts">${full ? `<button type="button" class="btn" data-edit="${c.id}">Edit</button><button type="button" class="btn" data-share-one="${c.id}">Share this character</button><button type="button" class="btn danger" data-del="${c.id}">Delete</button>` : `<a class="openplan" href="#/c/${c.id}">Open planner</a>`}</div>
  </article>`;
}

function pageRoster() {
  ctx = null; scope = "roster"; setColors(BRAND.color, BRAND.ink); setLevelBox(false);
  const n = S.roster.length;
  header("WoW Forever Planner", "Plan every character on your roster: talent checklists that follow your level, rotations, gear, macros and races for all nine classes. Everything saves in this browser. Share your roster with a link, or export it to a file.",
    [`Characters <b>${n}</b>`, `Guides updated <b>Nov 15, 2026</b>`, `Saved <b>in this browser</b>`], "roster");
  const sorted = [...S.roster].sort((a, b) => (b.main - a.main) || a.name.localeCompare(b.name));
  const list = n ? `<div class="roster">${sorted.map(c => charCard(c, false)).join("")}</div>`
    : `<div class="empty"><h3>No characters yet</h3><p>Add your first character to get a planner for it, or open a share link from a friend to import theirs.</p><div class="btnrow" style="justify-content:center"><a class="btn primary" href="#/new">Add a character</a><button type="button" class="btn" data-act="import">Import a roster</button></div></div>`;
  const actions = `<div class="btnrow" style="margin-bottom:18px"><a class="btn primary" href="#/new">Add a character</a>${n ? `<button type="button" class="btn" data-act="share">Share roster link</button><button type="button" class="btn" data-act="export">Export file</button>` : ""}<button type="button" class="btn" data-act="import">Import</button></div>`;
  const guides = `<div class="classlist">${ORDER.map(k => `<a href="#/class/${k}" style="--c:${CLS[k].color}"><span class="swatch"></span>${esc(CLS[k].name)}</a>`).join("")}</div>`;
  app.innerHTML = sect("roster", "Your characters", "Your roster", actions + list, { jump: "Your roster" }) +
    sect("guides", "No character needed", "Class guides", guides, { desc: "Browse any class's leveling guide, talent order, macros and race picks.", jump: "Class guides" });
  afterRender();
}

function updateCharStamp() { const c = ctx && ctx.char; if (!c) return; $$(".lvtxt", app).forEach(e => (e.textContent = c.level)); const s = $("#page-stamp b.stlv"); if (s) s.textContent = c.level; }

function pageChar(id) {
  const c = charById(id);
  if (!c) { go("#/"); return; }
  const C = CLS[c.cls];
  scope = c.cls; setColors(C.color, C.ink);
  ctx = { k: c.cls, build: c.build, level: c.level, ticks: c.ticks, char: c };
  setLevelBox(true, `${c.name.split(" ")[0]} Lv`);
  header(esc(c.name), `${esc(c.race)} ${esc(C.name)} on a ${esc(c.realm)} realm. Set your level in the bar and the planner shows what to train, which talents are due and what to do next.`,
    [`Level <b class="stlv">${c.level}</b>`, `${esc(c.faction)}`, `${esc(C.roles.join(" · "))}`, c.guild ? `Guild <b>&lt;${esc(c.guild)}&gt;</b>` : "", c.main ? "<b>Main</b>" : "", c.alt ? "<b>Alt</b>" : ""].filter(Boolean), "roster");
  const now = sect("now", `${esc(c.name)} · set your level in the bar above`, "What to do now", `  <div class="nowlist" id="now-app"></div>`, { h2id: "now-title", jump: "Now" });
  const card = sect("character", "Your character", esc(c.name), `  <div class="roster single">${charCard(c, true)}</div>`, { jump: "Character" });
  const racials = sect("racials", "Current numbers", `${esc(c.race)} racials`, racialTable(c.race) + `\n  <p class="why" style="margin-top:10px"><a href="#/races">Compare every race</a></p>`, { jump: "Racials" });
  app.innerHTML = overviewSection(c.cls) + now + card + specSection(c.cls) + classSections(c.cls) + racials;
  afterRender(); refresh();
}

function pageClass(k) {
  if (!CLS[k]) { location.hash = "#/classes"; return; }
  const C = CLS[k];
  scope = k; setColors(C.color, C.ink);
  if (!browse[k]) browse[k] = { build: firstBuild(k), level: 10, ticks: Object.fromEntries(Object.keys(C.builds).map(b => [b, C.builds[b].rows.map(() => false)])) };
  ctx = { k, build: browse[k].build, level: browse[k].level, ticks: browse[k].ticks, char: null };
  setLevelBox(true, `${C.name} Lv`);
  const mine = S.roster.filter(x => x.cls === k);
  header(`${esc(C.name)} guide`, `Leveling guide, talent order, rotation, gear, macros and race picks for the ${esc(C.name)}. Set a level in the bar to preview what's due.`,
    [`${esc(C.roles.join(" · "))}`, `Races <b>${C.races.length}</b>`, mine.length ? `On your roster <b>${mine.length}</b>` : ""].filter(Boolean), "classes");
  const top = `<div class="notice" style="margin-bottom:24px"><span>${mine.length ? `You have ${mine.map(m => `<a href="#/c/${m.id}">${esc(m.name)}</a>`).join(", ")}. Open a character to save level and talent ticks.` : `You're browsing. Add a ${esc(C.name)} to your roster to save level and talent ticks.`}</span><a class="btn primary" href="#/new/${k}">Add a ${esc(C.name)}</a></div>`;
  const now = sect("now", "Preview · set a level in the bar above", "What to do now", `  <div class="nowlist" id="now-app"></div>`, { h2id: "now-title", jump: "Now" });
  app.innerHTML = top + overviewSection(k) + now + specSection(k) + classSections(k);
  afterRender(); refresh();
}

function pageClasses() {
  ctx = null; scope = "classes"; setColors(BRAND.color, BRAND.ink); setLevelBox(false);
  header("Class guides", "Every class's leveling guide, talent order, macros and race picks. Pick a class to browse it, or add a character to keep your own progress.", [`Classes <b>${ORDER.length}</b>`], "classes");
  const cards = ORDER.map(k => {
    const C = CLS[k];
    return `<article class="cls classcard" style="--class:${C.color};--class-ink:${C.ink}"><div class="top"><h3><span class="swatch" style="background:${C.color}"></span><a href="#/class/${k}" style="color:inherit;text-decoration:none">${esc(C.name)}</a></h3><div class="roles">${C.roles.map(r => `<span>${esc(r)}</span>`).join("")}</div></div>${specLines(k)}<div class="btnrow"><a class="openplan" href="#/class/${k}">Open the ${esc(C.name)} guide</a><a class="btn" href="#/new/${k}">Add a ${esc(C.name)}</a></div></article>`;
  }).join("");
  app.innerHTML = sect("classes", "Pick a class", "Class guides", `<div class="classes">${cards}</div>`, { jump: "Class guides" });
  afterRender();
}

function pageRaces() {
  ctx = null; scope = "races"; setColors(BRAND.color, BRAND.ink); setLevelBox(false);
  header("Races &amp; racials", "Which races can play which class in Forever, and every racial with its current numbers.", [`Races <b>${D.races.Alliance.length + D.races.Horde.length}</b>`], "races");
  const matrix = f => `<div class="scroll"><table class="matrix"><thead><tr><th></th>${ORDER.map(k => `<th class="c">${esc(CLS[k].name)}</th>`).join("")}</tr></thead><tbody>${D.races[f].map(r => `<tr><th>${esc(r)}</th>${ORDER.map(k => { const x = CLS[k].races.find(z => z.race === r); return `<td style="${x ? `background:${x.new ? "var(--brass-soft)" : "var(--accent-soft)"}` : ""}">${x ? (x.new ? "New" : "✓") : ""}</td>`; }).join("")}</tr>`).join("")}</tbody></table></div>`;
  const rtab = f => D.races[f].map(r => `<h3 style="margin:18px 0 8px">${esc(r)}</h3>${racialTable(r)}`).join("");
  app.innerHTML = sect("matrix", "Who can be what", "Race × class", `<h3 style="margin:0 0 8px">Alliance</h3>${matrix("Alliance")}<h3 style="margin:22px 0 8px">Horde</h3>${matrix("Horde")}<p class="why" style="margin-top:10px">“New” marks combos that are new in Forever.</p>`, { jump: "Race × class" }) +
    sect("racials-a", "Current numbers", "Alliance racials", rtab("Alliance"), { jump: "Alliance racials" }) +
    sect("racials-h", "Current numbers", "Horde racials", rtab("Horde"), { jump: "Horde racials" });
  afterRender();
}

function pageExtras() {
  ctx = null; scope = "extras"; setColors(BRAND.color, BRAND.ink); setLevelBox(false);
  header("Extras", "Account-wide odds and ends that apply to every character.", [], "extras");
  app.innerHTML = sect("console", D.console.label, D.console.h2, D.console.html, { jump: "Graphics commands" });
  afterRender();
}

/* legacy */
const LG_REWARDS = [[15, "Replica Ironforge Air Rifle (toy)"], [25, "Spectral Bear Cub (pet)"], [40, "Spectral Bear Tabard"], [55, "Reins of the Spectral Bear (mount, needs 60)"]];
function pageLegacy() {
  ctx = null; scope = "legacy"; setColors(BRAND.color, BRAND.ink); setLevelBox(false);
  header("Legacy System", "Account-wide progression: complete Legacy Challenges, earn Legacy Points, and spend up to 16 on each character's Legacy Trees. Tick what you've earned below.", [], "legacy");
  app.innerHTML = sect("legacy", D.legacy.label, D.legacy.h2, D.legacy.html, { jump: "Legacy System" });
  // mark roster characters next to their class rows
  $$("#legacy table.lgt tbody tr", app).forEach(tr => {
    const inp = tr.querySelector("input[data-lg^='c-']"); if (!inp) return;
    const k = inp.dataset.lg.split("-")[1];
    const names = S.roster.filter(c => c.cls === k).map(c => c.name);
    if (names.length) tr.querySelector("th").insertAdjacentHTML("beforeend", `<span class="lgnames">${esc(names.join(", "))}</span>`);
  });
  afterRender(); renderLegacy();
}
function lgKeys() { return $$("#legacy input[data-lg]", app).map(i => i.dataset.lg); }
function renderLegacy() {
  const box = $("#lgBox", app); if (!box) return;
  const K = lgKeys();
  $$("input[data-lg]", box).forEach(i => { i.checked = !!S.legacy[i.dataset.lg]; const li = i.closest("li"); if (li) li.classList.toggle("done", i.checked); });
  const n = K.filter(k => S.legacy[k]).length;
  const grp = g => K.filter(k => g.split("").some(c => k.startsWith(c + "-")));
  $$("[data-lgc]", box).forEach(el => { const ks = grp(el.dataset.lgc); el.textContent = ks.filter(k => S.legacy[k]).length + "/" + ks.length; });
  const spend = Math.min(n, 16), next = LG_REWARDS.find(r => n < r[0]), pct = Math.round(n / K.length * 100);
  $("#lgSum", app).innerHTML = `<span class="meter">Earned <i><b style="width:${pct}%"></b></i> <span class="mono">${n}/${K.length}</span></span>` +
    (spend >= 16 ? `<span class="okp">Every character can spend the full 16</span>` : `<span class="warnp">Each character can spend ${spend} of 16 · ${16 - spend} to go</span>`) +
    (next ? `<span>Next reward at <b class="mono">${next[0]}</b>: ${esc(next[1])}</span>` : `<span class="okp">All launch rewards earned · claim from Innkeeper Wiley in Ratchet</span>`);
  $("#lgRewards", app).innerHTML = LG_REWARDS.map(r => `<span class="${n >= r[0] ? "got" : ""}"><b>${r[0]}</b>${esc(r[1])}</span>`).join("");
}
app.addEventListener("change", e => {
  const i = e.target.closest("#lgBox input[data-lg]"); if (!i) return;
  if (i.checked) S.legacy[i.dataset.lg] = true; else delete S.legacy[i.dataset.lg];
  save(); renderLegacy();
});
app.addEventListener("click", e => { if (e.target.closest('#legacy [data-lgact="clear"]')) { S.legacy = {}; save(); renderLegacy(); } });

/* ---------- dialogs ---------- */
const dlg = $("#dlg"), dform = $("#dlg-form");
function openDlg(html, color) {
  if (color) { dlg.style.setProperty("--class", color[0]); dlg.style.setProperty("--class-ink", color[1]); } else { dlg.style.removeProperty("--class"); dlg.style.removeProperty("--class-ink"); }
  dform.innerHTML = html;
  if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  const f = $("[autofocus]", dform) || $("input,select,textarea,button", dform); f && f.focus();
}
function closeDlg() { if (dlg.open) { if (typeof dlg.close === "function") dlg.close(); else dlg.removeAttribute("open"); } }
dlg.addEventListener("click", e => { if (e.target === dlg) closeDlg(); });
dform.addEventListener("click", e => { if (e.target.closest("[data-close]")) { e.preventDefault(); closeDlg(); } });

function charForm(c, presetClass) {
  const isNew = !c;
  c = c || { name: "", faction: presetClass ? factionOf(classRaces(presetClass)[0]) : "Alliance", race: "", cls: presetClass || "", realm: "PvE", guild: "", main: S.roster.length === 0, alt: S.roster.length > 0, build: "", level: 1, prof1: "", prof2: "", sec: {}, looks: "", notes: "" };
  const opts = (arr, sel, ph) => (ph ? `<option value="">${ph}</option>` : "") + arr.map(([v, t]) => `<option value="${esc(v)}"${v === sel ? " selected" : ""}>${esc(t)}</option>`).join("");
  const html = `<h2 id="dlg-title">${isNew ? "Add a character" : "Edit " + esc(c.name)}</h2>
  <div class="fgrid">
    <label class="field"><span>Name</span><input type="text" name="name" maxlength="40" value="${esc(c.name)}" placeholder="Name and surname" autofocus required></label>
    <div class="field"><span>Faction</span><div class="seg2" role="radiogroup">${["Alliance", "Horde"].map(f => `<label><input type="radio" name="faction" value="${f}"${c.faction === f ? " checked" : ""}>${f}</label>`).join("")}</div></div>
    <label class="field"><span>Race</span><select name="race"></select></label>
    <label class="field"><span>Class</span><select name="cls"></select></label>
    <label class="field"><span>Build to follow</span><select name="build"></select></label>
    <label class="field"><span>Level</span><input type="number" name="level" min="1" max="60" value="${c.level}"></label>
    <div class="field"><span>Realm</span><div class="seg2" role="radiogroup">${["PvE", "PvP"].map(f => `<label><input type="radio" name="realm" value="${f}"${c.realm === f ? " checked" : ""}>${f}</label>`).join("")}</div></div>
    <div class="field"><span>Role on your roster</span><div class="checks"><label><input type="checkbox" name="main"${c.main ? " checked" : ""}> Main</label><label><input type="checkbox" name="alt"${c.alt ? " checked" : ""}> Alt</label></div></div>
    <label class="field"><span>Guild (optional)</span><input type="text" name="guild" maxlength="48" value="${esc(c.guild)}" placeholder="Leave blank if none"></label>
    <label class="field"><span>Profession 1</span><select name="prof1">${opts(PROFS.map(p => [p, p]), c.prof1, "None")}</select></label>
    <label class="field"><span>Profession 2</span><select name="prof2">${opts(PROFS.map(p => [p, p]), c.prof2, "None")}</select></label>
    <div class="field"><span>Secondary skills</span><div class="checks">${SECONDARY.map(([s, t]) => `<label><input type="checkbox" name="sec-${s}"${c.sec && c.sec[s] ? " checked" : ""}> ${t}</label>`).join("")}</div></div>
  </div>
  <label class="field"><span>Character creation notes (optional)</span><textarea name="looks" maxlength="2000" placeholder="Face 3, short braid, red hair…">${esc(c.looks)}</textarea></label>
  <label class="field"><span>Notes (optional)</span><textarea name="notes" maxlength="4000" placeholder="Anything you want to remember">${esc(c.notes)}</textarea></label>
  <p class="why" id="combo-note"></p>
  <p class="ferr" id="form-err" hidden></p>
  <div class="dlgacts"><button type="button" class="btn" data-close>Cancel</button><button type="submit" class="btn primary">${isNew ? "Add character" : "Save changes"}</button></div>`;
  openDlg(html, c.cls ? [CLS[c.cls].color, CLS[c.cls].ink] : null);
  const f = dform;
  const fill = () => {
    const fac = f.querySelector("input[name=faction]:checked").value;
    const races = D.races[fac];
    const rsel = f.elements.race, csel = f.elements.cls, bsel = f.elements.build;
    const curR = rsel.value || c.race, curC = csel.value || c.cls, curB = bsel.value || c.build;
    rsel.innerHTML = opts(races.map(r => [r, r]), races.includes(curR) ? curR : "", "Pick a race");
    const r = rsel.value;
    const ks = ORDER.filter(k => !r || classRaces(k).includes(r));
    csel.innerHTML = opts(ks.map(k => [k, CLS[k].name + (r && isNewCombo(k, r) ? " (new in Forever)" : "")]), ks.includes(curC) ? curC : "", "Pick a class");
    const k = csel.value;
    bsel.innerHTML = k ? opts(Object.entries(CLS[k].builds).map(([b, v]) => [b, v.name + (v.sub ? " · " + v.sub : "")]), curB in (CLS[k]?.builds || {}) ? curB : firstBuild(k)) : `<option value="">Pick a class first</option>`;
    bsel.disabled = !k;
    if (k) { dlg.style.setProperty("--class", CLS[k].color); dlg.style.setProperty("--class-ink", CLS[k].ink); }
    const note = $("#combo-note", f);
    note.textContent = !r && k ? "" : r && !k ? `${ks.length} classes can be ${/^[AEIOU]/.test(r) ? "an" : "a"} ${r}.` : r && k && isNewCombo(k, r) ? `${r} ${CLS[k].name} is a combination that's new in Forever.` : "";
  };
  if (c.race) f.elements.race.innerHTML = `<option value="${esc(c.race)}" selected>${esc(c.race)}</option>`;
  if (c.cls) f.elements.cls.innerHTML = `<option value="${esc(c.cls)}" selected>x</option>`;
  if (c.build) f.elements.build.innerHTML = `<option value="${esc(c.build)}" selected>x</option>`;
  fill();
  f.onchange = e => { if (["faction", "race", "cls"].includes(e.target.name)) { if (e.target.name === "faction") f.elements.race.value = ""; fill(); } };
  f.onsubmit = e => {
    e.preventDefault();
    const v = n => f.elements[n].value;
    const err = $("#form-err", f);
    const name = v("name").trim(), race = v("race"), cls = v("cls");
    const problem = !name ? "Give your character a name." : !race ? "Pick a race." : !cls ? "Pick a class." : !classRaces(cls).includes(race) ? `${race} can't be a ${CLS[cls].name}.` : "";
    if (problem) { err.textContent = problem; err.hidden = false; return; }
    const data = { name, race, cls, realm: f.querySelector("input[name=realm]:checked").value, guild: v("guild").trim(), main: f.elements.main.checked, alt: f.elements.alt.checked, build: v("build"), level: v("level"), prof1: v("prof1"), prof2: v("prof2"), sec: Object.fromEntries(SECONDARY.map(([s]) => [s, f.elements["sec-" + s].checked])), looks: v("looks").trim(), notes: v("notes").trim() };
    if (isNew) {
      const o = fixChar({ ...data, id: uid() }); S.roster.push(o); save(); closeDlg(); toast(`${o.name} added`); go("#/c/" + o.id);
    } else {
      const keepTicks = c.cls === cls ? c.ticks : {};
      const o = fixChar({ ...c, ...data, ticks: keepTicks });
      S.roster[S.roster.findIndex(x => x.id === c.id)] = o; save(); closeDlg(); toast("Saved"); route();
    }
  };
}

function confirmDelete(c) {
  openDlg(`<h2 id="dlg-title">Delete ${esc(c.name)}?</h2><p>This removes ${esc(c.name)} and their talent ticks from this browser. It can't be undone, unless you've exported your roster or shared a link.</p>
  <div class="dlgacts"><button type="button" class="btn" data-close>Cancel</button><button type="submit" class="btn danger">Delete</button></div>`, [CLS[c.cls].color, CLS[c.cls].ink]);
  dform.onsubmit = e => { e.preventDefault(); S.roster = S.roster.filter(x => x.id !== c.id); save(); closeDlg(); toast(`${c.name} deleted`); go("#/"); };
  dform.onchange = null;
}

/* ---------- share / export / import ---------- */
function packChar(c) {
  const o = { ...c, ticks: {} };
  for (const b in c.ticks) o.ticks[b] = c.ticks[b].map(x => (x ? "1" : "0")).join("").replace(/0+$/, "");
  delete o.faction;
  return o;
}
function payload(chars, withLegacy = true) { return { app: "forever-planner", v: 1, roster: chars.map(packChar), legacy: withLegacy ? Object.keys(S.legacy) : [] }; }
function b64url(bytes) { let s = ""; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function unb64url(s) { s = s.replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "="; const b = atob(s); const u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
async function encode(obj) {
  const bytes = new TextEncoder().encode(JSON.stringify(obj));
  if (window.CompressionStream) {
    try { const buf = await new Response(new Blob([bytes]).stream().pipeThrough(new CompressionStream("deflate-raw"))).arrayBuffer(); return "z" + b64url(new Uint8Array(buf)); } catch (e) {}
  }
  return "j" + b64url(bytes);
}
async function decode(code) {
  code = code.trim();
  const m = code.match(/#import=([A-Za-z0-9_-]+)/); if (m) code = m[1];
  const kind = code[0], body = code.slice(1);
  let bytes = unb64url(body);
  if (kind === "z") bytes = new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer());
  else if (kind !== "j") throw new Error("not a roster code");
  return JSON.parse(new TextDecoder().decode(bytes));
}
function shareUrl(code) { return location.origin + location.pathname + "#import=" + code; }
async function openShare(chars, title) {
  const code = await encode(payload(chars, chars.length === S.roster.length));
  const url = shareUrl(code);
  openDlg(`<h2 id="dlg-title">${title}</h2>
  <p>Anyone who opens this link can import ${chars.length === 1 ? "this character" : `these ${chars.length} characters`} into their own planner. It also moves your roster between your PC and phone. The link holds everything, including notes, so only share it with people you trust.</p>
  <div class="sharebox" id="share-url">${esc(url)}</div>
  <div class="dlgacts"><span class="why" style="align-self:center">${url.length.toLocaleString()} characters long</span><span class="spacer"></span><button type="button" class="btn" data-close>Close</button><button type="button" class="btn primary" id="copy-share">Copy link</button></div>`, chars.length === 1 ? [CLS[chars[0].cls].color, CLS[chars[0].cls].ink] : null);
  dform.onsubmit = e => e.preventDefault(); dform.onchange = null;
  $("#copy-share", dform).onclick = () => {
    const done = () => toast("Link copied");
    try { navigator.clipboard.writeText(url).then(done, () => { selectEl($("#share-url", dform)); toast("Selected, press Ctrl+C"); }); } catch (e) { selectEl($("#share-url", dform)); }
  };
}
function selectEl(el) { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
function exportFile() {
  const blob = new Blob([JSON.stringify(payload(S.roster), null, 2)], { type: "application/json" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
  a.download = `forever-roster-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  toast("Roster exported");
}
function validPayload(p) { return p && p.app === "forever-planner" && Array.isArray(p.roster); }
function importDialog(p, err) {
  if (p) {
    const chars = p.roster.map(fixChar).filter(Boolean);
    const lg = Array.isArray(p.legacy) ? p.legacy.filter(x => typeof x === "string" && x.length < 24) : [];
    const list = chars.map(c => `<li><b>${esc(c.name)}</b> · ${esc(c.race)} ${esc(CLS[c.cls].name)}, level ${c.level}${c.main ? " · Main" : ""}</li>`).join("");
    openDlg(`<h2 id="dlg-title">Import ${chars.length === 1 ? "a character" : `${chars.length} characters`}?</h2>
    <ul style="margin:0;padding-left:20px;display:grid;gap:4px">${list || "<li>No characters in this roster.</li>"}</ul>
    ${lg.length ? `<p class="why">Includes ${lg.length} Legacy challenge ticks.</p>` : ""}
    ${S.roster.length ? `<p>You already have ${S.roster.length} character${S.roster.length > 1 ? "s" : ""} here. <b>Add</b> keeps them and adds these; <b>Replace</b> swaps your roster for this one.</p>` : ""}
    <div class="dlgacts"><button type="button" class="btn" data-close>Cancel</button>${S.roster.length ? `<button type="button" class="btn danger" id="imp-replace">Replace my roster</button>` : ""}<button type="submit" class="btn primary">${S.roster.length ? "Add to my roster" : "Import"}</button></div>`);
    const finish = replace => {
      if (replace) { S.roster = []; S.legacy = {}; }
      const ids = new Set(S.roster.map(c => c.id));
      for (const c of chars) { if (ids.has(c.id)) c.id = uid(); S.roster.push(c); }
      for (const k of lg) S.legacy[k] = true;
      save(); closeDlg(); toast(`Imported ${chars.length} character${chars.length === 1 ? "" : "s"}`); go("#/");
    };
    dform.onsubmit = e => { e.preventDefault(); finish(false); }; dform.onchange = null;
    const rep = $("#imp-replace", dform); if (rep) rep.onclick = () => finish(true);
    return;
  }
  openDlg(`<h2 id="dlg-title">Import a roster</h2>
  <p>Paste a share link, or choose a file you exported.</p>
  <label class="field"><span>Share link</span><textarea name="code" placeholder="https://…#import=…"></textarea></label>
  <label class="field"><span>Or a file</span><input type="file" name="file" accept=".json,application/json"></label>
  <p class="ferr" id="form-err"${err ? "" : " hidden"}>${esc(err || "")}</p>
  <div class="dlgacts"><button type="button" class="btn" data-close>Cancel</button><button type="submit" class="btn primary">Continue</button></div>`);
  dform.onchange = null;
  dform.onsubmit = async e => {
    e.preventDefault();
    const er = $("#form-err", dform);
    try {
      let p2 = null; const file = dform.elements.file.files[0]; const code = dform.elements.code.value.trim();
      if (file) p2 = JSON.parse(await file.text()); else if (code) p2 = await decode(code); else throw new Error("empty");
      if (!validPayload(p2)) throw new Error("bad");
      importDialog(p2);
    } catch (x) { er.textContent = "That doesn't look like a Forever Planner roster. Check you copied the whole link."; er.hidden = false; }
  };
}

app.addEventListener("click", e => {
  const a = e.target.closest("[data-act]");
  if (a && !a.closest("#talents-app") && !a.closest("#legacy")) {
    if (a.dataset.act === "share") openShare(S.roster, "Share your roster");
    else if (a.dataset.act === "export") exportFile();
    else if (a.dataset.act === "import") importDialog();
  }
  const ed = e.target.closest("[data-edit]"); if (ed) charForm(charById(ed.dataset.edit));
  const dl = e.target.closest("[data-del]"); if (dl) confirmDelete(charById(dl.dataset.del));
  const so = e.target.closest("[data-share-one]"); if (so) openShare([charById(so.dataset.shareOne)], "Share this character");
});

/* ---------- router ---------- */
let lastRoute = "";
async function route() {
  const h = location.hash || "#/";
  if (h.startsWith("#import=")) {
    history.replaceState(null, "", location.pathname + "#/");
    pageRoster();
    try { const p = await decode(h); if (!validPayload(p)) throw 0; importDialog(p); }
    catch (e) { importDialog(null, "This share link is incomplete or damaged. Ask for a new one, or paste it below."); }
    return;
  }
  let m;
  const same = h === lastRoute;
  lastRoute = h;
  if ((m = h.match(/^#\/c\/([\w-]+)/))) pageChar(m[1]);
  else if ((m = h.match(/^#\/class\/(\w+)/))) pageClass(m[1]);
  else if (h === "#/classes") pageClasses();
  else if (h === "#/legacy") pageLegacy();
  else if (h === "#/races") pageRaces();
  else if (h === "#/extras") pageExtras();
  else if ((m = h.match(/^#\/new(?:\/(\w+))?/))) { const back = sessionStorage.getItem("fp:last") || "#/"; history.replaceState(null, "", location.pathname + back); lastRoute = back; await route(); charForm(null, CLS[m[1]] ? m[1] : ""); return; }
  else pageRoster();
  try { if (!h.startsWith("#/new")) sessionStorage.setItem("fp:last", h); } catch (e) {}
  if (!same) window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
window.addEventListener("storage", e => { if (e.key === KEY) { load(); route(); } });
load();
route();
})();
