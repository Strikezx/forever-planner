/* WoW Forever Planner: Druid guide. Class data last checked/updated Nov 26, 2026.
   Loads after data/classes.js and adds itself to window.FP_DATA.classes. */
window.FP_DATA.classes.druid = {
 "key": "druid",
 "name": "Druid",
 "color": "#FF7C0A",
 "ink": "#B35300",
 "roles": [
  "Tank",
  "Healer",
  "Melee",
  "Ranged"
 ],
 "races": [
  {
   "race": "Night Elf",
   "new": false
  },
  {
   "race": "Skyborne (High Order)",
   "new": true
  },
  {
   "race": "Tauren",
   "new": false
  },
  {
   "race": "Skyborne (Windshaper)",
   "new": true
  }
 ],
 "blurb": "Balance gets Eclipse, which links Wrath and Starfire (Improved Wrath and Improved Moonfire were renamed Starlight Wrath and Moon and Stars on Nov 25), and Starfire gained about 40% base damage before launch. Feral lost Berserk and Tiger's Fury; Primal Bite is the new Bear talent at 40, and form attacks now use your weapon's DPS. Restoration gets Wild Growth. Druids can now revive outside combat. Skyborne Druids have their own bear, cat and travel form models.",
 "specs": [
  [
   "Balance",
   "Eclipse links Wrath and Starfire, and Starfire gained about 40% base damage before launch."
  ],
  [
   "Feral",
   "Berserk and Tiger's Fury are gone; Primal Bite is the new Bear talent at 40, and form attacks use your weapon's DPS."
  ],
  [
   "Restoration",
   "Gets Wild Growth at 40, doubled in healing by the Nov 13 hotfix, and Nature's Swiftness now makes it instant."
  ]
 ],
 "general": "Druids can now revive outside combat, and Skyborne Druids have their own bear, cat and travel forms.",
 "lvl": [
  [
   "Feral",
   45.4
  ],
  [
   "Balance",
   32.5
  ],
  [
   "Restoration",
   22.2
  ]
 ],
 "first": [
  "Ferocity 5/5",
  "Heart of the Wild 5/5"
 ],
 "at60": "Feral 46% · Resto 29% · Balance 25%. Top build: Restoration 11/5/35.",
 "builds": {
  "bear": {
   "cols": [
    "Feral, levels 10–40",
    "Then Balance and Restoration, 41–60"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Ferocity",
     10,
     14,
     5,
     "cheaper Maul, Swipe, Claw and Rake"
    ],
    [
     0,
     "3/3",
     "Feral Instinct",
     15,
     17,
     3,
     "+30% Swipe damage"
    ],
    [
     0,
     "2/2",
     "Feral Swiftness",
     18,
     19,
     2,
     "+30% Cat speed, ready for Cat at 20"
    ],
    [
     0,
     "1/1",
     "Feral Charge",
     20,
     20,
     1,
     "Bear gap-closer that interrupts casts"
    ],
    [
     0,
     "2/2",
     "Sharpened Claws",
     21,
     22,
     2,
     "+6% crit in form"
    ],
    [
     0,
     "1/2",
     "Savage Fury",
     23,
     23,
     1,
     ""
    ],
    [
     0,
     "1/5",
     "Furor",
     24,
     24,
     1,
     ""
    ],
    [
     0,
     "3/3",
     "Predatory Strikes",
     25,
     27,
     3,
     "Attack Power"
    ],
    [
     0,
     "2/2",
     "Blood Frenzy",
     28,
     29,
     2,
     "crits give more Rage and combo points"
    ],
    [
     0,
     "1/1",
     "Leader of the Pack",
     30,
     30,
     1,
     "+3% crit for the party"
    ],
    [
     0,
     "2/2",
     "Natural Instinct",
     31,
     32,
     2,
     "more crit damage and healing"
    ],
    [
     0,
     "2/5",
     "Furor",
     33,
     33,
     1,
     ""
    ],
    [
     0,
     "2/2",
     "Savage Fury",
     34,
     34,
     1,
     "finished"
    ],
    [
     0,
     "5/5",
     "Rend and Tear",
     35,
     39,
     5,
     "+15% damage on bleeding targets"
    ],
    [
     0,
     "1/1",
     "Primal Bite",
     40,
     40,
     1,
     "strong Bear attack that replaced Berserk"
    ],
    [
     1,
     "5/5",
     "Genesis",
     41,
     45,
     5,
     "Balance"
    ],
    [
     1,
     "2/2",
     "Nature's Reach",
     46,
     47,
     2,
     "Balance"
    ],
    [
     1,
     "2/2",
     "Nature's Majesty",
     48,
     49,
     2,
     "Balance; hit and crit"
    ],
    [
     1,
     "5/5",
     "Heart of the Wild",
     50,
     54,
     5,
     "Restoration"
    ],
    [
     1,
     "5/5",
     "Naturalist",
     55,
     59,
     5,
     "Restoration; +10% damage on everything"
    ],
    [
     1,
     "3/5",
     "Furor",
     60,
     60,
     1,
     "last point"
    ]
   ],
   "name": "Feral",
   "sub": "ends on the Bear build"
  },
  "weave": {
   "cols": [
    "Resto core, levels 10–32",
    "Feral, then Balance, 33–60"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Furor",
     10,
     14,
     5,
     "energy on shifting, the point of weaving. Skip Ferocity"
    ],
    [
     0,
     "4/5",
     "Heart of the Wild",
     15,
     18,
     4,
     "preps the Resto tree, since Nature's Focus is weak here"
    ],
    [
     0,
     "2/2",
     "Feral Swiftness",
     19,
     20,
     2,
     "ready for Cat at 20"
    ],
    [
     0,
     "5/5",
     "Heart of the Wild",
     21,
     21,
     1,
     ""
    ],
    [
     0,
     "3/3",
     "Reflection",
     22,
     24,
     3,
     "regen while casting. He now takes this before Naturalist"
    ],
    [
     0,
     "2/5",
     "Naturalist",
     25,
     26,
     2,
     "opens the next row"
    ],
    [
     0,
     "1/1",
     "Bloom",
     27,
     27,
     1,
     ""
    ],
    [
     0,
     "5/5",
     "Naturalist",
     28,
     30,
     3,
     "faster Healing Touch, +10% damage"
    ],
    [
     0,
     "1/3",
     "Natural Shapeshifter",
     31,
     31,
     1,
     "cheaper shifting. More is optional"
    ],
    [
     0,
     "1/1",
     "Swiftmend",
     32,
     32,
     1,
     "your emergency heal"
    ],
    [
     1,
     "3/3",
     "Thick Hide",
     33,
     35,
     3,
     "Cat is squishy, so this cuts downtime. His PvE pick (PvP servers take Brutal Impact 2/2 + Thick Hide 1/3)"
    ],
    [
     1,
     "2/2",
     "Savage Fury",
     36,
     37,
     2,
     "pure damage"
    ],
    [
     1,
     "2/2",
     "Sharpened Claws",
     38,
     39,
     2,
     "passive damage while you lack feral gear"
    ],
    [
     1,
     "1/1",
     "Feral Charge",
     40,
     40,
     1,
     "last in its row on a PvE server"
    ],
    [
     1,
     "1/1",
     "Predatory Discipline",
     41,
     41,
     1,
     "first point in the next row. Let energy build to about 50% before Ferocious Bite for bonus damage"
    ],
    [
     1,
     "2/3",
     "Predatory Strikes",
     42,
     43,
     2,
     "attack power, which matters in healer gear"
    ],
    [
     1,
     "2/2",
     "Blood Frenzy",
     44,
     45,
     2,
     ""
    ],
    [
     1,
     "2/2",
     "Natural Instinct",
     46,
     47,
     2,
     "healing from Intellect. He takes healing before the crit"
    ],
    [
     1,
     "1/1",
     "Leader of the Pack",
     48,
     48,
     1,
     ""
    ],
    [
     1,
     "5/5",
     "Genesis",
     49,
     53,
     5,
     "+10% to HoTs and bleeds, Rake and Rip included"
    ],
    [
     1,
     "1/2",
     "Nature's Reach",
     54,
     54,
     1,
     "some hit chance"
    ],
    [
     1,
     "2/2",
     "Nature's Majesty",
     55,
     56,
     2,
     ""
    ],
    [
     1,
     "2/2",
     "Nature's Reach",
     57,
     57,
     1,
     ""
    ],
    [
     1,
     "1/3",
     "Moonglow",
     58,
     58,
     1,
     ""
    ],
    [
     1,
     "1/1",
     "Nature's Splendor",
     59,
     59,
     1,
     "longer HoTs, so longer Cat windows"
    ],
    [
     1,
     "3/3",
     "Predatory Strikes",
     60,
     60,
     1,
     "the last point"
    ]
   ],
   "name": "RestoCat Weaver",
   "sub": "MMARKERS' 12 Nov order"
  }
 },
 "spells": [],
 "weapons": [
  [
   15,
   "Segmented Spider Leg",
   "Ruins of Lordaeron"
  ],
  [
   18,
   "Smite's Mighty Hammer",
   "Deadmines"
  ],
  [
   23,
   "Graverobber's Shovel",
   "Stockade"
  ],
  [
   29,
   "Manual Crowd Pummeler",
   "Gnomeregan"
  ],
  [
   31,
   "Loksey's Training Stick",
   "Scarlet Monastery"
  ],
  [
   39,
   "Mograine's Might",
   "Scarlet Monastery"
  ],
  [
   42,
   "Grimlok's Charge",
   "Uldaman"
  ],
  [
   50,
   "Princess Theradras' Scepter",
   "Maraudon"
  ],
  [
   58,
   "Legionite Glaive",
   "crafted by Blacksmiths"
  ]
 ],
 "now": [
  {
   "type": "steps",
   "label": "Forms & quests",
   "none": "No form quest right now",
   "items": [
    [
     1,
     9,
     "Levels 1–9 are slow · Bear arrives at 10"
    ],
    [
     10,
     13,
     "Bear Form quest · do it right away"
    ],
    [
     10,
     13,
     "Teleport: Moonglade"
    ],
    [
     14,
     19,
     "Lessons Anew, Moonglade · Cure Poison"
    ],
    [
     20,
     24,
     "Cat Form quest · go straight for it"
    ]
   ]
  },
  {
   "type": "steps",
   "label": "How to play",
   "items": [
    [
     10,
     60,
     "Bear: Enrage, then Maul or Swipe on 3+"
    ],
    [
     20,
     60,
     "Cat: Rake, Claw, Rip; Bite to finish"
    ],
    [
     10,
     60,
     "Faerie Fire is free in form"
    ],
    [
     10,
     60,
     "Heal in one burst, then shift back"
    ]
   ]
  },
  {
   "type": "weapon",
   "label": "Weapon",
   "none": "Starter weapon"
  }
 ],
 "opts": [
  {
   "t": "Feral",
   "s": "45.4% of leveling builds",
   "p": "First points: Ferocity 5/5, Heart of the Wild 5/5, then Genesis in Balance. Forms arrive at Bear 10, Cat 20, Travel 30, Dire Bear 40. Berserk and Tiger's Fury were removed before launch; Primal Bite is now the level-40 Feral talent."
  },
  {
   "t": "Balance",
   "s": "32.5%",
   "p": "First points: Starlight Wrath 5/5, Moonglow 3/3, Moon and Stars 2/2. These were Improved Wrath and Improved Moonfire until Nov 25: Starlight Wrath now also cuts Starfire's cast time by up to 0.5 sec, and Moon and Stars stops damage from pushing back Starfire. Eclipse ties Wrath and Starfire together."
  },
  {
   "t": "Restoration",
   "s": "22.2%",
   "p": "First points: Nature's Focus 5/5, Naturalist 5/5. Wild Growth comes at 40; since the Nov 10–13 hotfixes Nature's Swiftness makes it instant, its healing doubled, and it can't be cast on the move. The most planned level-60 Druid build is Resto 11/5/35."
  }
 ],
 "keyspells": "",
 "sections": [
  {
   "id": "druid-builds",
   "label": "Skyborne Druid",
   "h2": "Feral leveling guide &amp; saved builds",
   "html": "\n  <p class=\"sdesc\">Condensed from WoW Campfire's video <a href=\"https://youtu.be/lKp7eef8dlw\" target=\"_blank\" rel=\"noopener\">Levelling a Druid in WoW Forever? Watch this first</a>, checked against the launch talent tree. Its talent order finishes exactly on the saved Bear build. Druid changed a lot right before launch, so guides that mention Berserk or Tiger's Fury are out of date. If a tooltip in game disagrees, trust the tooltip.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" id=\"talents\" data-key=\"druid-builds-talent-order\" open>\n      <summary><h3>Talent order <small>checklist · 51 points · ends at 9/32/10</small></h3></summary>\n      <p class=\"why\">Tick each row as you spend the points. Gold rows are due at your level; the outlined row is your next point. Switch tabs to tick the RestoCat Weaver order instead.</p>\n      <div id=\"talents-app\"></div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"druid-builds-how-forms-work-now\">\n      <summary><h3>How forms work now</h3></summary>\n      <ul>\n        <li>Bear and Cat auto attacks use your weapon's DPS at a fixed speed, so weapon DPS is the only weapon number to compare.</li>\n        <li>Weightstones, enchants and potions all work in form. You can open doors and use objects in form too.</li>\n        <li>Bear is for groups. Cat is for spread-out or ranged mobs; it has no real AoE, so never take a pack in Cat.</li>\n        <li>Levels 1–9 are slow. It picks up once Bear arrives at 10.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"druid-builds-rotation\" open>\n      <summary><h3>Rotation</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">Bear</span><p>Enrage, then Maul on one or two mobs, Swipe on three or more.</p></div>\n        <div class=\"step\"><span class=\"lv\">Cat</span><p>Keep Rake up, build with Claw, finish with Rip on anything that will live long enough. Use Ferocious Bite on something nearly dead.</p></div>\n        <div class=\"step\"><span class=\"lv\">Both</span><p>Faerie Fire is free in form, so keep using it. Keep Thorns up; early on it's a big share of your damage, more so against several mobs.</p></div>\n        <div class=\"step\"><span class=\"lv\">Heal</span><p>Spending mana pauses regen for 5 sec, so do all your healing in one burst, then shift back.</p></div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"druid-builds-form-quests\">\n      <summary><h3>Form quests</h3></summary>\n      <ul>\n        <li><b>10, Bear:</b> do it right away; it's your biggest early power spike. Skyborne get <b>The Great Ursera Spirit</b>.</li>\n        <li><b>14:</b> Lessons Anew in Moonglade gives Cure Poison.</li>\n        <li><b>20, Cat:</b> go straight for it. Skyborne get <b>The Great Windborne Cat Spirit</b>.</li>\n        <li><b>Later:</b> Aquatic Form, also by quest.</li>\n        <li>Most run through Dendrite Starblaze in Moonglade, so Teleport: Moonglade (10) keeps them quick.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"druid-builds-weapon-upgrades\">\n      <summary><h3>Weapon upgrades <small>DPS first, by a lot</small></h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">15</span><p>Segmented Spider Leg, Ruins of Lordaeron</p></div>\n        <div class=\"step\"><span class=\"lv\">18</span><p>Smite's Mighty Hammer, Deadmines</p></div>\n        <div class=\"step\"><span class=\"lv\">23</span><p>Graverobber's Shovel, Stockade</p></div>\n        <div class=\"step\"><span class=\"lv\">29</span><p>Manual Crowd Pummeler, Gnomeregan: 29 DPS, +16 Strength. Heavehammer, from a Wetlands Excavation Site quest, is nearly as good.</p></div>\n        <div class=\"step\"><span class=\"lv\">31</span><p>Loksey's Training Stick, Scarlet Monastery</p></div>\n        <div class=\"step\"><span class=\"lv\">39</span><p>Mograine's Might, Scarlet Monastery: a huge jump</p></div>\n        <div class=\"step\"><span class=\"lv\">42</span><p>Grimlok's Charge, Uldaman. It's a polearm, so train polearms first.</p></div>\n        <div class=\"step\"><span class=\"lv\">~50</span><p>Princess Theradras' Scepter, Maraudon</p></div>\n        <div class=\"step\"><span class=\"lv\">58</span><p>Legionite Glaive, crafted by Blacksmiths</p></div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"druid-builds-armor-stats\">\n      <summary><h3>Armor stats</h3></summary>\n      <p>Agility first, then Stamina, then Spirit. Spirit matters more after 30, when you heal more between fights. Wear leather, but take cloth when its stats are much better, since forms add plenty of armor.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"druid-builds-dungeons-balance\">\n      <summary><h3>Dungeons &amp; Balance</h3></summary>\n      <ul>\n        <li>The leveling build already tanks dungeons, no respec. Bear threat was raised to 115% just before launch.</li>\n        <li>Growl to taunt, Swipe on groups, Primal Bite whenever it's up.</li>\n        <li>Before a big pull, put Regrowth and Rejuvenation on yourself, then Demoralizing Roar once you're in.</li>\n        <li>Rebirth at 20 brings someone back mid-fight.</li>\n        <li>Balance is a real option at range: Starfire got about 40% more base damage, and Wrath speeds up your next Starfire through Eclipse. Moonkin Form comes at 40 but needs a respec.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"druid-builds-common-mistakes\">\n      <summary><h3>Common mistakes</h3></summary>\n      <ul>\n        <li>Putting off the Bear Form quest.</li>\n        <li>Skipping weapon upgrades. If your damage feels bad, that's usually why.</li>\n        <li>Fighting groups in Cat Form.</li>\n        <li>Using Rip on something that's about to die.</li>\n        <li>Letting Thorns or Mark of the Wild drop.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"druid-builds-your-saved-level-60-builds\">\n      <summary><h3>Saved level-60 builds</h3></summary>\n      <p>Made in Talents Forever on beta build 70755 with hotfixes (Nov 8). Bear and Cat share 49 of their 51 points, so switching between them is a 2-point respec.</p>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"druid-builds-feral-bear-tank\">\n      <summary><h3>Feral · Bear (tank) <small>51 points · 9/32/10</small></h3></summary>\n      <p>Same Balance and Restoration points as the cat build. The bear version takes Primal Bite and a third point of Furor. <a href=\"https://talentsforever.com/druid/60/050022-5323000212300212501-055-QTSYZX1R1adefR1XgiBFElmR-12?b=70755h&amp;d=261108\" target=\"_blank\" rel=\"noopener\">Open in Talents Forever</a></p>\n      <div class=\"cols\">\n        <div><span class=\"label\">Balance · 9</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Genesis</b></li>\n            <li><span class=\"rk\">2/2</span><b>Nature's Majesty</b></li>\n            <li><span class=\"rk\">2/2</span><b>Nature's Reach</b></li>\n          </ol>\n        </div>\n        <div><span class=\"label\">Feral Combat · 32</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Ferocity</b></li>\n            <li><span class=\"rk\">3/3</span><b>Feral Instinct</b></li>\n            <li><span class=\"rk\">3/5</span><b>Furor</b></li>\n            <li><span class=\"rk\">5/5</span><b>Rend and Tear</b></li>\n            <li><span class=\"rk\">2/2</span><b>Feral Swiftness</b></li>\n            <li><span class=\"rk\">2/2</span><b>Sharpened Claws</b></li>\n            <li><span class=\"rk\">2/2</span><b>Savage Fury</b></li>\n            <li><span class=\"rk\">1/1</span><b>Feral Charge</b></li>\n            <li><span class=\"rk\">3/3</span><b>Predatory Strikes</b></li>\n            <li><span class=\"rk\">2/2</span><b>Blood Frenzy</b></li>\n            <li><span class=\"rk\">2/2</span><b>Natural Instinct</b></li>\n            <li><span class=\"rk\">1/1</span><b>Leader of the Pack</b></li>\n            <li><span class=\"rk\">1/1</span><b>Primal Bite</b></li>\n          </ol>\n        </div>\n        <div><span class=\"label\">Restoration · 10</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Heart of the Wild</b></li>\n            <li><span class=\"rk\">5/5</span><b>Naturalist</b></li>\n          </ol>\n        </div>\n      </div>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"druid-builds-feral-cat-damage\">\n      <summary><h3>Feral · Cat (damage) <small>51 points · 9/32/10</small></h3></summary>\n      <p>Swaps the bear-only picks for Predatory Discipline and Shifting Power, with Furor at 2/5. <a href=\"https://talentsforever.com/druid/60/050022-52230002123012125001-055-QTSYZX1R1adefRXgBFElmcj-12?b=70755h&amp;d=261108\" target=\"_blank\" rel=\"noopener\">Open in Talents Forever</a></p>\n      <div class=\"cols\">\n        <div><span class=\"label\">Balance · 9</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Genesis</b></li>\n            <li><span class=\"rk\">2/2</span><b>Nature's Majesty</b></li>\n            <li><span class=\"rk\">2/2</span><b>Nature's Reach</b></li>\n          </ol>\n        </div>\n        <div><span class=\"label\">Feral Combat · 32</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Ferocity</b></li>\n            <li><span class=\"rk\">3/3</span><b>Feral Instinct</b></li>\n            <li><span class=\"rk\">2/5</span><b>Furor</b></li>\n            <li><span class=\"rk\">5/5</span><b>Rend and Tear</b></li>\n            <li><span class=\"rk\">2/2</span><b>Feral Swiftness</b></li>\n            <li><span class=\"rk\">2/2</span><b>Sharpened Claws</b></li>\n            <li><span class=\"rk\">2/2</span><b>Savage Fury</b></li>\n            <li><span class=\"rk\">1/1</span><b>Feral Charge</b></li>\n            <li><span class=\"rk\">3/3</span><b>Predatory Strikes</b></li>\n            <li><span class=\"rk\">1/1</span><b>Predatory Discipline</b></li>\n            <li><span class=\"rk\">2/2</span><b>Blood Frenzy</b></li>\n            <li><span class=\"rk\">2/2</span><b>Natural Instinct</b></li>\n            <li><span class=\"rk\">1/1</span><b>Leader of the Pack</b></li>\n            <li><span class=\"rk\">1/1</span><b>Shifting Power</b></li>\n          </ol>\n        </div>\n        <div><span class=\"label\">Restoration · 10</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Heart of the Wild</b></li>\n            <li><span class=\"rk\">5/5</span><b>Naturalist</b></li>\n          </ol>\n        </div>\n      </div>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"druid-builds-restoration-healer\">\n      <summary><h3>Restoration (healer) <small>51 points · 11/0/40</small></h3></summary>\n      <p>Wild Growth capstone with Swiftmend, Nature's Swiftness and Bloom. No Feral points. <a href=\"https://talentsforever.com/druid/60/050222--5053135153113211-BFEknmqrsuvwp1zptyxDo-12?b=70755h&amp;d=261108\" target=\"_blank\" rel=\"noopener\">Open in Talents Forever</a></p>\n      <div class=\"cols\">\n        <div><span class=\"label\">Balance · 11</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Genesis</b></li>\n            <li><span class=\"rk\">2/2</span><b>Moon and Stars</b> <span class=\"why\">· was Improved Moonfire</span></li>\n            <li><span class=\"rk\">2/2</span><b>Nature's Majesty</b></li>\n            <li><span class=\"rk\">2/2</span><b>Nature's Reach</b></li>\n          </ol>\n        </div>\n        <div><span class=\"label\">Feral Combat · 0</span><p class=\"why\">No points</p></div>\n        <div><span class=\"label\">Restoration · 40</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Nature's Focus</b></li>\n            <li><span class=\"rk\">5/5</span><b>Naturalist</b></li>\n            <li><span class=\"rk\">3/3</span><b>Reflection</b></li>\n            <li><span class=\"rk\">3/3</span><b>Subtlety</b></li>\n            <li><span class=\"rk\">1/3</span><b>Natural Shapeshifter</b></li>\n            <li><span class=\"rk\">5/5</span><b>Gift of Nature</b></li>\n            <li><span class=\"rk\">5/5</span><b>Tranquil Spirit</b></li>\n            <li><span class=\"rk\">3/3</span><b>Improved Rejuvenation</b></li>\n            <li><span class=\"rk\">1/1</span><b>Bloom</b></li>\n            <li><span class=\"rk\">1/1</span><b>Swiftmend</b></li>\n            <li><span class=\"rk\">1/1</span><b>Nature's Swiftness</b></li>\n            <li><span class=\"rk\">3/3</span><b>Living Spirit</b></li>\n            <li><span class=\"rk\">2/2</span><b>Improved Tranquility</b></li>\n            <li><span class=\"rk\">1/5</span><b>Improved Regrowth</b></li>\n            <li><span class=\"rk\">1/1</span><b>Wild Growth</b></li>\n          </ol>\n        </div>\n      </div>\n    </details>\n\n  </div>\n  "
  },
  {
   "id": "restocat-weaver",
   "label": "Separate build",
   "h2": "Druid RestoCat Weaver",
   "html": "\n  <p class=\"sdesc\">From MMARKERS' videos, updated to his final version, <i><a href=\"https://www.youtube.com/watch?v=lyyCkSBLMb0\" target=\"_blank\" rel=\"noopener\">Best Hybrid Druid Leveling Build | Warcraft Forever</a></i> (12 Nov 2026). You heal dungeons as Restoration, and between heals you drop into Cat Form for damage, swapping to a feral weapon. He now expects to keep this build at level 60. This is the PvE-server version. It's kept apart from the Feral guide above; nothing there changes.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" data-key=\"restocat-weaver-the-build\">\n      <summary><h3>The build <small>51 points · 11/24/16</small></h3></summary>\n      <p>Furor instead of Ferocity, Resto up to Swiftmend, then deep enough in Feral for Natural Instinct, then Genesis. PvE-server version: Thick Hide 3/3 (on a PvP server he takes Brutal Impact 2/2 and Thick Hide 1/3 instead). <a href=\"https://talentsforever.com/druid/60/05102201-0520030212301212-05531001001-Rl4Slnm2rmouVXZYca2dfeBF1EFCHa-12?b=70888h&amp;d=261115\" target=\"_blank\" rel=\"noopener\">Open in Talents Forever</a></p>\n      <div class=\"cols\">\n        <div><span class=\"label\">Balance · 11</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Genesis</b></li>\n            <li><span class=\"rk\">2/2</span><b>Nature's Majesty</b></li>\n            <li><span class=\"rk\">2/2</span><b>Nature's Reach</b></li>\n            <li><span class=\"rk\">1/3</span><b>Moonglow</b></li>\n            <li><span class=\"rk\">1/1</span><b>Nature's Splendor</b></li>\n          </ol>\n        </div>\n        <div><span class=\"label\">Feral Combat · 24</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Furor</b></li>\n            <li><span class=\"rk\">2/2</span><b>Feral Swiftness</b></li>\n            <li><span class=\"rk\">3/3</span><b>Thick Hide</b></li>\n            <li><span class=\"rk\">2/2</span><b>Sharpened Claws</b></li>\n            <li><span class=\"rk\">2/2</span><b>Savage Fury</b></li>\n            <li><span class=\"rk\">1/1</span><b>Feral Charge</b></li>\n            <li><span class=\"rk\">3/3</span><b>Predatory Strikes</b></li>\n            <li><span class=\"rk\">1/1</span><b>Predatory Discipline</b></li>\n            <li><span class=\"rk\">2/2</span><b>Blood Frenzy</b></li>\n            <li><span class=\"rk\">2/2</span><b>Natural Instinct</b></li>\n            <li><span class=\"rk\">1/1</span><b>Leader of the Pack</b></li>\n          </ol>\n        </div>\n        <div><span class=\"label\">Restoration · 16</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Heart of the Wild</b></li>\n            <li><span class=\"rk\">5/5</span><b>Naturalist</b></li>\n            <li><span class=\"rk\">3/3</span><b>Reflection</b></li>\n            <li><span class=\"rk\">1/3</span><b>Natural Shapeshifter</b></li>\n            <li><span class=\"rk\">1/1</span><b>Bloom</b></li>\n            <li><span class=\"rk\">1/1</span><b>Swiftmend</b></li>\n          </ol>\n        </div>\n      </div>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"restocat-weaver-talent-order\">\n      <summary><h3>Talent order <small>his 12 Nov order, by level · PvE</small></h3></summary>\n      <div class=\"cols\">\n        <div><span class=\"label\">Resto core, levels 10–32</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Furor</b> <span class=\"why\">· 10–14; energy on shifting, the point of weaving. Skip Ferocity</span></li>\n            <li><span class=\"rk\">4/5</span><b>Heart of the Wild</b> <span class=\"why\">· 15–18; preps the Resto tree, since Nature's Focus is weak here</span></li>\n            <li><span class=\"rk\">2/2</span><b>Feral Swiftness</b> <span class=\"why\">· 19–20; ready for Cat at 20</span></li>\n            <li><span class=\"rk\">5/5</span><b>Heart of the Wild</b> <span class=\"why\">· 21</span></li>\n            <li><span class=\"rk\">3/3</span><b>Reflection</b> <span class=\"why\">· 22–24; regen while casting. He now takes this before Naturalist</span></li>\n            <li><span class=\"rk\">2/5</span><b>Naturalist</b> <span class=\"why\">· 25–26; opens the next row</span></li>\n            <li><span class=\"rk\">1/1</span><b>Bloom</b> <span class=\"why\">· 27</span></li>\n            <li><span class=\"rk\">5/5</span><b>Naturalist</b> <span class=\"why\">· 28–30; faster Healing Touch, +10% damage</span></li>\n            <li><span class=\"rk\">1/3</span><b>Natural Shapeshifter</b> <span class=\"why\">· 31; cheaper shifting. More is optional</span></li>\n            <li><span class=\"rk\">1/1</span><b>Swiftmend</b> <span class=\"why\">· 32; your emergency heal</span></li>\n          </ol>\n        </div>\n        <div><span class=\"label\">Feral, then Balance, 33–60</span>\n          <ol class=\"talents\" start=\"11\">\n            <li><span class=\"rk\">3/3</span><b>Thick Hide</b> <span class=\"why\">· 33–35; Cat is squishy, so this cuts downtime. His PvE pick (PvP servers take Brutal Impact 2/2 + Thick Hide 1/3)</span></li>\n            <li><span class=\"rk\">2/2</span><b>Savage Fury</b> <span class=\"why\">· 36–37; pure damage</span></li>\n            <li><span class=\"rk\">2/2</span><b>Sharpened Claws</b> <span class=\"why\">· 38–39; passive damage while you lack feral gear</span></li>\n            <li><span class=\"rk\">1/1</span><b>Feral Charge</b> <span class=\"why\">· 40; last in its row on a PvE server</span></li>\n            <li><span class=\"rk\">1/1</span><b>Predatory Discipline</b> <span class=\"why\">· 41; first point in the next row. Let energy build to about 50% before Ferocious Bite for bonus damage</span></li>\n            <li><span class=\"rk\">2/3</span><b>Predatory Strikes</b> <span class=\"why\">· 42–43; attack power, which matters in healer gear</span></li>\n            <li><span class=\"rk\">2/2</span><b>Blood Frenzy</b> <span class=\"why\">· 44–45</span></li>\n            <li><span class=\"rk\">2/2</span><b>Natural Instinct</b> <span class=\"why\">· 46–47; healing from Intellect. He takes healing before the crit</span></li>\n            <li><span class=\"rk\">1/1</span><b>Leader of the Pack</b> <span class=\"why\">· 48</span></li>\n            <li><span class=\"rk\">5/5</span><b>Genesis</b> <span class=\"why\">· 49–53; +10% to HoTs and bleeds, Rake and Rip included</span></li>\n            <li><span class=\"rk\">1/2</span><b>Nature's Reach</b> <span class=\"why\">· 54; some hit chance</span></li>\n            <li><span class=\"rk\">2/2</span><b>Nature's Majesty</b> <span class=\"why\">· 55–56</span></li>\n            <li><span class=\"rk\">2/2</span><b>Nature's Reach</b> <span class=\"why\">· 57</span></li>\n            <li><span class=\"rk\">1/3</span><b>Moonglow</b> <span class=\"why\">· 58</span></li>\n            <li><span class=\"rk\">1/1</span><b>Nature's Splendor</b> <span class=\"why\">· 59; longer HoTs, so longer Cat windows</span></li>\n            <li><span class=\"rk\">3/3</span><b>Predatory Strikes</b> <span class=\"why\">· 60; the last point</span></li>\n          </ol>\n        </div>\n      </div>\n      <p class=\"why\"><b>What changed (12 Nov):</b> same 51 points as before. Predatory Discipline moves from your last point up to 41 now that he rates it, Savage Fury comes before Sharpened Claws, Feral Charge goes last in its row on PvE, and Balance starts with a point of Nature's Reach. Levels 10–32 are unchanged. Already a point or two off? He says don't pay to respec at low level.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"restocat-weaver-why-it-works\">\n      <summary><h3>Why it works</h3></summary>\n      <ul>\n        <li><b>Weapon DPS scaling:</b> Cat damage comes from your weapon's DPS, so a feral weapon swap gives real damage even in full healer gear.</li>\n        <li><b>Natural Instinct:</b> bonus healing and Intellect from deep Feral.</li>\n        <li><b>Nature's Splendor &amp; Genesis:</b> longer, stronger HoTs keep the group safe while you're in Cat.</li>\n        <li><b>Swiftmend:</b> instant recovery when you pop out.</li>\n        <li><b>Naturalist:</b> faster Healing Touch plus 10% damage.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"restocat-weaver-healer-first\">\n      <summary><h3>Healer first <small>when to go Cat</small></h3></summary>\n      <ul>\n        <li>Keep Regrowth on the tank at all times, Rejuvenation when needed, then shift.</li>\n        <li>Only shift if you'll stay in Cat long enough to earn back the mana. A 4–5 second window isn't worth it.</li>\n        <li>Big pull and the tank's at 70%? Stay out, heal, and wait for things to settle.</li>\n        <li>Big hitter or a heavy bleed on someone: pop out and heal.</li>\n        <li>Don't stand in cleaves for damage. More damage taken means more healing.</li>\n        <li>Mana low: auto attack out of form, let it recover, drink, try again next pull.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"restocat-weaver-mana\">\n      <summary><h3>Mana</h3></summary>\n      <ul>\n        <li>Mind the 5-second rule: casting pauses regen for 5 sec.</li>\n        <li>Reflection lets you regen during that window, so shifting gets much easier once you have it.</li>\n        <li>Spirit matters a lot here; it's what makes shifting in and out pay off.</li>\n        <li>Natural Shapeshifter cuts shift costs further, at the price of healing talents.</li>\n        <li>Clearcasting: shift out and spend it on a big heal if anyone needs one, otherwise use it on damage.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"restocat-weaver-cat-rotation\">\n      <summary><h3>Cat rotation</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">Single</span><p>Claw to build. Rake if the target lives 9+ sec, Rip if it lives 12+ sec at 4–5 combo points, otherwise Ferocious Bite. Under 9 sec, just Claw.</p></div>\n        <div class=\"step\"><span class=\"lv\">Bite</span><p>From 41 (Predatory Discipline), let energy build to about 50% before Ferocious Bite. It doesn't spend the extra energy but still adds damage for it.</p></div>\n        <div class=\"step\"><span class=\"lv\">Armor</span><p>Bleeds ignore armor. Against shields, plate or crocodiles, favour Rake and Rip over Bite. Snakes and casters are low armor.</p></div>\n        <div class=\"step\"><span class=\"lv\">Multi</span><p>Rake several targets if they'll live long enough, otherwise Claw and finish. Combo points reset when you switch targets.</p></div>\n        <div class=\"step\"><span class=\"lv\">Cycle</span><p>HoTs out, Cat in, damage, repeat. Watch your mana the whole time.</p></div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"restocat-weaver-gearing\">\n      <summary><h3>Gearing <small>updated 12 Nov</small></h3></summary>\n      <ul>\n        <li><b>Keep it simple:</b> Resto gear plus a feral weapon. That's enough to quest and to heal dungeons.</li>\n        <li><b>Your feral weapon matters most.</b> Always carry one alongside your healing weapons.</li>\n        <li><b>Leatherworking is optional now.</b> Auction house gear is cheap; buy the materials and have a leatherworker craft it if that's cheaper.</li>\n        <li>Dungeons will mostly drop healing gear, and good agility pieces are hard to find. When a strong feral piece comes along (a quest reward, say), take it.</li>\n        <li><b>Make hybrid pieces with cheap enchants:</b> e.g. +16 healing on a feral piece (his cost 10 silver), or +7 agility on healing gloves.</li>\n        <li>Early on, crafted leather like Barbaric Shoulders is still good. Two full sets is fine but not needed.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"restocat-weaver-weapon-swap-macros\">\n      <summary><h3>Weapon swap macros</h3></summary>\n      <p>Your Cat-Weapon Swap and the Caster Swap, with MMARKERS' tips, are now with the rest of the <a href=\"#macros\">Druid macros</a>.</p>\n    </details>\n\n  </div>\n  "
  },
  {
   "id": "macros",
   "label": "Copy them exactly",
   "h2": "Druid macros",
   "html": "\n  <p class=\"sdesc\">12 macros, written exactly as they go in the game's macro window. One wrong letter and a macro does nothing, so copy them with the button.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel wide\" data-key=\"macros-how-to-add-one\">\n      <summary><h3>How to add one</h3></summary>\n      <ol class=\"howto\">\n        <li>Type <code>/macro</code>, open the tab with this character's name, and click New.</li>\n        <li>Type the <b>macro name</b> as shown (16 characters at most) and pick the red question mark icon, so the button shows the spell's own icon.</li>\n        <li>Copy the <b>macro text</b> in exactly, line breaks included. Spell names must match your spellbook letter for letter: capitals, spaces and apostrophes.</li>\n        <li>Drag the macro onto your action bar.</li>\n      </ol>\n      <ul class=\"mtips\">\n        <li><span class=\"ph\">Highlighted words</span> are placeholders: replace them with the exact name of your own item.</li>\n        <li><b>Ctrl</b> means hold Ctrl as you press the button. <b>MO</b> means mouseover: it casts on whatever is under your mouse, and on your target when nothing is.</li>\n        <li>Leave rank numbers off and the macro always casts your highest rank, so you never have to re-drag spells after training.</li>\n        <li>The level tag is when the spell becomes available. Make the macro then, or it will just show a question mark.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel wide macset\" data-key=\"macros-weapon-swaps\">\n      <summary><h3>Weapon swaps</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Cat-Weapon Swap</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-rc1\" data-for=\"rc1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"rc1\">#showtooltip Cat Form\n/cast [noform:3] Cat Form\n/equip <span class=\"ph\">damage weapon</span></pre>\n        <p class=\"why\">Your macro, word for word. Shifts to Cat and equips your feral weapon.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Caster Swap</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-rc2\" data-for=\"rc2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"rc2\">/cancelform\n/equip <span class=\"ph\">Your Healing Weapon</span></pre>\n        <p class=\"why\">Leaves Cat and puts the healing weapon back on.</p></div>\n        <div class=\"macnote\"><b>Two words to change before Cat-Weapon Swap works</b><ul>\n<li><b>damage weapon</b>: type your weapon's exact name, spaces and apostrophes included, e.g. <code>/equip Smite's Mighty Hammer</code>. Left as is, you shift to Cat but nothing gets equipped.</li>\n<li><b>noform:3</b>: forms are numbered Bear, Aquatic, Cat, Travel, skipping any you haven't learned. Cat is 3 only once you have Aquatic Form; before that it's 2, so use <code>[noform:2]</code>. To check, go Cat and type <code>/run print(GetShapeshiftForm())</code>.</li>\n</ul></div>\n<ul class=\"mtips\">\n<li>Wait for the global cooldown before pressing a swap. Shift straight after an instant like Moonfire and the weapon won't swap.</li>\n<li>MMARKERS binds the swaps to Shift + scroll wheel, and keeps both weapons on his bar to see which is equipped.</li>\n<li>He doesn't auto-swap for Bear, since he often goes Bear defensively and doesn't want to lose healing.</li>\n</ul>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-healing-between-weaves\">\n      <summary><h3>Healing between weaves</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Regrowth MO</b><span class=\"lvl\">Lv 12</span></div><button class=\"copy\" id=\"copy-dr1\" data-for=\"dr1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"dr1\">#showtooltip Regrowth\n/cancelform\n/cast [@mouseover,help,nodead][help,nodead][@player] Regrowth</pre>\n        <p class=\"why\">Leaves any form and heals whoever is under your mouse, then your friendly target, then you.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Rejuv MO</b><span class=\"lvl\">Lv 4</span></div><button class=\"copy\" id=\"copy-dr2\" data-for=\"dr2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"dr2\">#showtooltip Rejuvenation\n/cancelform\n/cast [@mouseover,help,nodead][help,nodead][@player] Rejuvenation</pre>\n        <p class=\"why\">Same, for Rejuvenation.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Swiftmend MO</b><span class=\"lvl\">Talent</span></div><button class=\"copy\" id=\"copy-dr3\" data-for=\"dr3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"dr3\">#showtooltip Swiftmend\n/cancelform\n/cast [@mouseover,help,nodead][help,nodead][@player] Swiftmend</pre>\n        <p class=\"why\">Your emergency heal when you pop out of Cat. RestoCat build, level 32.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Rebirth MO</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-dr4\" data-for=\"dr4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"dr4\">#showtooltip Rebirth\n/cancelform\n/cast [@mouseover,help,dead][help,dead] Rebirth</pre>\n        <p class=\"why\">Combat res on the dead player under your mouse, or your target.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Innervate</b><span class=\"lvl\">Lv 40</span></div><button class=\"copy\" id=\"copy-dr5\" data-for=\"dr5\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"dr5\">#showtooltip Innervate\n/cast [@mouseover,help,nodead][@player] Innervate</pre>\n        <p class=\"why\">On the healer under your mouse, otherwise on you.</p></div>\n        \n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-bear\">\n      <summary><h3>Bear</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Bite + Maul</b><span class=\"lvl\">Lv 40</span></div><button class=\"copy\" id=\"copy-dr6\" data-for=\"dr6\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"dr6\">#showtooltip Primal Bite\n/startattack\n/cast Maul\n/cast Primal Bite</pre>\n        <p class=\"why\">Queues Maul on your next swing and fires Primal Bite. Maul is off the global cooldown, so both go out.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Growl MO</b><span class=\"lvl\">Lv 10</span></div><button class=\"copy\" id=\"copy-dr7\" data-for=\"dr7\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"dr7\">#showtooltip Growl\n/cast [@mouseover,harm,nodead][] Growl</pre>\n        <p class=\"why\">Taunts the mob under your mouse without losing your target.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Charge Bash</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-dr8\" data-for=\"dr8\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"dr8\">#showtooltip\n/cast Feral Charge\n/cast Bash</pre>\n        <p class=\"why\">Feral Charge from range, Bash up close. Both interrupt casters.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Bear Stay</b><span class=\"lvl\">Lv 10</span></div><button class=\"copy\" id=\"copy-dr9\" data-for=\"dr9\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"dr9\">#showtooltip\n/cast !Bear Form</pre>\n        <p class=\"why\">The ! means pressing it again won't drop you out of Bear. At 40, change it to !Dire Bear Form.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Travel Stay</b><span class=\"lvl\">Lv 30</span></div><button class=\"copy\" id=\"copy-dr10\" data-for=\"dr10\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"dr10\">#showtooltip\n/cast !Travel Form</pre>\n        <p class=\"why\">Same idea for Travel Form, so a double press doesn't dismount you.</p></div>\n        \n    </details>\n    <div class=\"gpanel wide\">\n      <p class=\"why\">Built from the guides on this page and the Forever macro lists on <a href=\"https://rankedboost.com/world-of-warcraft/forever/macros/\" target=\"_blank\" rel=\"noopener\">RankedBoost</a> (Nov 7) and <a href=\"https://kami-labs.fr/en/wow-forever/macros-wow-forever-9-classes/\" target=\"_blank\" rel=\"noopener\">Kami Labs</a>, checked against the spells your guides confirm exist in Forever. Ideas using removed spells, such as Tiger's Fury, were left out. Syntax follows the <a href=\"https://warcraft.wiki.gg/wiki/Macro_conditionals\" target=\"_blank\" rel=\"noopener\">macro conditionals reference</a>.</p>\n    </div>\n  </div>\n  "
  },
  {
   "id": "notes",
   "label": "Read before you commit",
   "h2": "Caveats &amp; sources",
   "html": "\n  <div class=\"notes\">\n<div class=\"note\"><h3>Beta numbers, live game</h3><p>All numbers come from the final beta build (70425). The game launched Nov 4, so check anything important in game. Blizzard can still retune live.</p></div>\n<div class=\"note\"><h3>Racials corrected Nov 5</h3><p>The first version of the Forever Roster Planner had several wrong racials, including Earth Fury for Dwarves (it's Artisan's Precision, +1% hit), Ruthless at 2% (it's 1%) and Wind Blessed at 3% (it's 2%). The table now matches Talents Forever and DonTheCrown's guide.</p></div>\n<div class=\"note\"><h3>Popularity isn't power</h3><p>Spec shares count what people plan in a calculator. Icy Veins also advises picking a playstyle you'll enjoy rather than chasing the strongest class, since tuning keeps shifting.</p></div>\n<div class=\"note\"><h3>Druid changed right before launch</h3><p>Berserk and Tiger's Fury were removed and Primal Bite took Berserk's place. The Feral spec split and first points in the class card come from beta calculator counts, before those changes.</p></div>\n  </div>\n  <h3 style=\"margin:28px 0 12px\">Sources</h3>\n  <ul class=\"sources\">\n    <li><a href=\"https://youtu.be/lKp7eef8dlw\" target=\"_blank\" rel=\"noopener\">WoW Campfire: Levelling a Druid in WoW Forever? Watch this first (YouTube)</a></li>\n    <li><a href=\"https://talentsforever.com/druid/60/050022-5323000212300212501-055-QTSYZX1R1adefR1XgiBFElmR-12?b=70755h&amp;d=261108\" target=\"_blank\" rel=\"noopener\">Talents Forever: your Feral Bear build</a></li>\n    <li><a href=\"https://talentsforever.com/druid/60/050022-52230002123012125001-055-QTSYZX1R1adefRXgBFElmcj-12?b=70755h&amp;d=261108\" target=\"_blank\" rel=\"noopener\">Talents Forever: your Feral Cat build</a></li>\n    <li><a href=\"https://talentsforever.com/druid/60/050222--5053135153113211-BFEknmqrsuvwp1zptyxDo-12?b=70755h&amp;d=261108\" target=\"_blank\" rel=\"noopener\">Talents Forever: your Restoration build</a></li>\n    <li><a href=\"https://www.youtube.com/watch?v=lyyCkSBLMb0\" target=\"_blank\" rel=\"noopener\">MMARKERS: Best Hybrid Druid Leveling Build | Warcraft Forever (YouTube, 12 Nov 2026)</a></li>\n    <li><a href=\"https://www.youtube.com/watch?v=_ZJ_nhUrtHY\" target=\"_blank\" rel=\"noopener\">MMARKERS: Resto/Feral Cat Weaving: The Hybrid Leveling Build | Warcraft Forever (YouTube, 6 Nov 2026)</a></li>\n    <li><a href=\"https://talentsforever.com/druid/60/05102201-0520030212301212-05531001001-Rl4Slnm2rmouVXZYca2dfeBF1EFCHa-12?b=70888h&amp;d=261115\" target=\"_blank\" rel=\"noopener\">Talents Forever: your RestoCat Weaver build</a></li>\n    <li><a href=\"https://talentsforever.com/racials\" target=\"_blank\" rel=\"noopener\">Talents Forever: races, classes and racials</a></li>\n    <li><a href=\"https://talentsforever.com/popular\" target=\"_blank\" rel=\"noopener\">Talents Forever: most popular builds</a></li>\n    <li><a href=\"https://talentsforever.com/leveling\" target=\"_blank\" rel=\"noopener\">Talents Forever: leveling builds</a></li>\n    <li><a href=\"https://talentsforever.com/guides\" target=\"_blank\" rel=\"noopener\">Talents Forever: what changed since Classic</a></li>\n    <li><a href=\"https://hyjal.cc/racials\" target=\"_blank\" rel=\"noopener\">Hyjal: racial abilities</a></li>\n    <li><a href=\"https://www.icy-veins.com/wow-forever/skyborne\" target=\"_blank\" rel=\"noopener\">Icy Veins: the Skyborne</a></li>\n    <li><a href=\"https://www.icy-veins.com/wow-forever/news/racial-and-class-tuning-new-features-and-options-massive-wow-forever-beta-development-notes-october-15th/\" target=\"_blank\" rel=\"noopener\">Icy Veins: Oct 15 beta development notes</a></li>\n  </ul>\n  "
  }
 ]
};
