/* WoW Forever Planner: Warlock guide. Class data last checked/updated Nov 26, 2026 (switched to Crix's Wrack build).
   Loads after data/classes.js and adds itself to window.FP_DATA.classes. */
window.FP_DATA.classes.warlock = {
 "key": "warlock",
 "name": "Warlock",
 "color": "#8788EE",
 "ink": "#4E4FB8",
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
   "race": "Orc",
   "new": false
  },
  {
   "race": "Undead",
   "new": false
  },
  {
   "race": "Troll",
   "new": true
  }
 ],
 "blurb": "Affliction DoTs can crit, Bane of Agony no longer takes the Curse slot, and Pandemic and Soul Siphon reward stacking effects before draining. Demonology pets scale with your stats, and Demonic Pact keeps a Sacrifice buff while another demon is out. Destruction adds Incinerate and Bane of Havoc.",
 "specs": [
  [
   "Affliction",
   "DoTs can crit, Bane of Agony no longer takes the Curse slot, and Pandemic and Soul Siphon reward stacking effects before draining."
  ],
  [
   "Demonology",
   "Pets scale with your stats, and Demonic Pact keeps a Sacrifice buff while another demon is out."
  ],
  [
   "Destruction",
   "Adds Incinerate and Bane of Havoc. Every guide rates it the slowest for leveling."
  ]
 ],
 "general": "Life Tap and Drain Life trade health and mana back and forth, and Ritual of Summoning is the only way to summon players.",
 "lvl": [
  [
   "Affliction",
   43.5
  ],
  [
   "Demonology",
   35.9
  ],
  [
   "Destruction",
   20.6
  ]
 ],
 "first": [
  "Improved Corruption 5/5",
  "Suppression 5/5"
 ],
 "at60": "Demo 40% · Aff 39% · Destro 21%. Top build: Affliction 35/11/0.",
 "builds": {
  "crix": {
   "cols": [
    "Levels 10–40 · the road to Wrack",
    "Levels 41–60"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Improved Corruption",
     10,
     14,
     5,
     "instant Corruption, more damage"
    ],
    [
     0,
     "4/5",
     "Suppression",
     15,
     18,
     4,
     "4 points = 100% hit on mobs your level, less threat"
    ],
    [
     0,
     "2/2",
     "Soul Harvest",
     19,
     20,
     2,
     "drink during its mana buff for huge regen"
    ],
    [
     0,
     "2/2",
     "Improved Bane of Agony",
     21,
     22,
     2,
     "+10% Bane of Agony"
    ],
    [
     0,
     "3/3",
     "Improved Drains",
     23,
     25,
     3,
     "stronger Drain Life, not Wrack"
    ],
    [
     0,
     "3/3",
     "Fel Concentration",
     26,
     28,
     3,
     "70% pushback protection on drains, mandatory"
    ],
    [
     0,
     "1/2",
     "Grim Reach",
     29,
     29,
     1,
     "longer Affliction range"
    ],
    [
     0,
     "1/1",
     "Siphon Life",
     30,
     30,
     1,
     "third DoT for Soul Siphon"
    ],
    [
     0,
     "3/3",
     "Soul Siphon",
     31,
     33,
     3,
     "up to +36% drain damage"
    ],
    [
     0,
     "2/2",
     "Grim Reach",
     34,
     34,
     1,
     "max range"
    ],
    [
     0,
     "5/5",
     "Shadow Mastery",
     35,
     39,
     5,
     "+10% Shadow damage and healing"
    ],
    [
     0,
     "1/1",
     "Wrack",
     40,
     40,
     1,
     "DoTs tick twice as fast while you channel"
    ],
    [
     1,
     "5/5",
     "Demonic Embrace",
     41,
     45,
     5,
     "+15% Stamina"
    ],
    [
     1,
     "3/3",
     "Fel Vitality",
     46,
     48,
     3,
     "+15% max mana"
    ],
    [
     1,
     "2/2",
     "Demonic Aegis",
     49,
     50,
     2,
     "filler to unlock Demonic Sacrifice"
    ],
    [
     1,
     "1/1",
     "Demonic Sacrifice",
     51,
     51,
     1,
     "sacrifice the Imp: +15% Shadow damage"
    ],
    [
     1,
     "1/1",
     "Amplify Curse",
     52,
     52,
     1,
     "optional · +50% to the next Bane of Agony"
    ],
    [
     1,
     "1/1",
     "Curse of Exhaustion",
     53,
     53,
     1,
     "optional · a slow for escaping"
    ],
    [
     1,
     "3/3",
     "Pandemic",
     54,
     56,
     3,
     "+100% crit bonus on DoTs and drains"
    ],
    [
     1,
     "4/5",
     "Malevolence",
     57,
     60,
     4,
     "+4% crit"
    ]
   ],
   "name": "Affliction Wrack",
   "sub": "Crix · leveling 40/11/0"
  },
  "raid": {
   "cols": [
    "Affliction · 35",
    "Demonology 11 · Destruction 5"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Improved Corruption",
     10,
     14,
     5,
     ""
    ],
    [
     0,
     "5/5",
     "Suppression",
     15,
     19,
     5,
     "+5% hit toward the 17% cap"
    ],
    [
     0,
     "2/2",
     "Improved Life Tap",
     20,
     21,
     2,
     ""
    ],
    [
     0,
     "3/3",
     "Pandemic",
     22,
     24,
     3,
     "bigger DoT and drain crits"
    ],
    [
     0,
     "1/1",
     "Amplify Curse",
     25,
     25,
     1,
     "cast before Bane of Agony"
    ],
    [
     0,
     "2/2",
     "Improved Bane of Agony",
     26,
     27,
     2,
     ""
    ],
    [
     0,
     "5/5",
     "Malevolence",
     28,
     32,
     5,
     "crit"
    ],
    [
     0,
     "2/2",
     "Nightfall",
     33,
     34,
     2,
     "instant Shadow Bolt procs"
    ],
    [
     0,
     "1/1",
     "Siphon Life",
     35,
     35,
     1,
     ""
    ],
    [
     0,
     "3/3",
     "Soul Siphon",
     36,
     38,
     3,
     ""
    ],
    [
     0,
     "5/5",
     "Shadow Mastery",
     39,
     43,
     5,
     ""
    ],
    [
     0,
     "1/1",
     "Wrack",
     44,
     44,
     1,
     ""
    ],
    [
     1,
     "5/5",
     "Demonic Embrace",
     45,
     49,
     5,
     "Demonology"
    ],
    [
     1,
     "3/3",
     "Fel Vitality",
     50,
     52,
     3,
     "Demonology"
    ],
    [
     1,
     "2/2",
     "Demonic Aegis",
     53,
     54,
     2,
     "Demonology"
    ],
    [
     1,
     "1/1",
     "Demonic Sacrifice",
     55,
     55,
     1,
     "sacrifice the Imp"
    ],
    [
     1,
     "5/5",
     "Improved Shadow Bolt",
     56,
     60,
     5,
     "Destruction · crits: +20% Shadow damage taken for 12 sec"
    ]
   ],
   "name": "Affliction raid (60)",
   "sub": "Crix · 35/11/5"
  },
  "wt": {
   "cols": [
    "Levels 10–40",
    "Levels 41–60"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Improved Corruption",
     10,
     14,
     5,
     "instant Corruption"
    ],
    [
     0,
     "5/5",
     "Suppression",
     15,
     19,
     5,
     "+5% spell hit"
    ],
    [
     0,
     "5/5",
     "Unholy Power",
     20,
     24,
     5,
     "Demonology, stronger demon"
    ],
    [
     0,
     "2/2",
     "Demonic Energies",
     25,
     26,
     2,
     "Demonology"
    ],
    [
     0,
     "3/3",
     "Improved Drains",
     27,
     29,
     3,
     ""
    ],
    [
     0,
     "1/1",
     "Amplify Curse",
     30,
     30,
     1,
     ""
    ],
    [
     0,
     "2/2",
     "Improved Bane of Agony",
     31,
     32,
     2,
     ""
    ],
    [
     0,
     "2/2",
     "Improved Life Tap",
     33,
     34,
     2,
     ""
    ],
    [
     0,
     "3/3",
     "Pandemic",
     35,
     37,
     3,
     "DoT and drain crits deal double damage"
    ],
    [
     0,
     "3/3",
     "Soul Siphon",
     38,
     40,
     3,
     ""
    ],
    [
     1,
     "5/5",
     "Malevolence",
     41,
     45,
     5,
     "+5% crit on Shadow spells, DoTs included"
    ],
    [
     1,
     "5/5",
     "Shadow Mastery",
     46,
     50,
     5,
     ""
    ],
    [
     1,
     "1/1",
     "Siphon Life",
     51,
     51,
     1,
     "damage that heals you"
    ],
    [
     1,
     "3/3",
     "Fel Concentration",
     52,
     54,
     3,
     "fewer drain pushbacks"
    ],
    [
     1,
     "2/2",
     "Nightfall",
     55,
     56,
     2,
     "Corruption can make your next Shadow Bolt instant"
    ],
    [
     1,
     "4/5",
     "Improved Shadow Bolt",
     57,
     60,
     4,
     "Destruction"
    ]
   ],
   "name": "Affliction",
   "sub": "Warcraft Tavern · older order"
  }
 },
 "spells": [
  [
   1,
   "Shadow Bolt, Immolate, Imp, Demon Skin"
  ],
  [
   4,
   "Corruption, Curse of Weakness"
  ],
  [
   6,
   "Life Tap"
  ],
  [
   8,
   "Fear, Bane of Agony"
  ],
  [
   10,
   "Voidwalker, Drain Soul, Create Healthstone"
  ],
  [
   12,
   "Health Funnel"
  ],
  [
   14,
   "Curse of Recklessness, Drain Life"
  ],
  [
   18,
   "Searing Pain, Create Soulstone"
  ],
  [
   20,
   "Succubus or Incubus, Demon Armor, Ritual of Summoning, Curse of the Elements"
  ],
  [
   22,
   "Eye of Kilrogg"
  ],
  [
   24,
   "Drain Mana"
  ],
  [
   26,
   "Curse of Tongues"
  ],
  [
   28,
   "Banish, Create Firestone"
  ],
  [
   30,
   "Felhunter, Subjugate Demon, Hellfire"
  ],
  [
   36,
   "Create Spellstone"
  ],
  [
   40,
   "Felsteed, Howl of Terror, Dual Talent Specialization"
  ],
  [
   42,
   "Death Coil"
  ],
  [
   50,
   "Inferno"
  ],
  [
   60,
   "Dreadsteed, Bane of Doom"
  ]
 ],
 "weapons": [
  [
   5,
   "Lesser Magic Wand",
   "Enchanting or AH"
  ],
  [
   9,
   "Deepblaze",
   "Hall of Thanes dungeon quest (Alliance)"
  ],
  [
   13,
   "Greater Magic Wand",
   "Enchanting or AH"
  ],
  [
   17,
   "Cookie's Stirring Rod",
   "Deadmines"
  ],
  [
   18,
   "Gravestone Scepter",
   "Blackfathom Villainy quest · worth the trip"
  ],
  [
   20,
   "Gravestone Scepter + Soran'ruk staff or orb",
   "Succubus class quest"
  ],
  [
   27,
   "Wand of Mana Concentration",
   "Arcanic Enigma, Dalaran"
  ],
  [
   30,
   "Necrotic Wand",
   "Scarlet Monastery"
  ],
  [
   37,
   "Twisted Nether Wand",
   "Enchanting"
  ],
  [
   43,
   "Dreambough Wand",
   "Enchanting"
  ],
  [
   49,
   "Lesser Eternal Wand",
   "Enchanting"
  ],
  [
   55,
   "Greater Eternal Wand",
   "Enchanting"
  ],
  [
   56,
   "Stormrager",
   "Eastern Plaguelands quest"
  ],
  [
   60,
   "Torch of Light",
   "Enchanting"
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
     "Imp attacks · Corruption, Immolate"
    ],
    [
     1,
     37,
     "Wand to finish"
    ],
    [
     10,
     50,
     "Send the demon in first"
    ],
    [
     10,
     29,
     "Bane, Immolate, Corruption"
    ],
    [
     30,
     60,
     "Bane, Corruption, Siphon Life · no Immolate"
    ],
    [
     38,
     39,
     "Drain Life rank 4: drain instead of wand"
    ],
    [
     40,
     60,
     "Wrack as your filler"
    ],
    [
     40,
     60,
     "Drain Life only for quick health"
    ],
    [
     51,
     60,
     "Sacrifice the Imp before pulling"
    ]
   ]
  },
  {
   "type": "train"
  },
  {
   "type": "steps",
   "label": "Demons & quests",
   "items": [
    [
     1,
     9,
     "Imp · starting-zone quest"
    ],
    [
     10,
     19,
     "Voidwalker · The Slaughtered Lamb"
    ],
    [
     20,
     29,
     "Succubus or Incubus · Stormwind"
    ],
    [
     20,
     24,
     "Soran'ruk · BFD and SFK fragments"
    ],
    [
     30,
     39,
     "Felhunter · Seeking Strahad"
    ],
    [
     40,
     59,
     "Felsteed · short quest"
    ],
    [
     60,
     60,
     "Dreadsteed · long chain"
    ]
   ]
  },
  {
   "type": "weapon",
   "label": "Wand & weapon",
   "none": "No wand yet"
  }
 ],
 "opts": [
  {
   "t": "Affliction Wrack",
   "s": "Crix (Mobalytics, Nov 22) · ends 40/11/0 · recommended",
   "p": "Improved Corruption, Suppression 4, Soul Harvest and Improved Bane of Agony by 22, Improved Drains and Fel Concentration by 28, Siphon Life and Soul Siphon by 33, Shadow Mastery to 39, then Wrack at 40. After that, Demonic Embrace, Fel Vitality and Demonic Aegis unlock Demonic Sacrifice at 51, and Pandemic and Malevolence finish it. At 60, respec to Crix's 35/11/5 raid build."
  },
  {
   "t": "Affliction",
   "s": "Warcraft Tavern · ends 40/7/4 · older order",
   "p": "Takes Unholy Power and Demonic Energies for a stronger demon instead of rushing Wrack, and gets Pandemic and Soul Siphon by 40. Still in the talent checklist as its own tab."
  },
  {
   "t": "Demonology",
   "s": "35.9%",
   "p": "Warcraft Tavern levels Affliction to 27, then respecs. Demonic Brand lets your Succubus or Incubus hold threat while doing most of the damage; Demonic Pact comes at 40."
  },
  {
   "t": "Destruction",
   "s": "20.6%",
   "p": "The best fit for Eureka!, since its damage is direct casts, but every guide rates it the weakest for leveling: more mana, more drinking. Better saved for dungeons."
  }
 ],
 "keyspells": "Corruption 4 · Life Tap 6 · Fear, Bane of Agony 8 · Voidwalker, Drain Soul 10 · Drain Life 14 · Succubus or Incubus, Demon Armor 20 · Felhunter 30 · Felsteed 40",
 "sections": [
  {
   "id": "warlock-guide",
   "label": "Gnome Warlock",
   "h2": "Affliction leveling guide",
   "html": "\n  <p class=\"sdesc\">Built on <a href=\"https://mobalytics.gg/wow-forever/classes/warlock-leveling-guide\" target=\"_blank\" rel=\"noopener\">Crix's Warlock leveling guide</a> (Mobalytics, updated Nov 22): a 1–60 Affliction build that rushes the reworked Wrack. Crix is a long-time Classic Warlock guide writer. Older notes from Warcraft Tavern, ConquestCapped and Method stay where Crix doesn't cover something; they're listed under sources.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" id=\"talents\" data-key=\"warlock-guide-talent-order\" open>\n      <summary><h3>Talent order <small>checklist · 51 points · leveling ends at 40/11/0</small></h3></summary>\n      <p class=\"why\">Tick each row as you spend the points. Gold rows are due at your level; the outlined row is your next point. Tabs: <b>Affliction Wrack</b> is the leveling build, <b>Affliction raid (60)</b> is the respec for 60, and <b>Affliction · Warcraft Tavern</b> is the older order.</p>\n      <div id=\"talents-app\"></div>\n      <p class=\"why\"><b>Wrack at 40 is the whole point:</b> everything before it is on the road there, and after 40 the points are flexible. <b>Suppression stops at 4:</b> that's already 100% hit on mobs your level. <b>Soul Harvest at 19:</b> sit and drink while its mana buff is up and you refill in seconds (Crix thinks it may be a bug). <b>Levels 52–53</b> (Amplify Curse, Curse of Exhaustion) are optional; Crix's fallback is Malevolence and Suppression. <b>Improved Drains</b> doesn't boost Wrack, but Crix says a respec just to move it isn't worth the gold.</p>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"warlock-guide-alternative-conquestcapped-s-faster-dot-start\">\n      <summary><h3>Alternative: ConquestCapped's faster DoT start <small>levels 10–30</small></h3></summary>\n      <p>Skips the Demonology detour and gets Pandemic and Nightfall far sooner, at the cost of a weaker demon early on. Its 20-point Affliction start:</p>\n      <div class=\"cols\">\n        <div>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Improved Corruption</b> <span class=\"why\">· 10–14</span></li>\n            <li><span class=\"rk\">3/5</span><b>Suppression</b> <span class=\"why\">· 15–17</span></li>\n            <li><span class=\"rk\">2/2</span><b>Grim Reach</b> <span class=\"why\">· 18–19; longer Affliction range, new Oct 15</span></li>\n            <li><span class=\"rk\">3/3</span><b>Improved Drains</b> <span class=\"why\">· 20–22</span></li>\n          </ol>\n        </div>\n        <div>\n          <ol class=\"talents\" start=\"5\">\n            <li><span class=\"rk\">3/3</span><b>Pandemic</b> <span class=\"why\">· 23–25</span></li>\n            <li><span class=\"rk\">2/2</span><b>Nightfall</b> <span class=\"why\">· 26–27</span></li>\n            <li><span class=\"rk\">1/1</span><b>Amplify Curse</b> <span class=\"why\">· 28</span></li>\n            <li><span class=\"rk\">2/2</span><b>Improved Bane of Agony</b> <span class=\"why\">· 29–30</span></li>\n          </ol>\n        </div>\n      </div>\n      <p class=\"why\">It stops at 30; from 31, follow the Warcraft Tavern order and skip what you already have. Method's older (Oct 17) order also rushes Pandemic and lands on Wrack at 40. Wrack was reworked on Nov 10: while you channel it, your Corruption, Siphon Life and Bane of Agony tick twice as fast.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-rotation-by-level\" open>\n      <summary><h3>Rotation by level</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1–9</span><p>Keep the Imp attacking everything. Corruption and Immolate do most of the work; Shadow Bolt and the wand finish mobs off.</p></div>\n        <div class=\"step\"><span class=\"lv\">10–29</span><p>Send the demon in first and let it take a couple of hits. Bane of Agony first (it ramps up, so it goes on early), then Immolate and Corruption. Wand it down, or Drain Life when you need health. Finish with Drain Soul when you need shards.</p></div>\n        <div class=\"step\"><span class=\"lv\">30–39</span><p>Stop casting Immolate. Bane of Agony, Corruption, Siphon Life, then Curse of the Elements on anything that will live long enough. From 38 (Drain Life rank 4), drain instead of wanding.</p></div>\n        <div class=\"step\"><span class=\"lv\">40–60</span><p>Same DoTs, then channel Wrack as your filler. Swap to Drain Life only when you need health fast. Even a short Wrack clip keeps its progress, so stopping early wastes nothing.</p></div>\n        <div class=\"step\"><span class=\"lv\">51–60</span><p>Sacrifice the Imp with Demonic Sacrifice before you pull, so no demon is out. Cast Amplify Curse just before Bane of Agony once you have it.</p></div>\n        <div class=\"step\"><span class=\"lv\">2+ mobs</span><p>When the first mob is at 20–30% health, pull the next. DoT it up, and Wrack it once you're sure the first will die to its DoTs. Fear anything that gets dangerous. Two or three at a time is the goal.</p></div>\n        <div class=\"step\"><span class=\"lv\">Dungeons</span><p>Corruption on a few mobs while the tank gathers the pack, then Hellfire a few yards away. Let the tank build threat first: Hellfire burns you too and pulls a lot of threat. Keep a Healthstone ready.</p></div>\n        <div class=\"step\"><span class=\"lv\">Eureka!</span><p>It doesn't touch DoTs. Pop it before a Shadow Bolt or two on a tough mob, or with Searing Pain.</p></div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-demons\">\n      <summary><h3>Demons</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1</span><p><b>Imp:</b> weak for Affliction: little health, low damage, and it runs out of mana. From 51 its job is to be sacrificed for +15% Shadow damage.</p></div>\n        <div class=\"step\"><span class=\"lv\">10</span><p><b>Voidwalker:</b> the safe pick. It holds mobs while you DoT from range, and Sacrifice gives an emergency shield. Crix keeps Torment on manual and uses the VW Taunt macro so it taunts the right mob.</p></div>\n        <div class=\"step\"><span class=\"lv\">20</span><p><b>Succubus or Incubus (Sayaad):</b> Crix's pick for most of leveling, with the highest damage. Same abilities; only the look differs. Seduce controls a Humanoid in dungeons.</p></div>\n        <div class=\"step\"><span class=\"lv\">30</span><p><b>Felhunter:</b> a little less damage than the Succubus, plus Spell Lock and Devour Magic. Fine to use if you want the utility.</p></div>\n      </div>\n      <p class=\"why\">Keep the demon on passive and send it in yourself, so it never pulls extra mobs. Right-click a pet ability to turn its autocast on or off. <b>Demonic Sacrifice at 51:</b> Imp gives +15% Shadow damage (the usual pick), Voidwalker 2% mana every 4 sec, Felhunter 3% health every 4 sec, Succubus +15% Fire damage for Hellfire-heavy dungeons.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-class-quests\">\n      <summary><h3>Class quests <small>Alliance</small></h3></summary>\n      <ul>\n        <li><b>1, Imp:</b> starting-zone quest</li>\n        <li><b>10, Voidwalker:</b> the Gnome version is The Slaughtered Lamb</li>\n        <li><b>20, Succubus:</b> Devourer of Souls, Stormwind. <b>Incubus:</b> What Is Love?, Stormwind</li>\n        <li><b>20, Soran'ruk:</b> Orb or Staff of Soran'ruk, using fragments from Blackfathom Deeps and Shadowfang Keep</li>\n        <li><b>30, Felhunter:</b> Seeking Strahad, from any capital</li>\n        <li><b>40, Felsteed:</b> a short quest. <b>60, Dreadsteed:</b> a long chain</li>\n        <li><b>50, Inferno</b> and <b>60, Ritual of Doom:</b> class quests. The Succubus quest also gives your first Soul Pouch, and the Felhunter quest a bigger one</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-key-spells\">\n      <summary><h3>Key spells</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1–8</span><p>Shadow Bolt, Immolate, Imp, Demon Skin 1 · Corruption, Curse of Weakness 4 · Life Tap 6 · Fear, Bane of Agony 8</p></div>\n        <div class=\"step\"><span class=\"lv\">10–18</span><p>Voidwalker, Drain Soul, Create Healthstone 10 · Health Funnel 12 · Curse of Recklessness, Drain Life 14 · Searing Pain, Create Soulstone 18</p></div>\n        <div class=\"step\"><span class=\"lv\">20–28</span><p>Succubus or Incubus, Demon Armor, Ritual of Summoning, Curse of the Elements 20 · Eye of Kilrogg 22 · Drain Mana 24 · Curse of Tongues 26 · Banish, Create Firestone 28</p></div>\n        <div class=\"step\"><span class=\"lv\">30–60</span><p>Felhunter, Subjugate Demon, Hellfire 30 · Create Spellstone 36 · Felsteed, Howl of Terror, Dual Talent Specialization 40 · Death Coil 42 · Inferno 50 · Dreadsteed, Bane of Doom 60</p></div>\n      </div>\n      <p class=\"why\">Ritual of Summoning is the only way to summon players in Forever; meeting stones no longer do it.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-wands-weapons\">\n      <summary><h3>Wands &amp; weapons</h3></summary>\n      <p>Wands are most of your damage until your 30s, and wanding while DoTs tick costs no mana. Wands need 0.5 sec standing still before they fire. Crix's list, Alliance and both-faction picks. From the late 30s, pick wands for their Spell Power and stats more than their DPS.</p>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">5</span><p>Lesser Magic Wand, Enchanting or the AH. Get it the moment you can</p></div>\n        <div class=\"step\"><span class=\"lv\">9</span><p>Deepblaze, Hall of Thanes dungeon quest (Alliance). 18 DPS, and good enough to carry you to Gravestone Scepter</p></div>\n        <div class=\"step\"><span class=\"lv\">13</span><p>Greater Magic Wand, Enchanting or the AH, if you have nothing better</p></div>\n        <div class=\"step\"><span class=\"lv\">17</span><p>Cookie's Stirring Rod, Cookie in the Deadmines (22 DPS, 3 SP). Spellcrafter Wand from Retrieval for Mauren is a 4 SP option</p></div>\n        <div class=\"step\"><span class=\"lv\">18</span><p>Gravestone Scepter, Blackfathom Villainy quest. The first wand Crix would really go out of his way for: 29 DPS, Spirit and +6 Shadow damage</p></div>\n        <div class=\"step\"><span class=\"lv\">20</span><p>Staff of Soran'ruk (two-hander) or Orb of Soran'ruk (off-hand), from the Succubus class quest</p></div>\n        <div class=\"step\"><span class=\"lv\">27</span><p>Wand of Mana Concentration, Arcanic Enigma in Dalaran. Intellect and mana regen</p></div>\n        <div class=\"step\"><span class=\"lv\">30</span><p>Necrotic Wand, Azshir the Sleepless in Scarlet Monastery</p></div>\n        <div class=\"step\"><span class=\"lv\">37–60</span><p>Enchanter wands: Twisted Nether 37 · Dreambough 43 · Lesser Eternal 49 · Greater Eternal 55 · Torch of Light 60. Stormrager 56 from an Eastern Plaguelands quest</p></div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-stats\">\n      <summary><h3>Stats</h3></summary>\n      <ul>\n        <li><b>Spell Power:</b> the strongest stat; Forever puts it on low-level gear, so get it on every piece you can</li>\n        <li><b>Hit:</b> fewer misses means less wasted mana. Suppression covers mobs your level</li>\n        <li><b>Intellect,</b> then <b>Stamina:</b> mana and health. Both come naturally on gear</li>\n        <li><b>Crit:</b> DoTs, drains and Hellfire can crit</li>\n        <li><b>Spirit:</b> makes Life Tap return more mana, but don't pick it over Intellect and Stamina</li>\n        <li><b>Haste:</b> last. It only speeds cast times, not DoT ticks or drain channels</li>\n        <li>Check the AH every few levels for <b>of Shadow Wrath</b> gear, even below your level. It buffs your demon too</li>\n        <li>At 60 the priority changes: see <a href=\"#lvl60\">Level 60</a></li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-professions\">\n      <summary><h3>Professions</h3></summary>\n      <ul>\n        <li><b>Tailoring + Enchanting:</b> Crix's leveling pair. Tailoring uses all the cloth you loot and makes most of the best leveling gear; Enchanting makes the early wands and disenchants what you sew. Neither makes much gold</li>\n        <li><b>For gold:</b> Herbalism, Skinning or Mining</li>\n        <li><b>First Aid:</b> Crix uses bandages constantly while leveling. Keep it trained up</li>\n        <li><b>At 60:</b> Tailoring + Engineering for the most raid damage (explosives, Goblin Rocket Boots), or Tailoring + Enchanting if gearing up is the focus. Keep Tailoring at 300: Robe of the Void is BoP, and Bloodvine Garb's set bonus needs it</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-tips-mistakes\">\n      <summary><h3>Tips &amp; mistakes</h3></summary>\n      <ul>\n        <li>Train every two levels and check your bars use the new rank. A /cast macro without a rank always casts the highest.</li>\n        <li>Let your DoTs finish the job. Don't spend mana on a mob they'll already kill.</li>\n        <li>Life Tap only when your health can take it; starting a pull half dead defeats the point. Life Tap while you walk.</li>\n        <li>Banes and Curses use separate slots: Bane of Agony and Curse of the Elements can both be on one mob.</li>\n        <li>Keep Soul Shards for demons, Healthstones, Soulstones and summons. Soul Harvest makes lots, so Crix uses the Warlock Kit addon to delete spares.</li>\n        <li>Fear juggling: if a feared mob runs toward another pack, Curse of Recklessness brings it back, and Curse of the Elements sends it running again.</li>\n        <li>Keep Demon Skin up, then Demon Armor from 20. Keep food and water too: drains cut downtime but don't remove it.</li>\n      </ul>\n    </details>\n\n    \n\n    <details class=\"gpanel\" data-key=\"warlock-guide-how-wrack-works\">\n      <summary><h3>How Wrack works <small>from 40</small></h3></summary>\n      <p>While you channel Wrack, your Corruption, Bane of Agony and Siphon Life move toward their next tick <b>twice as fast</b>. Their durations don't change, so each DoT fits in more ticks.</p>\n      <ul>\n        <li><b>Progress is kept.</b> Channel for 1 second and each DoT timer moves 2 seconds, even after you stop. Clipping Wrack to reapply a DoT wastes nothing.</li>\n        <li><b>Partial last tick.</b> If a DoT runs out halfway to a tick, that last tick still lands for about half damage.</li>\n        <li><b>Soul Siphon</b> adds 12% drain damage for each of Corruption, Bane of Agony and Siphon Life on the target, 36% with all three. Curses no longer count, which is why Siphon Life matters now.</li>\n        <li>Example: Corruption ticks every 3 sec and lasts 18 sec. While you channel, it ticks every 1.5 sec and still lasts 18 sec.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-campfire-consumables\">\n      <summary><h3>Campfire &amp; leveling consumables</h3></summary>\n      <ul>\n        <li><b>Campfire buffs</b> (three features per camp, sit nearby for 60 sec): Camp Chair from Skinning, +2% crit · Faction Banner from Tailoring, Spirit · Incense Candle from Herbalism, Intellect · Mana Well from Alchemy, mana regen · Fish Bowl from Fishing, +8% all stats · Camp Tent from Leatherworking, rested XP up to 5% of a level. Each one doesn't stack with its matching class buff. More on the <a href=\"#/camp\">Camping</a> page</li>\n        <li><b>+5% XP food:</b> almost any food gives it, even cheap low-level fish. Sagefish Delight (7 SP) and Briny Seafood Stew (14 SP) add Spell Power on top</li>\n        <li><b>Spellstone or Firestone</b> on your weapon. Spellstone's haste doesn't help DoTs or drains, but its Shadow damage does</li>\n        <li><b>Elixirs from the AH</b> (no Alchemy needed), most useful first: Minor Arcane (Spell Power), Minor Mageblood (mana regen), Minor Troll's Blood (health regen), Wisdom, Minor Spirit, Minor Fortitude, Minor Defense. Buy higher ranks as you level</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-gnome-honestly\">\n      <summary><h3>Gnome, honestly</h3></summary>\n      <p>Crix agrees Eureka! doesn't work on DoTs, so for Affliction the Gnome perks are really Expansive Mind (+5% mana, fewer drinks) and Escape Artist. At 60 he still rates Gnome very close to Human and says to play the race you like. Warcraft Tavern ranks Gnome last at 60 for the same Eureka! reason. If you ever want Eureka! to shine, that's Destruction.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-demonology-instead\">\n      <summary><h3>Demonology instead?</h3></summary>\n      <p>Level Affliction to 27, then respec: Unholy Power, Demonic Energies, Fel Vitality, Master Summoner, Improved Sayaad and Demonic Brand. Searing Pain brands the demon's target so your Sayaad keeps threat. Never Searing Pain before the brand is up; it pulls a lot of threat. Demonic Pact comes at 40, and Demonology is the most-planned spec at 60.</p>\n    </details>\n\n  </div>\n  "
  },
  {
   "id": "lvl60",
   "label": "Crix's level 60 Affliction guide · Mobalytics, Nov 25",
   "h2": "Level 60: raid &amp; dungeons",
   "html": "\n  <p class=\"sdesc\">35/11/5 Wrack raid build, rotation, stats and pre-raid gear. Respec into this at 60; it's the <a href=\"#talents\">Affliction raid (60)</a> tab in the talent checklist. Crix calls it the best Affliction build right now. His dungeon build isn't included yet.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel\" data-key=\"lvl60-build\" open>\n      <summary><h3>What changes at 60 <small>leveling → raid</small></h3></summary>\n      <ul>\n        <li><b>Drop (11):</b> Soul Harvest 2, Improved Drains 3, Fel Concentration 3, Grim Reach 2, Curse of Exhaustion 1</li>\n        <li><b>Add in Affliction (6):</b> Suppression to 5/5, Improved Life Tap 2/2, Malevolence to 5/5, Nightfall 2/2</li>\n        <li><b>Add in Destruction (5):</b> Improved Shadow Bolt 5/5. A Shadow Bolt crit makes the target take 20% more Shadow damage for 12 sec</li>\n        <li><b>Same in Demonology (11):</b> Demonic Embrace, Fel Vitality, Demonic Aegis and Demonic Sacrifice. No demon out: the Imp stays sacrificed for +15% Shadow damage</li>\n      </ul>\n      <p class=\"why\">Strengths: top damage with Wrack, strong cleave from multi-DoTs, lots of raid utility. Weaknesses: slow ramp on new targets, wasted DoTs when adds die fast, and Haste doesn't speed up DoTs or drains.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"lvl60-rotation\" open>\n      <summary><h3>Raid rotation</h3></summary>\n      <ol class=\"talents\">\n        <li><b>Before the pull:</b> Imp sacrificed, Demon Armor up, a Healthstone in your bags, Soulstone on a healer</li>\n        <li>Precast Shadow Bolt so it lands as the pull timer hits 0</li>\n        <li>Amplify Curse, then Bane of Agony. The Amp Bane macro does both</li>\n        <li>Corruption, then Siphon Life</li>\n        <li>Curse of the Elements if you're assigned it (the default unless the raid leader says Recklessness)</li>\n        <li>Channel Wrack until a DoT needs reapplying or you need mana. Don't reapply DoTs early</li>\n        <li>Life Tap with DoTs up and mana under about 40%. Aim to finish the fight at 0 mana</li>\n        <li>Shadow Trance (Nightfall) proc: cast the instant Shadow Bolt straight away. It's your only way to apply Improved Shadow Bolt</li>\n      </ol>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"lvl60-stats\">\n      <summary><h3>Stats &amp; hit cap</h3></summary>\n      <ol class=\"talents\">\n        <li><b>Spell Power / Shadow damage:</b> the strongest stat</li>\n        <li><b>Hit to 17%:</b> raid bosses (level 63) need 17%. Five points of Suppression give 5%, so 12% from gear and buffs. Worth nothing once capped, and not worth losing lots of Spell Power for</li>\n        <li><b>Crit:</b> DoTs crit, and Pandemic makes those crits much bigger</li>\n        <li><b>Haste:</b> only speeds Shadow Bolt and Immolate casts</li>\n        <li><b>Spell Pierce:</b> helps, but little for DoTs, and it's hard to find</li>\n        <li><b>Intellect &amp; Stamina,</b> then <b>Spirit:</b> on most gear anyway</li>\n      </ol>\n      <div class=\"scroll\"><table class=\"wt\"><thead><tr><th>Stat</th><th>Worth about</th></tr></thead><tbody>\n        <tr><td>1% crit</td><td>9 SP</td></tr>\n        <tr><td>1% hit (under cap)</td><td>7–8 SP</td></tr>\n        <tr><td>1% haste</td><td>2–3 SP</td></tr>\n        <tr><td>1 Spell Pierce</td><td>just over 1 SP</td></tr>\n        <tr><td>60 Intellect</td><td>1% crit</td></tr>\n        <tr><td>1 Intellect</td><td>15 mana</td></tr>\n        <tr><td>1 Stamina</td><td>10 health</td></tr>\n        <tr><td>1 Spirit</td><td>+1 mana per Life Tap (1.2 with Improved Life Tap)</td></tr>\n      </tbody></table></div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"lvl60-utility\">\n      <summary><h3>Your raid jobs</h3></summary>\n      <ul>\n        <li><b>Curse of the Elements</b> is the main reason Warlocks get invited: 10% more magic damage taken, and only Warlocks bring it. Banes use their own slot, so it stacks with Bane of Agony or Bane of Doom</li>\n        <li><b>Curse of Recklessness</b> only if asked; Druids' Faerie Fire and Hunters' Dust Cloud cover the same debuff. <b>Curse of Tongues</b> on dangerous casters</li>\n        <li><b>Soulstone</b> a healer unless told otherwise. <b>Healthstones</b> to tanks and healers. <b>Ritual of Summoning</b> for anyone missing</li>\n        <li><b>Banish</b> demons and elementals, <b>Shadow Ward</b> on Shadow-damage fights, <b>Death Coil</b> mostly for its heal, <b>Howl of Terror</b> when a pull goes bad</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"lvl60-gear\">\n      <summary><h3>Realistic pre-raid gear <small>Crix's pick, skipping the long grinds</small></h3></summary>\n      <p class=\"why\">What Crix recommends chasing before the first raid opens, simmed with Xn's (Ascalon's) Warlock sim. \"Other options\" lists his bigger-grind BiS first, then easier alternatives.</p>\n      <div class=\"scroll\"><table><thead><tr><th>Slot</th><th>Item</th><th>Source</th><th>Enchant</th><th>Other options</th></tr></thead><tbody>\n        <tr><td>Head</td><td>Spellweaver's Turban</td><td>General Drakkisath, Upper Blackrock Spire</td><td>Arcanum of Focus</td><td>Crimson Felt Hat (Magistrate Barthilas, Stratholme)</td></tr>\n        <tr><td>Neck</td><td>Nacreous Shell Necklace</td><td>Cannon Master Willey, Stratholme</td><td>Enchant Necklace: Spell Power</td><td>BiS: Dark Advisor's Pendant (Vectus, Scholomance, annoying quest) · Beads of Ogre Mojo (Falrin's Vendetta, Dire Maul)</td></tr>\n        <tr><td>Shoulders</td><td>Mantle of the Timbermaw</td><td>Tailoring (BoE)</td><td>—</td><td>BiS: Rugged Mantle of the Timbermaw (Tailoring + Timbermaw rep) · Burial Shawl (Scholomance)</td></tr>\n        <tr><td>Back</td><td>Arcanoweave Cloak</td><td>75 Tarnished Undermine Real</td><td>—</td><td>Spritecaster Cape (Houndmaster Grebmar, Blackrock Depths)</td></tr>\n        <tr><td>Chest</td><td>Robe of Winter Night</td><td>Tailoring (BoE)</td><td>Mystic Rugged Armor Kit</td><td>BiS: Robe of the Void (Tailoring, BoP) · Robes of Dark Summons (Impaan the Imprisoner, Blackmaw Hold)</td></tr>\n        <tr><td>Wrists</td><td>Tearfall Bracers of Shadow Wrath</td><td>The Unforgiven, Stratholme</td><td>Greater Spellpower</td><td>BiS: Dryad's Wrist Bindings (Exalted Warsong) · Sublime Wristguards (Guard Slip'kik, Dire Maul)</td></tr>\n        <tr><td>Hands</td><td>Felcloth Gloves</td><td>Tailoring (BoE)</td><td>Mystic Rugged Armor Kit</td><td>Hands of Power (Quartermaster Zigris, Blackrock Spire) · Compound Gloves</td></tr>\n        <tr><td>Waist</td><td>Master's Belt of Shadow Wrath</td><td>World drop BoE</td><td>—</td><td>BiS: Belt of the Archmage (Tailoring) · Black Waistcord (Tailoring)</td></tr>\n        <tr><td>Legs</td><td>Leggings of Torment</td><td>Lord Valthalak, Upper Blackrock Spire</td><td>Arcanum of Focus</td><td>BiS: Outrider's Silk Leggings (Exalted Warsong) · Skyshroud Leggings (Highlord Omokk, Blackrock Spire)</td></tr>\n        <tr><td>Feet</td><td>Master's Boots of Shadow Wrath</td><td>World drop BoE</td><td>Minor Speed</td><td>Omnicast Boots (Golem Lord Argelmach, Blackrock Depths) · Dragonrider Boots (Warchief Rend Blackhand, Blackrock Spire)</td></tr>\n        <tr><td>Ring 1</td><td>Songstone of Ironforge</td><td>The Princess's Surprise, Blackrock Depths quest</td><td>—</td><td rowspan=\"2\">Channeler's Ring (75 Tarnished Undermine Real) · Maiden's Circle (world drop BoE)</td></tr>\n        <tr><td>Ring 2</td><td>Don Mauricio's Band of Domination</td><td>Darkmaster Gandling, Scholomance</td><td>—</td></tr>\n        <tr><td>Trinket 1</td><td>Royal Seal of Eldre'Thalas</td><td>Harnessing Shadows, Dire Maul quest</td><td>—</td><td rowspan=\"2\">Briarwood Reed (Jed Runewatcher, Blackrock Spire) · Eye of the Beast (Blackrock Spire quest)</td></tr>\n        <tr><td>Trinket 2</td><td>Weakness Analyzer</td><td>125 Tarnished Undermine Real</td><td>—</td></tr>\n        <tr><td>Main hand</td><td>Headmaster's Charge</td><td>Darkmaster Gandling, Scholomance</td><td>Enchant 2H Weapon: Spellblasting</td><td>See the weapon note below</td></tr>\n        <tr><td>Wand</td><td>Skul's Ghastly Touch</td><td>Skul, Stratholme</td><td>—</td><td>Bonecreeper Stylus (Darkmaster Gandling, Scholomance)</td></tr>\n      </tbody></table></div>\n      <p class=\"why\"><b>Weapon note:</b> the main list uses Headmaster's Charge (a two-hander), but Crix's weapon table recommends Blade of the New Moon (Immol'thar, Dire Maul West) with Obsidian Bauble (Pusillin, Dire Maul North) in the off-hand. Absolute BiS: Ironbark Staff (Exalted Arathi Basin), or Tome of Shadow Force (Exalted Alterac Valley) in the off-hand. Alternatives: Witchblade (Gandling) and Spirit of Aquementas (Un'Goro quest).</p>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"lvl60-consumables\">\n      <summary><h3>Raid consumables</h3></summary>\n      <div class=\"scroll\"><table><thead><tr><th>Type</th><th>Consumable</th><th>Effect</th></tr></thead><tbody>\n        <tr><td>Flask</td><td>Flask of Supreme Power</td><td>+150 Spell Power</td></tr>\n        <tr><td>Damage elixir</td><td>Greater Arcane Elixir</td><td>+35 Spell Power</td></tr>\n        <tr><td>Damage elixir</td><td>Elixir of Shadow Power</td><td>+40 Shadow damage</td></tr>\n        <tr><td>Damage elixir</td><td>Elixir of Fire Power</td><td>+10 Fire damage</td></tr>\n        <tr><td>Stat elixir</td><td>Elixir of the Owl</td><td>+25 Intellect, +2% crit</td></tr>\n        <tr><td>Stat elixir</td><td>Elixir of Sages</td><td>+25 Spirit, +2% crit</td></tr>\n        <tr><td>Mana regen</td><td>Greater Mageblood Elixir</td><td>20 mana every 5 sec</td></tr>\n        <tr><td>Intellect</td><td>Cerebral Cortex Compound</td><td>+25 Intellect</td></tr>\n        <tr><td>Food</td><td>Lobster Stew or Baked Salmon</td><td>+28 Spell Power</td></tr>\n        <tr><td>Weapon</td><td>Spellstone or Firestone</td><td>2% haste + 21 Shadow damage, or 2% crit + 21 Fire damage</td></tr>\n        <tr><td>Weapon oil</td><td>Brilliant Wizard Oil</td><td>+36 Spell Power, +1% crit</td></tr>\n        <tr><td>Mana potion</td><td>Major Mana Potion</td><td>1,800 mana</td></tr>\n        <tr><td>Mana rune</td><td>Demonic Rune or Dark Rune</td><td>1,200 mana for 800 health</td></tr>\n      </tbody></table></div>\n      <p class=\"why\">Owl and Sages: the 2% crit doesn't stack, but both stat bonuses do, so use both if you can afford it.</p>\n    </details>\n\n  </div>\n\n"
  },
  {
   "id": "macros",
   "label": "Copy them exactly",
   "h2": "Warlock macros",
   "html": "\n  <p class=\"sdesc\">18 macros, written exactly as they go in the game's macro window. One wrong letter and a macro does nothing, so copy them with the button.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel wide\" data-key=\"macros-how-to-add-one\">\n      <summary><h3>How to add one</h3></summary>\n      <ol class=\"howto\">\n        <li>Type <code>/macro</code>, open the tab with this character's name, and click New.</li>\n        <li>Type the <b>macro name</b> as shown (16 characters at most) and pick the red question mark icon, so the button shows the spell's own icon.</li>\n        <li>Copy the <b>macro text</b> in exactly, line breaks included. Spell names must match your spellbook letter for letter: capitals, spaces and apostrophes.</li>\n        <li>Drag the macro onto your action bar.</li>\n      </ol>\n      <ul class=\"mtips\">\n        <li><span class=\"ph\">Highlighted words</span> are placeholders: replace them with the exact name of your own item.</li>\n        <li><b>Ctrl</b> means hold Ctrl as you press the button. <b>MO</b> means mouseover: it casts on whatever is under your mouse, and on your target when nothing is.</li>\n        <li>Leave rank numbers off and the macro always casts your highest rank, so you never have to re-drag spells after training.</li>\n        <li>The level tag is when the spell becomes available. Make the macro then, or it will just show a question mark.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-fighting\">\n      <summary><h3>Fighting</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Pet Bane</b><span class=\"lvl\">Lv 8</span></div><button class=\"copy\" id=\"copy-wm1\" data-for=\"wm1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wm1\">#showtooltip Bane of Agony\n/petattack\n/cast Bane of Agony</pre>\n        <p class=\"why\">Method's tip: send the demon first so the mob goes for it, not you.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Pet Bolt</b><span class=\"lvl\">Lv 1</span></div><button class=\"copy\" id=\"copy-wl1\" data-for=\"wl1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl1\">#showtooltip Shadow Bolt\n/petfollow [mod:ctrl]\n/stopmacro [mod:ctrl]\n/petattack\n/cast Shadow Bolt</pre>\n        <p class=\"why\">Every Shadow Bolt also sends your demon in. Hold Ctrl to call the demon back and cast nothing.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Corruption MO</b><span class=\"lvl\">Lv 4</span></div><button class=\"copy\" id=\"copy-wm3\" data-for=\"wm3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wm3\">#showtooltip Corruption\n/cast [@mouseover,harm,nodead][] Corruption</pre>\n        <p class=\"why\">DoTs a second mob without retargeting.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Bane MO</b><span class=\"lvl\">Lv 8</span></div><button class=\"copy\" id=\"copy-wl2\" data-for=\"wl2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl2\">#showtooltip Bane of Agony\n/cast [@mouseover,harm,nodead][] Bane of Agony</pre>\n        <p class=\"why\">The same for Bane of Agony.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Tap Drain</b><span class=\"lvl\">Lv 14</span></div><button class=\"copy\" id=\"copy-wl3\" data-for=\"wl3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl3\">#showtooltip [mod:ctrl] Life Tap; Drain Life\n/cast [mod:ctrl] Life Tap; Drain Life</pre>\n        <p class=\"why\">Drain Life when mana is higher than health. Hold Ctrl to Life Tap when health is higher.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Eureka Bolt</b><span class=\"lvl\">Lv 1</span></div><button class=\"copy\" id=\"copy-wl4\" data-for=\"wl4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl4\">#showtooltip Shadow Bolt\n/cast Eureka!\n/cast Shadow Bolt</pre>\n        <p class=\"why\">Eureka! doesn't boost DoTs, so it goes on Shadow Bolt. If Eureka! uses the global cooldown, press again for the bolt.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Drain NoClip</b><span class=\"lvl\">Lv 14</span></div><button class=\"copy\" id=\"copy-wl10\" data-for=\"wl10\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl10\">#showtooltip Drain Life\n/cast [nochanneling:Drain Life] Drain Life</pre>\n        <p class=\"why\">Crix's macro: spam it without restarting a Drain Life that's already channeling.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Wrack NoClip</b><span class=\"lvl\">Lv 40</span></div><button class=\"copy\" id=\"copy-wl11\" data-for=\"wl11\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl11\">#showtooltip Wrack\n/cast [nochanneling:Wrack] Wrack</pre>\n        <p class=\"why\">The same for Wrack, your main filler from 40. Make a Drain Soul one the same way if you like.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Amp Bane</b><span class=\"lvl\">Lv 52</span></div><button class=\"copy\" id=\"copy-wl12\" data-for=\"wl12\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl12\">#showtooltip Bane of Agony\n/cast Amplify Curse\n/cast Bane of Agony</pre>\n        <p class=\"why\">Crix's tip: macro Amplify Curse onto Bane of Agony so you never forget it (level 52 leveling, 25 on the raid build). If Amplify Curse uses the global cooldown, press again for the Bane.</p></div>\n        \n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-control\">\n      <summary><h3>Control</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Focus Fear</b><span class=\"lvl\">Lv 8</span></div><button class=\"copy\" id=\"copy-wm2\" data-for=\"wm2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wm2\">#showtooltip Fear\n/cast [@focus,harm,nodead][] Fear</pre>\n        <p class=\"why\">Fears your focus, so you can juggle a second mob without losing your target. Set a focus with /focus.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Coil Howl</b><span class=\"lvl\">Lv 42</span></div><button class=\"copy\" id=\"copy-wl5\" data-for=\"wl5\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl5\">#showtooltip [mod:ctrl] Howl of Terror; Death Coil\n/stopcasting\n/cast [mod:ctrl] Howl of Terror; Death Coil</pre>\n        <p class=\"why\">Emergency Death Coil, cancelling your cast. Hold Ctrl for Howl of Terror (40).</p></div>\n        \n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-demons-items\">\n      <summary><h3>Demons & items</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>VW Sacrifice</b><span class=\"lvl\">Lv 16</span></div><button class=\"copy\" id=\"copy-wl6\" data-for=\"wl6\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl6\">#showtooltip Sacrifice\n/cast Sacrifice</pre>\n        <p class=\"why\">Puts the Voidwalker's shield on your main bar. Learned from a grimoire at the demon trainer.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Seduce Focus</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-wl7\" data-for=\"wl7\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl7\">#showtooltip Seduction\n/cast [@focus,harm,nodead][] Seduction</pre>\n        <p class=\"why\">Your Succubus or Incubus seduces your focus, or your target.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Spell Lock</b><span class=\"lvl\">Lv 30</span></div><button class=\"copy\" id=\"copy-wl8\" data-for=\"wl8\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl8\">#showtooltip Spell Lock\n/cast [@focus,harm,nodead][] Spell Lock</pre>\n        <p class=\"why\">Felhunter interrupt on your focus, or your target.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Healthstone</b><span class=\"lvl\">Lv 10</span></div><button class=\"copy\" id=\"copy-wl9\" data-for=\"wl9\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl9\">#showtooltip\n/use Major Healthstone\n/use Greater Healthstone\n/use Healthstone\n/use Lesser Healthstone\n/use Minor Healthstone</pre>\n        <p class=\"why\">Eats whichever Healthstone you carry. The extra lines just fail quietly.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>VW Taunt</b><span class=\"lvl\">Lv 10</span></div><button class=\"copy\" id=\"copy-wl13\" data-for=\"wl13\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl13\">#showtooltip Torment\n/cast Torment\n/petattack</pre>\n        <p class=\"why\">Crix's Voidwalker taunt: it attacks whatever it taunted. Turn Torment's autocast off (right-click it on the pet bar). Torment is a grimoire from the demon trainer.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Summon Demon</b><span class=\"lvl\">Lv 30</span></div><button class=\"copy\" id=\"copy-wl14\" data-for=\"wl14\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl14\">#showtooltip\n/cast [mod:alt] Summon Imp; [mod:shift] Summon Voidwalker; [mod:ctrl] Summon Felhunter; Summon Succubus</pre>\n        <p class=\"why\">Crix's one-button summon: plain press for the Succubus, Alt for the Imp, Shift for the Voidwalker, Ctrl for the Felhunter. The icon changes as you hold each key. Using the Incubus? Change the last spell to <b>Summon Incubus</b>.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Pet Ability</b><span class=\"lvl\">Lv 30</span></div><button class=\"copy\" id=\"copy-wl15\" data-for=\"wl15\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl15\">#showtooltip\n/cast [pet:Felhunter] Spell Lock; [pet:Voidwalker] Sacrifice; [pet:Succubus] Seduction</pre>\n        <p class=\"why\">Crix's one button for the key ability of whichever demon is out. Using the Incubus? Change <b>pet:Succubus</b> to <b>pet:Incubus</b>.</p></div>\n        <p class=\"why\">Forever renamed the Succubus line to Sayaad. If <b>Seduction</b> isn't the name on your pet bar, use the name shown there.</p>\n    </details>\n    <div class=\"gpanel wide\">\n      <p class=\"why\">Drain NoClip, Wrack NoClip, Amp Bane, VW Taunt, Summon Demon and Pet Ability come from Crix's guides. The rest are built from the guides on this page and the Forever macro lists on <a href=\"https://rankedboost.com/world-of-warcraft/forever/macros/\" target=\"_blank\" rel=\"noopener\">RankedBoost</a> (Nov 7) and <a href=\"https://kami-labs.fr/en/wow-forever/macros-wow-forever-9-classes/\" target=\"_blank\" rel=\"noopener\">Kami Labs</a>, checked against the spells your guides confirm exist in Forever. Ideas using removed spells, such as Tiger's Fury, were left out. Syntax follows the <a href=\"https://warcraft.wiki.gg/wiki/Macro_conditionals\" target=\"_blank\" rel=\"noopener\">macro conditionals reference</a>.</p>\n    </div>\n  </div>\n  "
  },
  {
   "id": "notes",
   "label": "Read before you commit",
   "h2": "Caveats &amp; sources",
   "html": "\n  <div class=\"notes\">\n<div class=\"note\"><h3>Crix vs the older order</h3><p>Crix rushes Wrack for 40 and takes Demonic Sacrifice at 51. Warcraft Tavern took Unholy Power and Demonic Energies for a stronger demon and ended at 40/7/4. Crix also skips Nightfall for leveling: he rates it overrated, since breaking a Wrack channel for a Shadow Bolt isn't worth it.</p></div>\n<div class=\"note\"><h3>Could change</h3><p>Crix thinks Soul Harvest's huge mana regen while drinking may be a bug. If it gets fixed, Improved Life Tap is the swap he mentions for those two points.</p></div>\n<div class=\"note\"><h3>Small slips in Crix's 60 guide</h3><p>His stat section says the raid build takes Ruin, but the build itself takes Improved Shadow Bolt and no Ruin. His main gear list uses Headmaster's Charge while his weapon table recommends Blade of the New Moon. The checklist here follows his talent list.</p></div>\n<div class=\"note\"><h3>Soul Siphon and Wrack, settled Nov 10</h3><p>Blizzard's Nov 10 hotfix made Soul Siphon boost Drain Life, Drain Soul and Wrack for each of your Corruption, Siphon Life and Bane of Agony on the target, up to 36%. The same hotfix reworked Wrack to speed up your DoTs while you channel it.</p></div>\n<div class=\"note\"><h3>Beta numbers, live game</h3><p>Spec shares and first points come from the Talents Forever calculator on the final beta build. The game launched Nov 4, and Blizzard can still retune live.</p></div>\n<div class=\"note\"><h3>Older Warlock data</h3><p>Calculator leveling counts were taken before Oct 15, when Malediction was replaced by Grim Reach (+10/20% Affliction spell range).</p></div>\n  </div>\n  <h3 style=\"margin:28px 0 12px\">Sources</h3>\n  <ul class=\"sources\">\n    <li><a href=\"https://mobalytics.gg/wow-forever/classes/warlock-leveling-guide\" target=\"_blank\" rel=\"noopener\">Crix (Mobalytics): Warlock leveling guide, 1–60 (Nov 22)</a></li>\n    <li><a href=\"https://mobalytics.gg/wow-forever/profile/crix/classes\" target=\"_blank\" rel=\"noopener\">Crix (Mobalytics): Affliction Warlock guide, level 60 (Nov 25)</a></li>\n    <li><a href=\"https://www.warcrafttavern.com/forever/guides/warlock-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Warlock leveling</a> · older order</li>\n    <li><a href=\"https://www.warcrafttavern.com/forever/guides/affliction-warlock/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Affliction Warlock (Nov 1)</a></li>\n    <li><a href=\"https://conquestcapped.com/guides/wow-forever/wow-forever-warlock-leveling/\" target=\"_blank\" rel=\"noopener\">ConquestCapped: Warlock leveling (Oct 28)</a></li>\n    <li><a href=\"https://www.method.gg/wow-forever/wow-forever-warlock-leveling-guide-and-talents\" target=\"_blank\" rel=\"noopener\">Method: Warlock leveling guide &amp; talents (Oct 17)</a></li>\n    <li><a href=\"https://wow.gg/guides/wow-forever-affliction-warlock-beta\" target=\"_blank\" rel=\"noopener\">WoW.gg: Affliction Warlock (Nov 4)</a></li>\n    <li><a href=\"https://talentsforever.com/racials\" target=\"_blank\" rel=\"noopener\">Talents Forever: races, classes and racials</a></li>\n    <li><a href=\"https://talentsforever.com/leveling\" target=\"_blank\" rel=\"noopener\">Talents Forever: leveling builds</a></li>\n    <li><a href=\"https://hyjal.cc/racials\" target=\"_blank\" rel=\"noopener\">Hyjal: racial abilities</a></li>\n  </ul>\n  "
  }
 ]
};
