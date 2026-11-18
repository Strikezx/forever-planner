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
let S = { v: 1, roster: [], legacy: {}, builds: [] };
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY));
    if (d && Array.isArray(d.roster)) {
      const builds = Array.isArray(d.builds) ? d.builds.map(fixBuild).filter(Boolean) : [];
      applyBuilds(builds);
      S = { v: 1, builds, roster: d.roster.map(fixChar).filter(Boolean), legacy: d.legacy && typeof d.legacy === "object" ? d.legacy : {} };
    }
  } catch (e) {}
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
function spentOf(k, b, ticks) { return rowsOf(k, b).reduce((n, r, i) => n + (ticks && ticks[i] ? r[5] : 0), 0); }
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
  const links = [["#/", "Your roster", "roster"], ["#/classes", "Class guides", "classes"], ["#/legacy", "Legacy System", "legacy"], ["#/camp", "Campfire", "camp"], ["#/races", "Races &amp; racials", "races"], ["#/extras", "Extras", "extras"]];
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

/* ---------- your own builds (Talents Forever / Icy Veins links, pasted talent orders) ---------- */
const TF_SYMS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz056789", TF_VERSION = "12";
const flatCache = {};
function flatTal(k) { // every talent of a class in tree order: {i, t, tree, name, max, row, col, req}
  if (!flatCache[k]) { const out = []; D.talents[k].forEach(([tree, list], t) => list.forEach(([name, max, row, col, req]) => out.push({ i: out.length, t, tree, name, max, row, col, req }))); flatCache[k] = out; }
  return flatCache[k];
}
function talByName(k, n) { return flatTal(k).find(x => x.name.toLowerCase() === String(n).toLowerCase()); }
// check an order (array of talent names, one per point from level 10) against the class's trees
function checkOrder(k, order) {
  const F = flatTal(k), ranks = F.map(() => 0), inTree = D.talents[k].map(() => 0);
  if (!order.length) return { err: "No talent points found." };
  if (order.length > 51) return { err: `That's ${order.length} points; a level 60 character has 51.` };
  for (let p = 0; p < order.length; p++) {
    const x = talByName(k, order[p]), lv = 10 + p;
    if (!x) return { err: `"${order[p]}" isn't a ${CLS[k].name} talent in Forever.` };
    if (ranks[x.i] >= x.max) return { err: `Level ${lv}: ${x.name} is already at ${x.max}/${x.max}.` };
    const need = 5 * (x.row - 1);
    if (inTree[x.t] < need) return { err: `Level ${lv}: ${x.name} needs ${need} points in ${x.tree} first (has ${inTree[x.t]}).` };
    if (x.req) { const r = talByName(k, x.req); if (ranks[r.i] < r.max) return { err: `Level ${lv}: ${x.name} needs ${r.name} maxed first.` }; }
    ranks[x.i]++; inTree[x.t]++;
  }
  return { ok: true, split: inTree.join("/"), points: order.length };
}
// a sensible order when a link has ranks but no order: main tree first, top row down
function autoOrder(k, ranks) {
  const F = flatTal(k), left = ranks.slice(), inTree = D.talents[k].map(() => 0), got = F.map(() => 0);
  const per = D.talents[k].map((_, t) => F.reduce((n, x) => n + (x.t === t ? ranks[x.i] : 0), 0));
  const treeRank = per.map((n, t) => [n, t]).sort((a, b) => b[0] - a[0]).map(x => x[1]);
  const cand = F.slice().sort((a, b) => treeRank.indexOf(a.t) - treeRank.indexOf(b.t) || a.row - b.row || a.col - b.col);
  const out = [], total = ranks.reduce((a, b) => a + b, 0);
  while (out.length < total) {
    const x = cand.find(c => left[c.i] > 0 && inTree[c.t] >= 5 * (c.row - 1) && (!c.req || got[talByName(k, c.req).i] >= talByName(k, c.req).max));
    if (!x) break;
    out.push(x.name); left[x.i]--; got[x.i]++; inTree[x.t]++;
  }
  return out;
}
// Mobalytics "Leveling Path" (and similar lists): a talent name on one line, its level on the next.
// Takes the first run of 5+ such pairs; finds the class from the names when the hinted class doesn't fit.
function levelList(t, kHint) {
  const lines = t.split(/\r?\n/).map(x => x.trim()).filter(Boolean);
  const runOf = k => {
    const runs = []; let cur = [];
    for (let i = 0; i < lines.length; i++) {
      const x = talByName(k, lines[i]), lv = lines[i + 1];
      if (x && /^\d{1,2}$/.test(lv || "") && +lv >= 10 && +lv <= 60) { cur.push([x.name, +lv]); i++; }
      else { if (cur.length >= 5) runs.push(cur); cur = []; }
    }
    if (cur.length >= 5) runs.push(cur);
    return runs;
  };
  let k = kHint, runs = runOf(k);
  if (!runs.length) for (const c of ORDER) { const r = runOf(c); if (r.length) { k = c; runs = r; break; } }
  if (!runs.length) return null;
  const run = runs[0].slice().sort((a, b) => a[1] - b[1]);
  const notes = [];
  if (run.some((x, i) => x[1] !== 10 + i)) notes.push("Some levels in the list skip or repeat; the planner placed one point per level from 10.");
  if (runs.length > 1) notes.push(`This paste holds ${runs.length} talent lists; this is the first. Paste the others one at a time.`);
  const sp = t.match(/Points spent\s+\d+\s+(\d+)\s*\/\s*(\d+)\s*\/\s*(\d+)/i);
  const order = run.map(x => x[0]), mob = /leveling path/i.test(t);
  const extra = mob && checkOrder(k, order).ok ? mobGuide(t, k, order) : {};
  return { k, order, source: mob ? "Mobalytics" : "Pasted list", expect: sp ? `${sp[1]}/${sp[2]}/${sp[3]}` : "", note: notes.join(" "), notes: extra.notes || null, guide: extra.guide || null };
}
// Mobalytics pages paste with spell names on their own lines; a line that follows one ending in a space,
// or that starts with a space or punctuation, belongs to the paragraph before it.
function pasteParas(raw) {
  const out = []; let prev = null;
  for (const line of raw.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const cont = out.length && (/^[\s.,;:)!?]/.test(line) || (prev !== null && /[  ]$/.test(prev)));
    if (cont) out[out.length - 1] += line; else out.push(line);
    prev = line;
  }
  return out.map(x => x.replace(/\s+/g, " ").trim()).filter(Boolean);
}
const MOB_HEADS = ["Overview", "Strengths And Weaknesses", "Alternatives", "Talents", "Talent Order", "Your Choices in This Build", "Key Breakpoints", "Gameplay & Rotation", "Gear", "Level Walkthrough", "Stat Priority", "Suggested Races", "Consumables", "Campfire Buffs", "Professions", "Tips & Tricks", "WoW Forever Changes", "Common Mistakes"];
const MOB_KEEP = ["Your Choices in This Build", "Key Breakpoints", "Gameplay & Rotation", "Gear", "Level Walkthrough", "Stat Priority", "Tips & Tricks", "Common Mistakes"];
function shortNote(s) { // the guide's reason, cut to a sentence or two
  s = s.replace(/^[\s.,:;-]+/, "").replace(/\s*Level \d+(?: to \d+)?:\s*$/, "").trim();
  const parts = s.match(/[^.!?]+[.!?]+(\s|$)/g) || [s];
  let out = parts[0].trim();
  if (out.length < 45 && parts[1]) out += " " + parts[1].trim();
  return out.length > 170 ? out.slice(0, 167).replace(/\s+\S*$/, "") + "…" : out;
}
// notes per checklist row + the build's own guide sections, from a whole Mobalytics page
function mobGuide(raw, k, order) {
  const P = pasteParas(raw), secs = []; let cur = { h: "", p: [] };
  for (const p of P) {
    const h = MOB_HEADS.find(x => x.toLowerCase() === p.toLowerCase());
    if (h) { secs.push(cur); cur = { h, p: [] }; } else cur.p.push(p);
  }
  secs.push(cur);
  const sec = h => secs.find(s => s.h === h), noTabs = ps => ps.filter(p => !/^Build \d+: /.test(p));
  // talent notes
  const groups = orderRows(k, order).rows, notes = groups.map(() => "");
  const to = sec("Talent Order");
  if (to) {
    let g = 0;
    for (let p of to.p) {
      p = p.replace(/^Level \d+(?: to \d+)?:\s*/, "");
      for (let j = g; j < Math.min(groups.length, g + 4); j++) {
        const name = groups[j][2];
        if (!p.toLowerCase().startsWith(name.toLowerCase())) continue;
        let rest = p.slice(name.length).replace(/^\s*\d\/\d/, "");
        const nx = groups[j + 1], both = nx && rest.match(new RegExp("^\\s*and\\s+" + nx[2].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(\\s*\\d\\/\\d)?", "i"));
        if (both) { rest = rest.slice(both[0].length); notes[j] = notes[j + 1] = shortNote(rest); g = j + 2; }
        else { notes[j] = shortNote(rest); g = j + 1; }
        break;
      }
    }
  }
  // guide panel
  const title = (() => { const i = P.findIndex(p => /^overview$/i.test(p)); return i > 0 && P[0].length < 140 && !/^presentation/i.test(P[0]) ? P[0] : ""; })();
  const am = raw.match(/\nBy\s*\n\s*([^\n]{1,40})\n/), author = am ? am[1].trim() : "";
  const intro = [];
  const alt = sec("Alternatives"); if (alt) intro.push(...noTabs(alt.p).slice(0, 1));
  const tal = sec("Talents"); if (tal) { const last = tal.p[tal.p.length - 1]; if (last && last.length > 60 && !/^Your first talent point/i.test(last)) intro.push(last); }
  if (to) intro.push(...to.p.filter(p => /^The order also works/i.test(p)));
  const parts = MOB_KEEP.map(h => sec(h)).filter(s => s && noTabs(s.p).length).map(s => ({ h: s.h, p: noTabs(s.p).filter(p => !/^The order also works/i.test(p)) }));
  const guide = intro.length || parts.length ? { title, author, intro, parts } : null;
  return { notes: notes.some(Boolean) ? notes : null, guide };
}
// what was pasted? returns {k, order, source, note} or {err}
function parseBuild(text, kHint) {
  const t = String(text || "").trim();
  if (!t) return { err: "" };
  let m = t.match(/talentsforever\.com\/[^\s]*?\b(warrior|paladin|hunter|rogue|priest|shaman|mage|warlock|druid)\/(\d+)\/([A-Za-z0-9-]+)/i);
  if (m) {
    const k = m[1].toLowerCase(), segs = m[3].split("-"), ver = segs[segs.length - 1];
    if (ver !== TF_VERSION) return { err: "This Talents Forever link was made before their latest talent update. Open it on Talents Forever (it updates itself), then copy the link again." };
    const F = flatTal(k), nT = D.talents[k].length, ranks = F.map(() => 0);
    for (let tr = 0; tr < nT; tr++) { const digs = segs[tr] || "", list = F.filter(x => x.t === tr); list.forEach((x, j) => { ranks[x.i] = Math.min(x.max, +(digs[j] || 0)); }); }
    const mid = segs.slice(nT, -1), code = mid.length && /[A-Za-z]/.test(mid[mid.length - 1]) ? mid[mid.length - 1] : "";
    const order = [], taken = F.map(() => 0);
    for (let i = 0; i < code.length; i++) {
      const f = TF_SYMS.indexOf(code[i]); if (f < 0 || !F[f]) continue;
      let n = ranks[f] - taken[f];
      if (/^[1-4]$/.test(code[i + 1] || "")) { n = Math.min(n, +code[i + 1]); i++; }
      for (let j = 0; j < n; j++) order.push(F[f].name);
      taken[f] += Math.max(0, n);
    }
    const total = ranks.reduce((a, b) => a + b, 0);
    if (!total) return { err: "That Talents Forever link has no talent points in it." };
    if (!order.length) return { k, order: autoOrder(k, ranks), source: "Talents Forever", note: "This link has no talent order, so the planner filled the main tree first, top row down. To keep the author's order, use the link Talents Forever gives after you set the order there." };
    if (order.length < total) { // order covers part of the build: finish it off
      const left = ranks.map((r, i) => r - taken[i]), rest = autoOrder(k, left.map(v => Math.max(0, v)));
      return { k, order: order.concat(rest), source: "Talents Forever", note: `The link's order covers ${order.length} of ${total} points; the last ${total - order.length} were placed top row down.` };
    }
    return { k, order, source: "Talents Forever" };
  }
  m = t.match(/icy-veins\.com\/wow-forever\/(warrior|paladin|hunter|rogue|priest|shaman|mage|warlock|druid)-talent-calculator#tc-([0-9A-Za-z]+)/i);
  if (m) {
    const k = m[1].toLowerCase(), ids = D.ivids[k], F = flatTal(k), order = [];
    for (const ch of m[2]) { if (!(ch in ids)) return { err: "Part of that Icy Veins link doesn't match Forever's current trees. Open it on Icy Veins and copy the link again." }; order.push(F[ids[ch]].name); }
    return { k, order, source: "Icy Veins" };
  }
  if (/wowhead\.com\/[^\s]*talent-calc/i.test(t)) return { err: "Wowhead talent-calculator links are coded in a way the planner can't read yet. On the Wowhead guide, copy the \"Talent Order\" list (the level-by-level one) and paste that text here instead." };
  if (/^https?:\/\//i.test(t) && !/\s/.test(t)) return { err: "The planner reads Talents Forever and Icy Veins calculator links. For other sites, copy the level-by-level talent order as text and paste it here." };
  const lst = levelList(t, kHint); if (lst) return lst;
  // plain text: talent names in order. "Rank 3" or "3/5" after a name means up to that rank; "x3" means 3 points.
  const k = kHint, F = flatTal(k);
  const names = F.map(x => x.name).sort((a, b) => b.length - a.length).map(n => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/'/g, "['’]"));
  const re = new RegExp("(?<![A-Za-z])(" + names.join("|") + ")", "gi"); // copied lists often run words together ("Twin DisciplinesRank 1")
  const order = [], have = F.map(() => 0); let mm;
  while ((mm = re.exec(t))) {
    const x = talByName(k, mm[1].replace(/’/g, "'")); if (!x) continue;
    const after = t.slice(re.lastIndex, re.lastIndex + 16);
    let n = 1, a;
    if ((a = after.match(/^\s*(?:[x×]\s*(\d)|\((\d)\))/i))) n = +(a[1] || a[2]);
    else if ((a = after.match(/^\s*(?:[-–:·]\s*)?(?:rank\s*(\d)|(\d)\s*\/\s*\d)/i))) n = +(a[1] || a[2]) - have[x.i];
    for (let j = 0; j < n; j++) order.push(x.name);
    have[x.i] += Math.max(0, n);
  }
  if (!order.length) return { err: `No ${CLS[k].name} talent names found. Paste a Talents Forever or Icy Veins link, or a level-by-level talent order.` };
  return { k, order, source: "Pasted order" };
}
// checklist rows from an order: [col, "r/max", name, fromLv, toLv, n, note]
function orderRows(k, order, notes) {
  const F = flatTal(k), rk = F.map(() => 0), groups = [];
  order.forEach((n, p) => { const x = talByName(k, n); rk[x.i]++; const g = groups[groups.length - 1]; if (g && g.x === x) { g.to = 10 + p; g.n++; g.r = rk[x.i]; } else groups.push({ x, from: 10 + p, to: 10 + p, n: 1, r: rk[x.i] }); });
  const last = 9 + order.length;
  let cut = groups.findIndex(g => g.from > 35); if (cut < 1 || last <= 40) cut = Math.ceil(groups.length / 2);
  const rows = groups.map((g, i) => [i < cut ? 0 : 1, `${g.r}/${g.x.max}`, g.x.name, g.from, g.to, g.n, (notes && notes[i]) || ""]);
  const label = c => { const gs = groups.filter((_, i) => (i < cut) === (c === 0)); if (!gs.length) return ""; const trees = [...new Set(gs.map(g => g.x.tree))]; return `${trees.join(", then ")}, levels ${gs[0].from}–${gs[gs.length - 1].to}`; };
  const cols = [label(0), label(1)].filter(Boolean);
  if (cols.length === 1) rows.forEach(r => (r[0] = 0));
  return { rows, cols };
}
function fixBuild(b) {
  if (!b || typeof b !== "object" || !CLS[b.cls] || !D.talents[b.cls] || !Array.isArray(b.order)) return null;
  const id = typeof b.id === "string" && /^u_[a-z0-9]{4,24}$/.test(b.id) ? b.id : "u_" + uid();
  const order = b.order.map(String).slice(0, 51);
  if (!checkOrder(b.cls, order).ok) return null;
  const str = (x, n) => String(x == null ? "" : x).slice(0, n);
  const notes = Array.isArray(b.notes) ? b.notes.slice(0, 51).map(x => str(x, 200)) : null;
  let guide = null;
  if (b.guide && typeof b.guide === "object") {
    const ps = a => (Array.isArray(a) ? a : []).slice(0, 40).map(x => str(x, 1500)).filter(Boolean);
    guide = { title: str(b.guide.title, 140), author: str(b.guide.author, 40), intro: ps(b.guide.intro).slice(0, 4),
      parts: (Array.isArray(b.guide.parts) ? b.guide.parts : []).slice(0, 10).map(x => ({ h: str(x && x.h, 60), p: ps(x && x.p) })).filter(x => x.h && x.p.length) };
    if (!guide.intro.length && !guide.parts.length) guide = null;
  }
  return { id, cls: b.cls, name: String(b.name || "My build").slice(0, 40), src: String(b.src || "").slice(0, 40), order, ...(notes ? { notes } : {}), ...(guide ? { guide } : {}) };
}
function applyBuilds(list) {
  for (const k of ORDER) for (const b of Object.keys(CLS[k].builds)) if (b.startsWith("u_")) delete CLS[k].builds[b];
  for (const b of list) { const { rows, cols } = orderRows(b.cls, b.order, b.notes); CLS[b.cls].builds[b.id] = { name: b.name, sub: b.src ? b.src + " · yours" : "yours", cols, rows, mine: true, guide: b.guide || null }; }
}
function defaultBuildName(k, order) {
  const per = D.talents[k].map(() => 0); order.forEach(n => per[talByName(k, n).t]++);
  return D.talents[k][per.indexOf(Math.max(...per))][0];
}
function buildForm(k) {
  const C = CLS[k];
  openDlg(`<h2 id="dlg-title">Add a build</h2>
  <p>Paste a <b>Talents Forever</b> or <b>Icy Veins</b> talent calculator link, a whole <b>Mobalytics</b> build page (select all, copy, one build at a time), or a level-by-level order as text, like Wowhead's "Talent Order" list. The planner checks it against Forever's trees and adds it as a tab in the talent checklist.</p>
  <label class="field"><span>Link or talent order</span><textarea name="src" rows="4" placeholder="https://talentsforever.com/…   or   https://www.icy-veins.com/wow-forever/…-talent-calculator#tc-…" autofocus></textarea></label>
  <label class="field"><span>Class, for pasted text</span><select name="cls">${ORDER.map(x => `<option value="${x}"${x === k ? " selected" : ""}>${esc(CLS[x].name)}</option>`).join("")}</select></label>
  <div class="bprev" id="bprev" aria-live="polite"></div>
  <label class="field"><span>Tab name</span><input type="text" name="name" maxlength="40" placeholder="Named after the main tree if left blank"></label>
  <p class="why">Your builds save in this browser and travel with your share links and exports. Talent trees from <a href="https://talentsforever.com" target="_blank" rel="noopener">talentsforever.com</a> (CC BY 4.0).</p>
  <div class="dlgacts"><button type="button" class="btn" data-close>Cancel</button><button type="submit" class="btn primary" id="bsave" disabled>Add build</button></div>`, [C.color, C.ink]);
  const f = dform, prev = $("#bprev", f), btn = $("#bsave", f);
  let cur = null;
  const show = () => {
    const r = parseBuild(f.elements.src.value, f.elements.cls.value);
    cur = null; btn.disabled = true;
    if (r.err !== undefined) { prev.innerHTML = r.err ? `<p class="ferr">${esc(r.err)}</p>` : ""; return; }
    const chk = checkOrder(r.k, r.order);
    if (!chk.ok) { prev.innerHTML = `<p class="ferr">${esc(chk.err)}</p>`; return; }
    if (r.expect && r.expect !== chk.split) { prev.innerHTML = `<p class="ferr">The guide says ${esc(r.expect)}, but its talent list adds up to ${esc(chk.split)}. Copy the whole build again and check nothing was cut off.</p>`; return; }
    cur = { ...r, split: chk.split };
    const K = CLS[r.k], g = orderRows(r.k, r.order, r.notes).rows;
    dlg.style.setProperty("--class", K.color); dlg.style.setProperty("--class-ink", K.ink);
    f.elements.name.placeholder = defaultBuildName(r.k, r.order);
    prev.innerHTML = `<p class="okline"><b>${esc(K.name)}</b> · ${esc(r.source)} · <span class="mono">${chk.split}</span>${r.expect ? " ✓ matches the guide" : ""} · ${chk.points} points, levels 10–${9 + chk.points}${r.k !== k ? ` · it'll go on the ${esc(K.name)} page` : ""}</p>
      ${r.notes || r.guide ? `<p class="why">Also keeps ${[r.notes ? `the guide's note on ${r.notes.filter(Boolean).length} talent steps` : "", r.guide ? `a build guide panel (${[...(r.guide.intro.length ? ["intro"] : []), ...r.guide.parts.map(x => x.h)].join(", ")})` : ""].filter(Boolean).join(" and ")}.</p>` : ""}
      ${r.note ? `<p class="why">${esc(r.note)}</p>` : ""}
      <ol class="bsteps">${g.map(x => `<li><span class="mono">Lv ${x[3] === x[4] ? x[3] : x[3] + "–" + x[4]}</span> <span>${esc(x[2])}${x[6] ? `<small class="bnote">${esc(x[6])}</small>` : ""}</span> <span class="mono">${x[1]}</span></li>`).join("")}</ol>`;
    btn.disabled = false;
  };
  f.oninput = e => { if (e.target.name === "src") show(); };
  f.onchange = e => { if (e.target.name === "cls") show(); };
  f.onsubmit = e => {
    e.preventDefault(); if (!cur) return;
    const b = fixBuild({ id: "u_" + uid(), cls: cur.k, name: f.elements.name.value.trim() || defaultBuildName(cur.k, cur.order), src: cur.source, order: cur.order, notes: cur.notes, guide: cur.guide });
    if (!b) return;
    S.builds.push(b); applyBuilds(S.builds); save(); closeDlg();
    if (ctx && ctx.k === b.cls) { ctx.ticks[b.id] = CLS[b.cls].builds[b.id].rows.map(() => false); ctx.build = b.id; persistCtx(); refresh(); toast(`${b.name} added`); }
    else { (browse[b.cls] = browse[b.cls] || { build: b.id, level: 10, ticks: {} }).build = b.id; toast(`${b.name} added to the ${CLS[b.cls].name} page`); go("#/class/" + b.cls); }
  };
}
function removeBuildForm(k, id) {
  const b = S.builds.find(x => x.id === id); if (!b) return;
  const users = S.roster.filter(c => c.build === id);
  openDlg(`<h2 id="dlg-title">Remove ${esc(b.name)}?</h2><p>This removes the tab and its ticks from this browser.${users.length ? ` ${users.map(c => esc(c.name)).join(", ")} ${users.length > 1 ? "follow" : "follows"} it and will switch to ${esc(CLS[k].builds[firstBuild(k)].name)}.` : ""} You can add it again from the same link.</p>
  <div class="dlgacts"><button type="button" class="btn" data-close>Cancel</button><button type="submit" class="btn danger">Remove build</button></div>`, [CLS[k].color, CLS[k].ink]);
  dform.onchange = null; dform.oninput = null;
  dform.onsubmit = e => {
    e.preventDefault();
    S.builds = S.builds.filter(x => x.id !== id); applyBuilds(S.builds);
    for (const c of S.roster) { delete c.ticks[id]; if (c.build === id) c.build = firstBuild(c.cls); }
    if (browse[k]) { delete browse[k].ticks[id]; if (browse[k].build === id) browse[k].build = firstBuild(k); }
    if (ctx && ctx.k === k && ctx.build === id) { ctx.build = firstBuild(k); persistCtx(); }
    save(); closeDlg(); toast(`${b.name} removed`); refresh();
  };
}

/* ---------- planner context (character or browsing a class) ---------- */
let ctx = null; // {k, build, level, ticks, char}
const browse = {}; // per-class temporary state when browsing without a character
function persistCtx() { if (ctx.char) { ctx.char.level = ctx.level; ctx.char.build = ctx.build; ctx.char.ticks = ctx.ticks; save(); } else if (browse[ctx.k]) { browse[ctx.k].level = ctx.level; browse[ctx.k].build = ctx.build; } }
function available() { return Math.max(0, Math.min(totalOf(ctx.k, ctx.build), ctx.level - 9)); }
/* which phase(s) of a build the level falls in: each column is one phase, spanning the levels of its rows */
function phaseCols(bd, L) {
  return bd.cols.map((_, c) => { const rs = bd.rows.filter(r => r[0] === c); return rs.length && Math.min(...rs.map(r => r[3])) <= L && L <= Math.max(...rs.map(r => r[4])) ? c : -1; }).filter(c => c >= 0);
}
function lvTxt(r) { return r[3] === r[4] ? r[3] : `${r[3]}–${r[4]}`; }
function renderTalents() {
  const tapp = $("#talents-app", app); if (!tapp || !ctx) return;
  const k = ctx.k, B = CLS[k].builds, b = ctx.build, bd = B[b], rows = bd.rows, ticks = ctx.ticks[b];
  const sp = { all: 0, cols: bd.cols.map(() => 0) };
  rows.forEach((r, i) => { if (ticks[i]) { sp.cols[r[0]] += r[5]; sp.all += r[5]; } });
  const av = available(), nx = ticks.findIndex(x => !x), tot = totalOf(k, b), diff = av - sp.all;
  const keys = Object.keys(B);
  const tabs = keys.length > 1 ? `<div class="tabs" role="tablist" aria-label="Talent build">${keys.map(x => `<button type="button" role="tab" aria-selected="${x === b}" data-build="${x}"${B[x].mine ? ' class="mine"' : ""}>${esc(B[x].name)}${B[x].sub ? `<small>· ${esc(B[x].sub)}</small>` : ""}</button>`).join("")}</div>` : "";
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
  const here = phaseCols(bd, ctx.level);
  const cols = bd.cols.map((lab, c) => `<div${here.includes(c) ? ' class="phase"' : ""}><span class="label">${esc(lab)} <span class="mono colct">${sp.cols[c]}/${colTotal(c)}</span>${here.includes(c) ? ` <span class="here">Level ${ctx.level} is here</span>` : ""}</span><ul class="tick">${col(c)}</ul></div>`).join("");
  const addBtn = `<button type="button" class="addbuild" data-act="addbuild" title="Paste a Talents Forever or Icy Veins link, or a talent order">+ Add a build</button>`;
  tapp.innerHTML = `${ctx.char ? "" : `<p class="why">You're browsing, so ticks here aren't saved. <a href="#/new/${k}">Add a ${esc(CLS[k].name)}</a> to keep your progress.</p>`}<div class="tbar">${tabs}${addBtn}</div>
    <div class="tsum"><span class="meter">Points spent <i><b style="width:${pct}%"></b></i> <span class="mono">${sp.all}/${tot}</span></span>${note}</div>
    <div class="cols">${cols}</div>
    <div class="tactions"><button type="button" class="tbtn" data-act="upto">Tick everything up to level ${ctx.level}</button><button type="button" class="tbtn" data-act="clear">Clear ticks</button><span class="spacer"></span>${bd.mine ? `<button type="button" class="tbtn" data-act="delbuild">Remove this build</button>` : ""}</div>
`;
}
app.addEventListener("click", e => {
  if (!ctx) return;
  const tapp = e.target.closest("#talents-app"); if (!tapp) return;
  const tb = e.target.closest("[data-build]");
  if (tb) { ctx.build = tb.dataset.build; persistCtx(); refresh(); return; }
  const act = e.target.closest("[data-act]"); if (!act) return;
  if (act.dataset.act === "addbuild") { buildForm(ctx.k); return; }
  if (act.dataset.act === "delbuild") { removeBuildForm(ctx.k, ctx.build); return; }
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
  $$(".steps", app).forEach(c => { const ss = $$(".step", c); c.classList.toggle("allpast", !!ss.length && ctx != null && ss.every(x => x.classList.contains("past"))); });
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
  const ph = phaseCols(C.builds[ctx.build], L);
  if (ph.length) tal += pill(`Build phase: <b>${esc(C.builds[ctx.build].cols[ph[0]])}</b>`, "soft");
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
function guideHtml(bd) {
  const g = bd.guide, para = p => p.length <= 40 && !/[.!?:]$/.test(p) ? `<h4>${esc(p)}</h4>` : `<p>${esc(p)}</p>`;
  return `  <p class="why">${g.author ? `From ${esc(g.author)}'s guide` : "From the guide"}${g.title ? `, <i>${esc(g.title)}</i>` : ""}, pasted from ${esc((bd.sub || "").replace(/ · yours$/, "") || "your paste")}. It's that guide's advice for this build; the other sections on this page are the planner's own ${esc(CLS[ctx.k].name)} guide.</p>
  ${g.intro.map(p => `<p class="bgintro">${esc(p)}</p>`).join("")}
  <div class="bguide">${g.parts.map(x => `<div class="bgpart"><h3>${esc(x.h)}</h3>${x.p.map(para).join("")}</div>`).join("")}</div>`;
}
function renderBuildGuide() {
  const host = $("#talents", app)?.closest("#app > section"), old = $("#bguide", app), bd = CLS[ctx.k].builds[ctx.build];
  if (!host || !bd || !bd.guide) { if (old) { old.remove(); buildJump(); syncAllBtn(); } return; }
  if (old && old.dataset.b === ctx.build) return;
  const tmp = document.createElement("div");
  tmp.innerHTML = sect("bguide", `${esc(bd.name)} · the tab you added`, "Build guide", guideHtml(bd), { jump: "Build guide" });
  const el = tmp.firstElementChild; el.dataset.b = ctx.build;
  if (old) old.replaceWith(el); else host.after(el);
  buildJump(); syncAllBtn();
}
function refresh() { if (!ctx) return; if (!CLS[ctx.k].builds[ctx.build]) ctx.build = firstBuild(ctx.k); if (!ctx.ticks[ctx.build]) ctx.ticks[ctx.build] = rowsOf(ctx.k, ctx.build).map(() => false); syncLevelUI(); renderTalents(); renderBuildGuide(); renderBeasts(); renderNow(); markSteps(); syncAllBtn(); }

/* level box (top bar number box) and in-page level dropdowns: every control shows the same level */
const LV_OPTS = Array.from({ length: 60 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join("");
const lvInput = $("#lvinput");
function lvPicker() {
  return `<div class="lvpick" role="group" aria-label="Level"><span class="lvl">Level</span><button type="button" class="lvstep" data-d="-1" aria-label="Level down">−</button><select class="lvsel" aria-label="Level">${LV_OPTS}</select><button type="button" class="lvstep" data-d="1" aria-label="Level up">+</button></div>`;
}
function lvStrip(withPicker) {
  return `<div class="lvstrip">${withPicker ? lvPicker() : ""}<button type="button" class="tbtn" data-lv="jump" title="Open the guide at your level and scroll to it">Jump to my level</button><button type="button" class="tbtn" data-lv="hidepast" aria-pressed="false">Hide earlier levels</button></div>`;
}
function syncLevelUI() {
  if (!ctx) return;
  lvInput.value = ctx.level;
  $$(".lvsel", app).forEach(x => (x.value = ctx.level));
  const hp = app.classList.contains("hidepast");
  $$('[data-lv="hidepast"]', app).forEach(b => { b.setAttribute("aria-pressed", String(hp)); b.textContent = hp ? "Show earlier levels" : "Hide earlier levels"; });
}
function setLevel(n) { if (!ctx && scope === "camp") { campLv = clampLv(n, campLv); lvInput.value = campLv; renderCampBuffs(); return; } if (!ctx) return; const v = clampLv(n, ctx.level); ctx.level = v; persistCtx(); refresh(); if (ctx.char) updateCharStamp(); }
lvInput.addEventListener("change", () => setLevel(lvInput.value));
lvInput.addEventListener("keydown", e => { if (e.key === "Enter") setLevel(lvInput.value); });
app.addEventListener("change", e => { const x = e.target.closest(".lvsel"); if (x && ctx) setLevel(x.value); });
app.addEventListener("click", e => {
  if (!ctx) return;
  const st = e.target.closest(".lvstep"); if (st) { setLevel(ctx.level + +st.dataset.d); return; }
  const b = e.target.closest("[data-lv]"); if (!b) return;
  if (b.dataset.lv === "hidepast") { app.classList.toggle("hidepast"); syncLevelUI(); }
  else jumpToLevel();
});
/* open the guide at your level: opens the panels that have a step for it and scrolls to the first one.
   If no step covers this level, it goes to the closest one instead. */
function jumpToLevel() {
  markSteps();
  const L = ctx.level;
  let hit = $(".step.now", app) || $(".step.soon", app), near = false;
  if (!hit) {
    let best = Infinity;
    $$(".step", app).forEach(st => {
      const r = range(st.querySelector(".lv")?.textContent); if (!r) return;
      const d = L < r[0] ? r[0] - L : L > r[1] ? L - r[1] : 0;
      if (d < best) { best = d; hit = st; }
    });
    near = !!hit;
  }
  if (!hit) { toast("Nothing in this guide is tied to a level"); return; }
  if (near) toast(`No step covers level ${L} exactly, so this is the closest one`);
  if (near && hit.classList.contains("past") && app.classList.contains("hidepast")) { app.classList.remove("hidepast"); syncLevelUI(); }
  $$("details.gpanel", app).forEach(d => { if (d === hit.closest("details.gpanel") || d.querySelector(".step.now, .step.soon")) d.open = true; });
  hit.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}
$("#lvdown").addEventListener("click", () => ctx ? setLevel(ctx.level - 1) : scope === "camp" && setLevel(campLv - 1));
$("#lvup").addEventListener("click", () => ctx ? setLevel(ctx.level + 1) : scope === "camp" && setLevel(campLv + 1));

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
    <div class="meta">${full ? lvPicker() : `<span>Level <b class="lvtxt">${c.level}</b></span>`}<span>Build <b>${esc(C.builds[c.build].name)}</b></span>${c.guild ? `<span>Guild <b>&lt;${esc(c.guild)}&gt;</b></span>` : ""}</div>
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
  header(esc(c.name), `${esc(c.race)} ${esc(C.name)} on a ${esc(c.realm)} realm. Set your level in the bar or in Your character, and the planner shows what to train, which talents are due and what to do next.`,
    [`Level <b class="stlv">${c.level}</b>`, `${esc(c.faction)}`, `${esc(C.roles.join(" · "))}`, c.guild ? `Guild <b>&lt;${esc(c.guild)}&gt;</b>` : "", c.main ? "<b>Main</b>" : "", c.alt ? "<b>Alt</b>" : ""].filter(Boolean), "roster");
  const now = sect("now", `${esc(c.name)} · set your level in the bar above or in Your character below`, "What to do now", lvStrip(false) + `\n  <div class="nowlist" id="now-app"></div>`, { h2id: "now-title", jump: "Now" });
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
  header(`${esc(C.name)} guide`, `Leveling guide, talent order, rotation, gear, macros and race picks for the ${esc(C.name)}. Set a level below, or in the bar, to preview what's due.`,
    [`${esc(C.roles.join(" · "))}`, `Races <b>${C.races.length}</b>`, mine.length ? `On your roster <b>${mine.length}</b>` : ""].filter(Boolean), "classes");
  const top = `<div class="notice" style="margin-bottom:24px"><span>${mine.length ? `You have ${mine.map(m => `<a href="#/c/${m.id}">${esc(m.name)}</a>`).join(", ")}. Open a character to save level and talent ticks.` : `You're browsing. Add a ${esc(C.name)} to your roster to save level and talent ticks.`}</span><a class="btn primary" href="#/new/${k}">Add a ${esc(C.name)}</a></div>`;
  const now = sect("now", "Preview · set a level here or in the bar above", "What to do now", lvStrip(true) + `\n  <div class="nowlist" id="now-app"></div>`, { h2id: "now-title", jump: "Now" });
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

/* campfire */
const CAMP = window.FP_CAMP, EMBER = { color: "#F2994A", ink: "#A9531A" };
let campLv = null;
function rosterHas(pk) { // characters on the roster who can bring a profession's object
  return S.roster.filter(c => pk.startsWith("s:") ? c.sec && c.sec[pk.slice(2)] : c.prof1 === pk || c.prof2 === pk);
}
function whoChips(pk) { const w = rosterHas(pk); return w.length ? `<span class="cwho">${w.map(c => `<a href="#/c/${c.id}" style="--c:${CLS[c.cls].color}">${esc(c.name.split(" ")[0])}</a>`).join("")}</span>` : ""; }
function buffAt(b, lv) {
  if (!b.steps) return b.fmt;
  let s = b.steps[0]; for (const x of b.steps) if (lv >= x[0]) s = x;
  return b.fmt.replace("{v}", s[1]).replace("{w}", s[2] ?? "");
}
function nextStep(b, lv) { const n = b.steps.find(x => x[0] > lv); return n ? `${n[0]}` : ""; }
function pageCamp() {
  ctx = null; scope = "camp"; setColors(EMBER.color, EMBER.ink);
  if (campLv == null) { const m = S.roster.find(c => c.main) || [...S.roster].sort((a, b) => b.level - a.level)[0]; campLv = m ? Math.max(10, m.level) : 60; }
  setLevelBox(true, "Camp Lv"); lvInput.value = campLv;
  const brings = CAMP.buffs.filter(b => rosterHas(b.pk).length).length;
  const anyProf = S.roster.some(c => c.prof1 || c.prof2 || Object.values(c.sec || {}).some(Boolean));
  header("Campfire", "Forever's camping system: light a fire, add profession objects, sit for a minute and everyone leaves with an hour of buffs. Set a level in the bar to see what each buff gives at that level.",
    [`Camp objects <b>${CAMP.profs.reduce((n, p) => n + p.t.length, 0)}</b>`, anyProf ? `Your roster brings <b>${brings} of ${CAMP.buffs.length}</b>` : "", `Checked <b>${CAMP.updated}</b>`].filter(Boolean), "camp");
  const facts = `<div class="cfacts">${CAMP.facts.map(([n, t]) => `<div><b>${esc(n)}</b><span>${esc(t)}</span></div>`).join("")}</div>`;
  const start = `<ol class="csteps">${CAMP.start.map(([h, t]) => `<li><b>${esc(h)}</b><span>${esc(t)}</span></li>`).join("")}</ol>`;
  const rules = `<ul class="crules">${CAMP.rules.map(r => `<li>${esc(r)}</li>`).join("")}</ul>`;
  const how = facts + `<div class="cgrid2"><div><h3 class="ch3">Your first camp</h3>${start}</div><div><h3 class="ch3">House rules</h3>${rules}</div></div>`;
  const buffs = `<p class="why" id="cbuffnote"></p>${S.roster.length && !anyProf ? `<p class="notice" style="margin:10px 0"><span>Give your characters their professions (open a character, then <b>Edit</b>) and this page marks who on your roster can bring each camp object.</span></p>` : ""}<div class="cbuffs" id="cbuffs"></div>`;
  const kits = `<div class="ckits">${CAMP.kits.map(k => `<div class="ckit"><div class="ckhead"><b>${esc(k.name)}</b><span class="mono">${k.slots} objects</span></div>
    <div class="cslots" aria-label="${k.slots} object slots">${'<i class="fire"></i>' + "<i></i>".repeat(k.slots)}</div>
    <dl><dt>Cooking</dt><dd>${k.learn === k.use ? `${k.learn}` : `learn ${k.learn}, place ${k.use}`}</dd><dt>Burns</dt><dd>${esc(k.wood)} + Flint and Tinder</dd><dt>Recipe</dt><dd>${esc(k.src)}</dd></dl>
    ${k.note ? `<p class="cnote">${esc(k.note)}</p>` : ""}</div>`).join("")}</div>
    <p class="why">Star Wood and Thick Logs are sold by an Engineer's Reagent Bot. Each campfire is its own kit: a bigger fire is the only way to fit more objects in one camp.</p>`;
  const rar = r => r ? `<span class="crar ${r.replace(/\s/g, "")}">${esc(r)}</span>` : "";
  const profs = `<div class="cprofs">${CAMP.profs.map(p => `<div class="cprof${rosterHas(p.pk).length ? " mine" : ""}"><div class="cph"><b>${esc(p.p)}</b>${whoChips(p.pk)}</div>
    ${p.t.map((t, i) => `<div class="ctier"><span class="ctn mono">T${i + 1} · ${t[1]}</span><div><b>${esc(t[0])}</b> <span class="cfx">${esc(t[2])}</span>
      <small>${esc(t[3])}</small>${i === 0 ? `<small class="csrc">${p.p === "Cooking" ? "Comes with Cooking" : "Trainer or the Camping 101 quest"}</small>` : t[4] ? `<small class="csrc">Blueprint: ${esc(t[4])} ${rar(t[5])}</small>` : `<small class="csrc unk">Blueprint source not known yet</small>`}</div></div>`).join("")}</div>`).join("")}</div>`;
  const bps = `<div class="cdungeons">${CAMP.dungeons.map(d => `<div class="cdun"><div class="cdh"><b>${esc(d.d)}</b>${d.nw ? `<span class="badge">New in Forever</span>` : ""}</div><ul>${d.b.map(b => `<li><span><b>${esc(b[0])}</b> <small>${esc(b[1])}</small></span><span class="cboss">${esc(b[2])} ${rar(b[3])}</span></li>`).join("")}</ul></div>`).join("")}</div>
    <p class="why">Beta drop rates: about 0.2 to 1.1% from Classic bosses ("rare"), about 6.6 to 10.4% from bosses in Forever's new dungeons ("common"). "One source" means only one guide lists that drop so far. Most tier 3 blueprints haven't been found yet.</p>`;
  const leg = `<div class="clegacy">${CAMP.legacy.map(([n, tr, rk, t]) => `<div><b>${esc(n)}</b><small>${esc(tr)} tree · ${esc(rk)}</small><p>${esc(t)}</p></div>`).join("")}</div><p class="why"><a href="#/legacy">Open the Legacy System page</a> to plan them.</p>`;
  const tips = `<div class="ctips">${CAMP.tips.map(([h, t]) => `<div><b>${esc(h)}</b><p>${esc(t)}</p></div>`).join("")}</div>`;
  const src = `<p>Camping is new and still getting hotfixes (the Journeyman campfire and Expert blueprint both changed on Nov 10). Buff numbers come from the beta client's tables via mmonster.co and can differ slightly from what you see live. Where guides disagree, this page goes with the newest data and says so.</p>
    <ul class="sources">${CAMP.sources.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("")}</ul>`;
  app.innerHTML = sect("camp-how", "Camping in Forever", "How camping works", how, { jump: "How it works" }) +
    sect("camp-buffs", "Set a level in the bar above", "Camp buffs", buffs, { jump: "Camp buffs", desc: "The tier 1 object of each profession and what it gives. Higher tiers keep the same buff." }) +
    sect("camp-fires", "Cooking", "Campfires", kits, { jump: "Campfires" }) +
    sect("camp-profs", "Every camp object", "By profession, tier by tier", profs, { jump: "By profession", desc: "Tier 1 at skill 20, tier 2 at 140, tier 3 at 300. Each tier replaces the one before." + (S.roster.length ? " Highlighted rows are professions your roster has." : "") }) +
    sect("camp-bp", "Where to farm", "Blueprint drops by dungeon", bps, { jump: "Blueprints" }) +
    sect("camp-legacy", "Account-wide", "Legacy perks for camping", leg, { jump: "Legacy perks" }) +
    sect("camp-tips", "From the guides and the numbers", "Camp tips", tips, { jump: "Tips" }) +
    sect("camp-src", "Caveats", "Sources", src, { jump: "Sources" });
  afterRender(); renderCampBuffs();
}
function renderCampBuffs() {
  const box = $("#cbuffs", app); if (!box) return;
  const lv = campLv;
  $("#cbuffnote", app).innerHTML = `At level <b class="mono">${lv}</b>. Each buff skips a class buff of the same kind, so bring the ones your group's classes don't already cover.`;
  box.innerHTML = CAMP.buffs.map(b => {
    const nx = b.kind ? "" : nextStep(b, lv), who = whoChips(b.pk), cl = b.clash ? CLS[b.clash[1]] : null;
    return `<div class="cbuff${who ? " mine" : ""}"><div class="cbt"><span class="cprofname">${esc(b.prof)}</span>${who}</div>
      <b class="cobj">${esc(b.obj)}</b>
      <div class="cval${b.kind === "text" ? " txt" : ""}">${esc(buffAt(b, lv))}</div>
      ${b.extra ? `<small>${esc(b.extra)}</small>` : ""}
      ${nx ? `<small class="cnext">Goes up at level ${nx}</small>` : ""}
      ${cl ? `<div class="cclash">Skip if <span style="--c:${cl.color}">${esc(cl.name)}</span> brings ${esc(b.clash[0])}</div>` : ""}</div>`;
  }).join("");
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
  dform.oninput = dform.onchange = dform.onsubmit = null;
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
function payload(chars, withLegacy = true) {
  const used = new Set(chars.map(c => c.build)), builds = S.builds.filter(b => withLegacy || used.has(b.id));
  return { app: "forever-planner", v: 1, roster: chars.map(packChar), legacy: withLegacy ? Object.keys(S.legacy) : [], builds };
}
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
    const inB = (Array.isArray(p.builds) ? p.builds : []).map(fixBuild).filter(Boolean);
    const newB = inB.filter(b => !S.builds.some(x => x.id === b.id));
    applyBuilds(S.builds.concat(newB));
    const chars = p.roster.map(fixChar).filter(Boolean);
    applyBuilds(S.builds);
    const lg = Array.isArray(p.legacy) ? p.legacy.filter(x => typeof x === "string" && x.length < 24) : [];
    const list = chars.map(c => `<li><b>${esc(c.name)}</b> · ${esc(c.race)} ${esc(CLS[c.cls].name)}, level ${c.level}${c.main ? " · Main" : ""}</li>`).join("");
    openDlg(`<h2 id="dlg-title">Import ${chars.length === 1 ? "a character" : `${chars.length} characters`}?</h2>
    <ul style="margin:0;padding-left:20px;display:grid;gap:4px">${list || "<li>No characters in this roster.</li>"}</ul>
    ${lg.length ? `<p class="why">Includes ${lg.length} Legacy challenge ticks.</p>` : ""}
    ${newB.length ? `<p class="why">Includes ${newB.length === 1 ? "a talent build" : newB.length + " talent builds"}: ${newB.map(b => `${esc(b.name)} (${esc(CLS[b.cls].name)})`).join(", ")}.</p>` : ""}
    ${S.roster.length ? `<p>You already have ${S.roster.length} character${S.roster.length > 1 ? "s" : ""} here. <b>Add</b> keeps them and adds these; <b>Replace</b> swaps your roster for this one.</p>` : ""}
    <div class="dlgacts"><button type="button" class="btn" data-close>Cancel</button>${S.roster.length ? `<button type="button" class="btn danger" id="imp-replace">Replace my roster</button>` : ""}<button type="submit" class="btn primary">${S.roster.length ? "Add to my roster" : "Import"}</button></div>`);
    const finish = replace => {
      if (replace) { S.roster = []; S.legacy = {}; }
      for (const b of newB) if (!S.builds.some(x => x.id === b.id)) S.builds.push(b);
      applyBuilds(S.builds);
      const fixed = p.roster.map(fixChar).filter(Boolean); chars.splice(0, chars.length, ...fixed);
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
  else if (h === "#/camp") pageCamp();
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
