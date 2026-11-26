/* WoW Forever Planner: Paladin guide. Class data last checked/updated Nov 26, 2026.
   Loads after data/classes.js and adds itself to window.FP_DATA.classes. */
window.FP_DATA.classes.paladin = {
 "key": "paladin",
 "name": "Paladin",
 "color": "#F48CBA",
 "ink": "#B0567F",
 "roles": [
  "Tank",
  "Healer",
  "Melee"
 ],
 "races": [
  {
   "race": "Human",
   "new": false
  },
  {
   "race": "Dwarf",
   "new": false
  },
  {
   "race": "Undead",
   "new": true
  }
 ],
 "blurb": "Holy Strike comes at level 6. Seals stay active after Judgement, so there's less recasting. Consecration is baseline, and Seal of Fury lets Judgement taunt. Unsealed Wrath (Twist of Light's Oct 30 replacement) stores your seal for a burst. Blessing of Salvation and Mass Salvation were removed on Nov 2.",
 "specs": [
  [
   "Holy",
   "Holy Shock heals or hurts, and Oath of Light boosts your heals on one sworn ally. Light's Vigil is the 31-point talent."
  ],
  [
   "Protection",
   "Seal of Fury is the tank seal, and judging it taunts. Holy Shield and Templar's Bulwark keep you up; Shieldsworn lets Holy Strike hit with your shield."
  ],
  [
   "Retribution",
   "Two-hander. Holy Strike from level 6, Vengeance and Champion of the Light for damage, and Unsealed Wrath stores your seal for a burst."
  ]
 ],
 "general": "Seals stay active after Judgement, so there's less recasting. Consecration and Blessing of Kings are trainable. Salvation was removed on Nov 2.",
 "lvl": [
  [
   "Retribution",
   40.5
  ],
  [
   "Protection",
   34
  ],
  [
   "Holy",
   25.5
  ]
 ],
 "first": [
  "Benediction 5/5",
  "Conviction 5/5"
 ],
 "at60": "Ret 41% · Prot 32% · Holy 27%. Top build: Retribution 8/8/35.",
 "builds": {
  "wda": {
   "cols": [
    "Levels 10–29 · Retribution",
    "Levels 30–40 · Retribution",
    "Levels 41–60 · 18 into Holy"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Deflection",
     10,
     14,
     5,
     "+5% parry, so fewer hits to heal back"
    ],
    [
     0,
     "2/2",
     "Improved Judgement",
     15,
     16,
     2,
     "Judgement every 8 sec instead of 10"
    ],
    [
     0,
     "3/3",
     "Conviction",
     17,
     19,
     3,
     "+6% crit, which feeds Vengeance at 30"
    ],
    [
     0,
     "2/2",
     "Pursuit of Justice",
     20,
     21,
     2,
     "15% faster running, mount included"
    ],
    [
     0,
     "1/1",
     "Seal of Command",
     22,
     22,
     1,
     "your main seal from here"
    ],
    [
     0,
     "2/3",
     "Sanctified Judgement",
     23,
     24,
     2,
     ""
    ],
    [
     0,
     "1/1",
     "Sacred Arbiter",
     25,
     25,
     1,
     "Holy Strike hits harder"
    ],
    [
     0,
     "3/3",
     "Two-Handed Weapon Specialization",
     26,
     28,
     3,
     "more physical damage with a two-hander, and since a mid-November hotfix all your Holy damage too"
    ],
    [
     0,
     "3/3",
     "Sanctified Judgement",
     29,
     29,
     1,
     "each Judgement refunds 60% of your seal's cost"
    ],
    [
     1,
     "3/3",
     "Vengeance",
     30,
     32,
     3,
     "crits give +3% damage for 30 sec, stacking 5 times; needs Seal of Command"
    ],
    [
     1,
     "1/1",
     "Repentance",
     33,
     33,
     1,
     "6 sec incapacitate on a humanoid"
    ],
    [
     1,
     "1/3",
     "Vindication",
     34,
     34,
     1,
     ""
    ],
    [
     1,
     "5/5",
     "Champion of the Light",
     35,
     39,
     5,
     "60% of your Intellect becomes spell damage; makes Hammer of Wrath instant"
    ],
    [
     1,
     "1/1",
     "Unsealed Wrath",
     40,
     40,
     1,
     "stores up to 3 copies of your seal, released when you hit with a different seal"
    ],
    [
     2,
     "5/5",
     "Divine Strength",
     41,
     45,
     5,
     "+10% Strength"
    ],
    [
     2,
     "2/2",
     "Reverence",
     46,
     47,
     2,
     "part of your mana regen continues while casting"
    ],
    [
     2,
     "3/5",
     "Improved Seals",
     48,
     50,
     3,
     ""
    ],
    [
     2,
     "2/2",
     "Holy Conduit",
     51,
     52,
     2,
     "40% cheaper Consecration, Exorcism and Hammer of Wrath"
    ],
    [
     2,
     "5/5",
     "Improved Seals",
     53,
     54,
     2,
     "+15% seal and Judgement damage"
    ],
    [
     2,
     "2/2",
     "Purifying Power",
     55,
     56,
     2,
     "shorter Exorcism cooldown"
    ],
    [
     2,
     "2/2",
     "Divine Precision",
     57,
     58,
     2,
     ""
    ],
    [
     2,
     "3/3",
     "Vindication",
     59,
     60,
     2,
     "back in Retribution"
    ]
   ],
   "name": "Retribution",
   "sub": "We Ding Again"
  }
 },
 "spells": [
  [
   1,
   "Seal of Righteousness, Holy Light, Devotion Aura"
  ],
  [
   4,
   "Blessing of Might, Judgement"
  ],
  [
   6,
   "Holy Strike, Divine Protection"
  ],
  [
   8,
   "Hammer of Justice"
  ],
  [
   10,
   "Seal of Fury, Blessing of Protection, Lay on Hands"
  ],
  [
   12,
   "Redemption (quest)"
  ],
  [
   14,
   "Blessing of Wisdom"
  ],
  [
   16,
   "Retribution Aura, Righteous Fury"
  ],
  [
   18,
   "Blessing of Freedom"
  ],
  [
   20,
   "Kings, Consecration, Exorcism, Flash of Light"
  ],
  [
   22,
   "Concentration Aura"
  ],
  [
   26,
   "Salvation"
  ],
  [
   30,
   "Seal of Light, Divine Intervention"
  ],
  [
   33,
   "Repentance (talent)"
  ],
  [
   34,
   "Divine Shield"
  ],
  [
   38,
   "Seal of Wisdom"
  ],
  [
   40,
   "Blessing of Light"
  ],
  [
   42,
   "Cleanse"
  ],
  [
   44,
   "Hammer of Wrath"
  ]
 ],
 "weapons": [
  [
   11,
   "Steady Bastard Sword",
   "Durotar quest"
  ],
  [
   15,
   "Forsaken Greataxe",
   "Ruins of Lordaeron quest"
  ],
  [
   16,
   "Axe of Orgrimmar",
   "Ragefire Chasm quest"
  ],
  [
   18,
   "Smite's Mighty Hammer or Taskmaster Axe",
   "Deadmines"
  ],
  [
   24,
   "Heavehammer",
   "Excavation Site quest"
  ],
  [
   29,
   "Manual Crowd Pummeler, Corpsemaker or Felbough Arm",
   "Gnomeregan / RFK / Dalaran"
  ],
  [
   39,
   "Mograine's Might",
   "Scarlet Monastery"
  ],
  [
   50,
   "Princess Theradras' Scepter",
   "Maraudon"
  ],
  [
   58,
   "Legionite Glaive or Arcanite Reaper",
   "Blacksmithing"
  ]
 ],
 "now": [
  {
   "type": "steps",
   "label": "How to play",
   "items": [
    [
     1,
     3,
     "Seal of Righteousness and auto attack"
    ],
    [
     1,
     60,
     "Devotion Aura on"
    ],
    [
     4,
     19,
     "Blessing of Might on yourself"
    ],
    [
     4,
     60,
     "Judgement whenever it's ready"
    ],
    [
     6,
     60,
     "Holy Strike on cooldown"
    ],
    [
     14,
     19,
     "Drinking a lot? Swap to Wisdom"
    ],
    [
     16,
     60,
     "Retribution Aura for 2–3 mobs"
    ],
    [
     20,
     60,
     "Kings; Consecration on 2–4 mobs"
    ],
    [
     22,
     60,
     "Hammer of Justice, then Judgement"
    ],
    [
     33,
     60,
     "Repentance + Judgement on humanoids"
    ],
    [
     40,
     60,
     "Unsealed Wrath burst"
    ],
    [
     44,
     60,
     "Hammer of Wrath under 20%"
    ]
   ]
  },
  {
   "type": "train"
  },
  {
   "type": "weapon",
   "label": "Two-hander",
   "none": "Starter weapon"
  }
 ],
 "opts": [
  {
   "t": "Retribution",
   "s": "We Ding Again's 10–60 build · 18/0/33",
   "p": "<b>10–19:</b> Deflection 5/5, Improved Judgement 2/2, Conviction 3/3. <b>20–29:</b> Pursuit of Justice 2/2, Seal of Command, Sanctified Judgement 3/3, Sacred Arbiter, Two-Handed Weapon Specialization 3/3. <b>30–40:</b> Vengeance 3/3, Repentance, Vindication 1/3, Champion of the Light 5/5, Unsealed Wrath. <b>41–60:</b> 18 points into Holy, then Vindication 3/3. Protection and Holy are the other options."
  }
 ],
 "keyspells": "",
 "sections": [
  {
   "id": "paladin-guide",
   "label": "Undead Paladin · Horde",
   "h2": "Retribution leveling guide",
   "html": "\n  <p class=\"sdesc\">Combined from <a href=\"https://www.warcrafttavern.com/forever/guides/paladin-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern</a> and <a href=\"https://www.method.gg/wow-forever/wow-forever-paladin-leveling-guide-and-talents\" target=\"_blank\" rel=\"noopener\">Method</a> leveling guides, Warcraft Tavern's <a href=\"https://www.warcrafttavern.com/forever/guides/retribution-paladin/\" target=\"_blank\" rel=\"noopener\">Retribution guide</a>, <a href=\"https://wow.gg/guides/wow-forever-retribution-paladin-beta\" target=\"_blank\" rel=\"noopener\">WoW.gg</a> level-60 notes, the <a href=\"https://www.method.gg/wow-forever/the-best-weapons-in-wow-forever-from-levels-1-30\" target=\"_blank\" rel=\"noopener\">Method weapon list</a>, and <a href=\"https://www.youtube.com/@WeDingAgain\" target=\"_blank\" rel=\"noopener\">We Ding Again</a>'s 10–60 Retribution video for the talent order and play tips. Weapons are filtered to what a Horde character can get.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" id=\"talents\" data-key=\"paladin-guide-talent-order\" open>\n      <summary><h3>Talent order <small>checklist · 51 points · 18/0/33 at 60</small></h3></summary>\n      <p class=\"why\">Tick each row as you spend the points. Gold rows are due at your level; the outlined row is your next point.</p>\n      <div id=\"talents-app\"></div>\n      <p class=\"why\">This replaces the older Benediction-first path, which was planned on the tree before Blizzard's <a href=\"https://epiccarry.com/blogs/?p=44316\" target=\"_blank\" rel=\"noopener\">Oct 30 rework</a> (Twist of Light became Unsealed Wrath and several talents changed rows and ranks). With the Well-Rested and Talented legacy point, every step arrives 5 levels sooner. Dual spec opens at 40: put a tank or heal spec in the second slot and leave this one alone.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"paladin-guide-how-it-plays-by-level\" open>\n      <summary><h3>How it plays, by level</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">Lv 1</span><p>Seal of Righteousness and auto attack. Devotion Aura stays on.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 4</span><p>Blessing of Might on yourself (Blessings last an hour now). Judgement whenever it's ready: your seal stays on after it.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 6</span><p>Holy Strike: 10 sec cooldown, costs almost nothing. A fight is seal up, run in, Judgement and Holy Strike when they light up, and let the swings do the rest.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 14</span><p>Still drinking a lot? Swap Might for Blessing of Wisdom.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 16</span><p>Devotion Aura solo; Retribution Aura when you pull two or three.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 20</span><p>Kings replaces Might (now trained, +10% all stats). Consecration only with 2–4 mobs that will live through it: only the first four take full damage and it costs a lot of mana. Pull Undead and demons with Exorcism from 30 yards.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 22</span><p>Seal of Command. Hammer of Justice, then Judgement: Command's Judgement does double damage to a stunned mob.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 33</span><p>Repentance and Judgement together for the same double damage on humanoids (Repent Judge macro).</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 40</span><p>Unsealed Wrath burst: start in Seal of Command, swing three times, then Seal of Righteousness and keep hitting.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 44</span><p>Hammer of Wrath under 20% health, instant with Champion of the Light. Finishes mobs and catches runners.</p></div>\n        <div class=\"step\"><span class=\"lv\">Mana</span><p>If the next swing kills the mob anyway, leave your buttons alone. End a fight with spare mana? Spend it on Holy Light and pull the next one at full health.</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel\" data-key=\"paladin-guide-a-normal-pull\">\n      <summary><h3>A normal pull <small>40 and up</small></h3></summary>\n      <ol class=\"talents\">\n        <li>Kings and Devotion Aura already on.</li>\n        <li>Seal of Command.</li>\n        <li>Exorcism first if it's Undead or a demon.</li>\n        <li>Judgement and Holy Strike whenever they're up.</li>\n        <li>Seal of Righteousness after three swings.</li>\n        <li>Hammer of Wrath once it drops under 20%.</li>\n      </ol>\n      <p class=\"why\">Two or three mobs: Consecration goes down first. One big mob hitting hard: stun it and get a Holy Light off.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"paladin-guide-key-spells\">\n      <summary><h3>Key spells</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1–8</span><p>Seal of Righteousness, Holy Light, Devotion Aura · Blessing of Might, Judgement 4 · Holy Strike, Divine Protection 6 · Hammer of Justice 8</p></div>\n        <div class=\"step\"><span class=\"lv\">10–16</span><p>Seal of Fury, Blessing of Protection, Lay on Hands 10 · Redemption 12 (quest) · Blessing of Wisdom 14 · Retribution Aura, Righteous Fury 16</p></div>\n        <div class=\"step\"><span class=\"lv\">18–26</span><p>Blessing of Freedom 18 · Kings, Consecration, Exorcism, Flash of Light 20 · Concentration Aura 22 · Salvation 26</p></div>\n        <div class=\"step\"><span class=\"lv\">30–46</span><p>Seal of Light, Divine Intervention 30 · Repentance 33 (talent) · Divine Shield 34 · Seal of Wisdom 38 · Blessing of Light 40 · Cleanse 42 · Hammer of Wrath 44</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel\" data-key=\"paladin-guide-weapon-upgrades\">\n      <summary><h3>Weapon upgrades <small>two-hand</small></h3></summary>\n      <p>Slow, heavy two-handers boost Holy Strike and Seal of Command. Forever cut ability damage across the board, so weapon upgrades matter more than usual.</p>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">11</span><p>Steady Bastard Sword, Durotar quest (Horde)</p></div>\n        <div class=\"step\"><span class=\"lv\">15</span><p>Forsaken Greataxe, Ruins of Lordaeron dungeon quest (Horde)</p></div>\n        <div class=\"step\"><span class=\"lv\">16</span><p>Axe of Orgrimmar, Ragefire Chasm dungeon quest (Horde)</p></div>\n        <div class=\"step\"><span class=\"lv\">18</span><p>Smite's Mighty Hammer or Taskmaster Axe, Deadmines</p></div>\n        <div class=\"step\"><span class=\"lv\">24</span><p>Heavehammer, Wetlands Excavation Site dungeon quest</p></div>\n        <div class=\"step\"><span class=\"lv\">29</span><p>Manual Crowd Pummeler (Gnomeregan), Corpsemaker (Razorfen Kraul) or Felbough Arm (Dalaran, polearm)</p></div>\n        <div class=\"step\"><span class=\"lv\">39</span><p>Mograine's Might, Scarlet Monastery</p></div>\n        <div class=\"step\"><span class=\"lv\">~50</span><p>Princess Theradras' Scepter, Maraudon</p></div>\n        <div class=\"step\"><span class=\"lv\">58</span><p>Legionite Glaive (Blacksmithing), or Arcanite Reaper</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel\" data-key=\"paladin-guide-stats\">\n      <summary><h3>Stats</h3></summary>\n      <p><b>Leveling:</b> Strength and Spell Power, then Intellect once Champion of the Light is in at 35. Strength gives 2 Attack Power per point.</p>\n      <p><b>At 60 (WoW.gg):</b> weapon damage, Hit, Expertise, Strength, Spell Power.</p>\n      <p class=\"why\"><b>Judgement and hit, since the Nov 11 hotfix:</b> Judgement counts as a ranged attack, so it uses your ranged hit chance and doesn't trigger melee procs. Judgement of Command is the exception: since Nov 13 it counts as a melee attack and triggers on-hit effects again.</p>\n      <p>Self-healing feels weak without +Healing gear, so carry potions when chain-pulling.</p>\n      <p><b>Numbers at 60:</b> Command's Judgement on a stunned mob shows about 400 before talents, +15% from Improved Seals. Exorcism hits Undead for about 500.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"paladin-guide-undead-horde-notes\">\n      <summary><h3>Undead &amp; Horde notes</h3></summary>\n      <ul>\n        <li>Undead Paladins get their own starting area with exclusive quests.</li>\n        <li>Horde Paladin trainers are in Tirisfal Glades: Deathknell, Brill and Bandarion Keep.</li>\n        <li><b>12:</b> the Horde Redemption quest is A Lesson in Divinity, around Tirisfal. Get it before your first dungeon, because the group will ask.</li>\n        <li><b>20:</b> don't skip the class quest. Undead get their own version, it's easier from about 22, and the two-hander reward lasts until about 30.</li>\n        <li>Two-handed swords and polearms train with Archibald in Undercity (polearms from 20). Two-handed maces are in Thunder Bluff, axes in Orgrimmar.</li>\n        <li>Will of the Forsaken breaks fear, charm and sleep, which is great for a melee class.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"paladin-guide-when-a-pull-goes-wrong\">\n      <summary><h3>When a pull goes wrong</h3></summary>\n      <ul>\n        <li><b>Divine Protection or Divine Shield</b> buys time. Divine Shield is 10 sec of immunity and you still hit at half damage. They share Forbearance, so there's a minute between them.</li>\n        <li><b>Lay on Hands</b> is a full heal that takes all your mana. It's back every 20 min now, so use it whenever you're low and out of mana.</li>\n        <li><b>Blessing of Freedom</b> plus Pursuit of Justice gets you out of a slow.</li>\n        <li>Bubbles stop fall damage too: bubble and jump off the cliff.</li>\n        <li><b>Casters:</b> no interrupt, so Hammer of Justice stops the cast. <b>Runners:</b> no slow, so Hammer of Wrath from 44.</li>\n        <li>Hammer of Justice is also your panic button for a safe Holy Light.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"paladin-guide-training-legacy-points-dungeons\">\n      <summary><h3>Training, Legacy points &amp; dungeons</h3></summary>\n      <ul>\n        <li><b>Train every rank:</b> both seals, Holy Strike, Holy Light, Exorcism.</li>\n        <li><b>Can wait:</b> Blessing of Might once you have Kings, the resistance auras, Turn Undead, Redemption ranks.</li>\n        <li><b>Legacy points:</b> first five in Thrill of Adventure (non-gray kills out in the world give health and mana back), then Well-Rested and Talented.</li>\n        <li><b>Dungeons:</b> mobs give fairly little XP in Forever, so pick up every quest for a dungeon before going in.</li>\n        <li>The biggest upgrade you'll feel is a new two-hander.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"paladin-guide-professions\">\n      <summary><h3>Professions</h3></summary>\n      <ul>\n        <li><b>Blacksmithing + Mining:</b> every guide's pick. Blacksmithing is the easy way to mail with Spell Power, and the Legionite Glaive later</li>\n        <li><b>First Aid + Cooking:</b> they don't take a profession slot</li>\n      </ul>\n    </details>\n\n  </div>\n  "
  },
  {
   "id": "macros",
   "label": "Copy them exactly",
   "h2": "Paladin macros",
   "html": "\n  <p class=\"sdesc\">12 macros for your Paladin, written exactly as they go in the game's macro window. One wrong letter and a macro does nothing, so copy them with the button.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel wide\" data-key=\"macros-how-to-add-one\">\n      <summary><h3>How to add one</h3></summary>\n      <ol class=\"howto\">\n        <li>Type <code>/macro</code>, open the tab with this character's name, and click New.</li>\n        <li>Type the <b>macro name</b> as shown (16 characters at most) and pick the red question mark icon, so the button shows the spell's own icon.</li>\n        <li>Copy the <b>macro text</b> in exactly, line breaks included. Spell names must match your spellbook letter for letter: capitals, spaces and apostrophes.</li>\n        <li>Drag the macro onto your action bar.</li>\n      </ol>\n      <ul class=\"mtips\">\n        <li><span class=\"ph\">Highlighted words</span> are placeholders: replace them with the exact name of your own item.</li>\n        <li><b>Ctrl</b> means hold Ctrl as you press the button. <b>MO</b> means mouseover: it casts on whatever is under your mouse, and on your target when nothing is.</li>\n        <li>Leave rank numbers off and the macro always casts your highest rank, so you never have to re-drag spells after training.</li>\n        <li>The level tag is when the spell becomes available. Make the macro then, or it will just show a question mark.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-fighting\">\n      <summary><h3>Fighting</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Judge Strike</b><span class=\"lvl\">Lv 6</span></div><button class=\"copy\" id=\"copy-pa1\" data-for=\"pa1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa1\">#showtooltip Holy Strike\n/startattack\n/cast Judgement\n/cast Holy Strike</pre>\n        <p class=\"why\">Judgement when it's ready, then Holy Strike. Judgement is off the global cooldown in Forever, so both fire on one press.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Seal Swap</b><span class=\"lvl\">Lv 22</span></div><button class=\"copy\" id=\"copy-pa2\" data-for=\"pa2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa2\">#showtooltip [mod:ctrl] Seal of Righteousness; Seal of Command\n/cast [mod:ctrl] Seal of Righteousness; Seal of Command</pre>\n        <p class=\"why\">Seal of Command with a slow two-hander, Ctrl for Seal of Righteousness.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Wrath Judge</b><span class=\"lvl\">Lv 44</span></div><button class=\"copy\" id=\"copy-pa3\" data-for=\"pa3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa3\">#showtooltip Hammer of Wrath\n/cast Judgement\n/cast Hammer of Wrath</pre>\n        <p class=\"why\">Execute: Judgement rides along with Hammer of Wrath.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>HoJ MO</b><span class=\"lvl\">Lv 8</span></div><button class=\"copy\" id=\"copy-pa4\" data-for=\"pa4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa4\">#showtooltip Hammer of Justice\n/stopcasting\n/cast [@mouseover,harm,nodead][] Hammer of Justice</pre>\n        <p class=\"why\">Stuns the mob under your mouse, or your target, cancelling any cast first.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Stun Judge</b><span class=\"lvl\">Lv 22</span></div><button class=\"copy\" id=\"copy-pa11\" data-for=\"pa11\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa11\">#showtooltip Hammer of Justice\n/cast Hammer of Justice\n/cast Judgement</pre>\n        <p class=\"why\">Stun, then Judgement in the same press. With Seal of Command up, Judgement does double damage to a stunned mob.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Repent Judge</b><span class=\"lvl\">Lv 33</span></div><button class=\"copy\" id=\"copy-pa12\" data-for=\"pa12\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa12\">#showtooltip Repentance\n/cast Repentance\n/cast Judgement</pre>\n        <p class=\"why\">The We Ding Again macro. Judgement is off the global cooldown, so it lands while the humanoid is still out and Command's Judgement hits for double.</p></div>\n        \n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-healing-defence\">\n      <summary><h3>Healing & defence</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Flash MO</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-pa5\" data-for=\"pa5\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa5\">#showtooltip\n/cast [@mouseover,help,nodead][help,nodead][@player] Flash of Light</pre>\n        <p class=\"why\">Heals whoever is under your mouse, then your friendly target, then you.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Holy Light MO</b><span class=\"lvl\">Lv 1</span></div><button class=\"copy\" id=\"copy-pa6\" data-for=\"pa6\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa6\">#showtooltip\n/cast [@mouseover,help,nodead][help,nodead][@player] Holy Light</pre>\n        <p class=\"why\">The big heal, same targeting.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Bubble</b><span class=\"lvl\">Lv 34</span></div><button class=\"copy\" id=\"copy-pa7\" data-for=\"pa7\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa7\">#showtooltip Divine Shield\n/stopcasting\n/cast Divine Shield</pre>\n        <p class=\"why\">Cancels your cast and bubbles. Heal yourself inside it with the next press of Holy Light MO.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Lay on Hands</b><span class=\"lvl\">Lv 10</span></div><button class=\"copy\" id=\"copy-pa8\" data-for=\"pa8\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa8\">#showtooltip Lay on Hands\n/cast [@mouseover,help,nodead][help,nodead][@player] Lay on Hands</pre>\n        <p class=\"why\">Full heal on whoever is under your mouse, or you. Costs all your mana.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Cleanse MO</b><span class=\"lvl\">Lv 42</span></div><button class=\"copy\" id=\"copy-pa9\" data-for=\"pa9\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa9\">#showtooltip Cleanse\n/cast [@mouseover,help,nodead][help,nodead][@player] Cleanse</pre>\n        <p class=\"why\">Removes poison, disease or magic, same targeting.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Might</b><span class=\"lvl\">Lv 4</span></div><button class=\"copy\" id=\"copy-pa10\" data-for=\"pa10\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pa10\">#showtooltip Blessing of Might\n/cast [help,nodead][@player] Blessing of Might</pre>\n        <p class=\"why\">Blesses your friendly target, or you if nothing friendly is targeted.</p></div>\n        \n    </details>\n    <div class=\"gpanel wide\">\n      <p class=\"why\">Built from the guides on this page and the Forever macro lists on <a href=\"https://rankedboost.com/world-of-warcraft/forever/macros/\" target=\"_blank\" rel=\"noopener\">RankedBoost</a> (Nov 7) and <a href=\"https://kami-labs.fr/en/wow-forever/macros-wow-forever-9-classes/\" target=\"_blank\" rel=\"noopener\">Kami Labs</a>, checked against the spells your guides confirm exist in Forever. Ideas using removed spells, such as Tiger's Fury, were left out. Syntax follows the <a href=\"https://warcraft.wiki.gg/wiki/Macro_conditionals\" target=\"_blank\" rel=\"noopener\">macro conditionals reference</a>.</p>\n    </div>\n  </div>\n  "
  },
  {
   "id": "notes",
   "label": "Read before you commit",
   "h2": "Caveats &amp; sources",
   "html": "\n  <div class=\"notes\">\n<div class=\"note\"><h3>Beta numbers, live game</h3><p>All numbers come from the final beta build (70425). The game launched Nov 4, so check anything important in game. Blizzard can still retune live.</p></div>\n<div class=\"note\"><h3>Racials corrected Nov 5</h3><p>The first version of the Forever Roster Planner had several wrong racials, including Earth Fury for Dwarves (it's Artisan's Precision, +1% hit), Ruthless at 2% (it's 1%) and Wind Blessed at 3% (it's 2%). The table now matches Talents Forever and DonTheCrown's guide.</p></div>\n<div class=\"note\"><h3>Popularity isn't power</h3><p>Spec shares count what people plan in a calculator. Icy Veins also advises picking a playstyle you'll enjoy rather than chasing the strongest class, since tuning keeps shifting.</p></div>\n<div class=\"note\"><h3>Paladin tree reworked Oct 30</h3><p>The talent order now follows We Ding Again's 10–60 build, made on the live tree. The spec split and first points in the class card are beta calculator counts from before the <a href=\"https://epiccarry.com/blogs/?p=44316\" target=\"_blank\" rel=\"noopener\">rework</a>, so Benediction and Twist of Light there are out of date.</p></div>\n  </div>\n  <h3 style=\"margin:28px 0 12px\">Sources</h3>\n  <ul class=\"sources\">\n    <li><a href=\"https://www.warcrafttavern.com/forever/guides/paladin-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Paladin leveling</a></li>\n    <li><a href=\"https://www.warcrafttavern.com/forever/guides/retribution-paladin/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Retribution Paladin</a></li>\n    <li><a href=\"https://www.method.gg/wow-forever/wow-forever-paladin-leveling-guide-and-talents\" target=\"_blank\" rel=\"noopener\">Method: Paladin leveling guide & talents (Oct 10)</a></li>\n    <li><a href=\"https://wow.gg/guides/wow-forever-retribution-paladin-beta\" target=\"_blank\" rel=\"noopener\">WoW.gg: Retribution Paladin (Nov 4)</a></li>\n    <li><a href=\"https://www.youtube.com/@WeDingAgain\" target=\"_blank\" rel=\"noopener\">We Ding Again: The Only Retribution Paladin Build You Need for WoW Forever</a></li>\n    <li><a href=\"https://www.method.gg/wow-forever/the-best-weapons-in-wow-forever-from-levels-1-30\" target=\"_blank\" rel=\"noopener\">Method: best weapons from levels 1–30 (Nov 6)</a></li>\n    <li><a href=\"https://talentsforever.com/racials\" target=\"_blank\" rel=\"noopener\">Talents Forever: races, classes and racials</a></li>\n    <li><a href=\"https://talentsforever.com/popular\" target=\"_blank\" rel=\"noopener\">Talents Forever: most popular builds</a></li>\n    <li><a href=\"https://talentsforever.com/leveling\" target=\"_blank\" rel=\"noopener\">Talents Forever: leveling builds</a></li>\n    <li><a href=\"https://talentsforever.com/guides\" target=\"_blank\" rel=\"noopener\">Talents Forever: what changed since Classic</a></li>\n    <li><a href=\"https://hyjal.cc/racials\" target=\"_blank\" rel=\"noopener\">Hyjal: racial abilities</a></li>\n    <li><a href=\"https://www.icy-veins.com/wow-forever/news/racial-and-class-tuning-new-features-and-options-massive-wow-forever-beta-development-notes-october-15th/\" target=\"_blank\" rel=\"noopener\">Icy Veins: Oct 15 beta development notes</a></li>\n    <li><a href=\"https://www.icy-veins.com/wow-forever/news/your-favorite-race-was-just-changed-in-wow-forever/\" target=\"_blank\" rel=\"noopener\">Icy Veins: every race changed</a></li>\n    <li><a href=\"https://www.icy-veins.com/wow-forever/choosing-your-main\" target=\"_blank\" rel=\"noopener\">Icy Veins: choosing your class</a></li>\n  </ul>\n  "
  }
 ]
};
