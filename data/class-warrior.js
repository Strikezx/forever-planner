/* WoW Forever Planner: Warrior guide. Class data last checked/updated Nov 15, 2026.
   Loads after data/classes.js and adds itself to window.FP_DATA.classes. */
window.FP_DATA.classes.warrior = {
 "key": "warrior",
 "name": "Warrior",
 "color": "#C69B6D",
 "ink": "#8A6534",
 "roles": [
  "Tank",
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
   "race": "Night Elf",
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
   "new": false
  },
  {
   "race": "Undead",
   "new": false
  },
  {
   "race": "Tauren",
   "new": false
  },
  {
   "race": "Troll",
   "new": false
  },
  {
   "race": "Skyborne (Windshaper)",
   "new": true
  }
 ],
 "blurb": "Fury's off-hand attacks generate more rage and Raging Blows cheapens Whirlwind and Cleave. Protection can Charge in Defensive Stance and use Thunder Clap while tanking. Arms ties Rend to Overpower and adds Spearing Strike. Battle Shout is now raid-wide. Little self-healing, so solo leveling is the hardest of any class.",
 "specs": [
  [
   "Arms",
   "Two-hander. Rend ties into Overpower, Spearing Strike is new, and Sweeping Strikes gives strong two-target damage from 30. The strongest dungeon spec, but no sustain."
  ],
  [
   "Fury",
   "Dual-wield from 20. Off-hand hits generate more Rage, Raging Blows cheapens Whirlwind and Cleave, and Gore Drinker adds sustain. Comes online around 36."
  ],
  [
   "Protection",
   "Charge in Defensive Stance and Thunder Clap while tanking. The strongest early leveling spec, online from 16 with Shield Block, with almost no downtime."
  ]
 ],
 "general": "Battle Shout is now raid-wide. Little self-healing, so solo leveling is the hardest of any class.",
 "lvl": [
  [
   "Protection",
   47.9
  ],
  [
   "Arms",
   27.1
  ],
  [
   "Fury",
   25.1
  ]
 ],
 "first": [
  "Shield Specialization 5/5",
  "Improved Thunder Clap 3/3",
  "Improved Bloodrage 2/2"
 ],
 "at60": "Fury 36% · Prot 36% · Arms 28%. Top build: Protection 7/5/39.",
 "builds": {
  "prot": {
   "cols": [
    "Protection, levels 10–40",
    "Fury and Arms, 41–60"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Shield Specialization",
     10,
     14,
     5,
     "5 Rage every block; weak until Shield Block at 16"
    ],
    [
     0,
     "3/3",
     "Improved Revenge",
     15,
     17,
     3,
     "Revenge, your bread and butter"
    ],
    [
     0,
     "2/3",
     "Improved Thunder Clap",
     18,
     19,
     2,
     "cheaper Thunder Clap for groups"
    ],
    [
     0,
     "2/2",
     "Master of Defense",
     20,
     21,
     2,
     "5 Rage on dodge or parry with a shield"
    ],
    [
     0,
     "1/1",
     "Last Stand",
     22,
     22,
     1,
     "emergency health"
    ],
    [
     0,
     "3/3",
     "Improved Thunder Clap",
     23,
     23,
     1,
     ""
    ],
    [
     0,
     "1/3",
     "Defiance",
     24,
     24,
     1,
     "threat; skip if you won't tank dungeons"
    ],
    [
     0,
     "1/1",
     "Vanguard",
     25,
     25,
     1,
     "Charge in Defensive Stance, no more stance dance"
    ],
    [
     0,
     "3/3",
     "Defiance",
     26,
     27,
     2,
     ""
    ],
    [
     0,
     "2/2",
     "Improved Bloodrage",
     28,
     29,
     2,
     "more Rage from Bloodrage"
    ],
    [
     0,
     "1/1",
     "Concussion Blow",
     30,
     30,
     1,
     "5 sec stun"
    ],
    [
     0,
     "3/3",
     "Focused Rage",
     31,
     33,
     3,
     "offensive abilities cost 3 less Rage"
    ],
    [
     0,
     "1/2",
     "Improved Shield Wall",
     34,
     34,
     1,
     "shorter cooldown"
    ],
    [
     0,
     "5/5",
     "Bastion",
     35,
     39,
     5,
     "+10% damage with a shield"
    ],
    [
     0,
     "1/1",
     "Shield Slam",
     40,
     40,
     1,
     "your big hit, scales with Block Value"
    ],
    [
     1,
     "5/5",
     "Cruelty",
     41,
     45,
     5,
     "+5% crit"
    ],
    [
     1,
     "5/5",
     "Lingering Rage",
     46,
     50,
     5,
     "Rage lasts longer between pulls"
    ],
    [
     1,
     "5/5",
     "Enrage",
     51,
     55,
     5,
     "+10% damage after you're hit"
    ],
    [
     1,
     "3/3",
     "Improved Rend",
     56,
     58,
     3,
     ""
    ],
    [
     1,
     "2/5",
     "Deflection",
     59,
     60,
     2,
     "parry"
    ]
   ],
   "name": "Protection",
   "sub": "Ahlaundoh"
  },
  "arms": {
   "cols": [
    "Arms, levels 10–41",
    "Fury, 42–60"
   ],
   "rows": [
    [
     0,
     "3/3",
     "Improved Rend",
     10,
     12,
     3,
     "Rend is very strong for its Rage"
    ],
    [
     0,
     "2/5",
     "Deflection",
     13,
     14,
     2,
     "parry speeds your next swing and blocks damage"
    ],
    [
     0,
     "2/2",
     "Improved Overpower",
     15,
     16,
     2,
     ""
    ],
    [
     0,
     "2/2",
     "Improved Charge",
     17,
     18,
     2,
     ""
    ],
    [
     0,
     "3/5",
     "Deflection",
     19,
     19,
     1,
     ""
    ],
    [
     0,
     "3/3",
     "Deep Wounds",
     20,
     22,
     3,
     "rolling bleed from crits"
    ],
    [
     0,
     "5/5",
     "Deflection",
     23,
     24,
     2,
     ""
    ],
    [
     0,
     "1/1",
     "Spearing Strike",
     25,
     25,
     1,
     "bonus against Giants and Dragonkin"
    ],
    [
     0,
     "3/3",
     "Two-Handed Weapon Specialization",
     26,
     28,
     3,
     ""
    ],
    [
     0,
     "1/2",
     "Impale",
     29,
     29,
     1,
     ""
    ],
    [
     0,
     "1/1",
     "Sweeping Strikes",
     30,
     30,
     1,
     "very strong for killing two mobs"
    ],
    [
     0,
     "2/2",
     "Bloodthrill",
     31,
     32,
     2,
     "Rend procs Overpower"
    ],
    [
     0,
     "2/2",
     "Impale",
     33,
     33,
     1,
     ""
    ],
    [
     0,
     "1/5",
     "Weaponmaster",
     34,
     34,
     1,
     "swords, then axes or polearms, then maces or staves"
    ],
    [
     0,
     "1/2",
     "Improved Slam",
     35,
     35,
     1,
     "1 point: Slam no longer resets your swing"
    ],
    [
     0,
     "5/5",
     "Weaponmaster",
     36,
     39,
     4,
     ""
    ],
    [
     0,
     "1/1",
     "Mortal Strike",
     40,
     40,
     1,
     ""
    ],
    [
     0,
     "2/2",
     "Improved Slam",
     41,
     41,
     1,
     ""
    ],
    [
     1,
     "5/5",
     "Cruelty",
     42,
     46,
     5,
     ""
    ],
    [
     1,
     "5/5",
     "Unbridled Wrath",
     47,
     51,
     5,
     ""
    ],
    [
     1,
     "5/5",
     "Enrage",
     52,
     56,
     5,
     ""
    ],
    [
     1,
     "1/1",
     "Piercing Howl",
     57,
     57,
     1,
     "for running from groups"
    ],
    [
     1,
     "1/1",
     "Reckless Swings",
     58,
     58,
     1,
     ""
    ],
    [
     1,
     "2/5",
     "Lingering Rage",
     59,
     60,
     2,
     ""
    ]
   ],
   "name": "Arms",
   "sub": "Ahlaundoh"
  },
  "fury": {
   "cols": [
    "Fury, levels 10–40",
    "Levels 41–60"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Cruelty",
     10,
     14,
     5,
     "+5% crit"
    ],
    [
     0,
     "5/5",
     "Unbridled Wrath",
     15,
     19,
     5,
     "extra Rage per hit"
    ],
    [
     0,
     "2/5",
     "Enrage",
     20,
     21,
     2,
     "or 1 point in Piercing Howl at 21"
    ],
    [
     0,
     "3/3",
     "Blood Craze",
     22,
     24,
     3,
     "so Gore Drinker isn't delayed"
    ],
    [
     0,
     "1/1",
     "Reckless Swings",
     25,
     25,
     1,
     "he's unsure it's worth it while leveling"
    ],
    [
     0,
     "4/5",
     "Dual Wield Specialization",
     26,
     29,
     4,
     "you can dual-wield from 20"
    ],
    [
     0,
     "1/1",
     "Death Wish",
     30,
     30,
     1,
     ""
    ],
    [
     0,
     "2/2",
     "Gore Drinker",
     31,
     32,
     2,
     "great sustain"
    ],
    [
     0,
     "5/5",
     "Dual Wield Specialization",
     33,
     33,
     1,
     ""
    ],
    [
     0,
     "3/5",
     "Enrage",
     34,
     34,
     1,
     ""
    ],
    [
     0,
     "3/3",
     "Flurry",
     35,
     37,
     3,
     ""
    ],
    [
     0,
     "2/2",
     "Improved Whirlwind",
     38,
     39,
     2,
     ""
    ],
    [
     0,
     "1/1",
     "Bloodthirst",
     40,
     40,
     1,
     ""
    ],
    [
     1,
     "5/5",
     "Enrage",
     41,
     42,
     2,
     ""
    ],
    [
     1,
     "3/3",
     "Furious Precision",
     43,
     45,
     3,
     "off-hand hit"
    ],
    [
     1,
     "5/5",
     "Deflection",
     46,
     50,
     5,
     ""
    ],
    [
     1,
     "2/2",
     "Improved Execute",
     51,
     52,
     2,
     ""
    ],
    [
     1,
     "2/2",
     "Improved Berserker Rage",
     53,
     54,
     2,
     ""
    ],
    [
     1,
     "2/2",
     "Improved Overpower",
     55,
     56,
     2,
     ""
    ],
    [
     1,
     "3/3",
     "Improved Tactical Mastery",
     57,
     59,
     3,
     ""
    ],
    [
     1,
     "1/1",
     "Anger Management",
     60,
     60,
     1,
     ""
    ]
   ],
   "name": "Fury",
   "sub": "Ahlaundoh"
  }
 },
 "spells": [
  [
   1,
   "Heroic Strike, Battle Shout"
  ],
  [
   4,
   "Charge, Rend"
  ],
  [
   6,
   "Thunder Clap"
  ],
  [
   8,
   "Hamstring"
  ],
  [
   10,
   "Defensive Stance, Taunt, Sunder Armor, Bloodrage"
  ],
  [
   12,
   "Shield Bash, Overpower"
  ],
  [
   14,
   "Revenge, Demoralizing Shout, Tactical Mastery"
  ],
  [
   16,
   "Shield Block, Mocking Blow"
  ],
  [
   18,
   "Disarm"
  ],
  [
   20,
   "Victory Rush, Cleave, Slam, Retaliation, Dual Wield"
  ],
  [
   22,
   "Intimidating Shout"
  ],
  [
   24,
   "Execute"
  ],
  [
   26,
   "Challenging Shout"
  ],
  [
   28,
   "Shield Wall"
  ],
  [
   30,
   "Berserker Stance, Intercept, Berserker Rage"
  ],
  [
   36,
   "Whirlwind"
  ],
  [
   38,
   "Pummel"
  ],
  [
   40,
   "Plate Mail, Dual Talent Specialization"
  ],
  [
   50,
   "Recklessness"
  ]
 ],
 "weapons": [
  [
   10,
   "Class quest one-hander",
   "Defensive Stance follow-up"
  ],
  [
   14,
   "Ironforge Greathammer / Hammer of Orgrimmar",
   "Hall of Thanes quest / RFC chain"
  ],
  [
   16,
   "Furen's Favor / Ruga's Bulwark (shield, 20)",
   "class quest"
  ],
  [
   18,
   "Deadmines drops / Wingblade",
   "Deadmines / WC quest"
  ],
  [
   24,
   "Subdued Dragon's Fang / Outlaw Sabre",
   "Wetlands elite chain / BFD quest"
  ],
  [
   29,
   "Marbled Buckler (shield)",
   "Razorfen Kraul quest"
  ],
  [
   35,
   "Bludgeon of Betrayed Virtues",
   "Desolace chain"
  ],
  [
   39,
   "Vanquisher's Sword, Aegis of the Scarlet Commander",
   "RFD quest / SM Cathedral"
  ],
  [
   48,
   "Thrash Blade",
   "Maraudon quest, lasts to 60"
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
     "Battle Shout, Heroic Strike"
    ],
    [
     4,
     9,
     "Charge, Rend, Thunder Clap"
    ],
    [
     10,
     15,
     "Defensive Stance: Revenge, Demoralizing Shout"
    ],
    [
     16,
     60,
     "Shield Block on cooldown, then Revenge"
    ],
    [
     20,
     60,
     "Victory Rush under 90% health"
    ],
    [
     25,
     60,
     "Charge in Defensive (Vanguard)"
    ],
    [
     40,
     60,
     "Shield Slam first"
    ]
   ]
  },
  {
   "type": "train"
  },
  {
   "type": "weapon",
   "label": "Weapon"
  },
  {
   "type": "steps",
   "label": "Quests & dungeons",
   "items": [
    [
     10,
     11,
     "Defensive Stance quest + green one-hander"
    ],
    [
     20,
     21,
     "Shield class quest"
    ],
    [
     30,
     32,
     "Berserker Stance & Intercept quest"
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
   "t": "Protection",
   "s": "Ahlaundoh · ends 5/15/31",
   "p": "Shield Specialization 5/5 first, Improved Revenge, Improved Thunder Clap and Master of Defense by 21, Vanguard at 25 so you can Charge in Defensive Stance, Bastion at 35–39 and Shield Slam at 40. Then Cruelty, Lingering Rage and Enrage."
  },
  {
   "t": "Arms",
   "s": "Ahlaundoh · ends 32/19/0",
   "p": "Two-hander. Improved Rend and Deflection first, Sweeping Strikes at 30 for very strong two-target damage, Mortal Strike at 40. Strongest dungeon spec, but no sustain. Needs weapon upgrades."
  },
  {
   "t": "Fury",
   "s": "Ahlaundoh · ends 11/40/0",
   "p": "Dual-wield from 20. Gore Drinker at 31 gives great sustain, but Fury doesn't come online until about 36. Don't respec into it before 36; Vanquisher's Sword (Razorfen Downs) or Sword of Serenity (Scarlet Monastery) is a good moment."
  },
  {
   "t": "Dual spec from 40",
   "s": "50 gold",
   "p": "Keep Protection for questing and add Arms or Fury for dungeons, or the other way round."
  }
 ],
 "keyspells": "Charge, Rend 4 · Thunder Clap 6 · Defensive Stance, Taunt, Sunder Armor 10 (class quest) · Shield Bash, Overpower 12 · Revenge 14 · Shield Block 16 · Victory Rush, Cleave, Slam, Dual Wield 20 · Execute 24 · Berserker Stance, Intercept 30 (class quest) · Whirlwind 36 · Pummel 38",
 "sections": [
  {
   "id": "warrior-guide",
   "label": "Your Warrior · Protection leveling",
   "h2": "Protection leveling guide",
   "html": "\n  <p class=\"sdesc\">Built on <a href=\"https://mobalytics.gg/wow-forever/classes/warrior-leveling-guide\" target=\"_blank\" rel=\"noopener\">Ahlaundoh's Warrior Leveling Guide</a> (Mobalytics, Nov 12), which has full 10–60 orders for all three specs. Shields and some weapons come from <a href=\"https://mobalytics.gg/wow-forever/profile/kargoz/classes/1-60-protection-warrior-leveling-guide-weapons-talents-rotation-macros\" target=\"_blank\" rel=\"noopener\">Kargoz's Protection guide</a> (Oct 14), and class quests from <a href=\"https://www.warcrafttavern.com/forever/guides/warrior-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern</a>.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" id=\"talents\" data-key=\"warrior-guide-talent-order\" open>\n      <summary><h3>Talent order <small>checklist · 51 points · tabs for all three specs</small></h3></summary>\n      <p class=\"why\">Tick each row as you spend the points. Gold rows are due at your level; the outlined row is your next point. Switch tabs for the Arms or Fury order.</p>\n      <div id=\"talents-app\"></div>\n      <p class=\"why\">Every order here was checked against Forever's talent trees (tier gates and prerequisites), and each adds up to 51. Protection's first 5 points are weak until Shield Block arrives at 16; that's expected.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"warrior-guide-rotation\" open>\n      <summary><h3>Rotation by level</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1–3</span><p>Keep Battle Shout up. Heroic Strike is your only Rage spender; don't use it if a normal swing would kill.</p></div>\n        <div class=\"step\"><span class=\"lv\">4–9</span><p>Charge, then Rend if the mob will live through it, then Heroic Strike. Thunder Clap from 6: good damage per Rage and a big damage reduction.</p></div>\n        <div class=\"step\"><span class=\"lv\">10–15</span><p>Do the level 10 class quest for Defensive Stance. Spend your Rage before you swap: changing stance drops you to 10. Revenge whenever it lights up, Demoralizing Shout to keep the debuff up.</p></div>\n        <div class=\"step\"><span class=\"lv\">16–39</span><p>Shield Block on cooldown: with Shield Specialization it's nearly free and guarantees Revenge. Victory Rush under 90% health, Revenge, Demoralizing Shout, Rend, Thunder Clap, Heroic Strike only above 60 Rage.</p></div>\n        <div class=\"step\"><span class=\"lv\">25+</span><p>Vanguard lets you Charge in Defensive Stance, so the stance dance is over.</p></div>\n        <div class=\"step\"><span class=\"lv\">40–60</span><p>Shield Slam first, then Revenge, Victory Rush, Rend on mobs that live, Sunder Armor on tough ones, Heroic Strike with spare Rage.</p></div>\n        <div class=\"step\"><span class=\"lv\">Groups</span><p>Thunder Clap on cooldown, Shield Slam your main target, Revenge, Demoralizing Shout, Cleave with spare Rage. Hit every mob in the pack once.</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel\" data-key=\"warrior-guide-rage\">\n      <summary><h3>Rage, the Forever way</h3></summary>\n      <ul>\n        <li>Rage is normalized: every weapon speed generates the same Rage over time, and crits give double.</li>\n        <li>Carry Rage into the next pull. Lingering Rage (from 46 on this path) makes it last longer.</li>\n        <li>Execute is a trap while leveling: it overkills and leaves you at 0 Rage for the next mob. Use it near 15 Rage.</li>\n        <li>Victory Rush heals 10% of your max health within 20 sec of a non-trivial kill. Chain kills to keep it rolling.</li>\n        <li>Battle Shout now lasts 3 minutes, Thunder Clap and Rend scale with Attack Power and can crit, and Thunder Clap works in Defensive Stance.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"warrior-guide-weapons\">\n      <summary><h3>Weapons &amp; shields <small>Alliance / Horde</small></h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">10</span><p>Class quest one-hander after the Defensive Stance quest: Haggard's, Umbral, Elunite, Thun'grim's or Heirloom, by race</p></div>\n        <div class=\"step\"><span class=\"lv\">14+</span><p>Ironforge Greathammer (Hall of Thanes quest) / Hammer of Orgrimmar (RFC chain). Use the Greathammer until Shield Block at 16</p></div>\n        <div class=\"step\"><span class=\"lv\">18–24</span><p>Deadmines drops like Cruel Barb / Wingblade (Wailing Caverns quest), then Subdued Dragon's Fang (Wetlands elite chain) / Outlaw Sabre (BFD quest)</p></div>\n        <div class=\"step\"><span class=\"lv\">20</span><p>Shield class quest: Furen's Favor (The Shieldsmith) / Ruga's Bulwark (Trial at the Field of Giants)</p></div>\n        <div class=\"step\"><span class=\"lv\">20–30</span><p>Arctic Buckler (BFD quest), then Marbled Buckler (Razorfen Kraul quest, 29)</p></div>\n        <div class=\"step\"><span class=\"lv\">35–39</span><p>Bludgeon of Betrayed Virtues (Desolace), Sword of Serenity (SM quest), Vanquisher's Sword (RFD quest), Aegis of the Scarlet Commander (SM Cathedral, a big shield upgrade)</p></div>\n        <div class=\"step\"><span class=\"lv\">40–50</span><p>Optomatic Deflector (Tanaris escort) or Shizzle's Drizzle Blocker (Un'Goro, 49) for shields</p></div>\n        <div class=\"step\"><span class=\"lv\">48–60</span><p>Thrash Blade (Maraudon quest) lasts to 60; Draconian Deflector (UBRS) is the shield to chase</p></div>\n      </div>\n      <p class=\"why\">Protection is the least weapon-hungry spec: use the highest-DPS one-hander you have, slightly favouring slower ones, and the highest-armor shield.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"warrior-guide-quests\">\n      <summary><h3>Class quests</h3></summary>\n      <ul>\n        <li><b>10:</b> Defensive Stance, Taunt and Sunder Armor, from your race's Warrior trainer, then a green one-hander</li>\n        <li><b>20:</b> the shield quest (see Weapons &amp; shields). Humans and Skyborne also get a level 20 hauberk quest</li>\n        <li><b>30:</b> Berserker Stance and Intercept</li>\n        <li><b>30:</b> Whirlwind weapon (axe, sword or warhammer). Hard at 30, so Ahlaundoh skips it on a fresh character unless friends help</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"warrior-guide-key-spells\">\n      <summary><h3>Key spells</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1–8</span><p>Heroic Strike, Battle Shout 1 · Charge, Rend 4 · Thunder Clap 6 · Hamstring 8</p></div>\n        <div class=\"step\"><span class=\"lv\">10–18</span><p>Defensive Stance, Taunt, Sunder Armor, Bloodrage 10 · Shield Bash, Overpower 12 · Revenge, Demoralizing Shout, Tactical Mastery 14 · Shield Block 16 · Disarm 18</p></div>\n        <div class=\"step\"><span class=\"lv\">20–28</span><p>Victory Rush, Cleave, Slam, Retaliation, Dual Wield 20 · Intimidating Shout 22 · Execute 24 · Challenging Shout 26 · Shield Wall 28</p></div>\n        <div class=\"step\"><span class=\"lv\">30–60</span><p>Berserker Stance, Intercept, Berserker Rage 30 · Whirlwind 36 · Pummel 38 · Plate Mail, dual spec 40 · Recklessness 50</p></div>\n      </div>\n      <p class=\"why\">Short on gold? Skip extra ranks of Heroic Strike, Cleave and Overpower, keep Intercept, Shield Bash and Pummel at rank 1, and skip Slam unless you play Arms with Improved Slam.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"warrior-guide-stats\">\n      <summary><h3>Stats</h3></summary>\n      <ul>\n        <li><b>Spirit</b> first while questing: Warriors get the most health regen from it in Forever, and it drops below Stamina in dungeons</li>\n        <li><b>Strength</b> next: 2 Attack Power a point</li>\n        <li><b>Agility</b> (crit, dodge, armor), then <b>Stamina</b></li>\n        <li>Kargoz ranks Strength, Stamina, Agility, then Defense and Block Value for Protection. Block Value matters more once you have Shield Slam</li>\n        <li>Hit up to 8%, then Expertise, crit and haste</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"warrior-guide-professions\">\n      <summary><h3>Professions</h3></summary>\n      <ul>\n        <li><b>First Aid</b> is the only must-have: bandages, and Intimidating Shout plus a bandage saves bad pulls</li>\n        <li><b>Cooking:</b> Well Fed gives +5% XP from kills, and you need it for campfires</li>\n        <li><b>Mining + Blacksmithing</b> or <b>Herbalism + Alchemy</b> if you level professions as you go</li>\n        <li>For pure XP an hour, Leatherworking's Camp Tent wins; Skinning's Camp Chair (crit) is the best group buff</li>\n        <li>Kargoz's tank pick: Blacksmithing + Enchanting, for gold and rare recipes from dungeons</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"warrior-guide-tips\">\n      <summary><h3>Tips &amp; mistakes</h3></summary>\n      <ul>\n        <li>Shield Block is useless against non-Earth elementals: you can't block them.</li>\n        <li>Pull casters around corners so they have to come to you.</li>\n        <li>Stand behind mobs in groups so they can't parry you.</li>\n        <li>Fight weaker mobs near a strong one first to build Rage.</li>\n        <li>Charging a neutral mob doesn't put you in combat if you don't hit it.</li>\n        <li>Jumping increases the range of Whirlwind and Thunder Clap.</li>\n        <li>Don't use Demoralizing Shout or Thunder Clap on mobs that mostly cast.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"warrior-guide-arms-fury\">\n      <summary><h3>Arms or Fury instead?</h3></summary>\n      <p>Arms stays in Battle Stance for Overpower, Rends everything that lives 9+ seconds and uses Sweeping Strikes on two mobs; it has no self-healing, so it suits a duo with a healer. Fury dual-wields from 20, sustains itself with Gore Drinker from 31, and comes online around 36. Both orders are in the talent checklist tabs.</p>\n    </details>\n    <details class=\"gpanel wide\" data-key=\"warrior-guide-dungeons\">\n      <summary><h3>Dungeons by level</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">12–14</span><p>Hall of Thanes (Alliance) or Ragefire Chasm (Horde)</p></div>\n        <div class=\"step\"><span class=\"lv\">16–18</span><p>Deadmines (Alliance) or Ruins of Lordaeron (Horde)</p></div>\n        <div class=\"step\"><span class=\"lv\">18–20</span><p>Wailing Caverns</p></div>\n        <div class=\"step\"><span class=\"lv\">20–26</span><p>Shadowfang Keep · The Stockade · Excavation Site: Wetlands · Blackfathom Deeps</p></div>\n        <div class=\"step\"><span class=\"lv\">26–30</span><p>City of Dalaran · Razorfen Kraul (28+)</p></div>\n        <div class=\"step\"><span class=\"lv\">30–40</span><p>Gnomeregan · Scarlet Monastery wings · The Drowned City (36+)</p></div>\n        <div class=\"step\"><span class=\"lv\">40–50</span><p>Krol'Dok Stronghold · Razorfen Downs · Uldaman · Zul'Farrak · Maraudon · Alcaz Prison (48+)</p></div>\n        <div class=\"step\"><span class=\"lv\">50–60</span><p>Sunken Temple · Blackrock Depths · Lower Blackrock Spire · Blackmaw Hold · then Shaper's Terrace, Upper Blackrock Spire, Dire Maul, Scholomance and Stratholme at 58+</p></div>\n      </div>\n      <p class=\"why\">Since the Nov 8 hotfix, dungeon mobs give 50% more experience. Pick up every quest for a dungeon before you go in. Raids open Dec 9.</p>\n    </details>\n\n  </div>\n  "
  },
  {
   "id": "macros",
   "label": "Copy them exactly",
   "h2": "Warrior macros",
   "html": "\n  <p class=\"sdesc\">5 macros, written exactly as they go in the game's macro window. One wrong letter and a macro does nothing, so copy them with the button.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel wide\" data-key=\"macros-how-to-add-one\">\n      <summary><h3>How to add one</h3></summary>\n      <ol class=\"howto\">\n        <li>Type <code>/macro</code>, open the tab with this character's name, and click New.</li>\n        <li>Type the <b>macro name</b> as shown (16 characters at most) and pick the red question mark icon, so the button shows the spell's own icon.</li>\n        <li>Copy the <b>macro text</b> in exactly, line breaks included. Spell names must match your spellbook letter for letter: capitals, spaces and apostrophes.</li>\n        <li>Drag the macro onto your action bar.</li>\n      </ol>\n      <ul class=\"mtips\">\n        <li><span class=\"ph\">Highlighted words</span> are placeholders: replace them with the exact name of your own item.</li>\n        <li><b>Ctrl</b> means hold Ctrl as you press the button. <b>MO</b> means mouseover: it casts on whatever is under your mouse, and on your target when nothing is.</li>\n        <li>Leave rank numbers off and the macro always casts your highest rank, so you never have to re-drag spells after training.</li>\n        <li>The level tag is when the spell becomes available. Make the macro then, or it will just show a question mark.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-fighting\">\n      <summary><h3>Fighting</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Charge</b><span class=\"lvl\">Lv 4</span></div><button class=\"copy\" id=\"copy-wr1\" data-for=\"wr1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wr1\">#showtooltip Charge\n/startattack\n/cast Battle Stance\n/cast Charge</pre>\n        <p class=\"why\">From Mobalytics' Arms guide. In Defensive Stance the first press swaps stance; press again to Charge. From 25 Vanguard lets Protection Charge in Defensive Stance, so you can drop that line.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Heroic Strike</b><span class=\"lvl\">Lv 1</span></div><button class=\"copy\" id=\"copy-wr2\" data-for=\"wr2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wr2\">#showtooltip Heroic Strike\n/cast Heroic Strike\n/startattack</pre>\n        <p class=\"why\">Also starts your auto attack.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Revenge Block</b><span class=\"lvl\">Lv 16</span></div><button class=\"copy\" id=\"copy-wr3\" data-for=\"wr3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wr3\">#showtooltip Revenge\n/startattack\n/cast Shield Block\n/cast Revenge</pre>\n        <p class=\"why\">Ahlaundoh's: Shield Block and Revenge on one button. Not 100% efficient, but far fewer presses.</p></div>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-stances\">\n      <summary><h3>Stances &amp; interrupts</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Berserker Rage</b><span class=\"lvl\">Lv 30</span></div><button class=\"copy\" id=\"copy-wr4\" data-for=\"wr4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wr4\">#showtooltip Berserker Rage\n/cast [stance:1/2] Berserker Stance; Berserker Rage</pre>\n        <p class=\"why\">Swaps to Berserker Stance if you're not in it, otherwise casts Berserker Rage. Stance 1 is Battle, 2 Defensive, 3 Berserker.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Interrupt</b><span class=\"lvl\">Lv 38</span></div><button class=\"copy\" id=\"copy-wr5\" data-for=\"wr5\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wr5\">#showtooltip [stance:1/2] Shield Bash; [stance:3] Pummel\n/cast [equipped: Shield, stance:1/2] Shield Bash; [noequipped: shield, stance:1/2] Berserker Stance; [stance:3] Pummel</pre>\n        <p class=\"why\">Ahlaundoh's one-button interrupt: Shield Bash with a shield, otherwise into Berserker Stance for Pummel. Shield Bash alone works from 12.</p></div>\n    </details>\n  </div>\n  "
  },
  {
   "id": "notes",
   "label": "Read before you commit",
   "h2": "Caveats &amp; sources",
   "html": "\n  <div class=\"notes\">\n<div class=\"note\"><h3>Guides disagree on stats</h3><p>Ahlaundoh puts Spirit first for questing (more health regen, less downtime); Kargoz puts Strength first for Protection. Both agree Spirit matters less in dungeons.</p></div>\n<div class=\"note\"><h3>Old racial text in some guides</h3><p>Kargoz's Oct 14 guide lists a Human sword racial, 10% Troll regen and 1% Skyborne haste. Forever's racials are Ruthless, 20% and 2%; this page uses Talents Forever's numbers.</p></div>\n<div class=\"note\"><h3>Beta-era levels</h3><p>Spell levels and talent text come from Talents Forever's read of the beta client (data from Nov 10). The beta stopped at 30, so guides' 31–60 advice is less tested.</p></div>\n  </div>\n  <h3 style=\"margin:28px 0 12px\">Sources</h3>\n  <ul class=\"sources\">\n    <li><a href=\"https://mobalytics.gg/wow-forever/classes/warrior-leveling-guide\" target=\"_blank\" rel=\"noopener\">Ahlaundoh: Warrior Leveling Guide 1–60 (Mobalytics, Nov 12)</a></li>\n    <li><a href=\"https://mobalytics.gg/wow-forever/profile/kargoz/classes/1-60-protection-warrior-leveling-guide-weapons-talents-rotation-macros\" target=\"_blank\" rel=\"noopener\">Kargoz: 1–60 Protection Warrior Leveling Guide (Mobalytics, Oct 14)</a></li>\n    <li><a href=\"https://mobalytics.gg/wow-forever/classes/arms-warrior-guide\" target=\"_blank\" rel=\"noopener\">Mobalytics: Arms Warrior guide (macros)</a></li>\n    <li><a href=\"https://www.warcrafttavern.com/forever/guides/warrior-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Warrior leveling (class quests)</a></li>\n    <li><a href=\"https://talentsforever.com/export/warrior.json\" target=\"_blank\" rel=\"noopener\">Talents Forever: Warrior data export (talents, spells, racials)</a></li>\n    <li><a href=\"https://www.warcrafttavern.com/forever/news/class-economy-changes-wow-forever-hotfixes-for-november-10/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Nov 10 hotfixes (Sweeping Strikes fix)</a></li>\n  </ul>\n  "
  }
 ]
};
