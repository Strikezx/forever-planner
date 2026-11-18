/* WoW Forever Planner: Hunter guide. Class data last checked/updated Nov 15, 2026.
   Loads after data/classes.js and adds itself to window.FP_DATA.classes. */
window.FP_DATA.classes.hunter = {
 "key": "hunter",
 "name": "Hunter",
 "color": "#AAD372",
 "ink": "#5E7F35",
 "roles": [
  "Ranged",
  "Melee"
 ],
 "races": [
  {
   "race": "Human",
   "new": true
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
   "race": "Skyborne (High Order)",
   "new": true
  },
  {
   "race": "Orc",
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
 "blurb": "Beast Mastery adds Summon Hawk. Marksmanship has a no-pet Lone Wolf path. Survival is now a real melee spec with Strider Kick and trap support. Auto Shot needs 0.5 sec standing still, and all traps share one 30-sec cooldown (Nov 2 notes). Aimed Shot is trained at 20, not a talent. Pets take stats from your gear and have 115% health (Nov 10).",
 "specs": [
  [
   "Beast Mastery",
   "Adds Summon Hawk. Pets take stats from your gear and have 115% health (Nov 10)."
  ],
  [
   "Marksmanship",
   "Has a no-pet Lone Wolf path; skip Lone Wolf while leveling."
  ],
  [
   "Survival",
   "Now a real melee spec, with Strider Kick and trap support. Harder early."
  ]
 ],
 "general": "Auto Shot needs 0.5 sec standing still, all traps share one 30-sec cooldown, and Aimed Shot is trained at 20, not a talent.",
 "lvl": [
  [
   "Survival",
   43.9
  ],
  [
   "Marksmanship",
   29.3
  ],
  [
   "Beast Mastery",
   26.7
  ]
 ],
 "first": [
  "Improved Tracking 5/5",
  "Savage Strikes 2/2",
  "Survivalist 3/5"
 ],
 "at60": "Survival 47% · MM 27% · BM 26%. Top build: Survival 5/11/35.",
 "builds": {
  "video": {
   "name": "Beast Mastery",
   "sub": "video guide · after Nov 10–11",
   "cols": [
    "Beast Mastery, levels 10–40",
    "Then Marksmanship, 41–60"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Deadly Aspects",
     10,
     14,
     5,
     ""
    ],
    [
     0,
     "2/2",
     "Focused Fire",
     15,
     16,
     2,
     ""
    ],
    [
     0,
     "2/2",
     "Improved Revive Pet",
     17,
     18,
     2,
     ""
    ],
    [
     0,
     "1/1",
     "Endurance Training",
     19,
     19,
     1,
     ""
    ],
    [
     0,
     "2/2",
     "Pathfinding",
     20,
     21,
     2,
     "third row, needs 10 points"
    ],
    [
     0,
     "1/1",
     "Bestial Swiftness",
     22,
     22,
     1,
     ""
    ],
    [
     0,
     "2/5",
     "Unleashed Fury",
     23,
     24,
     2,
     ""
    ],
    [
     0,
     "1/1",
     "Summon Hawk",
     25,
     25,
     1,
     "higher ranks from the trainer"
    ],
    [
     0,
     "5/5",
     "Unleashed Fury",
     26,
     28,
     3,
     "+15% pet and hawk damage"
    ],
    [
     0,
     "1/5",
     "Ferocity",
     29,
     29,
     1,
     ""
    ],
    [
     0,
     "1/2",
     "Bestial Discipline",
     30,
     30,
     1,
     "makes Spirit worth having"
    ],
    [
     0,
     "1/1",
     "Intimidation",
     31,
     31,
     1,
     "pet stun"
    ],
    [
     0,
     "2/2",
     "Bestial Discipline",
     32,
     32,
     1,
     ""
    ],
    [
     0,
     "5/5",
     "Ferocity",
     33,
     36,
     4,
     "+10% pet and hawk crit"
    ],
    [
     0,
     "3/5",
     "Frenzy",
     37,
     39,
     3,
     "60% chance on a pet crit"
    ],
    [
     0,
     "1/1",
     "Bestial Wrath",
     40,
     40,
     1,
     ""
    ],
    [
     1,
     "5/5",
     "Lethal Attacks",
     41,
     45,
     5,
     "+5% crit, pet copies it"
    ],
    [
     1,
     "5/5",
     "Careful Aim",
     46,
     50,
     5,
     "AP equal to your Intellect"
    ],
    [
     1,
     "2/2",
     "Rapid Killing",
     51,
     52,
     2,
     ""
    ],
    [
     1,
     "3 pts",
     "Efficiency",
     53,
     55,
     3,
     "cheaper shots"
    ],
    [
     1,
     "1/1",
     "Trueshot Aura",
     56,
     56,
     1,
     "higher ranks from the trainer"
    ],
    [
     1,
     "4/5",
     "Mortal Shots",
     57,
     60,
     4,
     ""
    ]
   ]
  },
  "feor": {
   "name": "Feor's order",
   "sub": "Nov 7 · before the hawk buff",
   "cols": [
    "Beast Mastery, levels 10–40",
    "Then Marksmanship, 41–60"
   ],
   "rows": [
    [
     0,
     "5/5",
     "Deadly Aspects",
     10,
     14,
     5,
     ""
    ],
    [
     0,
     "2/2",
     "Focused Fire",
     15,
     16,
     2,
     ""
    ],
    [
     0,
     "2/2",
     "Improved Revive Pet",
     17,
     18,
     2,
     ""
    ],
    [
     0,
     "1/1",
     "Endurance Training",
     19,
     19,
     1,
     ""
    ],
    [
     0,
     "2/2",
     "Pathfinding",
     20,
     21,
     2,
     ""
    ],
    [
     0,
     "1/1",
     "Bestial Swiftness",
     22,
     22,
     1,
     ""
    ],
    [
     0,
     "2/5",
     "Unleashed Fury",
     23,
     24,
     2,
     ""
    ],
    [
     0,
     "1/1",
     "Summon Hawk",
     25,
     25,
     1,
     ""
    ],
    [
     0,
     "4/5",
     "Unleashed Fury",
     26,
     27,
     2,
     ""
    ],
    [
     0,
     "2/5",
     "Ferocity",
     28,
     29,
     2,
     ""
    ],
    [
     0,
     "1/1",
     "Intimidation",
     30,
     30,
     1,
     ""
    ],
    [
     0,
     "2/2",
     "Bestial Discipline",
     31,
     32,
     2,
     ""
    ],
    [
     0,
     "5/5",
     "Ferocity",
     33,
     35,
     3,
     ""
    ],
    [
     0,
     "4/5",
     "Frenzy",
     36,
     39,
     4,
     ""
    ],
    [
     0,
     "1/1",
     "Bestial Wrath",
     40,
     40,
     1,
     ""
    ],
    [
     1,
     "5/5",
     "Lethal Attacks",
     41,
     45,
     5,
     ""
    ],
    [
     1,
     "5/5",
     "Careful Aim",
     46,
     50,
     5,
     ""
    ],
    [
     1,
     "2/2",
     "Rapid Killing",
     51,
     52,
     2,
     ""
    ],
    [
     1,
     "3/3",
     "Hawk Eye",
     53,
     55,
     3,
     "range"
    ],
    [
     1,
     "1/1",
     "Trueshot Aura",
     56,
     56,
     1,
     ""
    ],
    [
     1,
     "4/5",
     "Mortal Shots",
     57,
     60,
     4,
     ""
    ]
   ]
  }
 },
 "spells": [
  [
   4,
   "Serpent Sting"
  ],
  [
   6,
   "Arcane Shot, Hunter's Mark"
  ],
  [
   8,
   "Concussive Shot"
  ],
  [
   10,
   "Pet quest (Taming the Beast), Aspect of the Hawk, Call Pet"
  ],
  [
   12,
   "Mend Pet, Wing Clip"
  ],
  [
   16,
   "Mongoose Bite, Immolation Trap"
  ],
  [
   18,
   "Multi-Shot"
  ],
  [
   20,
   "Aimed Shot, Aspect of the Cheetah, Freezing Trap"
  ],
  [
   24,
   "Track Hidden, Beast Lore"
  ],
  [
   26,
   "Rapid Fire"
  ],
  [
   28,
   "Frost Trap"
  ],
  [
   30,
   "Feign Death"
  ],
  [
   32,
   "Flare"
  ],
  [
   34,
   "Explosive Trap"
  ],
  [
   36,
   "Viper Sting"
  ],
  [
   40,
   "Aspect of the Pack, Volley, mail armor"
  ],
  [
   46,
   "Aspect of the Wild"
  ]
 ],
 "weapons": [
  [
   6,
   "Hornwood Recurve Bow",
   "vendor"
  ],
  [
   11,
   "Laminated Recurve Bow",
   "vendor"
  ],
  [
   13,
   "Harvester's Pestslayer",
   "Westfall quest"
  ],
  [
   16,
   "Calibrated Blunderbuss",
   "Hall of Thanes quest"
  ],
  [
   19,
   "Venomstrike",
   "Wailing Caverns"
  ],
  [
   22,
   "Naga Heartpiercer or Fallenroot Longbow",
   "Blackfathom Deeps"
  ],
  [
   25,
   "Raptor's End",
   "Wetlands quest chain"
  ],
  [
   26,
   "Gravespike Repeater or Concealed Hand Crossbow",
   "Dalaran / Stockade"
  ],
  [
   28,
   "Golemsight Long Gun",
   "Excavation Site"
  ],
  [
   30,
   "Master Hunter's Bow or Quilboar Blaster",
   "Stranglethorn / Razorfen Kraul"
  ]
 ],
 "now": [
  {
   "type": "train"
  },
  {
   "type": "steps",
   "label": "Go to",
   "none": "Feor's route ends at 40",
   "items": [
    [
     1,
     10,
     "Starting zone · buy a Hornwood Recurve Bow"
    ],
    [
     10,
     10,
     "Pet quest at your trainer"
    ],
    [
     11,
     11,
     "Buy a Laminated Recurve Bow"
    ],
    [
     12,
     12,
     "Train Mend Pet and Wing Clip"
    ],
    [
     12,
     13,
     "Hall of Thanes dungeon"
    ],
    [
     16,
     18,
     "The Deadmines (chest reward)"
    ],
    [
     17,
     19,
     "Wailing Caverns · Leader of the Fangs"
    ],
    [
     20,
     20,
     "Trainer: Aspect of the Cheetah"
    ],
    [
     20,
     25,
     "Quest in Ashenvale"
    ],
    [
     22,
     24,
     "The Stockade"
    ],
    [
     23,
     27,
     "Raptor's End chain, Wetlands"
    ],
    [
     24,
     28,
     "Blackfathom Deeps"
    ],
    [
     24,
     28,
     "Excavation Site, Wetlands"
    ],
    [
     28,
     32,
     "City of Dalaran"
    ],
    [
     29,
     33,
     "Gnomeregan"
    ],
    [
     30,
     30,
     "Trainer: Feign Death"
    ],
    [
     30,
     35,
     "Nesingwary quests, Stranglethorn"
    ]
   ]
  },
  {
   "type": "weapon",
   "label": "Ranged weapon",
   "none": "Starter bow"
  },
  {
   "type": "tame"
  }
 ],
 "opts": [
  {
   "t": "Beast Mastery",
   "s": "video order, Nov 14 · ends 31/20/0",
   "p": "Opens with Deadly Aspects 5/5, Focused Fire 2/2, Improved Revive Pet 2/2. Summon Hawk at 25, Unleashed Fury 5/5 by 28, Intimidation at 31, Bestial Wrath at 40, then Marksmanship to 60."
  },
  {
   "t": "Survival",
   "s": "43.9% of calculator leveling builds",
   "p": "First points: Improved Tracking 5/5, Savage Strikes 2/2, Survivalist 3/5. Melee-focused, with traps and Strider Kick; harder early."
  },
  {
   "t": "Marksmanship",
   "s": "29.3%",
   "p": "Has a no-pet Lone Wolf path; don't take Lone Wolf while leveling."
  }
 ],
 "keyspells": "",
 "sections": [
  {
   "id": "changes",
   "label": "Updated Nov 14",
   "h2": "What changed since launch",
   "html": "\n  <p class=\"sdesc\">Any Hunter guide recorded before Nov 10 is missing these, and many older ones were wrong even before that.</p>\n  <div class=\"scroll\"><table><thead><tr><th>When</th><th>Change</th><th>What it means for you</th></tr></thead><tbody>\n    <tr><td class=\"mono\">Nov 2</td><td>All traps share one 30-sec cooldown (beta had separate fire and frost cooldowns)</td><td>One trap every 30 sec. Traps work in combat.</td></tr>\n    <tr><td class=\"mono\">Nov 2</td><td>Untraining a pet no longer removes its Faster/Slower Attack passive</td><td>Untrain freely; the attack speed stays.</td></tr>\n    <tr><td class=\"mono\">Nov 10</td><td>Pet health 115% of normal; a bug had it at 150%</td><td>Still tougher than normal, but it dies faster than launch week. Watch Mend Pet.</td></tr>\n    <tr><td class=\"mono\">Nov 10</td><td>Summon Hawk costs 11% of base mana at every rank, same as Arcane Shot; hawk melee about 80% stronger</td><td>Hawks are worth casting again. Low ranks no longer save mana.</td></tr>\n    <tr><td class=\"mono\">Nov 11</td><td>Volley stops when you move and no longer triggers procs (per the video guide)</td><td>Stand still for it from 40.</td></tr>\n  </tbody></table></div>\n  <div class=\"guide\" style=\"margin-top:16px\">\n    <details class=\"gpanel\" data-key=\"changes-shared-cooldowns\">\n      <summary><h3>Shared cooldowns</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">6 s</span><p><b>Arcane Shot</b> (6) and <b>Summon Hawk</b> (25). Not Aimed Shot any more.</p></div>\n        <div class=\"step\"><span class=\"lv\">6 s</span><p><b>Aimed Shot</b> (20, 2-sec cast) and <b>Multi-Shot</b> (18).</p></div>\n        <div class=\"step\"><span class=\"lv\">30 s</span><p>Every trap, fire or frost.</p></div>\n        <div class=\"step\"><span class=\"lv\">None</span><p><b>Volley</b> (40).</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel\" data-key=\"changes-old-guides-are-wrong-if-they\">\n      <summary><h3>Old guides are wrong if they…</h3></summary>\n      <ul>\n        <li>Spend a talent point on Aimed Shot. Every Hunter trains it at 20.</li>\n        <li>Take Pathfinding with only 5 points spent. It's in the third row, so you need 10.</li>\n        <li>Say one fire and one frost trap at once. That's beta.</li>\n        <li>Say to skip hawks for Arcane Shot. That was true until Nov 10.</li>\n        <li>Treat your pet like Classic. It takes stats from your gear now (<a href=\"#pet\">see Pet</a>).</li>\n      </ul>\n    </details>\n  </div>\n  "
  },
  {
   "id": "hunter-guide",
   "label": "Night Elf Hunter",
   "h2": "Beast Mastery leveling guide",
   "html": "\n  <p class=\"sdesc\">Built on Feor's <a href=\"https://mobalytics.gg/wow-forever/classes/hunter-leveling-guide\" target=\"_blank\" rel=\"noopener\">Hunter leveling guide on Mobalytics</a> (updated Nov 7), which levels Beast Mastery and finishes in Marksmanship at 31/20/0. The talent order now follows a newer video build (switched Nov 14); the leveling route, dungeons and weapons are still Feor's. Gaps are filled from <a href=\"https://www.warcrafttavern.com/forever/guides/hunter-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern</a>, <a href=\"https://www.method.gg/wow-forever/wow-forever-hunter-leveling-guide-and-talents\" target=\"_blank\" rel=\"noopener\">Method</a> and the <a href=\"https://www.method.gg/wow-forever/the-best-weapons-in-wow-forever-from-levels-1-30\" target=\"_blank\" rel=\"noopener\">Method weapon list</a>. Feor rates Night Elf the best Hunter race on either faction, mostly for Elune's Light: 10% crit for 15 sec that also boosts your pet.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" id=\"talents\" data-key=\"hunter-guide-talent-order\" open>\n      <summary><h3>Talent order <small>checklist · 51 points · ends at 31/20/0</small></h3></summary>\n      <p class=\"why\">Tick each row as you spend the points. Gold rows are due at your level; the outlined row is your next point. Switch tabs to see Feor's older order.</p>\n      <div id=\"talents-app\"></div>\n    </details>\n    <details class=\"gpanel wide\" id=\"talent-compare\" data-key=\"hunter-guide-why-this-order-and-how-feor-s-differed\">\n      <summary><h3>Why this order, and how Feor's differed <small>both end 31/20/0</small></h3></summary>\n      <p>You switched to this order on Nov 14. It comes from a Hunter video guide recorded after the Nov 10–11 hotfixes and matches Feor's Nov 7 order everywhere except these five rows:</p>\n      <div class=\"scroll\"><table><thead><tr><th>Talent</th><th>Your plan (video, above)</th><th>Feor's old order (Nov 7)</th></tr></thead><tbody>\n        <tr><td><b>Unleashed Fury</b></td><td>5/5: two at 23–24, three at 26–28</td><td>4/5, done by 27</td></tr>\n        <tr><td><b>Ferocity</b></td><td>1 at 29, 5/5 by 36</td><td>2 at 28–29, 5/5 by 35</td></tr>\n        <tr><td><b>Intimidation / Bestial Discipline</b></td><td>Bestial Discipline 30, Intimidation 31, Bestial Discipline 32</td><td>Intimidation 30, Bestial Discipline 31–32</td></tr>\n        <tr><td><b>Frenzy</b></td><td>3 points, 37–39 (60% proc)</td><td>4/5, 36–39</td></tr>\n        <tr><td><b>Marksmanship 53–55</b></td><td>Efficiency 3 (cheaper shots)</td><td>Hawk Eye 3/3 (range)</td></tr>\n      </tbody></table></div>\n      <p><b>Why:</b> Unleashed Fury and Ferocity also boost hawks, and Feor wrote his order before the Nov 10 hawk buff. Efficiency beats Hawk Eye now that your shots and hawks cost a share of base mana. Both orders meet at 32, so a point already spent on Intimidation at 30 is fine. The rest of the guide below (levels, dungeons, weapons) is still Feor's.</p>\n      <ul>\n        <li><b>Deadly Aspects:</b> with Aspect of the Hawk, Auto Shot has a 10% chance to make you shoot 30% faster for 12 sec.</li>\n        <li><b>Unleashed Fury 5/5:</b> +15% damage for your pet and hawks. <b>Ferocity 5/5:</b> +10% crit for both.</li>\n        <li><b>Bestial Discipline:</b> 25% of mana regen keeps going while you cast, 50% at 2/2.</li>\n        <li><b>Intimidation:</b> pet's next attack stuns 3 sec, has +100% crit and pulls the mob back to it.</li>\n        <li><b>Bestial Wrath:</b> +50% pet damage for 18 sec, 2 min cooldown; only death stops the pet.</li>\n        <li><b>Lethal Attacks:</b> +5% crit, which your pet copies. <b>Careful Aim:</b> attack power equal to all your Intellect. <b>Rapid Killing:</b> Rapid Fire back 2 min sooner, and the shot after a kill hits harder.</li>\n        <li>The talents give only rank 1 of Summon Hawk and Trueshot Aura. Higher ranks come from the trainer, so don't skip visits.</li>\n        <li>With the <b>Talented</b> legacy perk, everything comes up to 5 levels earlier.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"hunter-guide-rotation\" open>\n      <summary><h3>Rotation</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">Before</span><p>Hunter's Mark the target and get some distance.</p></div>\n        <div class=\"step\"><span class=\"lv\">Lv 1–9</span><p>Auto Shot and Arcane Shot (6) above all else, Serpent Sting (4) after, Concussive Shot (8) to keep distance. Move away between Auto Shots so the mob never touches you.</p></div>\n        <div class=\"step\"><span class=\"lv\">Elite</span><p>Open with Hunter's Mark and Aimed Shot (20), then Arcane Shot, then Serpent Sting. If it reaches you, Wing Clip and weave in a Raptor Strike. Toggling the pet's Growl lets the mob bounce between you.</p></div>\n        <div class=\"step\"><span class=\"lv\">Pull</span><p>From 10, send the pet first and let it land a few hits so the mob stays on it. Keep Aspect of the Hawk on; Deadly Aspects only works with it.</p></div>\n        <div class=\"step\"><span class=\"lv\">Hawk</span><p><b>Updated Nov 14.</b> From 25: Hawk, Hawk, Arcane Shot, then recast the first hawk just before it leaves. They share a 6-sec cooldown, so every press is a hawk or an Arcane Shot. Since the Nov 10 hotfix both cost 11% of base mana at every rank and hawks hit about 80% harder in melee, so Feor's Nov 7 advice to skip hawks is out of date.</p></div>\n        <div class=\"step\"><span class=\"lv\">Fillers</span><p>Aimed Shot (2-sec cast) when it's ready, or Multi-Shot for packs; they share a 6-sec cooldown. Serpent Sting only on things that will live a while. Stand still 0.5 sec for Auto Shot, move between shots.</p></div>\n        <div class=\"step\"><span class=\"lv\">Adds</span><p>Drop Freezing Trap at your feet; the first mob in is frozen up to 10 sec (longer at higher ranks). Don't hit it, damage breaks it. Your next trap is 30 sec away. Mend Pet when the pet drops below half.</p></div>\n        <div class=\"step\"><span class=\"lv\">8 yd</span><p>Ranged attacks don't work inside 8 yards. Wing Clip, step back, shoot. Feign Death (30) drops you out of a pull gone wrong; save Bestial Wrath (40) for elites, rares and bad pulls.</p></div>\n        <div class=\"step\"><span class=\"lv\">Mana</span><p>Arcane Shot, Multi-Shot and hawks cost a share of base mana. On easy mobs let Auto Shot and the pet do the work, and drink between pulls.</p></div>\n        <div class=\"step\"><span class=\"lv\">Bug</span><p>If a hawk hits once and flies back, your pet is set to Passive. Put it on Assist or Defensive (player reports).</p></div>\n        <div class=\"step\"><span class=\"lv\">Cheetah</span><p>Once you have Aspect of the Cheetah (20), it's often easier to turn Growl off, kite the mob yourself and let the pet kill it.</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel\" data-key=\"hunter-guide-fastest-leveling-two-at-a-time\">\n      <summary><h3>Fastest leveling: two at a time</h3></summary>\n      <p>The goal is to keep both your Auto Shot and melee swing timers busy at all times, with one or two mobs always on their way to you.</p>\n      <ul>\n        <li>Auto Shot one mob, then pick the next; your following Auto Shot goes to the new one.</li>\n        <li>Melee (Raptor Strike) the mob closest to you, shoot the one further away.</li>\n        <li>Serpent Sting both once you have it, though it eats mana. Arcane and Concussive Shot them.</li>\n        <li>Wing Clip spaces them out. If they stack up, Multi-Shot (18) is very efficient.</li>\n        <li>From 10, use the pet as a second damage source: on its own mob, or finishing a low one while you shoot.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel wide\" data-key=\"hunter-guide-level-walkthrough\">\n      <summary><h3>Level walkthrough <small>Feor · 1–40</small></h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1–10</span><p>Buy a Hornwood Recurve Bow as soon as you leave the starting zone. Arcane Shot at 6 is your first big spell; if you're racing, you can skip training until then. Concussive Shot at 8. At 10, go straight to your trainer for the pet quest; it's your biggest power spike. Visit the weapon masters for every weapon skill you might use.</p></div>\n        <div class=\"step\"><span class=\"lv\">11</span><p>Buy a Laminated Recurve Bow, or as soon as you can afford it.</p></div>\n        <div class=\"step\"><span class=\"lv\">12</span><p>Train your next key spell (Mend Pet and Wing Clip both arrive at 12). Keep your pet's abilities ranked up; it's the biggest thing that speeds leveling.</p></div>\n        <div class=\"step\"><span class=\"lv\">12–13</span><p>Hall of Thanes is the first Alliance dungeon, good for a break when quest mobs are contested.</p></div>\n        <div class=\"step\"><span class=\"lv\">Gun</span><p>Alliance can get a gun from a quest chain that starts with a Dark Iron Map, dropped by the Dark Iron Spy in Dun Morogh. You need the map to unlock the chain. <i>Gun name to confirm.</i></p></div>\n        <div class=\"step\"><span class=\"lv\">Solo</span><p>If you'd rather keep questing, a solid vendor weapon is sold in Westfall and Loch Modan (also The Barrens and Silverpine). <i>Weapon name to confirm.</i></p></div>\n        <div class=\"step\"><span class=\"lv\">16–18</span><p>The Deadmines: no ranged weapons, but a quest there rewards a good chest piece. <i>Item name to confirm.</i></p></div>\n        <div class=\"step\"><span class=\"lv\">17–19</span><p>Wailing Caverns: a decent bow can drop, but don't farm for it; vendor bows are fine until quest weapons later. Pick up the Leader of the Fangs quest if you go.</p></div>\n        <div class=\"step\"><span class=\"lv\">20</span><p>Go straight to your trainer for Aspect of the Cheetah: faster travel and easier kiting. Train your pet's new ability rank at the pet trainer too.</p></div>\n        <div class=\"step\"><span class=\"lv\">20+</span><p>As a Night Elf, head straight into Ashenvale and quest there.</p></div>\n        <div class=\"step\"><span class=\"lv\">~25</span><p><b>Raptor's End:</b> the Alliance bow quest chain in the Wetlands at Whelgar's Excavation Site. It opens at 22, has you kill raptors from 22 to 27, and ends with a level 29 raptor. It's hard at 22, so aim for around 25. This bow lasts a long time.</p></div>\n        <div class=\"step\"><span class=\"lv\">22–24</span><p>Stockade: a ranged weapon drops (likely the Concealed Hand Crossbow), and it's a quick run. Good leather DPS pieces that last a long time, plus a guaranteed quest reward. <i>Item names to confirm.</i></p></div>\n        <div class=\"step\"><span class=\"lv\">24–28</span><p>Blackfathom Deeps: two decent bows (likely Naga Heartpiercer and Fallenroot Longbow), not worth chasing. Doing its quests gives you two chances at one.</p></div>\n        <div class=\"step\"><span class=\"lv\">24–28</span><p>Excavation Site: a strong ranged weapon for its level, 2.5 speed with +6 Agility (likely the Golemsight Long Gun).</p></div>\n        <div class=\"step\"><span class=\"lv\">28–32</span><p>City of Dalaran: the chase item is a melee weapon (likely Felbough Arm), not the ranged one. Two other great Hunter items drop from the same boss as it, so that boss gives you a 2 in 3 chance at something strong. <i>Item names to confirm.</i></p></div>\n        <div class=\"step\"><span class=\"lv\">30</span><p>Train Feign Death right away. It's great in the open world and in dungeons; when you're skipping mobs, use it to shake them off and keep moving.</p></div>\n        <div class=\"step\"><span class=\"lv\">30+</span><p>In Stranglethorn Vale, do the Hunter mastery quests at Nesingwary's Expedition. The end of the chain gives a solid ranged weapon (the Master Hunter's Bow, from the Big Game Hunter quest) and a second reward. <i>Second reward to confirm.</i></p></div>\n        <div class=\"step\"><span class=\"lv\">29–33</span><p>Gnomeregan is Feor's main dungeon pick here, especially for Alliance. A guaranteed quest reward lasts a long time, and there are two chase items; one is a gun from a rare spawn, so it's a long shot. <i>Item names to confirm.</i></p></div>\n      </div>\n      <p class=\"why\">Feor's view on dungeons: run each once for the quests and their rewards and XP, but don't farm them for gear. He hasn't written 41–60 yet; the talent order above still covers those levels.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"hunter-guide-pet\">\n      <summary><h3>Pet</h3></summary>\n      <p>Pets were rebuilt for Forever: they take stats from your gear, every family has its own ability, and teaching works through ranks and loyalty. <a href=\"#pet\">Full pet guide</a> · <a href=\"#beasts\">Beasts worth taming</a></p>\n    </details>\n    <details class=\"gpanel\" data-key=\"hunter-guide-key-spells\">\n      <summary><h3>Key spells</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">4–8</span><p>Serpent Sting 4 · Arcane Shot, Hunter's Mark 6 · Concussive Shot 8. To save gold, you can skip training until Arcane Shot at 6.</p></div>\n        <div class=\"step\"><span class=\"lv\">10</span><p>Tame Beast quest (Teldrassil for Night Elves), Aspect of the Hawk, Call Pet. Your biggest power spike.</p></div>\n        <div class=\"step\"><span class=\"lv\">12–18</span><p>Mend Pet, Wing Clip 12 · Mongoose Bite, Immolation Trap 16 · Multi-Shot 18</p></div>\n        <div class=\"step\"><span class=\"lv\">20</span><p>Aimed Shot (trained, not a talent; 2-sec cast, shares a 6-sec cooldown with Multi-Shot), Aspect of the Cheetah, Freezing Trap</p></div>\n        <div class=\"step\"><span class=\"lv\">24–30</span><p>Track Hidden 24 · Rapid Fire 26 · Frost Trap 28 · Feign Death 30</p></div>\n        <div class=\"step\"><span class=\"lv\">32–46</span><p>Flare 32 · Explosive Trap 34 · Viper Sting 36 · Aspect of the Pack, Volley, mail armor 40 · Aspect of the Wild 46</p></div>\n        <div class=\"step\"><span class=\"lv\">Volley</span><p>No cooldown in Forever. Since the Nov 11 hotfix it stops when you move and no longer triggers procs.</p></div>\n      </div>\n      <p class=\"why\">Class training from 1 to 60 costs about 207 gold, the same for every class. Don't spend gold on spells you won't use. Most of your damage is Auto Shot and Arcane Shot, and saving gold gets your mount sooner.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"hunter-guide-ranged-weapons\">\n      <summary><h3>Ranged weapons</h3></summary>\n      <p>Auto Shot is free damage, so ranged DPS matters most.</p>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">~6</span><p>Hornwood Recurve Bow, from a vendor as soon as you leave the starting zone</p></div>\n        <div class=\"step\"><span class=\"lv\">11</span><p>Laminated Recurve Bow, from a vendor. Buy it as soon as you can afford it</p></div>\n        <div class=\"step\"><span class=\"lv\">13</span><p>Harvester's Pestslayer, Westfall quest</p></div>\n        <div class=\"step\"><span class=\"lv\">16</span><p>Calibrated Blunderbuss (new), from the Hall of Thanes quest Old Ironforge Incursion. You can pick it up at 9, but it's a level 16 dungeon quest, so bring a group</p></div>\n        <div class=\"step\"><span class=\"lv\">19</span><p>Venomstrike, from Lord Serpentis in Wailing Caverns. Still the best-known upgrade at this level</p></div>\n        <div class=\"step\"><span class=\"lv\">~25</span><p>Raptor's End, Wetlands quest chain at Whelgar's Excavation Site (Alliance). Lasts a long time</p></div>\n        <div class=\"step\"><span class=\"lv\">22–23</span><p>Naga Heartpiercer or Fallenroot Longbow, Blackfathom Deeps</p></div>\n        <div class=\"step\"><span class=\"lv\">26</span><p>Gravespike Repeater (Dalaran) or Concealed Hand Crossbow (Stockade)</p></div>\n        <div class=\"step\"><span class=\"lv\">28</span><p>Golemsight Long Gun (new), from the last boss of the Excavation Site in the Wetlands</p></div>\n        <div class=\"step\"><span class=\"lv\">30</span><p>Master Hunter's Bow (Big Game Hunter quest, end of the Nesingwary mastery chain in Stranglethorn), Quilboar Blaster (new, Razorfen Kraul quests, both factions) or Booty Bay Bruiser's Buckshot (Booty Bay, Honored)</p></div>\n      </div>\n      <p class=\"why\">Keep a quiver or ammo pouch and keep ammo stocked. The new reagent bag slot doesn't take a quiver.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"hunter-guide-melee-weapons-trainers\">\n      <summary><h3>Melee weapons &amp; trainers</h3></summary>\n      <ul>\n        <li>Prefer two-handers over one-handers. They have better stats and make Raptor Strike hit harder.</li>\n        <li><b>Darnassus:</b> daggers, fist weapons, staves</li>\n        <li><b>Stormwind:</b> swords, two-handed swords, staves</li>\n        <li><b>Ironforge:</b> two-handed axes and maces, staves</li>\n        <li>For Survival: Impaling Harpoon (polearm, Deadmines, 17), Corpsemaker or Felbough Arm (29), Legionite Glaive at 60. Polearm training unlocks at 20.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"hunter-guide-stats\">\n      <summary><h3>Stats</h3></summary>\n      <ul>\n        <li><b>Agility</b> first: damage and crit for you and your pet</li>\n        <li><b>Crit counts twice:</b> your pet copies all of your crit chance</li>\n        <li><b>Mail at 40:</b> your pet takes about 30% of your armor, so it gets tougher too</li>\n        <li><b>Attack Power</b> next, unless a piece has a lot more AP than Agility</li>\n        <li><b>Stamina</b> for you and the pet, so you can pull more</li>\n        <li><b>Spirit</b> once you have Bestial Discipline (31)</li>\n        <li><b>Intellect</b> helps long fights and levels weapon skill faster, and counts more than in Classic once Careful Aim (46–50) turns it into attack power</li>\n        <li>Crit and Hit are rare early; raw stats win. You'd want 5% hit to never miss same-level mobs</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"hunter-guide-professions-camp\">\n      <summary><h3>Professions &amp; camp</h3></summary>\n      <ul>\n        <li><b>Skinning:</b> extra gold from all the beasts you kill, and the <b>Camp Chair</b> at 20 skill gives you and your pet 2% crit</li>\n        <li><b>Leatherworking:</b> gear upgrades and, most importantly, better quivers and ammo pouches, which make Auto Shot fire faster</li>\n        <li><b>First Aid</b> and <b>Cooking</b> are must-haves: bandages heal you or the pet without mana, and food gives +5% XP from kills</li>\n        <li><b>Camp Tent:</b> rested XP once an hour; pairs with the Camp Chair</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"hunter-guide-consumables\">\n      <summary><h3>Consumables</h3></summary>\n      <ul>\n        <li>Any cheap XP food works, even low-level: Smoked Bear Meat, Crispy Bat Wing, Longjaw Mud Snapper and so on</li>\n        <li>Health and mana potions are the useful buys. Elixirs from the Auction House usually aren't worth the gold early</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"hunter-guide-tips-mistakes\">\n      <summary><h3>Tips &amp; mistakes</h3></summary>\n      <ul>\n        <li>Keep Claw and Bite up to date on your pet.</li>\n        <li>Don't lean on dungeons. Queue while questing or grinding.</li>\n        <li>Grinding is the Hunter's strength. If you're short on quests, kill things on the way.</li>\n        <li>Eat XP food before long kill quests; it's 10 seconds for 5% more XP.</li>\n        <li>Don't take Lone Wolf while leveling, don't use Cheetah or Pack in combat, and don't Scare Beast near other packs.</li>\n        <li>Ignore any build that spends a talent point on Aimed Shot or takes Pathfinding with only 5 points in the tree. Those are pre-launch.</li>\n        <li>Don't let your pet go hungry or run out of ammo. Open Beast Training whenever your pet gains loyalty, so training points don't sit unspent.</li>\n        <li>In a group, turn off your pet's Growl when someone else is tanking.</li>\n      </ul>\n    </details>\n    \n    <details class=\"gpanel\" data-key=\"hunter-guide-respecs-dual-spec\">\n      <summary><h3>Respecs &amp; dual spec</h3></summary>\n      <ul>\n        <li>Change talents at your class trainer in a major city. It's cheap if you haven't reset in a while, and the price climbs fast if you keep doing it.</li>\n        <li>Under 30 with points outside Beast Mastery? Reset now: it's 20 points at most (25 with Talented), and Summon Hawk is worth it.</li>\n        <li>Took Intimidation at 30 instead of Bestial Discipline? Fine, both orders meet at 32.</li>\n        <li><b>Dual Specialization</b> at 40 keeps a second build. Blizzard hasn't posted its price.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel\" data-key=\"hunter-guide-survival-instead\">\n      <summary><h3>Survival instead?</h3></summary>\n      <p>Survival is still the most-planned spec in the calculator. Its key talents (Strider Kick, Expose Prey and Resourcefulness by 30, Lacerating Strikes at 40) come later, so early levels are harder and you stay in melee. <a href=\"https://wow.gg/guides/wow-forever-survival-hunter-beta\" target=\"_blank\" rel=\"noopener\">WoW.gg</a> puts melee weapon damage and Hit first for Survival at 60.</p>\n    </details>\n\n  </div>\n  "
  },
  {
   "id": "pet",
   "label": "Rebuilt for Forever",
   "h2": "Your pet",
   "html": "\n  <p class=\"sdesc\">Getting it, how it scales, family abilities and how to teach it. From the Hunter video guide you shared (recorded after the Nov 10–11 hotfixes), checked against Blizzard's notes. Numbers marked as player tests aren't official.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel\" data-key=\"pet-getting-your-pet\">\n      <summary><h3>Getting your pet <small>level 10</small></h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">Quest</span><p>Your class trainer gives <b>Taming the Beast</b> (in Teldrassil for Night Elves). You tame a few beasts in a row, then <b>Training the Beast</b> unlocks pet training.</p></div>\n        <div class=\"step\"><span class=\"lv\">Rules</span><p>You can only tame a beast of your own level or lower. Taming takes a while and drops your armor to 0, so clear the area, or lay a Freezing Trap or pull at max range with Concussive Shot first.</p></div>\n        <div class=\"step\"><span class=\"lv\">Feed</span><p>Feed it right away: a new pet starts unhappy. Unhappy deals 75% damage, happy deals 125%. Happiness and loyalty are both still in the game.</p></div>\n        <div class=\"step\"><span class=\"lv\">Stable</span><p>Buy both stable slots: the first is 1 silver, the second 5 gold. Keep one free; you need it to teach your pet.</p></div>\n        <div class=\"step\"><span class=\"lv\">Trainer</span><p>Train Growl, Great Stamina and Natural Armor at 10. Higher Growl ranks and passives come from the pet trainer in town. Mend Pet arrives at 12.</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel\" data-key=\"pet-how-your-pet-scales\">\n      <summary><h3>How your pet scales</h3></summary>\n      <p>Your gear makes your pet stronger (Blizzard), and player buffs that raise stats no longer work on pets. Players measured what carries over:</p>\n      <table class=\"wt\"><thead><tr><th>From you</th><th>Pet gets</th></tr></thead><tbody>\n        <tr><td>Crit chance</td><td>all of it</td></tr>\n        <tr><td>Armor</td><td>~30%</td></tr>\n        <tr><td>Attack power</td><td>~10%</td></tr>\n        <tr><td>Health (Nov 10)</td><td>115% of normal</td></tr>\n      </tbody></table>\n      <p class=\"why\">So crit on your gear counts twice, and mail at 40 makes your pet tougher too. A bug gave pets 150% health until the Nov 10 hotfix, so pets die faster now than launch week.</p>\n    </details>\n    <details class=\"gpanel\" data-key=\"pet-attack-speed\">\n      <summary><h3>Attack speed</h3></summary>\n      <ul>\n        <li>Every pet swings every 2.0 sec, then its own passive, <b>Faster Attack</b> or <b>Slower Attack</b>, sets it to the speed that beast had in Classic.</li>\n        <li>So the beast you tame still decides how fast your pet hits. You can't train speed onto it.</li>\n        <li>Since the Nov 2 notes, untraining your pet no longer removes that passive.</li>\n        <li>Player tests say a faster pet does more damage right now. Blizzard hasn't said whether that's intended.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel wide\" data-key=\"pet-family-abilities\">\n      <summary><h3>Family abilities <small>one unique per family</small></h3></summary>\n      <div class=\"scroll\"><table><thead><tr><th>Family</th><th>Unique ability</th><th>What it does</th></tr></thead><tbody>\n        <tr><td><b>Cat</b></td><td>Prowl</td><td>Stealth. Cats are still the top damage pet: Claw, Bite, fast swings, Dash at pet level 30.</td></tr>\n        <tr><td><b>Wolf</b></td><td>Furious Howl</td><td>Raises your party's melee attack power.</td></tr>\n        <tr><td><b>Bear</b></td><td>Swipe</td><td>Hits up to three enemies.</td></tr>\n        <tr><td><b>Carrion Bird</b></td><td>Demoralizing Screech</td><td>Damages and lowers the attack power of enemies in melee range for 30 sec. A bit less damage than a cat, but tankier.</td></tr>\n        <tr><td><b>Boar</b></td><td>Charge</td><td>Charges and roots the target; next pet attack gets more attack power.</td></tr>\n        <tr><td><b>Turtle</b></td><td>Shell Shield</td><td>Halves damage taken for 12 sec; swings slower but each hit lands harder.</td></tr>\n        <tr><td><b>Spider</b></td><td>Web</td><td>Roots the target.</td></tr>\n        <tr><td><b>Tallstrider</b></td><td>Dust Cloud</td><td>Lowers the target's armor (Blizzard's class deep dive).</td></tr>\n        <tr><td><b>Fox</b> <span class=\"chg\">New</span></td><td>Trickster's Dance</td><td>More dodge and faster attacks for 12 sec.</td></tr>\n      </tbody></table></div>\n      <p class=\"why\">No source confirms that Swipe or the Screech make several enemies attack your pet. Swipe makes threat by hitting them; the Screech is defense. <b>Growl</b>, which every pet knows, is what holds a monster's attention, and it works on one target.</p>\n    </details>\n    <details class=\"gpanel wide\" data-key=\"pet-teaching-your-pet\">\n      <summary><h3>Teaching your pet</h3></summary>\n      <div class=\"cols\">\n        <div>\n          <span class=\"label\">How ranks work</span>\n          <ul>\n            <li>Ranks unlock with your <b>pet's</b> level. Bite and Claw get a new rank at pet level 1, 8, 16, 24, then every 8 levels (32, 40, 48, 56).</li>\n            <li>A wild beast that knows a rank can teach it.</li>\n            <li>Training points come from your pet's loyalty, which grows slowly. A pet can have 4 active abilities.</li>\n            <li>Beast Lore (24) shows what a wild beast knows, but players say it isn't always reliable. Check a list before you tame.</li>\n            <li>Dash or Dive unlock at pet level 30.</li>\n            <li>You don't need every rank. Upgrade Bite or Claw when a teacher is on your way.</li>\n          </ul>\n        </div>\n        <div>\n          <span class=\"label\">Example: your cat needs Claw rank 3</span>\n          <ol class=\"talents\">\n            <li>Put your cat in the stable.</li>\n            <li>Tame a beast that knows Claw 3, around level 16. Your cat must be 16 too, or it can't learn that rank.</li>\n            <li>Fight with the new beast until a yellow message says you learned the ability.</li>\n            <li>Abandon the teacher, take your cat back out, open Beast Training and spend training points.</li>\n          </ol>\n          <p class=\"why\">As a Night Elf, a Strigid Hunter (owl) in Teldrassil teaches Claw rank 2.</p>\n        </div>\n      </div>\n    </details>\n  </div>\n  "
  },
  {
   "id": "beasts",
   "label": "Rare or not",
   "h2": "Beasts worth taming",
   "html": "\n  <p class=\"sdesc\">A rare beast isn't stronger because it's rare: family and attack speed are what matter. Lower swing time is faster. You can't tame anything above your level. <span class=\"chg\">Night Elf route</span> marks the ones along a Night Elf's path through Teldrassil, Darkshore and Ashenvale.</p>\n  <div class=\"fchips\" id=\"beastchips\"><span class=\"label\">Show</span><button class=\"chipbtn\" data-f=\"all\" aria-pressed=\"true\">All</button><button class=\"chipbtn\" data-f=\"now\" aria-pressed=\"false\">Can tame now</button><button class=\"chipbtn\" data-f=\"path\" aria-pressed=\"false\">Night Elf route</button></div>\n  <div class=\"scroll\"><table><thead><tr><th>Beast</th><th>Family</th><th>Level</th><th>Where</th><th>Swing</th><th>Why</th></tr></thead><tbody>\n    <tr class=\"racegroup\"><td colspan=\"6\">Alliance zones</td></tr>\n    <tr><td><b>Ghostfang</b> <span class=\"kind\">Rare · new</span></td><td>Cat</td><td class=\"mono\">10</td><td>Eastern Dun Morogh</td><td class=\"mono\">—</td><td>New rare cat</td></tr>\n    <tr><td><b>Matriarch Bristlefur</b> <span class=\"kind\">Rare</span></td><td>Bear</td><td class=\"mono\">—</td><td>Elwynn Forest</td><td class=\"mono\">—</td><td>Rare bear</td></tr>\n    <tr><td><b>Elmpaw</b> <span class=\"kind\">Rare elite</span></td><td>Bear</td><td class=\"mono\">—</td><td>Elwynn Forest</td><td class=\"mono\">—</td><td>Elite bear</td></tr>\n    <tr><td><b>Nightscreech</b> <span class=\"kind\">Rare · new</span> <span class=\"chg\">Night Elf route</span></td><td>Owl</td><td class=\"mono\">—</td><td>Teldrassil</td><td class=\"mono\">—</td><td>Tame it for its looks</td></tr>\n    <tr><td><b>Moonstalker Runt</b> <span class=\"chg\">Night Elf route</span></td><td>Cat</td><td class=\"mono\">—</td><td>Darkshore</td><td class=\"mono\">1.3 s</td><td>Speed, early</td></tr>\n    <tr class=\"racegroup\"><td colspan=\"6\">Skyborne start · Zephras Isle</td></tr>\n    <tr><td><b>Mystmane</b> <span class=\"kind\">Rare</span></td><td>Bear</td><td class=\"mono\">13</td><td>Zephras Isle</td><td class=\"mono\">1.6 s</td><td>Fastest bear</td></tr>\n    <tr><td><b>Ornery Galestrider</b></td><td>Tallstrider</td><td class=\"mono\">—</td><td>Zephras Isle</td><td class=\"mono\">1.3 s</td><td>Fast; the first foxes live here too</td></tr>\n    <tr class=\"racegroup\"><td colspan=\"6\">Horde zones</td></tr>\n    <tr><td><b>Shalma</b> <span class=\"kind\">Rare · new</span></td><td>Cat</td><td class=\"mono\">9</td><td>Echo Isles, Durotar</td><td class=\"mono\">—</td><td>New rare cat</td></tr>\n    <tr><td><b>The Rake</b> <span class=\"kind\">Rare</span></td><td>Cat</td><td class=\"mono\">10</td><td>Mulgore</td><td class=\"mono\">1.2 s</td><td>Fast cat at 10</td></tr>\n    <tr><td><b>Death Flayer</b> <span class=\"kind\">Rare</span></td><td>Scorpid</td><td class=\"mono\">11</td><td>Durotar</td><td class=\"mono\">1.6 s</td><td>Fastest scorpid</td></tr>\n    <tr><td><b>Coldrasp</b> <span class=\"kind\">Rare · new</span></td><td>Wolf</td><td class=\"mono\">12</td><td>Whispering Forest, Tirisfal Glades</td><td class=\"mono\">1.5 s</td><td>Ghostly blue; already knows Furious Howl</td></tr>\n    <tr class=\"racegroup\"><td colspan=\"6\">Everyone</td></tr>\n    <tr><td><b>Mist Howler</b> <span class=\"kind\">Rare</span> <span class=\"chg\">Night Elf route</span></td><td>Wolf</td><td class=\"mono\">22</td><td>Ashenvale</td><td class=\"mono\">1.3 s</td><td>Fast wolf where you'll be questing at 20+</td></tr>\n    <tr><td><b>Gray Fox</b></td><td>Fox</td><td class=\"mono\">~22</td><td>Duskwood</td><td class=\"mono\">—</td><td>Easiest fox to reach</td></tr>\n    <tr><td><b>Humar the Pridelord</b> <span class=\"kind\">Rare elite</span></td><td>Cat</td><td class=\"mono\">23</td><td>The Barrens</td><td class=\"mono\">—</td><td>Rare elite cat</td></tr>\n    <tr><td><b>Starving Mountain Lion</b></td><td>Cat</td><td class=\"mono\">~23</td><td>Hillsbrad Foothills</td><td class=\"mono\">1.2 s</td><td>Common, so no waiting for a spawn</td></tr>\n    <tr><td><b>Broken Tooth</b> <span class=\"kind\">Rare</span></td><td>Cat</td><td class=\"mono\">37</td><td>Badlands</td><td class=\"mono\">1.0 s</td><td>Still the fastest pet in the game. Expect other Hunters camping it</td></tr>\n  </tbody></table></div>\n  <p class=\"why\" style=\"margin-top:10px\">Players report that some Zephras Isle beasts can forget their abilities after a relog; it looks like a bug. Swing times and levels are from the video guide; a dash means it didn't give one.</p>\n  "
  },
  {
   "id": "pvp",
   "label": "Rulesets &amp; control",
   "h2": "PvP",
   "html": "\n  <p class=\"sdesc\">Blizzard says Hunters can't stun or interrupt, so your control comes from other places.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel\" data-key=\"pvp-your-control-toolkit\">\n      <summary><h3>Your control toolkit</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">8</span><p>Concussive Shot slows a target for 4 sec.</p></div>\n        <div class=\"step\"><span class=\"lv\">20</span><p>Freezing Trap, but players have to walk into it.</p></div>\n        <div class=\"step\"><span class=\"lv\">30–31</span><p>Intimidation is your pet's stun, at 31 in your build.</p></div>\n        <div class=\"step\"><span class=\"lv\">32</span><p>Flare reveals stealthed players in an area you target, for 30 sec.</p></div>\n        <div class=\"step\"><span class=\"lv\">36</span><p>Viper Sting drains a caster's mana.</p></div>\n      </div>\n    </details>\n    <details class=\"gpanel\" data-key=\"pvp-watch-out\">\n      <summary><h3>Watch out</h3></summary>\n      <ul>\n        <li>Feign Death has a 30-sec cooldown, and it can miss.</li>\n        <li>Aspect of the Cheetah dazes you for 4 sec when you take damage. Turn it off the moment someone attacks you (the <b>Drop Cheetah</b> macro).</li>\n        <li>On a PvP ruleset, Blizzard says you're almost always at risk of being attacked, and you can only create characters for one faction there.</li>\n        <li>As a Night Elf, Shadowmeld gets you out of sight and Elune's Light adds 10% crit for you and your pet.</li>\n      </ul>\n    </details>\n  </div>\n  "
  },
  {
   "id": "macros",
   "label": "Copy them exactly",
   "h2": "Hunter macros",
   "html": "\n  <p class=\"sdesc\">11 macros, written exactly as they go in the game's macro window. One wrong letter and a macro does nothing, so copy them with the button.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel wide\" data-key=\"macros-how-to-add-one\">\n      <summary><h3>How to add one</h3></summary>\n      <ol class=\"howto\">\n        <li>Type <code>/macro</code>, open the tab with this character's name, and click New.</li>\n        <li>Type the <b>macro name</b> as shown (16 characters at most) and pick the red question mark icon, so the button shows the spell's own icon.</li>\n        <li>Copy the <b>macro text</b> in exactly, line breaks included. Spell names must match your spellbook letter for letter: capitals, spaces and apostrophes.</li>\n        <li>Drag the macro onto your action bar.</li>\n      </ol>\n      <ul class=\"mtips\">\n        <li><span class=\"ph\">Highlighted words</span> are placeholders: replace them with the exact name of your own item.</li>\n        <li><b>Ctrl</b> means hold Ctrl as you press the button. <b>MO</b> means mouseover: it casts on whatever is under your mouse, and on your target when nothing is.</li>\n        <li>Leave rank numbers off and the macro always casts your highest rank, so you never have to re-drag spells after training.</li>\n        <li>The level tag is when the spell becomes available. Make the macro then, or it will just show a question mark.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-fighting\">\n      <summary><h3>Fighting</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Arcane + Pet</b><span class=\"lvl\">Lv 6</span></div><button class=\"copy\" id=\"copy-hu1\" data-for=\"hu1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hu1\">#showtooltip Arcane Shot\n/petattack\n/cast Arcane Shot</pre>\n        <p class=\"why\">Sends your pet in with every Arcane Shot, so it picks up the mob first. From 10, once you have a pet.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Hawk + Pet</b><span class=\"lvl\">Lv 25</span></div><button class=\"copy\" id=\"copy-hu6\" data-for=\"hu6\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hu6\">#showtooltip Summon Hawk\n/petattack\n/cast Summon Hawk</pre>\n        <p class=\"why\">Sends your pet in with each hawk. Hawks share a 6-sec cooldown with Arcane Shot, so alternate this with Arcane + Pet: Hawk, Hawk, Arcane. If a hawk hits once and flies back, your pet is on Passive.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Raptor Bite</b><span class=\"lvl\">Lv 16</span></div><button class=\"copy\" id=\"copy-hu2\" data-for=\"hu2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hu2\">#showtooltip Raptor Strike\n/startattack\n/cast Mongoose Bite\n/cast Raptor Strike</pre>\n        <p class=\"why\">Uses Mongoose Bite when a dodge lights it up, otherwise queues Raptor Strike. For when a mob reaches you.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Burst</b><span class=\"lvl\">Lv 26</span></div><button class=\"copy\" id=\"copy-hm4\" data-for=\"hm4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hm4\">#showtooltip Rapid Fire\n/cast Rapid Fire\n/cast Elune's Light</pre>\n        <p class=\"why\">Rapid Fire plus Elune's Light (+10% crit for you and your pet). From Feor's guide.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Aspects</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-hu3\" data-for=\"hu3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hu3\">#showtooltip\n/cast [mod:ctrl] Aspect of the Monkey; [combat] Aspect of the Hawk; Aspect of the Cheetah</pre>\n        <p class=\"why\">Hawk in combat, Cheetah out of combat, Monkey with Ctrl. Stops you fighting in Cheetah by accident.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Drop Cheetah</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-hm3\" data-for=\"hm3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hm3\">/cancelaura Aspect of the Cheetah</pre>\n        <p class=\"why\">Cancels Cheetah with no global cooldown. Bind it somewhere easy.</p></div>\n        \n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-pet\">\n      <summary><h3>Pet</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Pet Heal</b><span class=\"lvl\">Lv 12</span></div><button class=\"copy\" id=\"copy-hm1\" data-for=\"hm1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hm1\">/cast [target=pet,dead] Revive Pet; [target=pet,exists] Mend Pet; Revive Pet</pre>\n        <p class=\"why\">Heals your pet if it's alive and revives it if not.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Feed Pet</b><span class=\"lvl\">Lv 10</span></div><button class=\"copy\" id=\"copy-hu4\" data-for=\"hu4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hu4\">#showtooltip Feed Pet\n/cast Feed Pet\n/use <span class=\"ph\">Tough Jerky</span></pre>\n        <p class=\"why\">Feeds your pet in one press. Replace the food with what you carry; cats eat meat and fish.</p></div>\n        \n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-escape-control\">\n      <summary><h3>Escape & control</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Feign Death</b><span class=\"lvl\">Lv 30</span></div><button class=\"copy\" id=\"copy-hm2\" data-for=\"hm2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hm2\">#showtooltip\n/stopcasting\n/cast Feign Death</pre>\n        <p class=\"why\">Stops a cast so Feign Death goes off when you need it.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Freeze Trap</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-hu5\" data-for=\"hu5\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hu5\">#showtooltip Freezing Trap\n/stopattack\n/petfollow\n/cast Freezing Trap</pre>\n        <p class=\"why\">Stops your attacks and calls the pet back so neither breaks the trap. All traps share one 30-sec cooldown, so make it count.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Safe Scatter</b><span class=\"lvl\">Talent</span></div><button class=\"copy\" id=\"copy-hm5\" data-for=\"hm5\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"hm5\">#showtooltip Scatter Shot\n/stopattack\n/stopcasting\n/cast Scatter Shot\n/stopattack</pre>\n        <p class=\"why\">Stops your own attacks so they don't break the Scatter. From Feor's guide; only if you take Scatter Shot.</p></div>\n        \n    </details>\n    <div class=\"gpanel wide\">\n      <p class=\"why\">Built from the guides on this page and the Forever macro lists on <a href=\"https://rankedboost.com/world-of-warcraft/forever/macros/\" target=\"_blank\" rel=\"noopener\">RankedBoost</a> (Nov 7) and <a href=\"https://kami-labs.fr/en/wow-forever/macros-wow-forever-9-classes/\" target=\"_blank\" rel=\"noopener\">Kami Labs</a>, checked against the spells your guides confirm exist in Forever. Ideas using removed spells, such as Tiger's Fury, were left out. Syntax follows the <a href=\"https://warcraft.wiki.gg/wiki/Macro_conditionals\" target=\"_blank\" rel=\"noopener\">macro conditionals reference</a>.</p>\n    </div>\n  </div>\n  "
  },
  {
   "id": "notes",
   "label": "Read before you commit",
   "h2": "Caveats &amp; sources",
   "html": "\n  <div class=\"notes\">\n<div class=\"note\"><h3>Beta numbers, live game</h3><p>All numbers come from the final beta build (70425). The game launched Nov 4, so check anything important in game. Blizzard can still retune live.</p></div>\n<div class=\"note\"><h3>Racials corrected Nov 5</h3><p>The first version of the Forever Roster Planner had several wrong racials, including Earth Fury for Dwarves (it's Artisan's Precision, +1% hit), Ruthless at 2% (it's 1%) and Wind Blessed at 3% (it's 2%). The table now matches Talents Forever and DonTheCrown's guide.</p></div>\n<div class=\"note\"><h3>Popularity isn't power</h3><p>Spec shares count what people plan in a calculator. Icy Veins also advises picking a playstyle you'll enjoy rather than chasing the strongest class, since tuning keeps shifting.</p></div>\n<div class=\"note\"><h3>Summon Hawk buffed Nov 10</h3><p>Feor's Nov 7 update said Summon Hawk was weaker than Arcane Shot. The Nov 10 hotfix made both cost 11% of base mana at every rank and made hawks hit about 80% harder in melee, so hawks are back in the rotation: Hawk, Hawk, Arcane Shot.</p></div>\n<div class=\"note\"><h3>Player tests, not official</h3><p>The pet scaling split (all crit, ~30% armor, ~10% attack power), faster pets doing more damage, Beast Lore being unreliable, the Passive-pet hawk bug and the Zephras relog bug all come from players, not Blizzard. If your tooltip says something different, trust the tooltip.</p></div>\n<div class=\"note\"><h3>Raids open Dec 9</h3><p>No raids until December 9, so there's time to find a fast beast and level it.</p></div>\n  </div>\n  <h3 style=\"margin:28px 0 12px\">Sources</h3>\n  <ul class=\"sources\">\n    <li><a href=\"https://mobalytics.gg/wow-forever/classes/hunter-leveling-guide\" target=\"_blank\" rel=\"noopener\">Feor: Hunter Leveling Guide 1–60 (Mobalytics, Nov 7)</a></li>\n    <li>Hunter video guide you shared (transcript, recorded after the Nov 11 hotfixes)</li>\n    <li><a href=\"https://us.forums.blizzard.com/en/wow/t/2360696/9\" target=\"_blank\" rel=\"noopener\">Blizzard: Forever development notes, updated Nov 2</a></li>\n    <li><a href=\"https://www.warcrafttavern.com/forever/news/class-economy-changes-wow-forever-hotfixes-for-november-10/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Nov 10 hotfixes</a></li>\n    <li><a href=\"https://kami-labs.fr/en/wow-forever/familiers-chasseur-demoniste-wow-forever/\" target=\"_blank\" rel=\"noopener\">Kami Labs: Hunter pet health hotfix</a></li>\n    <li><a href=\"https://worldofwarcraft.blizzard.com/news/24301515\" target=\"_blank\" rel=\"noopener\">Blizzard: Class deep dive, Hunter and Druid</a></li>\n    <li><a href=\"https://www.warcrafttavern.com/forever/guides/hunter-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Hunter leveling</a></li>\n    <li><a href=\"https://www.method.gg/wow-forever/wow-forever-hunter-leveling-guide-and-talents\" target=\"_blank\" rel=\"noopener\">Method: Hunter leveling guide & talents (Oct 21)</a></li>\n    <li><a href=\"https://wow.gg/guides/wow-forever-survival-hunter-beta\" target=\"_blank\" rel=\"noopener\">WoW.gg: Survival Hunter (Nov 4)</a></li>\n    <li><a href=\"https://www.method.gg/wow-forever/the-best-weapons-in-wow-forever-from-levels-1-30\" target=\"_blank\" rel=\"noopener\">Method: best weapons from levels 1–30 (Nov 6)</a></li>\n    <li><a href=\"https://talentsforever.com/racials\" target=\"_blank\" rel=\"noopener\">Talents Forever: races, classes and racials</a></li>\n    <li><a href=\"https://talentsforever.com/popular\" target=\"_blank\" rel=\"noopener\">Talents Forever: most popular builds</a></li>\n    <li><a href=\"https://talentsforever.com/leveling\" target=\"_blank\" rel=\"noopener\">Talents Forever: leveling builds</a></li>\n    <li><a href=\"https://talentsforever.com/guides\" target=\"_blank\" rel=\"noopener\">Talents Forever: what changed since Classic</a></li>\n    <li><a href=\"https://hyjal.cc/racials\" target=\"_blank\" rel=\"noopener\">Hyjal: racial abilities</a></li>\n    <li><a href=\"https://www.icy-veins.com/wow-forever/news/racial-and-class-tuning-new-features-and-options-massive-wow-forever-beta-development-notes-october-15th/\" target=\"_blank\" rel=\"noopener\">Icy Veins: Oct 15 beta development notes</a></li>\n    <li><a href=\"https://www.icy-veins.com/wow-forever/news/your-favorite-race-was-just-changed-in-wow-forever/\" target=\"_blank\" rel=\"noopener\">Icy Veins: every race changed</a></li>\n    <li><a href=\"https://www.icy-veins.com/wow-forever/choosing-your-main\" target=\"_blank\" rel=\"noopener\">Icy Veins: choosing your class</a></li>\n  </ul>\n  "
  }
 ]
};
