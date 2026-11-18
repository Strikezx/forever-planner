/* WoW Forever Planner: Rogue guide. Class data last checked/updated Nov 15, 2026.
   Loads after data/classes.js and adds itself to window.FP_DATA.classes. */
window.FP_DATA.classes.rogue = {
 "key": "rogue",
 "name": "Rogue",
 "color": "#FFF468",
 "ink": "#8A7F1A",
 "roles": [
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
   "race": "Troll",
   "new": false
  },
  {
   "race": "Skyborne (Windshaper)",
   "new": true
  }
 ],
 "blurb": "Assassination gets Mutilate and a Venom finisher. Combat's Restless Blades lets finishers shorten Adrenaline Rush, Blade Flurry, Sprint, Evasion and Vanish. Subtlety expands bleed and Backstab play. Lock picking, Pick Pocket, Sap and Distract are unchanged.",
 "specs": [
  [
   "Assassination",
   "Mutilate at 30 and a new Venom finisher at 40 make it a real poison spec."
  ],
  [
   "Combat",
   "Restless Blades lets finishers shorten Adrenaline Rush, Blade Flurry, Sprint, Evasion and Vanish. Riposte at 20, Blade Flurry at 30."
  ],
  [
   "Subtlety",
   "Expands bleed and Backstab play, built around Stealth openers. The most-planned leveling spec in the calculator."
  ]
 ],
 "general": "Lock picking, Pick Pocket, Sap and Distract are unchanged.",
 "lvl": [
  [
   "Subtlety",
   38.5
  ],
  [
   "Combat",
   31.8
  ],
  [
   "Assassination",
   29.7
  ]
 ],
 "first": [
  "Camouflage 5/5",
  "Opportunity 2/2",
  "Improved Ambush 3/3"
 ],
 "at60": "Sub 46% · Assn 29% · Combat 25%. Top build: Combat 18/32/0.",
 "builds": {
  "wda": {
   "cols": [
    "Levels 10–32",
    "Levels 33–60"
   ],
   "rows": [
    [
     0,
     "2/2",
     "Remorseless Attacks",
     10,
     11,
     2,
     "Assassination tree. After a kill, your next Sinister Strike gets +40% crit if you reach the next mob within 20 sec"
    ],
    [
     0,
     "2/2",
     "Efficient Strikes",
     12,
     13,
     2,
     "Sinister Strike costs 5 less"
    ],
    [
     0,
     "3/3",
     "Coup de Grace",
     14,
     16,
     3,
     "+20% Eviscerate, the first talent you really notice"
    ],
    [
     0,
     "3/3",
     "Deflection",
     17,
     19,
     3,
     "only taken to open Riposte"
    ],
    [
     0,
     "2/3",
     "Precision",
     20,
     21,
     2,
     "miss less"
    ],
    [
     0,
     "1/1",
     "Riposte",
     22,
     22,
     1,
     "swap with Endurance if you'd rather have that first"
    ],
    [
     0,
     "2/2",
     "Endurance",
     23,
     24,
     2,
     "Evasion and Sprint from 5 min to 2 min"
    ],
    [
     0,
     "3/3",
     "Precision",
     25,
     25,
     1,
     "level not given in the video; filled in so the build adds up to 51"
    ],
    [
     0,
     "1/2",
     "Composure",
     26,
     26,
     1,
     "first hit on full energy costs 5 less"
    ],
    [
     0,
     "1/1",
     "Flawless Execution",
     27,
     27,
     1,
     "Eviscerate from 35 energy to 20"
    ],
    [
     0,
     "3/3",
     "Aggression",
     28,
     30,
     3,
     "+15% Sinister Strike and Eviscerate"
    ],
    [
     0,
     "1/2",
     "Weapon Expertise",
     31,
     31,
     1,
     ""
    ],
    [
     0,
     "1/1",
     "Blade Flurry",
     32,
     32,
     1,
     "the closest thing to area damage"
    ],
    [
     1,
     "2/2",
     "Weapon Expertise",
     33,
     33,
     1,
     ""
    ],
    [
     1,
     "2/2",
     "Dual Wield Specialization",
     34,
     35,
     2,
     "+50% off-hand damage, which also helps Shank"
    ],
    [
     1,
     "5/5",
     "Hack and Slash",
     36,
     40,
     5,
     "5% chance of an extra attack with a sword or axe"
    ],
    [
     1,
     "1/5",
     "Flash of Steel",
     41,
     41,
     1,
     "to reach Adrenaline Rush"
    ],
    [
     1,
     "1/1",
     "Adrenaline Rush",
     42,
     42,
     1,
     "double energy regen for 15 sec, 5 min cooldown"
    ],
    [
     1,
     "5/5",
     "Flash of Steel",
     43,
     46,
     4,
     "with Shank rank 2 at 44, about 40 energy back every 8 sec"
    ],
    [
     1,
     "2/2",
     "Composure",
     47,
     47,
     1,
     "first hit now costs 20 (45 at the start)"
    ],
    [
     1,
     "5/5",
     "Malice",
     48,
     52,
     5,
     "needed before Lethality"
    ],
    [
     1,
     "3/3",
     "Improved Slice and Dice",
     53,
     55,
     3,
     "lasts longer"
    ],
    [
     1,
     "2/2",
     "Lethality",
     56,
     57,
     2,
     "bigger Sinister Strike crits"
    ],
    [
     1,
     "3/3",
     "Ruthlessness",
     58,
     60,
     3,
     "finishers can add a combo point"
    ]
   ],
   "name": "Combat, no stealth",
   "sub": "We Ding Again"
  },
  "don": {
   "cols": [
    "Combat first",
    "Then Assassination, and finish Combat"
   ],
   "rows": [
    [
     0,
     "2/2",
     "Efficient Strikes",
     10,
     11,
     2,
     "cheaper Sinister Strike"
    ],
    [
     0,
     "3/3",
     "Coup de Grace",
     12,
     14,
     3,
     "more finisher damage"
    ],
    [
     0,
     "2/3",
     "Precision",
     15,
     16,
     2,
     "hit chance"
    ],
    [
     0,
     "3/3",
     "Deflection",
     17,
     19,
     3,
     "parry; only works on melee hits from the front"
    ],
    [
     0,
     "1/1",
     "Riposte",
     20,
     20,
     1,
     "after a parry, out-hits Sinister Strike, costs less and disarms"
    ],
    [
     0,
     "3/3",
     "Precision",
     21,
     21,
     1,
     "final point, 3% hit"
    ],
    [
     0,
     "2/2",
     "Endurance",
     22,
     23,
     2,
     "Sprint and Evasion more often"
    ],
    [
     0,
     "1/2",
     "Improved Sprint",
     24,
     24,
     1,
     "chance to break slows"
    ],
    [
     0,
     "1/1",
     "Flawless Execution",
     25,
     25,
     1,
     "cheaper Eviscerate"
    ],
    [
     0,
     "2/2",
     "Weapon Expertise",
     26,
     27,
     2,
     "about 4% more hits land on enemies facing you"
    ],
    [
     0,
     "2/3",
     "Aggression",
     28,
     29,
     2,
     "more Sinister Strike and Eviscerate damage"
    ],
    [
     0,
     "1/1",
     "Blade Flurry",
     30,
     30,
     1,
     "hits a second target, +20% attack speed"
    ],
    [
     0,
     "2/2",
     "Dual Wield Specialization",
     31,
     32,
     2,
     "stronger off hand, which also boosts Shank"
    ],
    [
     0,
     "2/5",
     "Hack and Slash",
     33,
     34,
     2,
     "swords or axes are likely best"
    ],
    [
     0,
     "5/5",
     "Flash of Steel",
     35,
     39,
     5,
     "turns Shank into a big energy generator"
    ],
    [
     0,
     "1/1",
     "Adrenaline Rush",
     40,
     40,
     1,
     "Combat capstone, 5 min cooldown"
    ],
    [
     1,
     "5/5",
     "Malice",
     41,
     45,
     5,
     "+5% crit"
    ],
    [
     1,
     "3/3",
     "Ruthlessness",
     46,
     48,
     3,
     "free combo points"
    ],
    [
     1,
     "2/3",
     "Improved Slice and Dice",
     49,
     50,
     2,
     ""
    ],
    [
     1,
     "2/2",
     "Lethality",
     51,
     52,
     2,
     "bigger crits from skills"
    ],
    [
     1,
     "5/5",
     "Hack and Slash",
     53,
     55,
     3,
     "final 3 points"
    ],
    [
     1,
     "3/3",
     "Aggression",
     56,
     56,
     1,
     "final point"
    ],
    [
     1,
     "3/3",
     "Improved Slice and Dice",
     57,
     57,
     1,
     "final point"
    ],
    [
     1,
     "2/2",
     "Improved Expose Armor",
     58,
     59,
     2,
     "for high-armor targets"
    ],
    [
     1,
     "1/5",
     "Improved Poisons",
     60,
     60,
     1,
     "or flex into Blood Splatter or Cold Blood"
    ]
   ],
   "name": "DonTheCrown's order",
   "sub": "16/35/0"
  }
 },
 "spells": [
  [
   6,
   "Sinister Strike"
  ],
  [
   10,
   "Dual Wield, Slice and Dice, Sprint"
  ],
  [
   20,
   "Poisons"
  ],
  [
   22,
   "Vanish, Distract"
  ],
  [
   24,
   "Shank"
  ],
  [
   26,
   "Cheap Shot"
  ],
  [
   30,
   "Kidney Shot"
  ],
  [
   34,
   "Blind"
  ],
  [
   40,
   "Mount training first"
  ],
  [
   44,
   "Shank rank 2"
  ]
 ],
 "weapons": [
  [
   10,
   "Blade of Cunning",
   "class quest"
  ],
  [
   13,
   "Durgen's Crescent Axe",
   "Hall of Thanes"
  ],
  [
   15,
   "Meathook Slicer",
   "Ruins of Lordaeron"
  ],
  [
   17,
   "Cell Keeper's Claws or Butcher's Slicer",
   "Shadowfang Keep"
  ],
  [
   19,
   "Cruel Barb",
   "Deadmines"
  ],
  [
   23,
   "Meteor Shard",
   "Shadowfang Keep"
  ],
  [
   25,
   "Hamhock's Cleaver",
   "Stockade"
  ],
  [
   30,
   "Pronged Reaver or Bloody Brass Knuckles",
   "Razorfen Kraul / Scarlet Monastery"
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
     "Sinister Strike to 3–4 points, then Eviscerate"
    ],
    [
     10,
     17,
     "Buy Dual Wield and Slice and Dice first"
    ],
    [
     18,
     21,
     "Poised: full energy makes your opener cheaper"
    ],
    [
     22,
     23,
     "Riposte after a parry (Riposte SS macro)"
    ],
    [
     24,
     60,
     "Shank every time it's up"
    ],
    [
     30,
     60,
     "Slice and Dice at 2 combo points"
    ],
    [
     32,
     60,
     "Blade Flurry at the start of a fight"
    ],
    [
     42,
     60,
     "Adrenaline Rush for elites and bad pulls"
    ]
   ]
  },
  {
   "type": "train"
  },
  {
   "type": "steps",
   "label": "Quests",
   "none": "No class quest right now",
   "items": [
    [
     10,
     14,
     "Class quest chain · Blade of Cunning"
    ],
    [
     20,
     24,
     "Poison quest, Westfall (he waits for 23–24)"
    ],
    [
     20,
     24,
     "The Horn of Xelthos, Shadowfang Keep"
    ],
    [
     28,
     32,
     "The Eye of Bhossca · Ruby-Adorned Blade"
    ]
   ]
  },
  {
   "type": "weapon",
   "label": "Weapon",
   "none": "Starter weapons"
  }
 ],
 "opts": [
  {
   "t": "Combat",
   "s": "DonTheCrown · ends 16/35/0 · using his gear lists, not his talents",
   "p": "Opens with Efficient Strikes 2/2, Coup de Grace 3/3, Precision 2/3, Deflection 3/3. Riposte at 20, Blade Flurry at 30, then Flash of Steel and the Adrenaline Rush capstone before moving into Assassination."
  },
  {
   "t": "Combat, no stealth",
   "s": "We Ding Again · ends 15/36/0",
   "p": "Two points in Remorseless Attacks first, then Combat. Walks straight up to mobs, adds Composure for cheaper first hits, and skips Improved Sprint, Improved Expose Armor and Improved Poisons. <a href=\"#wda-guide\">Full guide below.</a>"
  },
  {
   "t": "Subtlety",
   "s": "38.5% of calculator leveling builds",
   "p": "First points: Camouflage 5/5, Opportunity 2/2, Improved Ambush 3/3. The most popular plan in the Talents Forever calculator, built around Stealth openers."
  },
  {
   "t": "Assassination",
   "s": "29.7%",
   "p": "First points: Malice 5/5, Ruthlessness 3/3, Murder 2/2. Mutilate (30) and the new Venom finisher (40) make it a real poison spec."
  }
 ],
 "keyspells": "Sap, Slice and Dice, Sprint 10 · Ambush 18 · Poisons 20 · Vanish 22 · Shank 24 · Cheap Shot 26 · Kidney Shot 30 · Blind 34",
 "sections": [
  {
   "id": "rogue-guide",
   "label": "Gnome Rogue",
   "h2": "Combat leveling guide",
   "html": "\n  <p class=\"sdesc\">Condensed from <a href=\"https://mobalytics.gg/wow-forever/profile/donthecrown/classes/donthecrown-rogue-leveling\" target=\"_blank\" rel=\"noopener\">DonTheCrown's Mobalytics guide</a>, updated Nov 4. Combat's damage leans on auto attacks, Sinister Strike, Eviscerate and the new Shank, and Energy regen keeps downtime low.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" data-key=\"rogue-guide-talent-order\">\n      <summary><h3>Talent order <small>51 points · ends at 16/35/0</small></h3></summary>\n      <div class=\"cols\">\n        <div><span class=\"label\">Combat first</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">2/2</span><b>Efficient Strikes</b> <span class=\"why\">· cheaper Sinister Strike</span></li>\n            <li><span class=\"rk\">3/3</span><b>Coup de Grace</b> <span class=\"why\">· more finisher damage</span></li>\n            <li><span class=\"rk\">2/3</span><b>Precision</b> <span class=\"why\">· hit chance</span></li>\n            <li><span class=\"rk\">3/3</span><b>Deflection</b> <span class=\"why\">· parry; only works on melee hits from the front</span></li>\n            <li><span class=\"rk\">1/1</span><b>Riposte</b> <span class=\"why\">· level 20; after a parry, out-hits Sinister Strike, costs less and disarms</span></li>\n            <li><span class=\"rk\">3/3</span><b>Precision</b> <span class=\"why\">· final point, 3% hit</span></li>\n            <li><span class=\"rk\">2/2</span><b>Endurance</b> <span class=\"why\">· Sprint and Evasion more often</span></li>\n            <li><span class=\"rk\">1/2</span><b>Improved Sprint</b> <span class=\"why\">· chance to break slows</span></li>\n            <li><span class=\"rk\">1/1</span><b>Flawless Execution</b> <span class=\"why\">· cheaper Eviscerate</span></li>\n            <li><span class=\"rk\">2/2</span><b>Weapon Expertise</b> <span class=\"why\">· about 4% more hits land on enemies facing you</span></li>\n            <li><span class=\"rk\">2/3</span><b>Aggression</b> <span class=\"why\">· more Sinister Strike and Eviscerate damage</span></li>\n            <li><span class=\"rk\">1/1</span><b>Blade Flurry</b> <span class=\"why\">· level 30; hits a second target, +20% attack speed</span></li>\n            <li><span class=\"rk\">2/2</span><b>Dual Wield Specialization</b> <span class=\"why\">· stronger off hand, which also boosts Shank</span></li>\n            <li><span class=\"rk\">2/5</span><b>Hack and Slash</b> <span class=\"why\">· swords or axes are likely best</span></li>\n            <li><span class=\"rk\">5/5</span><b>Flash of Steel</b> <span class=\"why\">· turns Shank into a big energy generator</span></li>\n            <li><span class=\"rk\">1/1</span><b>Adrenaline Rush</b> <span class=\"why\">· Combat capstone, 5 min cooldown</span></li>\n          </ol>\n        </div>\n        <div><span class=\"label\">Then Assassination, and finish Combat</span>\n          <ol class=\"talents\" start=\"17\">\n            <li><span class=\"rk\">5/5</span><b>Malice</b> <span class=\"why\">· +5% crit</span></li>\n            <li><span class=\"rk\">3/3</span><b>Ruthlessness</b> <span class=\"why\">· free combo points</span></li>\n            <li><span class=\"rk\">2/3</span><b>Improved Slice and Dice</b></li>\n            <li><span class=\"rk\">2/2</span><b>Lethality</b> <span class=\"why\">· bigger crits from skills</span></li>\n            <li><span class=\"rk\">5/5</span><b>Hack and Slash</b> <span class=\"why\">· final 3 points</span></li>\n            <li><span class=\"rk\">3/3</span><b>Aggression</b> <span class=\"why\">· final point</span></li>\n            <li><span class=\"rk\">3/3</span><b>Improved Slice and Dice</b> <span class=\"why\">· final point</span></li>\n            <li><span class=\"rk\">2/2</span><b>Improved Expose Armor</b> <span class=\"why\">· for high-armor targets</span></li>\n            <li><span class=\"rk\">1/5</span><b>Improved Poisons</b> <span class=\"why\">· or flex into Blood Splatter or Cold Blood</span></li>\n          </ol>\n        </div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"rogue-guide-rotation-by-level\">\n      <summary><h3>Rotation by level</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">Lv 1+</span><p>Pull with two Throws. Sinister Strike twice, then Slice and Dice. Keep building with Sinister Strike, then finish with Eviscerate, or with Slice and Dice if the fight will run long or you're chaining pulls.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 20</span><p>Riposte lights up after you parry. It costs 10 energy and is off the global cooldown. The Riposte SS macro folds it into Sinister Strike.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 24</span><p>Shank costs 5 and returns 15 energy on a 10 sec cooldown. Press it whenever you have room for 10+ energy, and spend first so you don't cap. With Flash of Steel, leave room for 40+.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 26</span><p>Open with Stealth, Cheap Shot, then Slice and Dice. Aggro mobs as you stealth so they run to you.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 30</span><p>Blade Flurry plus Evasion (both 2 min with Endurance) handles 2–4 mobs. Build combo points on the toughest one for a big Eviscerate.</p></div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"rogue-guide-staying-alive\">\n      <summary><h3>Staying alive</h3></summary>\n      <ul>\n        <li>Evasion only dodges attacks from the front, so keep enemies in front of you.</li>\n        <li>Gouge gives you a window to bandage. With Crippling Poison, a Gouge lets you escape almost anything.</li>\n        <li>Vanish drops combat, but damage over time or area damage breaks Stealth. Faerie Fire blocks it too.</li>\n        <li>Early Stealth is slow. Mostly use it to sneak past enemies.</li>\n        <li>Sprint gets you out of trouble or just speeds up travel.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"rogue-guide-gear-stats\">\n      <summary><h3>Gear &amp; stats</h3></summary>\n      <p>Aim for 5–8% hit early. Score gear with these weights, and let Stamina break close calls when you're solo.</p>\n      <div class=\"scroll\" style=\"width:max-content;max-width:100%\"><table class=\"wt\"><thead><tr><th>Stat</th><th>Weight</th></tr></thead><tbody>\n        <tr><td>Attack Power</td><td>1</td></tr>\n        <tr><td>Agility</td><td>1.8</td></tr>\n        <tr><td>Strength</td><td>1 (1.1 with Kings)</td></tr>\n        <tr><td>Hit chance, per 1%</td><td>18</td></tr>\n        <tr><td>Crit chance, per 1%</td><td>23</td></tr>\n      </tbody></table></div>\n      <p>Weapons: a slow main hand, since Sinister Strike uses weapon damage, and a faster off hand. In Deadmines, Cruel Barb goes in the main hand over Thief's Blade.</p>\n      <p>Poisons unlock at 20 through a class quest. Use Instant Poison on both weapons while leveling, and Deadly Poison in the off hand for dungeons. Thistle Tea gives 100 energy, so use it when you're near empty.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"rogue-guide-weapon-trainers\">\n      <summary><h3>Weapon trainers <small>Alliance</small></h3></summary>\n      <ul>\n        <li><b>Darnassus</b> <span class=\"mono\">(57.6, 46.6)</span>: bows, fist weapons</li>\n        <li><b>Stormwind</b> <span class=\"mono\">(63.8, 69)</span>: swords, crossbows</li>\n        <li><b>Ironforge</b> <span class=\"mono\">(61.6, 89.6)</span>: axes, maces, fist weapons, guns, crossbows (two trainers)</li>\n      </ul>\n      <p>Hack and Slash favours swords and axes, so Stormwind or Ironforge is worth the trip.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"rogue-guide-weapon-upgrades\">\n      <summary><h3>Weapon upgrades <small>one-hand</small></h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">13</span><p>Durgen's Crescent Axe, Hall of Thanes</p></div>\n        <div class=\"step\"><span class=\"lv\">15</span><p>Meathook Slicer (dagger), Ruins of Lordaeron</p></div>\n        <div class=\"step\"><span class=\"lv\">17–18</span><p>Cell Keeper's Claws (fist) or Butcher's Slicer (sword), Shadowfang Keep</p></div>\n        <div class=\"step\"><span class=\"lv\">19</span><p>Cruel Barb (sword), Deadmines: DonTheCrown's main-hand pick</p></div>\n        <div class=\"step\"><span class=\"lv\">23</span><p>Meteor Shard (dagger), Shadowfang Keep</p></div>\n        <div class=\"step\"><span class=\"lv\">25</span><p>Hamhock's Cleaver (axe), Stockade</p></div>\n        <div class=\"step\"><span class=\"lv\">30</span><p>Pronged Reaver (axe, Razorfen Kraul) or Bloody Brass Knuckles (fist, Scarlet Monastery)</p></div>\n      </div>\n      <p>Slow main hand, faster off hand. Hack and Slash favours swords and axes. From the <a href=\"https://www.method.gg/wow-forever/the-best-weapons-in-wow-forever-from-levels-1-30\" target=\"_blank\" rel=\"noopener\">Method weapon list</a>, which stops at 30 for now.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"rogue-guide-training-priorities\">\n      <summary><h3>Training priorities</h3></summary>\n      <ul>\n        <li><b>High:</b> 6 Sinister Strike · 10 Slice and Dice, Sprint · 20 poisons · 22 Vanish, Distract · 24 Shank · 26 Cheap Shot · 30 Kidney Shot · 34 Blind (full toolkit) · 44 Shank rank 2 (+20 energy)</li>\n        <li><b>Skippable when short on gold:</b> Gouge and Kick ranks only add damage.</li>\n        <li><b>At 40:</b> buy mount training and your mount first, then class skills.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"rogue-guide-professions-legacy-points\">\n      <summary><h3>Professions &amp; Legacy Points</h3></summary>\n      <ul>\n        <li>Skin everything in your starting zone, then train Leatherworking in your first city. Craft Handstitched Leather Pants and Belt, Embossed Leather Cloak and Gloves, Light Leather Bracers, plus Light Leather Armor Kits.</li>\n        <li>Stock up on Camp Tents: up to 5% rested XP, once an hour.</li>\n        <li>First Aid is a must for bandages and healing potions. Cooking gives 5% XP food and Basic Campfires for camp buffs.</li>\n        <li>Mostly ignore Leatherworking until your 50s. Swapping it for Mining at 60 is an option.</li>\n        <li><b>Legacy Points:</b> put your first 5 into Thrill of Adventure, which restores 5% of max health per kill.</li>\n      </ul>\n    </details>\n\n    \n\n  </div>\n  "
  },
  {
   "id": "wda-guide",
   "label": "Gnome Rogue · talent build",
   "h2": "No-stealth Combat sword guide",
   "html": "\n  <p class=\"sdesc\">From We Ding Again's video <a href=\"https://youtu.be/6Xli6yNb7Ew\" target=\"_blank\" rel=\"noopener\">The Only Rogue Leveling Build You Need (WoW Forever 1-60)</a>. One Combat sword build all the way to 60, played the lazy way: walk up to a mob and hit it, no stealth. He made it after Blizzard moved many rogue talents two days before launch. He plays an Undead (Horde), so the faction-specific steps are marked.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" id=\"talents\" data-key=\"wda-guide-talent-order\" open>\n      <summary><h3>Talent order <small>checklist · 51 points · ends at 15/36/0</small></h3></summary>\n      <p class=\"why\">Tick each row as you spend the points. Gold rows are due at your level; the outlined row is your next point. Switch tabs to tick DonTheCrown's order instead.</p>\n      <div id=\"talents-app\"></div>\n      <p class=\"why\">Levels from 48 on follow his order one point per level. With the Talented legacy points (below), talent points start at level 5, so each step comes earlier. Ranks checked against the Forever talent list on Warcraft Wiki.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"wda-guide-how-he-plays-it\" open>\n      <summary><h3>How he plays it</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">Lv 1+</span><p>Sinister Strike to 3 or 4 combo points, then Eviscerate. Points vanish when the mob dies, so if it's nearly dead, finish with what you have instead of chasing 5.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 10</span><p>Buy Dual Wield and Slice and Dice before anything else. A second weapon is the biggest jump you'll get for a long time.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 18</span><p>New passive, Poised: full energy out of combat makes your next ability cost 10 less. Walking up to one mob at a time, you get it almost every pull.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 22</span><p>Riposte: after a parry, 10 energy for 1.5× weapon damage and a 6 sec disarm. Put it on one key with Sinister Strike (the Riposte SS macro). He'd set that up even if you ignore everything else.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 24</span><p>Shank: costs 5, gives 15 back, can't miss, 10 sec cooldown. Press it every time it's up.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 30</span><p>Walk up, press the key. At 2 combo points, Slice and Dice (12 sec, +20% attack speed; whatever's left carries to the next mob). Shank on cooldown, back to the key until 5 points, then Eviscerate. Skip Slice and Dice if the mob is nearly dead at 2 points.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 32</span><p>Blade Flurry: 25 energy, +20% attack speed and hits a second mob for 15 sec. Press the key first, then Blade Flurry at the start of any fight it's ready, even on one mob. It shares the 2 min cooldown with Evasion and Sprint, so they line up on big pulls.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 42</span><p>Adrenaline Rush is kept for elites, rares and pulls that got bigger than planned.</p></div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"wda-guide-cost-of-your-first-hit\">\n      <summary><h3>Cost of your first hit <small>on full energy</small></h3></summary>\n      <p>Energy comes back at about 10 a second whatever you do, so cheaper buttons mean less waiting. This is why he takes Composure.</p>\n      <div class=\"scroll\" style=\"width:max-content;max-width:100%\"><table class=\"wt\"><thead><tr><th>Step</th><th>Sinister Strike</th></tr></thead><tbody>\n        <tr><td>Start</td><td>45</td></tr>\n        <tr><td>Efficient Strikes (12–13)</td><td>40</td></tr>\n        <tr><td>Poised (18)</td><td>30</td></tr>\n        <tr><td>Composure 1/2 (26)</td><td>25</td></tr>\n        <tr><td>Composure 2/2 (47)</td><td>20</td></tr>\n      </tbody></table></div>\n      <p>Eviscerate drops from 35 to 20 with Flawless Execution at 27. At 5 points it goes from about 60 damage at level 8 to about 1,300 at 60 before crits, and he sees crits around 2,600 on the tooltip.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"wda-guide-when-a-pull-goes-wrong\">\n      <summary><h3>When a pull goes wrong</h3></summary>\n      <ul>\n        <li>Evasion straight away: 50% dodge for 15 sec. With Endurance it's up every 2 min, so use it on any pull that looks like it'll hurt.</li>\n        <li>Blade Flurry if there are two of them, and Kick anything casting.</li>\n        <li>From 34, Blind the last one and bandage while it wanders off. You stay in combat in PvE, but the bandage still works.</li>\n        <li>Still going badly: Vanish (22) gets you out.</li>\n        <li>Keep a stack of Blinding Powder and Flash Powder.</li>\n        <li>Use Sprint between quests whenever it's up, until you have a mount.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"wda-guide-weapons-poisons\">\n      <summary><h3>Weapons &amp; poisons</h3></summary>\n      <ul>\n        <li>Drop the starting dagger as soon as you can. Sinister Strike uses weapon damage, so a slow weapon with a big top end hits much harder.</li>\n        <li>Axes work straight away. Swords and maces need a weapon trainer first.</li>\n        <li>He sticks with swords for Hack and Slash, which now gives something for every weapon type, so a better mace doesn't need a respec.</li>\n        <li>Instant and Deadly Poison got twice the attack power scaling for launch. He keeps Instant Poison on both weapons, with a left/right-click macro (Poison LR in Macros).</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"wda-guide-class-quests\">\n      <summary><h3>Class quests</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">10</span><p>Class quest chain. The route depends on your start zone (his is the Undead one), but they all end on the dagger <b>Blade of Cunning</b>. It's better than anything you'll have, so it goes in the off hand once you have a sword.</p></div>\n        <div class=\"step\"><span class=\"lv\">20</span><p>Poison quest. <b>Alliance version is in Westfall:</b> Sap a level 23 and pick the lock on his chest. Train Pick Pocket and get 75 Lockpicking before you go. He leaves it until 23–24, since a level 23 elite is rough with no heals.</p></div>\n        <div class=\"step\"><span class=\"lv\">20</span><p>A letter signed \"C\" starts <b>The Horn of Xelthos</b>: solo into Shadowfang Keep, Pick Pocket two keys and steal the horn. The one place he stealths. SFK is in Silverpine, Horde country, so plan the trip.</p></div>\n        <div class=\"step\"><span class=\"lv\">~30</span><p>The chain continues with <b>The Eye of Bhossca</b> (solo, in Scarlet Monastery) and ends on the rogue-only sword <b>Ruby-Adorned Blade</b>. He showed his other sword targets on screen; they aren't in the transcript.</p></div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"wda-guide-what-he-leaves-out\">\n      <summary><h3>What he leaves out</h3></summary>\n      <ul>\n        <li>No stealth on normal mobs, so no Ambush or Garrote. Backstab needs a dagger, and Rupture is mostly wasted because mobs die first.</li>\n        <li>He doesn't buy new ranks of those either. Training the whole class costs over 200 gold by 60.</li>\n        <li>Pick Pocket only for class quests.</li>\n        <li>He still stealths up to an elite and opens with Cheap Shot, because a 4 sec stun is worth the walk.</li>\n        <li>He skips Subtlety's Ambush build: it looks great, but it means stealthing every mob and getting behind it with a dagger for 60 levels.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"wda-guide-professions-legacy-points\">\n      <summary><h3>Professions &amp; Legacy Points</h3></summary>\n      <ul>\n        <li>First Aid and Cooking on a class with no heals: a bandage is quicker than food, and buff food gives extra XP in Forever.</li>\n        <li>Main professions: Skinning and Leatherworking, to make your own leveling gear.</li>\n        <li><b>Legacy Points</b> (16 per character; the first usually comes when your first character hits 25): 5 Thrill of Adventure (5% health back over 10 sec per kill), 5 Well-Rested, 5 Talented (talent points from level 5), 1 Field Medicine (5 sec less between bandages).</li>\n        <li>He skips Reagent Economy (saves buying Dust of Decay and vials) because it needs 10 points in its own tree first.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"wda-guide-race\">\n      <summary><h3>Race</h3></summary>\n      <p>He says there's next to nothing in it: most guides say Orc for Horde and Gnome or Night Elf for Alliance. He went Undead for Cannibalize and Touch of the Grave, which cut downtime on a class with no heals. Gnome is one of the usual Alliance picks, so nothing changes for a Gnome.</p>\n    </details>\n\n  </div>\n  "
  },
  {
   "id": "compare",
   "label": "Pick an approach",
   "h2": "DonTheCrown vs We Ding Again",
   "html": "\n  <p class=\"sdesc\">Both are Combat sword builds with Riposte, Blade Flurry, Flash of Steel and Adrenaline Rush. Most of the 51 points match. These are the differences.</p>\n  <div class=\"scroll\"><table>\n    <thead><tr><th></th><th>DonTheCrown</th><th>We Ding Again</th></tr></thead>\n    <tbody>\n      <tr><th>Final split</th><td>16/35/0</td><td>15/36/0</td></tr>\n      <tr><th>First points</th><td>Straight into Combat (Efficient Strikes)</td><td>2 in Remorseless Attacks, then Combat</td></tr>\n      <tr><th>Riposte</th><td>Level 20</td><td>Level 22</td></tr>\n      <tr><th>Only in this build</th><td>Improved Sprint 1, Improved Expose Armor 2, Improved Poisons 1</td><td>Remorseless Attacks 2, Composure 2</td></tr>\n      <tr><th>Pulling</th><td>Two Throws; from 26, Stealth into Cheap Shot</td><td>Walk up and hit; stealth only for elites and the Horn of Xelthos</td></tr>\n      <tr><th>Poisons</th><td>Instant on both; Deadly in the off hand for dungeons</td><td>Instant on both</td></tr>\n      <tr><th>Legacy Points</th><td>First 5 in Thrill of Adventure</td><td>All 16 planned: Thrill, Well-Rested, Talented, Field Medicine</td></tr>\n      <tr><th>Trainer gold</th><td>Priority list; Gouge and Kick ranks skippable</td><td>Also skips Ambush, Garrote, Backstab and Rupture ranks</td></tr>\n      <tr><th>Best extras</th><td>Stat weights, weapon trainers, weapon upgrades 13–30</td><td>Energy-cost math, bad-pull plan, class quest route</td></tr>\n    </tbody>\n  </table></div>\n  <div class=\"pick\" style=\"margin-top:16px\"><div class=\"label\">Your pick · Nov 11</div><b>We Ding Again's talents, DonTheCrown's gear, weapon and trainer lists.</b> For solo questing, We Ding Again's talent order fits better. Remorseless Attacks and Composure pay off on every pull when you chain mobs. DonTheCrown's Improved Expose Armor and Improved Poisons matter more in groups. His gear, weapon and trainer panels are still the better reference either way. They mix fine: use one build's talents and the other's gear lists.</div>\n  "
  },
  {
   "id": "macros",
   "label": "Copy them exactly",
   "h2": "Rogue macros",
   "html": "\n  <p class=\"sdesc\">10 macros, written exactly as they go in the game's macro window. One wrong letter and a macro does nothing, so copy them with the button.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel wide\" data-key=\"macros-how-to-add-one\">\n      <summary><h3>How to add one</h3></summary>\n      <ol class=\"howto\">\n        <li>Type <code>/macro</code>, open the tab with this character's name, and click New.</li>\n        <li>Type the <b>macro name</b> as shown (16 characters at most) and pick the red question mark icon, so the button shows the spell's own icon.</li>\n        <li>Copy the <b>macro text</b> in exactly, line breaks included. Spell names must match your spellbook letter for letter: capitals, spaces and apostrophes.</li>\n        <li>Drag the macro onto your action bar.</li>\n      </ol>\n      <ul class=\"mtips\">\n        <li><span class=\"ph\">Highlighted words</span> are placeholders: replace them with the exact name of your own item.</li>\n        <li><b>Ctrl</b> means hold Ctrl as you press the button. <b>MO</b> means mouseover: it casts on whatever is under your mouse, and on your target when nothing is.</li>\n        <li>Leave rank numbers off and the macro always casts your highest rank, so you never have to re-drag spells after training.</li>\n        <li>The level tag is when the spell becomes available. Make the macro then, or it will just show a question mark.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-fighting\">\n      <summary><h3>Fighting</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Riposte SS</b><span class=\"lvl\">Lv 22</span></div><button class=\"copy\" id=\"copy-m1\" data-for=\"m1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"m1\">#showtooltip Sinister Strike\n/startattack\n/cast Riposte\n/cast Sinister Strike</pre>\n        <p class=\"why\">Riposte when a parry lights it up, Sinister Strike otherwise. Riposte is off the global cooldown, so both can fire.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Opener</b><span class=\"lvl\">Lv 26</span></div><button class=\"copy\" id=\"copy-ro1\" data-for=\"ro1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"ro1\">#showtooltip\n/cast [stealth] Cheap Shot; Sinister Strike</pre>\n        <p class=\"why\">Cheap Shot from Stealth, Sinister Strike after. One key for the start of every pull.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Pick Cheap</b><span class=\"lvl\">Lv 26</span></div><button class=\"copy\" id=\"copy-m2\" data-for=\"m2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"m2\">#showtooltip Cheap Shot\n/cast Pick Pocket\n/cast Cheap Shot</pre>\n        <p class=\"why\">Picks pockets, then opens. A missed Pick Pocket pulls you out of Stealth. From DonTheCrown's guide.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Focus Kick</b><span class=\"lvl\">Lv 12</span></div><button class=\"copy\" id=\"copy-ro2\" data-for=\"ro2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"ro2\">#showtooltip Kick\n/cast [@focus,harm,nodead][] Kick</pre>\n        <p class=\"why\">Kicks your focus target, or your current target if no focus is set. Set a focus with /focus.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Feint Evasion</b><span class=\"lvl\">Lv 16</span></div><button class=\"copy\" id=\"copy-ro3\" data-for=\"ro3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"ro3\">#showtooltip\n/cast [mod:ctrl] Evasion; Feint</pre>\n        <p class=\"why\">Feint to drop threat in groups. Hold Ctrl for Evasion.</p></div>\n        \n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-escape-control\">\n      <summary><h3>Escape & control</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Sap Blind</b><span class=\"lvl\">Lv 34</span></div><button class=\"copy\" id=\"copy-ro4\" data-for=\"ro4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"ro4\">#showtooltip\n/cast [stealth] Sap; Blind</pre>\n        <p class=\"why\">Sap from Stealth, Blind otherwise. Blind needs Blinding Powder. Before 34, it only Saps.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Vanish</b><span class=\"lvl\">Lv 22</span></div><button class=\"copy\" id=\"copy-ro5\" data-for=\"ro5\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"ro5\">#showtooltip Vanish\n/stopattack\n/cast Vanish</pre>\n        <p class=\"why\">Stops your auto attack first so you don't swing straight back out of Stealth.</p></div>\n        \n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-poisons\">\n      <summary><h3>Poisons</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Poison MH</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-ro6\" data-for=\"ro6\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"ro6\">#showtooltip\n/use <span class=\"ph\">Instant Poison</span>\n/use 16\n/click StaticPopup1Button1</pre>\n        <p class=\"why\">Coats your main hand (slot 16) and clicks Yes on the replace prompt.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Poison OH</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-ro7\" data-for=\"ro7\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"ro7\">#showtooltip\n/use <span class=\"ph\">Instant Poison</span>\n/use 17\n/click StaticPopup1Button1</pre>\n        <p class=\"why\">The same for your off hand (slot 17).</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Poison LR</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-ro8\" data-for=\"ro8\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"ro8\">#showtooltip\n/use <span class=\"ph\">Instant Poison</span>\n/use [btn:2] 17; 16\n/click StaticPopup1Button1</pre>\n        <p class=\"why\">One button for both: left-click coats the main hand, right-click the off hand. We Ding Again uses this setup; his exact text was only on screen, so this version is written to match the two above.</p></div>\n        <p class=\"why\">Poisons come in ranks with their own item names, such as <b>Instant Poison II</b>. Type the exact name of the poison in your bags; a different rank won't be found.</p>\n    </details>\n    <div class=\"gpanel wide\">\n      <p class=\"why\">Built from the guides on this page and the Forever macro lists on <a href=\"https://rankedboost.com/world-of-warcraft/forever/macros/\" target=\"_blank\" rel=\"noopener\">RankedBoost</a> (Nov 7) and <a href=\"https://kami-labs.fr/en/wow-forever/macros-wow-forever-9-classes/\" target=\"_blank\" rel=\"noopener\">Kami Labs</a>, checked against the spells your guides confirm exist in Forever. Ideas using removed spells, such as Tiger's Fury, were left out. Syntax follows the <a href=\"https://warcraft.wiki.gg/wiki/Macro_conditionals\" target=\"_blank\" rel=\"noopener\">macro conditionals reference</a>.</p>\n    </div>\n  </div>\n  "
  },
  {
   "id": "notes",
   "label": "Read before you commit",
   "h2": "Caveats &amp; sources",
   "html": "\n  <div class=\"notes\">\n<div class=\"note\"><h3>Beta numbers, live game</h3><p>All numbers come from the final beta build (70425). The game launched Nov 4, so check anything important in game. Blizzard can still retune live.</p></div>\n<div class=\"note\"><h3>Racials corrected Nov 5</h3><p>The first version of the Forever Roster Planner had several wrong racials, including Earth Fury for Dwarves (it's Artisan's Precision, +1% hit), Ruthless at 2% (it's 1%) and Wind Blessed at 3% (it's 2%). The table now matches Talents Forever and DonTheCrown's guide.</p></div>\n<div class=\"note\"><h3>Pre-launch talent shuffle</h3><p>We Ding Again says Blizzard moved many rogue talents two days before launch, so builds saved before then may be out of date. DonTheCrown's guide was updated Nov 4, launch day.</p></div>\n<div class=\"note\"><h3>Popularity isn't power</h3><p>Spec shares count what people plan in a calculator. Icy Veins also advises picking a playstyle you'll enjoy rather than chasing the strongest class, since tuning keeps shifting.</p></div>\n  </div>\n  <h3 style=\"margin:28px 0 12px\">Sources</h3>\n  <ul class=\"sources\">\n    <li><a href=\"https://mobalytics.gg/wow-forever/profile/donthecrown/classes/donthecrown-rogue-leveling\" target=\"_blank\" rel=\"noopener\">DonTheCrown: Rogue Leveling, Everything You Need to Know (Mobalytics, Nov 4)</a></li>\n    <li><a href=\"https://youtu.be/6Xli6yNb7Ew\" target=\"_blank\" rel=\"noopener\">We Ding Again: The Only Rogue Leveling Build You Need (WoW Forever 1-60), YouTube</a></li>\n    <li><a href=\"https://conquestcapped.com/guides/wow-forever/wow-forever-rogue-weapon-quest/\" target=\"_blank\" rel=\"noopener\">Conquest Capped: Rogue weapon quest (Horn of Xelthos, Eye of Bhossca)</a></li>\n    <li><a href=\"https://warcraft.wiki.gg/wiki/Rogue_abilities_(Forever)\" target=\"_blank\" rel=\"noopener\">Warcraft Wiki: Rogue abilities and talent ranks (Forever)</a></li>\n    <li><a href=\"https://www.method.gg/wow-forever/the-best-weapons-in-wow-forever-from-levels-1-30\" target=\"_blank\" rel=\"noopener\">Method: best weapons from levels 1–30 (Nov 6)</a></li>\n    <li><a href=\"https://talentsforever.com/racials\" target=\"_blank\" rel=\"noopener\">Talents Forever: races, classes and racials</a></li>\n    <li><a href=\"https://talentsforever.com/popular\" target=\"_blank\" rel=\"noopener\">Talents Forever: most popular builds</a></li>\n    <li><a href=\"https://talentsforever.com/leveling\" target=\"_blank\" rel=\"noopener\">Talents Forever: leveling builds</a></li>\n    <li><a href=\"https://talentsforever.com/guides\" target=\"_blank\" rel=\"noopener\">Talents Forever: what changed since Classic</a></li>\n    <li><a href=\"https://hyjal.cc/racials\" target=\"_blank\" rel=\"noopener\">Hyjal: racial abilities</a></li>\n    <li><a href=\"https://www.icy-veins.com/wow-forever/news/racial-and-class-tuning-new-features-and-options-massive-wow-forever-beta-development-notes-october-15th/\" target=\"_blank\" rel=\"noopener\">Icy Veins: Oct 15 beta development notes</a></li>\n    <li><a href=\"https://www.icy-veins.com/wow-forever/news/your-favorite-race-was-just-changed-in-wow-forever/\" target=\"_blank\" rel=\"noopener\">Icy Veins: every race changed</a></li>\n  </ul>\n  "
  }
 ]
};
