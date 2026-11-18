/* WoW Forever Planner: Priest guide. Class data last checked/updated Nov 15, 2026.
   Loads after data/classes.js and adds itself to window.FP_DATA.classes. */
window.FP_DATA.classes.priest = {
 "key": "priest",
 "name": "Priest",
 "color": "#C9CED6",
 "ink": "#5D6670",
 "roles": [
  "Healer",
  "Ranged"
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
   "race": "Night Elf",
   "new": false
  },
  {
   "race": "Gnome",
   "new": true
  },
  {
   "race": "Undead",
   "new": false
  },
  {
   "race": "Troll",
   "new": false
  }
 ],
 "blurb": "Discipline gets Penance, which heals or damages, and leans on shields and damage. Holy rewards using its whole kit. Shadow's Devouring Plague cooldown dropped to 24 sec and Vampiric Embrace to 30 sec. Each race adds two unique Priest spells.",
 "specs": [
  [
   "Discipline",
   "Penance heals or damages, and the spec leans on shields and damage. The relaxed, wand-friendly way to level."
  ],
  [
   "Holy",
   "Rewards using its whole kit, with Prayer of Mending at 40. Best if you'll level mostly in dungeons."
  ],
  [
   "Shadow",
   "Shadow Word: Death is new, Devouring Plague's cooldown dropped to 24 sec and Vampiric Embrace to 30 sec. Shadowform is the big spike."
  ]
 ],
 "general": "Each race adds two unique Priest spells.",
 "lvl": [
  [
   "Discipline",
   47.8
  ],
  [
   "Shadow",
   33.4
  ],
  [
   "Holy",
   18.8
  ]
 ],
 "first": [
  "Power in Light 5/5",
  "Twin Disciplines 5/5"
 ],
 "at60": "Shadow 55% · Disc 29% · Holy 16%. Top build: Shadow 14/0/37.",
 "builds": {
  "shadow": {
   "cols": [
    "Shadow, levels 10–42",
    "Discipline and Holy, 43–60"
   ],
   "rows": [
    [
     0,
     "2/2",
     "Wand Specialization",
     10,
     11,
     2,
     "your wand is most of your damage for 20 levels"
    ],
    [
     0,
     "5/5",
     "Spirit Tap",
     12,
     16,
     5,
     "double Spirit after a kill; very strong"
    ],
    [
     0,
     "2/2",
     "Improved Shadow Word: Pain",
     17,
     18,
     2,
     "mobs start outliving the DoT"
    ],
    [
     0,
     "2/2",
     "Shadow Reach",
     19,
     20,
     2,
     "36 yd range, more casting before they reach you"
    ],
    [
     0,
     "1/5",
     "Shadow Focus",
     21,
     21,
     1,
     "hit, and a point toward the next row"
    ],
    [
     0,
     "1/1",
     "Mind Flay",
     22,
     22,
     1,
     "Shadow's bread and butter"
    ],
    [
     0,
     "2/2",
     "Improved Mind Flay",
     23,
     24,
     2,
     ""
    ],
    [
     0,
     "3/5",
     "Shadow Focus",
     25,
     26,
     2,
     "skip Improved Mind Blast here"
    ],
    [
     0,
     "1/1",
     "Vampiric Embrace",
     27,
     27,
     1,
     "heals you through melee hits"
    ],
    [
     0,
     "3/3",
     "Shadow Weaving",
     28,
     30,
     3,
     "+10% damage once stacked"
    ],
    [
     0,
     "4/5",
     "Shadow Focus",
     31,
     31,
     1,
     ""
    ],
    [
     0,
     "1/1",
     "Silence",
     32,
     32,
     1,
     "use it on every caster"
    ],
    [
     0,
     "2/2",
     "Devouring Contagion",
     33,
     34,
     2,
     "half-price Plague that spreads on death"
    ],
    [
     0,
     "5/5",
     "Shadow Focus",
     35,
     35,
     1,
     ""
    ],
    [
     0,
     "1/5",
     "Improved Mind Blast",
     36,
     36,
     1,
     "or Dark Inspiration; unlocks the next row"
    ],
    [
     0,
     "2/2",
     "Early Demise",
     37,
     38,
     2,
     "Shadow Word: Death crits below 20%"
    ],
    [
     0,
     "3/5",
     "Darkness",
     39,
     41,
     3,
     "or respec at 40 to get Shadowform 2 levels early"
    ],
    [
     0,
     "1/1",
     "Shadowform",
     42,
     42,
     1,
     "your biggest power spike"
    ],
    [
     1,
     "5/5",
     "Darkness",
     43,
     44,
     2,
     ""
    ],
    [
     1,
     "3/3",
     "Twilight Focus",
     45,
     47,
     3,
     "cast while being hit; optional"
    ],
    [
     1,
     "5/5",
     "Twin Disciplines",
     48,
     52,
     5,
     "your DoTs, Death and Mind Flay"
    ],
    [
     1,
     "3/5",
     "Mental Strength",
     53,
     55,
     3,
     "unlocks the next row"
    ],
    [
     1,
     "3/3",
     "Meditation",
     56,
     58,
     3,
     "mana regen while casting"
    ],
    [
     1,
     "1/1",
     "Inner Focus",
     59,
     59,
     1,
     "free, extra crit; use on Death or Mind Blast"
    ],
    [
     1,
     "4/5",
     "Mental Strength",
     60,
     60,
     1,
     "anywhere at 60"
    ]
   ],
   "name": "Shadow",
   "sub": "Twicks"
  },
  "disc_dungeon": {
   "name": "Discipline · dungeons",
   "sub": "Wowhead · Voulk",
   "cols": [
    "Discipline, levels 10–35",
    "Holy, then Discipline, 36–60"
   ],
   "rows": [
    [
     0,
     "2/2",
     "Wand Specialization",
     10,
     11,
     2,
     "+25% wand damage"
    ],
    [
     0,
     "3/5",
     "Twin Disciplines",
     12,
     14,
     3,
     "+5% to your instant spells"
    ],
    [
     0,
     "5/5",
     "Mental Strength",
     15,
     19,
     5,
     "+10% Intellect"
    ],
    [
     0,
     "1/3",
     "Holy Precision",
     20,
     20,
     1,
     "Holy spell hit"
    ],
    [
     0,
     "3/3",
     "Meditation",
     21,
     23,
     3,
     "50% of mana regen while casting"
    ],
    [
     0,
     "1/1",
     "Inner Focus",
     24,
     24,
     1,
     "next spell free, +25% crit"
    ],
    [
     0,
     "3/3",
     "Improved Power Word: Shield",
     25,
     27,
     3,
     "+20% shield"
    ],
    [
     0,
     "1/1",
     "Soul Warding",
     28,
     28,
     1,
     "Shield 4 sec sooner and 15% cheaper"
    ],
    [
     0,
     "4/5",
     "Twin Disciplines",
     29,
     29,
     1,
     "+5% to your instant spells"
    ],
    [
     0,
     "1/1",
     "Penance",
     30,
     30,
     1,
     "heals or hurts"
    ],
    [
     0,
     "5/5",
     "Renewed Hope",
     31,
     35,
     5,
     "more crit on shielded targets"
    ],
    [
     1,
     "5/5",
     "Holy Specialization",
     36,
     40,
     5,
     "+5% Holy crit"
    ],
    [
     1,
     "5/5",
     "Divine Fury",
     41,
     45,
     5,
     "faster Heal, Greater Heal, Smite, Holy Fire"
    ],
    [
     1,
     "1/1",
     "Holy Nova",
     46,
     46,
     1,
     ""
    ],
    [
     1,
     "3/3",
     "Inspiration",
     47,
     49,
     3,
     "crit heals raise the tank's armor"
    ],
    [
     1,
     "1/3",
     "Improved Renew",
     50,
     50,
     1,
     "+15% Renew"
    ],
    [
     1,
     "3/3",
     "Improved Healing",
     51,
     53,
     3,
     "cheaper heals"
    ],
    [
     1,
     "3/3",
     "Divine Aegis",
     54,
     56,
     3,
     "a shield on crit heals"
    ],
    [
     1,
     "5/5",
     "Twin Disciplines",
     57,
     57,
     1,
     "+5% to your instant spells"
    ],
    [
     1,
     "1/1",
     "Power Infusion",
     58,
     58,
     1,
     "the Discipline capstone"
    ],
    [
     1,
     "2/3",
     "Mental Agility",
     59,
     60,
     2,
     "cheaper instants"
    ]
   ]
  },
  "disc_raid": {
   "name": "Discipline · raid",
   "sub": "Wowhead · Voulk",
   "cols": [
    "Discipline, levels 10–40",
    "Holy, 41–60"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Twin Disciplines",
     10,
     14,
     5,
     "+5% to your instant spells"
    ],
    [
     0,
     "5/5",
     "Mental Strength",
     15,
     19,
     5,
     "+10% Intellect"
    ],
    [
     0,
     "3/3",
     "Meditation",
     20,
     22,
     3,
     "50% of mana regen while casting"
    ],
    [
     0,
     "3/3",
     "Improved Power Word: Shield",
     23,
     25,
     3,
     "+20% shield"
    ],
    [
     0,
     "1/1",
     "Inner Focus",
     26,
     26,
     1,
     "next spell free, +25% crit"
    ],
    [
     0,
     "1/1",
     "Soul Warding",
     27,
     27,
     1,
     "Shield 4 sec sooner and 15% cheaper"
    ],
    [
     0,
     "2/3",
     "Mental Agility",
     28,
     29,
     2,
     "cheaper instants"
    ],
    [
     0,
     "1/1",
     "Penance",
     30,
     30,
     1,
     "heals or hurts"
    ],
    [
     0,
     "5/5",
     "Renewed Hope",
     31,
     35,
     5,
     "more crit on shielded targets"
    ],
    [
     0,
     "3/3",
     "Divine Aegis",
     36,
     38,
     3,
     "a shield on crit heals"
    ],
    [
     0,
     "3/3",
     "Mental Agility",
     39,
     39,
     1,
     "cheaper instants"
    ],
    [
     0,
     "1/1",
     "Power Infusion",
     40,
     40,
     1,
     "the Discipline capstone"
    ],
    [
     1,
     "5/5",
     "Holy Specialization",
     41,
     45,
     5,
     "+5% Holy crit"
    ],
    [
     1,
     "5/5",
     "Divine Fury",
     46,
     50,
     5,
     "faster Heal, Greater Heal, Smite, Holy Fire"
    ],
    [
     1,
     "3/3",
     "Inspiration",
     51,
     53,
     3,
     "crit heals raise the tank's armor"
    ],
    [
     1,
     "2/3",
     "Improved Renew",
     54,
     55,
     2,
     "+15% Renew"
    ],
    [
     1,
     "3/3",
     "Improved Healing",
     56,
     58,
     3,
     "cheaper heals"
    ],
    [
     1,
     "3/3",
     "Improved Renew",
     59,
     59,
     1,
     "+15% Renew"
    ],
    [
     1,
     "1/3",
     "Blessed Recovery",
     60,
     60,
     1,
     "last point"
    ]
   ]
  }
 },
 "spells": [
  [
   1,
   "Smite, Lesser Heal, Power Word: Fortitude"
  ],
  [
   4,
   "Shadow Word: Pain"
  ],
  [
   6,
   "Power Word: Shield"
  ],
  [
   8,
   "Renew, Fade"
  ],
  [
   10,
   "Mind Blast, Resurrection, race spell (quest)"
  ],
  [
   12,
   "Inner Fire"
  ],
  [
   14,
   "Psychic Scream, Cure Disease"
  ],
  [
   16,
   "Heal"
  ],
  [
   18,
   "Dispel Magic"
  ],
  [
   20,
   "Devouring Plague, Flash Heal, Holy Fire, Fear Ward, Mind Soothe, Shackle Undead, race spell (quest)"
  ],
  [
   22,
   "Mind Vision"
  ],
  [
   24,
   "Mana Burn"
  ],
  [
   30,
   "Divine Spirit, Shadow Protection, Prayer of Healing, Mind Control"
  ],
  [
   32,
   "Shadow Word: Death"
  ],
  [
   40,
   "Greater Heal, Dual Talent Specialization"
  ],
  [
   48,
   "Prayer of Fortitude"
  ],
  [
   60,
   "Prayer of Spirit"
  ]
 ],
 "weapons": [
  [
   5,
   "Lesser Magic Wand",
   "Enchanters"
  ],
  [
   13,
   "Greater Magic Wand",
   "Enchanters"
  ],
  [
   15,
   "Sizzle Stick",
   "Wailing Caverns quest"
  ],
  [
   16,
   "Staff of Westfall / Gnarled Necromancer's Staff",
   "Deadmines / Ruins of Lordaeron"
  ],
  [
   22,
   "Gravestone Scepter, Healer's Staff",
   "BFD quest / Excavation Site"
  ],
  [
   27,
   "Wand of Eventide",
   "BoE world drop"
  ]
 ],
 "now": [
  {
   "type": "steps",
   "label": "How to play",
   "items": [
    [
     1,
     9,
     "Shield, Smite to pull, Shadow Word: Pain, wand"
    ],
    [
     10,
     21,
     "Pull with Mind Blast, Shadow Word: Pain, wand"
    ],
    [
     20,
     60,
     "Devouring Plague when mana allows"
    ],
    [
     22,
     60,
     "Mind Flay 2–3 times until your shield breaks"
    ],
    [
     32,
     60,
     "Shadow Word: Death below 20%"
    ],
    [
     42,
     60,
     "Stay in Shadowform"
    ]
   ]
  },
  {
   "type": "train"
  },
  {
   "type": "weapon",
   "label": "Wand & staff"
  },
  {
   "type": "steps",
   "label": "Quests & dungeons",
   "items": [
    [
     6,
     9,
     "Starting-zone Priest quest: green chest"
    ],
    [
     10,
     11,
     "Race spell quest in your capital"
    ],
    [
     20,
     21,
     "Second race spell quest"
    ],
    [
     40,
     41,
     "Mount (90g) or dual spec (50g)"
    ],
    [
     50,
     52,
     "\"Cenarion Aid\" before Sunken Temple"
    ],
    [
     12,
     14,
     "Hall of Thanes or Ragefire Chasm"
    ],
    [
     16,
     18,
     "Deadmines or Ruins of Lordaeron"
    ],
    [
     18,
     20,
     "Wailing Caverns"
    ],
    [
     20,
     26,
     "SFK, Stockade, Excavation Site or BFD"
    ],
    [
     26,
     30,
     "City of Dalaran, Razorfen Kraul"
    ],
    [
     30,
     40,
     "Gnomeregan, Scarlet Monastery, Drowned City"
    ],
    [
     40,
     50,
     "Krol'Dok, RFD, Uldaman, ZF, Maraudon"
    ],
    [
     50,
     60,
     "Sunken Temple, BRD, LBRS, Blackmaw Hold"
    ]
   ]
  }
 ],
 "opts": [
  {
   "t": "Shadow",
   "s": "Twicks · ends 15/3/33",
   "p": "Wand Specialization and Spirit Tap first, Mind Flay and Improved Mind Flay by 24, Vampiric Embrace 27, Silence 32, Shadowform 42, then Twilight Focus, Twin Disciplines and Meditation."
  },
  {
   "t": "Discipline (Wowhead)",
   "s": "Voulk · dungeons 33/18/0 · raid 31/20/0",
   "p": "Voulk's PvE Discipline builds, each with a full 10–60 order: the dungeon build (close to his leveling build) and a raid healing build. Both are tabs in the talent checklist."
  },
  {
   "t": "Discipline",
   "s": "the relaxed option",
   "p": "Warcraft Tavern's wand-focused path: shield yourself, wand, keep your DoT up. Penance arrives at 30 and heals or hurts. Method suggests Discipline early and Shadow for 40–60."
  },
  {
   "t": "Holy",
   "s": "for dungeon-heavy leveling",
   "p": "Best if you'll spend most of your leveling in dungeons; solo kill times are slow."
  },
  {
   "t": "Dual spec from 40",
   "s": "50 gold",
   "p": "Keep Shadow for questing and add a healing spec for dungeons."
  }
 ],
 "keyspells": "Shadow Word: Pain 4 · Power Word: Shield 6 · Renew, Fade 8 · Mind Blast, first race spell 10 · Inner Fire 12 · Psychic Scream 14 · Dispel Magic 18 · Devouring Plague, Flash Heal, second race spell 20 · Mind Flay 22 (talent) · Shadow Word: Death 32 · Shadowform 42 (talent)",
 "sections": [
  {
   "id": "priest-guide",
   "label": "Your Priest · Shadow leveling",
   "h2": "Shadow leveling guide",
   "html": "\n  <p class=\"sdesc\">Built on <a href=\"https://mobalytics.gg/wow-forever/classes/priest-leveling-guide\" target=\"_blank\" rel=\"noopener\">Twicks' Priest Leveling Guide</a> (Mobalytics, Nov 13), which gives a full 10–60 Shadow order with a reason for every point. Wands and spec notes also from <a href=\"https://www.warcrafttavern.com/forever/guides/priest-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern</a>; race spells and levels from Talents Forever.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" id=\"talents\" data-key=\"priest-guide-talent-order\" open>\n      <summary><h3>Talent order <small>checklist · 51 points · Shadow and Discipline tabs</small></h3></summary>\n      <p class=\"why\">Tick each row as you spend the points. Gold rows are due at your level; the outlined row is your next point.</p>\n      <div id=\"talents-app\"></div>\n      <p class=\"why\">All three orders are checked against Forever's trees. On the Shadow tab, Shadowform needs 30 Shadow points, which this order reaches at 42. Twicks notes you can respec at 40, skipping Wand Specialization, to get Shadowform 2 levels early, but much of your damage still comes from the wand then.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"priest-guide-rotation\" open>\n      <summary><h3>Rotation by level</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">Before</span><p>Power Word: Fortitude and Inner Fire up. Divine Spirit from 30, Shadow Protection against Shadow casters. Make sure you have health and mana for the next mob.</p></div>\n        <div class=\"step\"><span class=\"lv\">1–9</span><p>Power Word: Shield right before the pull, Smite to pull, Shadow Word: Pain, then wand it down. Wanding keeps your mana ticking (the 5-second rule).</p></div>\n        <div class=\"step\"><span class=\"lv\">10–21</span><p>Pull with Mind Blast instead of Smite, then Shadow Word: Pain and the wand. Spend spare mana on Smite only if you won't need it for the next pull.</p></div>\n        <div class=\"step\"><span class=\"lv\">22–31</span><p>Mind Blast, Shadow Word: Pain, Devouring Plague and Vampiric Embrace (step back during each global cooldown), then Mind Flay 2–3 times until the mob is about to break your shield. Finish with the wand.</p></div>\n        <div class=\"step\"><span class=\"lv\">32+</span><p>Shadow Word: Death on anything under 20%. Wand to 20%, then Death.</p></div>\n        <div class=\"step\"><span class=\"lv\">42+</span><p>Same order in Shadowform. Pop Elune's Light, Eureka! or Berserking if your race has one.</p></div>\n        <div class=\"step\"><span class=\"lv\">Mind Flay</span><p>Don't channel it while you're being hit and pushed back; wand instead.</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel wide\" data-key=\"priest-guide-race-spells\">\n      <summary><h3>Race Priest spells <small>quests at 10 and 20</small></h3></summary>\n      <div class=\"scroll\"><table class=\"racials\"><thead><tr><th>Race</th><th>Level 10</th><th>Level 20</th></tr></thead><tbody>\n<tr><td>Human</td><td>Divine Grace</td><td>Feedback</td></tr>\n<tr><td>Dwarf</td><td>Desperate Prayer</td><td>Chastise</td></tr>\n<tr><td>Night Elf</td><td>Starshards</td><td>Elune's Grace</td></tr>\n<tr><td>Gnome</td><td>Confounding Flash</td><td>Contingency Plan</td></tr>\n<tr><td>Undead</td><td>Touch of Weakness</td><td>Dark Sacrifice</td></tr>\n<tr><td>Troll</td><td>Hex of Weakness</td><td>Shadowguard</td></tr>\n      </tbody></table></div>\n      <p class=\"why\">Get the quest from your race's capital (Stormwind, Ironforge, Darnassus, Undercity or Orgrimmar). Starshards is worth casting while leveling when you have distance.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"priest-guide-wands\">\n      <summary><h3>Wands &amp; staves <small>Alliance / Horde</small></h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">5</span><p>Lesser Magic Wand, made by Enchanters</p></div>\n        <div class=\"step\"><span class=\"lv\">12–14</span><p>Deepblaze (Hall of Thanes) / Staff of Orgrimmar (Ragefire Chasm)</p></div>\n        <div class=\"step\"><span class=\"lv\">13</span><p>Greater Magic Wand, made by Enchanters</p></div>\n        <div class=\"step\"><span class=\"lv\">15–20</span><p>Sizzle Stick, Wailing Caverns quest; Crescent Staff from the same dungeon</p></div>\n        <div class=\"step\"><span class=\"lv\">16–18</span><p>Staff of Westfall (Deadmines) / Gnarled Necromancer's Staff (Ruins of Lordaeron)</p></div>\n        <div class=\"step\"><span class=\"lv\">22–26</span><p>Gravestone Scepter (Blackfathom Deeps quest) and Healer's Staff (Excavation Site: Wetlands)</p></div>\n        <div class=\"step\"><span class=\"lv\">27</span><p>Wand of Eventide, a bind-on-equip world drop</p></div>\n      </div>\n      <p class=\"why\">Get a wand as early as you can: Wand Specialization makes it most of your damage until Shadowform. Train Staff or Dagger skill before equipping one.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"priest-guide-key-spells\">\n      <summary><h3>Key spells</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1–8</span><p>Smite, Lesser Heal, Power Word: Fortitude 1 · Shadow Word: Pain 4 · Power Word: Shield 6 · Renew, Fade 8</p></div>\n        <div class=\"step\"><span class=\"lv\">10–18</span><p>Mind Blast, Resurrection 10 · Inner Fire 12 · Psychic Scream, Cure Disease 14 · Heal 16 · Dispel Magic 18 (big spike, with PW:S and SW:P rank 3)</p></div>\n        <div class=\"step\"><span class=\"lv\">20–28</span><p>Devouring Plague, Flash Heal, Holy Fire, Fear Ward, Mind Soothe, Shackle Undead 20 · Mana Burn 24 · rank 2 Mind Flay and Plague at 28</p></div>\n        <div class=\"step\"><span class=\"lv\">30–60</span><p>Divine Spirit, Shadow Protection, Mind Control 30 · Shadow Word: Death 32 · Greater Heal, dual spec 40 · Prayer of Fortitude 48 · Prayer of Spirit 60</p></div>\n      </div>\n      <p class=\"why\">Twicks' training stops: 18, 20, 28, then 32, 36 and 40. Skip Mind Vision; Fear Ward can wait. Shackle Undead becomes vital in the Plaguelands.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"priest-guide-stats\">\n      <summary><h3>Stats</h3></summary>\n      <ul>\n        <li><b>Spell Power</b> first: Forever lowered base spell damage to make room for it</li>\n        <li><b>Spirit</b> next: Spirit Tap and Meditation turn it into a lot of mana</li>\n        <li><b>Intellect</b>, then <b>Stamina</b> (Fortitude and your shield pad your health)</li>\n        <li>Crit, hit, haste and MP5 are rare while leveling; crit is best of them with Shadowform</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"priest-guide-professions\">\n      <summary><h3>Professions</h3></summary>\n      <ul>\n        <li><b>Enchanting</b> first: Lesser and Greater Magic Wands at 5 and 13 carry your early damage</li>\n        <li><b>Tailoring</b> pairs with it: strong cloth, and cloth comes from mobs, so no gathering needed</li>\n        <li><b>Cooking:</b> Well Fed food gives +5% XP from kills</li>\n        <li>Skip First Aid if you tailor: both eat cloth, and you can heal yourself</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"priest-guide-tips\">\n      <summary><h3>Tips &amp; mistakes</h3></summary>\n      <ul>\n        <li>Buy each new tier of water; you don't need food.</li>\n        <li>Psychic Scream can run mobs into more mobs. Use it carefully.</li>\n        <li>Fade only matters in groups; it does nothing solo.</li>\n        <li>DoTs and HoTs update as they tick in Forever, so buffs mid-fight count.</li>\n        <li>Dispel Magic has no cooldown in Forever, and Priests are the only magic dispellers until Paladins get one at 42.</li>\n        <li>Mount at 40 costs 90 gold at your race's city, 100 anywhere else.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel wide\" data-key=\"priest-guide-dungeons\">\n      <summary><h3>Dungeons by level</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">12–14</span><p>Hall of Thanes (Alliance) or Ragefire Chasm (Horde)</p></div>\n        <div class=\"step\"><span class=\"lv\">16–18</span><p>Deadmines (Alliance) or Ruins of Lordaeron (Horde)</p></div>\n        <div class=\"step\"><span class=\"lv\">18–20</span><p>Wailing Caverns</p></div>\n        <div class=\"step\"><span class=\"lv\">20–26</span><p>Shadowfang Keep · The Stockade · Excavation Site: Wetlands · Blackfathom Deeps</p></div>\n        <div class=\"step\"><span class=\"lv\">26–30</span><p>City of Dalaran · Razorfen Kraul (28+)</p></div>\n        <div class=\"step\"><span class=\"lv\">30–40</span><p>Gnomeregan · Scarlet Monastery wings · The Drowned City (36+)</p></div>\n        <div class=\"step\"><span class=\"lv\">40–50</span><p>Krol'Dok Stronghold · Razorfen Downs · Uldaman · Zul'Farrak · Maraudon · Alcaz Prison (48+)</p></div>\n        <div class=\"step\"><span class=\"lv\">50–60</span><p>Sunken Temple · Blackrock Depths · Lower Blackrock Spire · Blackmaw Hold · then Shaper's Terrace, Upper Blackrock Spire, Dire Maul, Scholomance and Stratholme at 58+</p></div>\n      </div>\n      <p class=\"why\">Since the Nov 8 hotfix, dungeon mobs give 50% more experience. Pick up every quest for a dungeon before you go in. Raids open Dec 9.</p>\n    </details>\n\n  </div>\n  "
  },
  {
   "id": "macros",
   "label": "Copy them exactly",
   "h2": "Priest macros",
   "html": "\n  <p class=\"sdesc\">6 macros, written exactly as they go in the game's macro window. One wrong letter and a macro does nothing, so copy them with the button.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel wide\" data-key=\"macros-how-to-add-one\">\n      <summary><h3>How to add one</h3></summary>\n      <ol class=\"howto\">\n        <li>Type <code>/macro</code>, open the tab with this character's name, and click New.</li>\n        <li>Type the <b>macro name</b> as shown (16 characters at most) and pick the red question mark icon, so the button shows the spell's own icon.</li>\n        <li>Copy the <b>macro text</b> in exactly, line breaks included. Spell names must match your spellbook letter for letter: capitals, spaces and apostrophes.</li>\n        <li>Drag the macro onto your action bar.</li>\n      </ol>\n      <ul class=\"mtips\">\n        <li><span class=\"ph\">Highlighted words</span> are placeholders: replace them with the exact name of your own item.</li>\n        <li><b>Ctrl</b> means hold Ctrl as you press the button. <b>MO</b> means mouseover: it casts on whatever is under your mouse, and on your target when nothing is.</li>\n        <li>Leave rank numbers off and the macro always casts your highest rank, so you never have to re-drag spells after training.</li>\n        <li>The level tag is when the spell becomes available. Make the macro then, or it will just show a question mark.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-healing\">\n      <summary><h3>Healing</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Flash Heal MO</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-pr1\" data-for=\"pr1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pr1\">#showtooltip Flash Heal\n/cast [@mouseover,help,nodead][help,nodead][@player] Flash Heal</pre>\n        <p class=\"why\">From Mobalytics' Discipline guide: heals whoever is under your mouse, otherwise your friendly target, otherwise you.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Shield MO</b><span class=\"lvl\">Lv 6</span></div><button class=\"copy\" id=\"copy-pr2\" data-for=\"pr2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pr2\">#showtooltip Power Word: Shield\n/cast [@mouseover,help,nodead][help,nodead][@player] Power Word: Shield</pre>\n        <p class=\"why\">The same pattern, so you can shield yourself without dropping your enemy target.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Renew MO</b><span class=\"lvl\">Lv 8</span></div><button class=\"copy\" id=\"copy-pr3\" data-for=\"pr3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pr3\">#showtooltip Renew\n/cast [@mouseover,help,nodead][help,nodead][@player] Renew</pre>\n        <p class=\"why\"></p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Dispel MO</b><span class=\"lvl\">Lv 18</span></div><button class=\"copy\" id=\"copy-pr4\" data-for=\"pr4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pr4\">#showtooltip Dispel Magic\n/cast [@mouseover,help,nodead][help,nodead][@player] Dispel Magic</pre>\n        <p class=\"why\">Removes a magic debuff from a friend or yourself.</p></div>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-shadow\">\n      <summary><h3>Shadow</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Wand</b><span class=\"lvl\">Lv 5</span></div><button class=\"copy\" id=\"copy-pr5\" data-for=\"pr5\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pr5\">#showtooltip Shoot\n/cast !Shoot</pre>\n        <p class=\"why\">From Mobalytics' Shadow guide. The ! stops a second press from turning your wand off.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>SW Pain MO</b><span class=\"lvl\">Lv 4</span></div><button class=\"copy\" id=\"copy-pr6\" data-for=\"pr6\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"pr6\">#showtooltip Shadow Word: Pain\n/cast [@mouseover,harm,nodead][] Shadow Word: Pain</pre>\n        <p class=\"why\">DoTs a second mob without retargeting.</p></div>\n    </details>\n  </div>\n  "
  },
  {
   "id": "notes",
   "label": "Read before you commit",
   "h2": "Caveats &amp; sources",
   "html": "\n  <div class=\"notes\">\n<div class=\"note\"><h3>Discipline or Shadow?</h3><p>Calculator users mostly plan Discipline for leveling, while every current 1–60 guide checked levels Shadow. If you'd rather heal more and wand, Warcraft Tavern's Discipline path is the relaxed alternative.</p></div>\n<div class=\"note\"><h3>Shadowform at 42, not 40</h3><p>Shadowform needs 30 Shadow points; Twicks' order reaches it at 42 because Wand Specialization comes first. A respec at 40 gets it sooner.</p></div>\n<div class=\"note\"><h3>Binding Heal is gone</h3><p>Blizzard's Nov 2 notes removed it; Holy Binding, a Holy talent, took its place. Older guides may still mention it.</p></div>\n  </div>\n  <h3 style=\"margin:28px 0 12px\">Sources</h3>\n  <ul class=\"sources\">\n    <li><a href=\"https://www.wowhead.com/forever/guide/classes/priest/discipline/talent-builds-pve-healer\" target=\"_blank\" rel=\"noopener\">Voulk: Best Discipline Priest Talent Tree Builds (Wowhead, Nov 4)</a></li>\n    <li><a href=\"https://mobalytics.gg/wow-forever/classes/priest-leveling-guide\" target=\"_blank\" rel=\"noopener\">Twicks: Priest Leveling Guide 1–60 (Mobalytics, Nov 13)</a></li>\n    <li><a href=\"https://www.warcrafttavern.com/forever/guides/priest-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Priest leveling (wands, specs, race spells)</a></li>\n    <li><a href=\"https://mobalytics.gg/wow-forever/classes/discipline-priest-guide\" target=\"_blank\" rel=\"noopener\">Mobalytics: Discipline Priest guide (Flash Heal macro)</a></li>\n    <li><a href=\"https://mobalytics.gg/wow-forever/classes/shadow-priest-guide\" target=\"_blank\" rel=\"noopener\">Mobalytics: Shadow Priest guide (wand macro)</a></li>\n    <li><a href=\"https://www.method.gg/wow-forever/wow-forever-priest-leveling-guide-and-talents\" target=\"_blank\" rel=\"noopener\">Method: Priest leveling guide &amp; talents</a></li>\n    <li><a href=\"https://talentsforever.com/export/priest.json\" target=\"_blank\" rel=\"noopener\">Talents Forever: Priest data export (talents, spells, racials)</a></li>\n  </ul>\n  "
  }
 ]
};
