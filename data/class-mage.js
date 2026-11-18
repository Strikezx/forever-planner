/* WoW Forever Planner: Mage guide. Class data last checked/updated Nov 15, 2026.
   Loads after data/classes.js and adds itself to window.FP_DATA.classes. */
window.FP_DATA.classes.mage = {
 "key": "mage",
 "name": "Mage",
 "color": "#3FC7EB",
 "ink": "#1B7F99",
 "roles": [
  "Ranged"
 ],
 "races": [
  {
   "race": "Human",
   "new": false
  },
  {
   "race": "Gnome",
   "new": false
  },
  {
   "race": "Skyborne (High Order)",
   "new": true
  },
  {
   "race": "Orc",
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
 "blurb": "Arcane Blast was redesigned to stack spell damage from Intellect, and Arcane Wrath is a new talent. Frost Blast (level 24) replaces down-ranked Frostbolt. Fire's Heating Up speeds Pyroblast. Frostfire Bolt comes at 40. Slows were cut back, so AoE kiting is harder than in Classic.",
 "specs": [
  [
   "Arcane",
   "Arcane Blast was redesigned to stack spell damage from Intellect, and Arcane Wrath is a new talent. Strong cooldowns, weak early."
  ],
  [
   "Fire",
   "Heating Up speeds Pyroblast. Longest range and good single target, but the weakest AoE."
  ],
  [
   "Frost",
   "Ice Lance and Fingers of Frost add burst, and Frost Blast replaces down-ranked Frostbolt. The beginner-friendly leveling pick."
  ]
 ],
 "general": "Frostfire Bolt comes at 40. Slows were cut back, so AoE kiting is harder than in Classic.",
 "lvl": [
  [
   "Frost",
   49.5
  ],
  [
   "Arcane",
   30.5
  ],
  [
   "Fire",
   20.1
  ]
 ],
 "first": [
  "Improved Frostbolt 5/5",
  "Ice Shards 5/5"
 ],
 "at60": "Frost 37% · Fire 32% · Arcane 31%. Top build: Arcane 47/4/0.",
 "builds": {
  "frost": {
   "cols": [
    "Frost, levels 10–48",
    "Arcane, 49–60"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Improved Frostbolt",
     10,
     14,
     5,
     "faster Frostbolt"
    ],
    [
     0,
     "3/3",
     "Precision",
     15,
     17,
     3,
     "fewer resists"
    ],
    [
     0,
     "2/3",
     "Frostbite",
     18,
     19,
     2,
     "Chill effects can freeze"
    ],
    [
     0,
     "1/1",
     "Ice Lance",
     20,
     20,
     1,
     "burst on frozen targets"
    ],
    [
     0,
     "4/5",
     "Ice Shards",
     21,
     24,
     4,
     "bigger crits"
    ],
    [
     0,
     "1/1",
     "Ice Block",
     25,
     25,
     1,
     "emergency button"
    ],
    [
     0,
     "3/3",
     "Shatter",
     26,
     28,
     3,
     "crits on frozen targets"
    ],
    [
     0,
     "5/5",
     "Ice Shards",
     29,
     29,
     1,
     ""
    ],
    [
     0,
     "2/2",
     "Fingers of Frost",
     30,
     31,
     2,
     "procs make Ice Lance hit as if frozen"
    ],
    [
     0,
     "1/1",
     "Cold Snap",
     32,
     32,
     1,
     "resets your Frost cooldowns"
    ],
    [
     0,
     "2/3",
     "Improved Cone of Cold",
     33,
     34,
     2,
     ""
    ],
    [
     0,
     "5/5",
     "Winter's Chill",
     35,
     39,
     5,
     "boosts Cone of Cold damage"
    ],
    [
     0,
     "1/1",
     "Ice Barrier",
     40,
     40,
     1,
     "absorb shield and more Frost damage"
    ],
    [
     0,
     "3/3",
     "Improved Cone of Cold",
     41,
     41,
     1,
     ""
    ],
    [
     0,
     "3/3",
     "Frostbite",
     42,
     42,
     1,
     ""
    ],
    [
     0,
     "3/3",
     "Frost Channeling",
     43,
     45,
     3,
     "cheaper Frost spells"
    ],
    [
     0,
     "3/3",
     "Improved Blizzard",
     46,
     48,
     3,
     "Blizzard slows; he takes it if you'll do dungeons"
    ],
    [
     1,
     "5/5",
     "Improved Channeling",
     49,
     53,
     5,
     "Arcane points toward Missile Barrage"
    ],
    [
     1,
     "1/2",
     "Missile Barrage",
     54,
     54,
     1,
     "free Arcane Missiles procs"
    ],
    [
     1,
     "2/2",
     "Arcane Subtlety",
     55,
     56,
     2,
     "fewer resists"
    ],
    [
     1,
     "4/5",
     "Arcane Concentration",
     57,
     60,
     4,
     "free-mana procs; his choice for 57–60"
    ]
   ],
   "name": "Frost",
   "sub": "Asuna_qt"
  },
  "arcane_iv": {
   "name": "Arcane",
   "sub": "Icy Veins · Farmerfarms",
   "cols": [
    "Arcane, levels 10–42",
    "Fire, then Precision, 43–60"
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
     "Improved Channeling",
     12,
     14,
     3,
     "less pushback on Missiles and Blast"
    ],
    [
     0,
     "2/2",
     "Missile Barrage",
     15,
     16,
     2,
     "free, faster Arcane Missiles procs"
    ],
    [
     0,
     "3/5",
     "Arcane Concentration",
     17,
     19,
     3,
     "Clearcasting procs"
    ],
    [
     0,
     "1/1",
     "Arcane Blast",
     20,
     20,
     1,
     "stacks spell damage from Intellect"
    ],
    [
     0,
     "2/3",
     "Precision",
     21,
     22,
     2,
     "fewer resists (Frost tree)"
    ],
    [
     0,
     "5/5",
     "Improved Channeling",
     23,
     24,
     2,
     "less pushback on Missiles and Blast"
    ],
    [
     0,
     "5/5",
     "Arcane Concentration",
     25,
     26,
     2,
     "Clearcasting procs"
    ],
    [
     0,
     "1/1",
     "Arcane Wrath",
     27,
     27,
     1,
     "big burst nuke"
    ],
    [
     0,
     "3/3",
     "Arcane Meditation",
     28,
     30,
     3,
     "mana regen while casting"
    ],
    [
     0,
     "1/2",
     "Arcane Subtlety",
     31,
     31,
     1,
     "flat damage vs no resistance"
    ],
    [
     0,
     "1/1",
     "Presence of Mind",
     32,
     32,
     1,
     "next spell instant"
    ],
    [
     0,
     "5/5",
     "Arcane Mind",
     33,
     37,
     5,
     "more mana and crit"
    ],
    [
     0,
     "3/3",
     "Arcane Instability",
     38,
     40,
     3,
     "+damage and crit"
    ],
    [
     0,
     "2/2",
     "Arcane Subtlety",
     41,
     41,
     1,
     "flat damage vs no resistance"
    ],
    [
     0,
     "1/1",
     "Arcane Power",
     42,
     42,
     1,
     "the Arcane capstone"
    ],
    [
     1,
     "5/5",
     "Incineration",
     43,
     47,
     5,
     "more Arcane Blast crit"
    ],
    [
     1,
     "5/5",
     "Accelerant",
     48,
     52,
     5,
     "faster Arcane Wrath"
    ],
    [
     1,
     "2/2",
     "Improved Fire Blast",
     53,
     54,
     2,
     "shorter Fire Blast cooldown"
    ],
    [
     1,
     "2/5",
     "Ignite",
     55,
     56,
     2,
     "crits burn"
    ],
    [
     1,
     "1/1",
     "Pyroblast",
     57,
     57,
     1,
     "burst opener"
    ],
    [
     1,
     "1/1",
     "Heating Up",
     58,
     58,
     1,
     "Fire Blast into instant Pyroblast"
    ],
    [
     1,
     "3/5",
     "Ignite",
     59,
     59,
     1,
     "crits burn"
    ],
    [
     1,
     "3/3",
     "Precision",
     60,
     60,
     1,
     "fewer resists (Frost tree)"
    ]
   ]
  }
 },
 "spells": [
  [
   1,
   "Fireball, Frost Armor, Arcane Intellect"
  ],
  [
   4,
   "Frostbolt, Conjure Water"
  ],
  [
   6,
   "Fire Blast, Conjure Food"
  ],
  [
   8,
   "Arcane Missiles, Polymorph"
  ],
  [
   10,
   "Frost Nova"
  ],
  [
   12,
   "Slow Fall, Dampen Magic"
  ],
  [
   14,
   "Arcane Explosion"
  ],
  [
   16,
   "Flamestrike"
  ],
  [
   18,
   "Remove Lesser Curse, Amplify Magic"
  ],
  [
   20,
   "Blink, Evocation, Blizzard, Mana Shield, Fire Ward, teleports"
  ],
  [
   22,
   "Frost Ward, Scorch"
  ],
  [
   24,
   "Counterspell"
  ],
  [
   26,
   "Cone of Cold"
  ],
  [
   28,
   "Conjure Mana Agate"
  ],
  [
   30,
   "Ice Armor"
  ],
  [
   34,
   "Mage Armor"
  ],
  [
   38,
   "Conjure Mana Jade"
  ],
  [
   40,
   "Frostfire Bolt, portals, Dual Talent Specialization"
  ],
  [
   48,
   "Conjure Mana Citrine"
  ],
  [
   50,
   "Teleport: Dalaran (Alliance), more portals"
  ],
  [
   56,
   "Arcane Brilliance"
  ],
  [
   58,
   "Conjure Mana Ruby"
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
   "Gravestone Scepter",
   "Blackfathom Deeps quest"
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
     "Fireball, Fire Blast, wand"
    ],
    [
     4,
     19,
     "Frostbolt; Frost Nova to reposition"
    ],
    [
     20,
     60,
     "Ice Lance on frozen targets"
    ],
    [
     20,
     60,
     "Blizzard on safe packs"
    ],
    [
     30,
     60,
     "Fingers of Frost: cancel and Ice Lance"
    ],
    [
     40,
     60,
     "Keep Ice Barrier up"
    ],
    [
     54,
     60,
     "Missile Barrage: Arcane Missiles"
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
   "label": "Water to buy",
   "items": [
    [
     5,
     14,
     "Ice Cold Milk"
    ],
    [
     15,
     24,
     "Melon Juice"
    ],
    [
     25,
     34,
     "Sweet Nectar"
    ],
    [
     35,
     44,
     "Moonberry Juice"
    ],
    [
     45,
     55,
     "Morning Glory Dew"
    ]
   ]
  },
  {
   "type": "steps",
   "label": "Quests & dungeons",
   "items": [
    [
     10,
     11,
     "Mage quest chain (staff or off-hand)"
    ],
    [
     15,
     16,
     "Mage robe quest chain"
    ],
    [
     26,
     27,
     "Mage robe quest chain"
    ],
    [
     40,
     41,
     "Mount (90g) or dual spec (50g)"
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
   "t": "Frost",
   "s": "Asuna_qt · ends 12/0/39",
   "p": "Improved Frostbolt, Precision and Frostbite first, Ice Lance at 20, Ice Shards and Shatter by 29, Fingers of Frost 30, Winter's Chill 35–39, Ice Barrier 40, then Improved Blizzard and Arcane for Missile Barrage."
  },
  {
   "t": "Arcane (Icy Veins)",
   "s": "Farmerfarms · ends 31/17/3",
   "p": "Icy Veins' Arcane leveling build: Arcane Blast into Missile Barrage procs, Arcane Power at 42, then a Fire dip for Incineration, Accelerant and Heating Up. It's the Arcane tab in the talent checklist."
  },
  {
   "t": "Frost AoE",
   "s": "Asuna_qt · ends 18/0/33",
   "p": "For pulling packs: Precision, Frost Warding, Improved Frost Nova, Permafrost and Improved Blizzard by 23. Frost Nova, then Flamestrike and Cone of Cold."
  },
  {
   "t": "Fire",
   "s": "Asuna_qt · ends 17/31/3",
   "p": "Accelerant, Ignite, Pyroblast with Heating Up, Master of Elements. Longest range and good single target, but the weakest AoE and more mana trouble."
  },
  {
   "t": "Arcane",
   "s": "Asuna_qt · ends 36/12/3",
   "p": "Arcane Blast stacks spell damage from Intellect; Arcane Wrath and Missile Barrage procs. Strong cooldowns, weak early, all hard casts."
  }
 ],
 "keyspells": "Frostbolt, Conjure Water 4 · Fire Blast, Conjure Food 6 · Arcane Missiles, Polymorph 8 · Frost Nova 10 · Arcane Explosion 14 · Flamestrike 16 · Remove Lesser Curse 18 · Blink, Evocation, Blizzard, teleports 20 · Counterspell 24 · Cone of Cold 26 · Ice Armor 30 · Mage Armor 34 · Frostfire Bolt, portals 40",
 "sections": [
  {
   "id": "mage-guide",
   "label": "Your Mage · Frost leveling",
   "h2": "Frost leveling guide",
   "html": "\n  <p class=\"sdesc\">Built on <a href=\"https://mobalytics.gg/wow-forever/classes/mage-leveling-guide\" target=\"_blank\" rel=\"noopener\">Asuna_qt's Mage Leveling Guide</a> (Mobalytics, Nov 4, launch day), which has full 10–60 orders for Frost, Frost AoE, Fire and Arcane. Class quests and wands from <a href=\"https://www.warcrafttavern.com/forever/guides/mage-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern</a>; spell levels from Talents Forever.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" id=\"talents\" data-key=\"mage-guide-talent-order\" open>\n      <summary><h3>Talent order <small>checklist · 51 points · Frost and Arcane tabs</small></h3></summary>\n      <p class=\"why\">Tick each row as you spend the points. Gold rows are due at your level; the outlined row is your next point.</p>\n      <div id=\"talents-app\"></div>\n      <p class=\"why\">Both orders are checked against Forever's trees. For the Frost tab, Asuna says the order is flexible: if you want more AoE control for dungeons, drop Ice Shards, Frostbite or the Cone of Cold points for Improved Blizzard (or Permafrost) earlier, or grab Improved Channeling and Missile Barrage early.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"mage-guide-rotation\" open>\n      <summary><h3>Rotation</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">Always</span><p>Arcane Intellect and Frost Armor up (Ice Armor from 30). Always be casting, but keep mana for Frost Nova and Blink.</p></div>\n        <div class=\"step\"><span class=\"lv\">1–3</span><p>Fireball and Fire Blast, then wand when you're low on mana.</p></div>\n        <div class=\"step\"><span class=\"lv\">4–19</span><p>Frostbolt is your main spell, Fire Blast while moving. Frost Nova to reposition, Polymorph to take a dangerous mob out of the fight.</p></div>\n        <div class=\"step\"><span class=\"lv\">20+</span><p>Frostbolt until a proc. Frostbite freeze: cast Ice Lance after your next Frostbolt so both hit the frozen target. No procs? Frost Nova, then Ice Lance.</p></div>\n        <div class=\"step\"><span class=\"lv\">30+</span><p>Fingers of Frost proc: cancel your cast and Ice Lance, or Frostbolt will eat the proc.</p></div>\n        <div class=\"step\"><span class=\"lv\">40+</span><p>Keep Ice Barrier up. Out of mana: a mana gem, a Mana Potion, Evocation, then the wand.</p></div>\n        <div class=\"step\"><span class=\"lv\">AoE</span><p>Blizzard when it's safe to channel; otherwise Cone of Cold and Arcane Explosion. Frost Nova, then Flamestrike, then Cone of Cold for Shatter burst. Precasting Flamestrike pulls huge threat in groups.</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel\" data-key=\"mage-guide-wands\">\n      <summary><h3>Wands &amp; staves <small>Alliance / Horde</small></h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">5</span><p>Lesser Magic Wand, made by Enchanters; Asuna calls it incredible for its level</p></div>\n        <div class=\"step\"><span class=\"lv\">10–26</span><p>Class quests at 10, 15 and 26 give staves, off-hands, robes and wands</p></div>\n        <div class=\"step\"><span class=\"lv\">13</span><p>Greater Magic Wand, made by Enchanters</p></div>\n        <div class=\"step\"><span class=\"lv\">15–20</span><p>Sizzle Stick (Wailing Caverns quest) and Crescent Staff from the same dungeon</p></div>\n        <div class=\"step\"><span class=\"lv\">16–18</span><p>Staff of Westfall (Deadmines) / Gnarled Necromancer's Staff (Ruins of Lordaeron)</p></div>\n        <div class=\"step\"><span class=\"lv\">22–26</span><p>Gravestone Scepter, Blackfathom Deeps quest</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel\" data-key=\"mage-guide-quests\">\n      <summary><h3>Class quests <small>Alliance / Horde</small></h3></summary>\n      <ul>\n        <li><b>10:</b> Speak with Belann → Boughs in the Wind → Mirror Lake → Mage-tastic Gizmonitor / Speak with Un'thuwa → Ju-ju Heaps → The Balnir Farmstead</li>\n        <li><b>15:</b> Report to Jennea → Investigate the Blue Recluse → Gathering Materials → Manaweave Robe / Report to Anastasia → Investigate the Alchemist Shop → Gathering Materials → Spellfire Robe</li>\n        <li><b>26:</b> High Sorcerer Andromath → Ur's Treatise on Shadow Magic → Pristine Spider Silk → Astral Knot Garment / Speak with Deino → Waters of Xavian → Laughing Sisters → Nether-lace Garment</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"mage-guide-key-spells\">\n      <summary><h3>Key spells</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1–8</span><p>Fireball, Frost Armor, Arcane Intellect 1 · Frostbolt, Conjure Water 4 · Fire Blast, Conjure Food 6 · Arcane Missiles, Polymorph 8</p></div>\n        <div class=\"step\"><span class=\"lv\">10–18</span><p>Frost Nova 10 · Slow Fall, Dampen Magic 12 · Arcane Explosion 14 · Flamestrike 16 · Remove Lesser Curse, Amplify Magic 18</p></div>\n        <div class=\"step\"><span class=\"lv\">20–28</span><p>Blink, Evocation, Blizzard, Mana Shield, Fire Ward, city teleports 20 · Frost Ward, Scorch 22 · Counterspell 24 · Cone of Cold 26 · Conjure Mana Agate 28</p></div>\n        <div class=\"step\"><span class=\"lv\">30–60</span><p>Ice Armor 30 · Mage Armor 34 · Frostfire Bolt, portals, dual spec 40 · Teleport: Dalaran (Alliance) 50 · Arcane Brilliance 56</p></div>\n      </div>\n      <p class=\"why\">Frost Blast, a weaker Frostbolt, is there to slow enemies. Portals need a Rune of Portals from a reagent vendor, and people will ask for them after dungeons.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"mage-guide-stats\">\n      <summary><h3>Stats</h3></summary>\n      <ul>\n        <li><b>Spell hit</b> up to 17%, though you won't find much while leveling</li>\n        <li><b>Spell Power</b> (or Frost damage), then <b>crit</b>, then haste</li>\n        <li><b>Intellect</b>, <b>Spirit</b>, then <b>Stamina</b></li>\n        <li>In practice while leveling: Spell Power and Intellect, with some Stamina</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"mage-guide-professions\">\n      <summary><h3>Professions</h3></summary>\n      <ul>\n        <li><b>Tailoring + Enchanting:</b> strong cloth, some of it best-in-slot at 60, and Enchanting makes your early wands and disenchants what you sew</li>\n        <li><b>First Aid</b> is extra important: Mages can't heal themselves</li>\n        <li><b>Cooking:</b> Well Fed food gives +5% XP from kills</li>\n        <li><b>Engineering</b> is the fun alternative: bombs and gadgets, expensive without Mining</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"mage-guide-tips\">\n      <summary><h3>Tips &amp; mistakes</h3></summary>\n      <ul>\n        <li>Conjure food and water between pulls; buy the vendor water in the Now panel for the early levels.</li>\n        <li>Polymorph heals its target, so use it to take a mob out, not to pause a damaged one.</li>\n        <li>Remove Lesser Curse matters in groups; few classes can decurse.</li>\n        <li>Mage Armor (34) is for long fights and dungeons; Ice Armor for questing where melee hits you.</li>\n        <li>Hold your AoE until the tank has the pack.</li>\n        <li>Ice Lance has an 8 sec cooldown in Forever, and slows were cut back, so AoE kiting is harder than in Classic.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel wide\" data-key=\"mage-guide-dungeons\">\n      <summary><h3>Dungeons by level</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">12–14</span><p>Hall of Thanes (Alliance) or Ragefire Chasm (Horde)</p></div>\n        <div class=\"step\"><span class=\"lv\">16–18</span><p>Deadmines (Alliance) or Ruins of Lordaeron (Horde)</p></div>\n        <div class=\"step\"><span class=\"lv\">18–20</span><p>Wailing Caverns</p></div>\n        <div class=\"step\"><span class=\"lv\">20–26</span><p>Shadowfang Keep · The Stockade · Excavation Site: Wetlands · Blackfathom Deeps</p></div>\n        <div class=\"step\"><span class=\"lv\">26–30</span><p>City of Dalaran · Razorfen Kraul (28+)</p></div>\n        <div class=\"step\"><span class=\"lv\">30–40</span><p>Gnomeregan · Scarlet Monastery wings · The Drowned City (36+)</p></div>\n        <div class=\"step\"><span class=\"lv\">40–50</span><p>Krol'Dok Stronghold · Razorfen Downs · Uldaman · Zul'Farrak · Maraudon · Alcaz Prison (48+)</p></div>\n        <div class=\"step\"><span class=\"lv\">50–60</span><p>Sunken Temple · Blackrock Depths · Lower Blackrock Spire · Blackmaw Hold · then Shaper's Terrace, Upper Blackrock Spire, Dire Maul, Scholomance and Stratholme at 58+</p></div>\n      </div>\n      <p class=\"why\">Since the Nov 8 hotfix, dungeon mobs give 50% more experience. Pick up every quest for a dungeon before you go in. Raids open Dec 9.</p>\n    </details>\n\n  </div>\n  "
  },
  {
   "id": "macros",
   "label": "Copy them exactly",
   "h2": "Mage macros",
   "html": "\n  <p class=\"sdesc\">5 macros, written exactly as they go in the game's macro window. One wrong letter and a macro does nothing, so copy them with the button.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel wide\" data-key=\"macros-how-to-add-one\">\n      <summary><h3>How to add one</h3></summary>\n      <ol class=\"howto\">\n        <li>Type <code>/macro</code>, open the tab with this character's name, and click New.</li>\n        <li>Type the <b>macro name</b> as shown (16 characters at most) and pick the red question mark icon, so the button shows the spell's own icon.</li>\n        <li>Copy the <b>macro text</b> in exactly, line breaks included. Spell names must match your spellbook letter for letter: capitals, spaces and apostrophes.</li>\n        <li>Drag the macro onto your action bar.</li>\n      </ol>\n      <ul class=\"mtips\">\n        <li><span class=\"ph\">Highlighted words</span> are placeholders: replace them with the exact name of your own item.</li>\n        <li><b>Ctrl</b> means hold Ctrl as you press the button. <b>MO</b> means mouseover: it casts on whatever is under your mouse, and on your target when nothing is.</li>\n        <li>Leave rank numbers off and the macro always casts your highest rank, so you never have to re-drag spells after training.</li>\n        <li>The level tag is when the spell becomes available. Make the macro then, or it will just show a question mark.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-control\">\n      <summary><h3>Control</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Polymorph MO</b><span class=\"lvl\">Lv 8</span></div><button class=\"copy\" id=\"copy-mg1\" data-for=\"mg1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"mg1\">#showtooltip Polymorph\n/cast [@mouseover,harm,nodead][] Polymorph</pre>\n        <p class=\"why\">Sheeps the mob under your mouse, so you keep your main target.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Counterspell MO</b><span class=\"lvl\">Lv 24</span></div><button class=\"copy\" id=\"copy-mg2\" data-for=\"mg2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"mg2\">#showtooltip Counterspell\n/cast [@mouseover,harm,nodead][] Counterspell</pre>\n        <p class=\"why\">Interrupts a caster without retargeting.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Wand</b><span class=\"lvl\">Lv 5</span></div><button class=\"copy\" id=\"copy-mg3\" data-for=\"mg3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"mg3\">#showtooltip Shoot\n/cast !Shoot</pre>\n        <p class=\"why\">The ! stops a second press from turning your wand off.</p></div>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-utility\">\n      <summary><h3>Buffs &amp; utility</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Intellect MO</b><span class=\"lvl\">Lv 1</span></div><button class=\"copy\" id=\"copy-mg4\" data-for=\"mg4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"mg4\">#showtooltip Arcane Intellect\n/cast [@mouseover,help,nodead][help,nodead][@player] Arcane Intellect</pre>\n        <p class=\"why\">Buffs whoever is under your mouse, your friendly target, or you.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Decurse MO</b><span class=\"lvl\">Lv 18</span></div><button class=\"copy\" id=\"copy-mg5\" data-for=\"mg5\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"mg5\">#showtooltip Remove Lesser Curse\n/cast [@mouseover,help,nodead][help,nodead][@player] Remove Lesser Curse</pre>\n        <p class=\"why\"></p></div>\n    </details>\n  </div>\n  "
  },
  {
   "id": "notes",
   "label": "Read before you commit",
   "h2": "Caveats &amp; sources",
   "html": "\n  <div class=\"notes\">\n<div class=\"note\"><h3>Launch-day guide</h3><p>Asuna's guide is dated Nov 4 and its Frost path hasn't changed since; no Mage changes appear in the Nov 10 hotfixes.</p></div>\n<div class=\"note\"><h3>Ice Barrier numbers vary</h3><p>The guide says Ice Barrier adds 3% damage while the talent tooltip lists a bigger Frost damage bonus. Check the tooltip in game.</p></div>\n<div class=\"note\"><h3>Teleport: Dalaran</h3><p>Talents Forever's data gives it to Alliance races only at 50, and the trainer doesn't sell it; where it's learned isn't known yet.</p></div>\n  </div>\n  <h3 style=\"margin:28px 0 12px\">Sources</h3>\n  <ul class=\"sources\">\n    <li><a href=\"https://www.icy-veins.com/wow-forever/arcane-mage-leveling\" target=\"_blank\" rel=\"noopener\">Farmerfarms: Arcane Mage Leveling Guide (Icy Veins, Nov 4)</a></li>\n    <li><a href=\"https://mobalytics.gg/wow-forever/classes/mage-leveling-guide\" target=\"_blank\" rel=\"noopener\">Asuna_qt: Mage Leveling Guide 1–60 (Mobalytics, Nov 4)</a></li>\n    <li><a href=\"https://www.warcrafttavern.com/forever/guides/mage-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Mage leveling (class quests, wands, specs)</a></li>\n    <li><a href=\"https://www.method.gg/wow-forever/wow-forever-mage-leveling-guide-and-talents\" target=\"_blank\" rel=\"noopener\">Method: Mage leveling guide &amp; talents</a></li>\n    <li><a href=\"https://talentsforever.com/export/mage.json\" target=\"_blank\" rel=\"noopener\">Talents Forever: Mage data export (talents, spells, racials)</a></li>\n  </ul>\n  "
  }
 ]
};
