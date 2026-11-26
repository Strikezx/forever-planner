/* WoW Forever Planner: Warlock guide. Class data last checked/updated Nov 26, 2026.
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
   "sub": "Warcraft Tavern"
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
   "Enchanters"
  ],
  [
   13,
   "Greater Magic Wand",
   "Enchanters"
  ],
  [
   20,
   "Gravestone Scepter and a Soran'ruk staff or orb",
   "BFD quest / class quest"
  ],
  [
   22,
   "Staff of the Shade",
   "Razorfen Kraul rare"
  ],
  [
   39,
   "White Obsidian",
   "wand"
  ],
  [
   43,
   "Peacekeeper",
   "wand"
  ],
  [
   51,
   "Wand of Biting Cold",
   "wand"
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
     "Shadow Bolt, Immolate, finish in melee"
    ],
    [
     4,
     7,
     "Corruption and Immolate, then wand"
    ],
    [
     8,
     9,
     "Pull with Bane of Agony"
    ],
    [
     10,
     29,
     "Demon in first, DoTs from range, wand"
    ],
    [
     30,
     60,
     "Drain Life to finish"
    ],
    [
     30,
     60,
     "Life Tap or Drain Life by health vs mana"
    ],
    [
     41,
     60,
     "Add Siphon Life"
    ],
    [
     41,
     60,
     "Shadow Bolt only on Nightfall"
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
   "t": "Affliction",
   "s": "Warcraft Tavern · ends 40/7/4",
   "p": "Improved Corruption 5/5 and Suppression 5/5 first, then Unholy Power and Demonic Energies in Demonology for a stronger demon, Improved Drains and Amplify Curse by 30, Pandemic and Soul Siphon by 40, then Malevolence, Shadow Mastery and Nightfall. 43.5% of calculator leveling builds are Affliction."
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
   "html": "\n  <p class=\"sdesc\">Built on <a href=\"https://www.warcrafttavern.com/forever/guides/warlock-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern's Warlock leveling guide</a>, the only one with a full 10–60 talent order, which ends at 40/7/4. Gaps are filled from <a href=\"https://conquestcapped.com/guides/wow-forever/wow-forever-warlock-leveling/\" target=\"_blank\" rel=\"noopener\">ConquestCapped</a> (Oct 28), <a href=\"https://www.method.gg/wow-forever/wow-forever-warlock-leveling-guide-and-talents\" target=\"_blank\" rel=\"noopener\">Method</a> (Oct 17), Warcraft Tavern's <a href=\"https://www.warcrafttavern.com/forever/guides/affliction-warlock/\" target=\"_blank\" rel=\"noopener\">Affliction guide</a> (Nov 1) and <a href=\"https://wow.gg/guides/wow-forever-affliction-warlock-beta\" target=\"_blank\" rel=\"noopener\">WoW.gg</a> (Nov 4). All three leveling guides recommend Affliction.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" id=\"talents\" data-key=\"warlock-guide-talent-order\" open>\n      <summary><h3>Talent order <small>checklist · 51 points · ends at 40/7/4</small></h3></summary>\n      <p class=\"why\">Tick each row as you spend the points. Gold rows are due at your level; the outlined row is your next point.</p>\n      <div id=\"talents-app\"></div>\n      <p class=\"why\">Warcraft Tavern gives the talents in level bands (10–19, 20–26, 27–30, 31–40, 41–60); the exact level for each point follows its listed order. <b>Soul Siphon at 38 is good again:</b> since the Nov 10 hotfix it makes Drain Life, Drain Soul and Wrack 4/8/12% stronger for each of your Corruption, Siphon Life and Bane of Agony on the target, up to 36%, so it pays off on this Drain Life path even without Wrack.</p>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"warlock-guide-alternative-conquestcapped-s-faster-dot-start\">\n      <summary><h3>Alternative: ConquestCapped's faster DoT start <small>levels 10–30</small></h3></summary>\n      <p>Skips the Demonology detour and gets Pandemic and Nightfall far sooner, at the cost of a weaker demon early on. Its 20-point Affliction start:</p>\n      <div class=\"cols\">\n        <div>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Improved Corruption</b> <span class=\"why\">· 10–14</span></li>\n            <li><span class=\"rk\">3/5</span><b>Suppression</b> <span class=\"why\">· 15–17</span></li>\n            <li><span class=\"rk\">2/2</span><b>Grim Reach</b> <span class=\"why\">· 18–19; longer Affliction range, new Oct 15</span></li>\n            <li><span class=\"rk\">3/3</span><b>Improved Drains</b> <span class=\"why\">· 20–22</span></li>\n          </ol>\n        </div>\n        <div>\n          <ol class=\"talents\" start=\"5\">\n            <li><span class=\"rk\">3/3</span><b>Pandemic</b> <span class=\"why\">· 23–25</span></li>\n            <li><span class=\"rk\">2/2</span><b>Nightfall</b> <span class=\"why\">· 26–27</span></li>\n            <li><span class=\"rk\">1/1</span><b>Amplify Curse</b> <span class=\"why\">· 28</span></li>\n            <li><span class=\"rk\">2/2</span><b>Improved Bane of Agony</b> <span class=\"why\">· 29–30</span></li>\n          </ol>\n        </div>\n      </div>\n      <p class=\"why\">It stops at 30; from 31, follow the Warcraft Tavern order and skip what you already have. Method's older (Oct 17) order also rushes Pandemic and lands on Wrack at 40. Wrack was reworked on Nov 10: it deals 30% less damage, and while you channel it your Corruption, Siphon Life and Bane of Agony tick twice as fast.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-rotation-by-level\" open>\n      <summary><h3>Rotation by level</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1–4</span><p>Shadow Bolt, then Immolate while the bolt is in the air. Finish with melee.</p></div>\n        <div class=\"step\"><span class=\"lv\">4–8</span><p>Corruption and Immolate, then the wand. Pick up the Blood Pact grimoire from the demon trainer at 4.</p></div>\n        <div class=\"step\"><span class=\"lv\">8–10</span><p>Pull with Bane of Agony; it tags the mob instantly, which helps in busy zones. Then Corruption, Immolate, wand.</p></div>\n        <div class=\"step\"><span class=\"lv\">10–30</span><p>Send the demon in first, then Bane of Agony and Corruption from range and Immolate as the mob closes. Wand it down; switch to Drain Life when you need health. Fight two at once: the demon tanks one, you DoT both.</p></div>\n        <div class=\"step\"><span class=\"lv\">30+</span><p>Drain Life replaces the wand as your finisher. Life Tap when health is higher than mana, Drain Life when mana is higher than health. Fear a second mob while you finish the first.</p></div>\n        <div class=\"step\"><span class=\"lv\">41+</span><p>Add Siphon Life to the DoTs. Once you have Nightfall, cast Shadow Bolt only when it's instant.</p></div>\n        <div class=\"step\"><span class=\"lv\">Eureka!</span><p>It doesn't touch DoTs. Pop it before a Shadow Bolt or two on a tough mob, or with Searing Pain.</p></div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-demons\">\n      <summary><h3>Demons</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1</span><p><b>Imp:</b> ranged damage and Blood Pact (Stamina). Falls behind once you have the Voidwalker.</p></div>\n        <div class=\"step\"><span class=\"lv\">10</span><p><b>Voidwalker:</b> ConquestCapped's pick as the best leveling demon. It holds two mobs and heals itself, and Sacrifice gives a big emergency shield.</p></div>\n        <div class=\"step\"><span class=\"lv\">20</span><p><b>Succubus or Incubus (Sayaad):</b> the most single-target damage and Warcraft Tavern's main demon from 20. Seduce controls a Humanoid in dungeons. ConquestCapped says the Incubus quest is easier.</p></div>\n        <div class=\"step\"><span class=\"lv\">30</span><p><b>Felhunter:</b> Spell Lock interrupts and Devour Magic dispels. Best against casters and on PvP realms.</p></div>\n      </div>\n      <p class=\"why\">Keep the demon on passive and send it in yourself, so it never pulls extra mobs.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-class-quests\">\n      <summary><h3>Class quests <small>Alliance</small></h3></summary>\n      <ul>\n        <li><b>1, Imp:</b> starting-zone quest</li>\n        <li><b>10, Voidwalker:</b> the Gnome version is The Slaughtered Lamb</li>\n        <li><b>20, Succubus:</b> Devourer of Souls, Stormwind. <b>Incubus:</b> What Is Love?, Stormwind</li>\n        <li><b>20, Soran'ruk:</b> Orb or Staff of Soran'ruk, using fragments from Blackfathom Deeps and Shadowfang Keep</li>\n        <li><b>30, Felhunter:</b> Seeking Strahad, from any capital</li>\n        <li><b>40, Felsteed:</b> a short quest. <b>60, Dreadsteed:</b> a long chain</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-key-spells\">\n      <summary><h3>Key spells</h3></summary>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">1–8</span><p>Shadow Bolt, Immolate, Imp, Demon Skin 1 · Corruption, Curse of Weakness 4 · Life Tap 6 · Fear, Bane of Agony 8</p></div>\n        <div class=\"step\"><span class=\"lv\">10–18</span><p>Voidwalker, Drain Soul, Create Healthstone 10 · Health Funnel 12 · Curse of Recklessness, Drain Life 14 · Searing Pain, Create Soulstone 18</p></div>\n        <div class=\"step\"><span class=\"lv\">20–28</span><p>Succubus or Incubus, Demon Armor, Ritual of Summoning, Curse of the Elements 20 · Eye of Kilrogg 22 · Drain Mana 24 · Curse of Tongues 26 · Banish, Create Firestone 28</p></div>\n        <div class=\"step\"><span class=\"lv\">30–60</span><p>Felhunter, Subjugate Demon, Hellfire 30 · Create Spellstone 36 · Felsteed, Howl of Terror, Dual Talent Specialization 40 · Death Coil 42 · Inferno 50 · Dreadsteed, Bane of Doom 60</p></div>\n      </div>\n      <p class=\"why\">Ritual of Summoning is the only way to summon players in Forever; meeting stones no longer do it.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-wands-weapons\">\n      <summary><h3>Wands &amp; weapons</h3></summary>\n      <p>Get a wand as early as you can: it's your finisher until 30 and saves a lot of mana. Wands now need 0.5 sec standing still before they fire.</p>\n      <div class=\"steps\">\n        <div class=\"step\"><span class=\"lv\">5</span><p>Lesser Magic Wand, made by Enchanters</p></div>\n        <div class=\"step\"><span class=\"lv\">13</span><p>Greater Magic Wand, made by Enchanters</p></div>\n        <div class=\"step\"><span class=\"lv\">20+</span><p>Gravestone Scepter, Blackfathom Deeps quest reward, good until about 40. Don't skip this dungeon</p></div>\n        <div class=\"step\"><span class=\"lv\">20</span><p>Staff of Soran'ruk (two-hander) or Orb of Soran'ruk (off-hand), class quest</p></div>\n        <div class=\"step\"><span class=\"lv\">22+</span><p>Staff of the Shade, a rare from Razorfen Kraul</p></div>\n        <div class=\"step\"><span class=\"lv\">39–51</span><p>White Obsidian 39 · Peacekeeper 43 · Wand of Biting Cold 51</p></div>\n      </div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-stats\">\n      <summary><h3>Stats</h3></summary>\n      <ul>\n        <li><b>Wand DPS</b> matters most until 30</li>\n        <li><b>Spell Power or Shadow damage</b> first after that</li>\n        <li><b>Spirit and Intellect</b> next; Spirit makes Life Tap return more mana</li>\n        <li><b>Stamina</b> after; Life Tap turns it into mana anyway</li>\n        <li>At 60, bosses need 17% hit. Suppression gives 5%, and your demon inherits your hit</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-professions\">\n      <summary><h3>Professions</h3></summary>\n      <ul>\n        <li><b>Tailoring + Enchanting:</b> the pick in both Method and Warcraft Tavern. Tailoring makes Shadow-damage cloth (Filigreed Shadow Gown for Affliction), and Enchanting makes your early wands and disenchants what you sew</li>\n        <li><b>Cooking:</b> Well Fed food gives +5% XP from kills</li>\n        <li><b>First Aid:</b> bandages, and Life Tap turns that health back into mana</li>\n        <li><b>Skinning</b> is the easy gold option, and its Camp Chair gives 2% crit</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-tips-mistakes\">\n      <summary><h3>Tips &amp; mistakes</h3></summary>\n      <ul>\n        <li>Life Tap while you walk, so you arrive at every pull on full mana.</li>\n        <li>Don't DoT something that's about to die.</li>\n        <li>Fear has a 20-yard range, and Curse of Recklessness breaks it early.</li>\n        <li>Banes are DoTs and Curses are utility, and you can have one of each on the same target.</li>\n        <li>Drain Soul can drop a shard on every tick. Use it on a mob your demon is tanking.</li>\n        <li>Soul Shards take bag space, but your shard bag fits the reagent slot.</li>\n        <li>Keep Demon Skin, later Demon Armor, up for the health regen.</li>\n      </ul>\n    </details>\n\n    \n\n    <details class=\"gpanel\" data-key=\"warlock-guide-gnome-honestly\">\n      <summary><h3>Gnome, honestly</h3></summary>\n      <p>Warcraft Tavern ranks Gnome last for Affliction at 60, because Eureka! skips DoTs. For leveling the gap is small: Expansive Mind still means fewer drinks, and Escape Artist gets you out of roots. If you ever want Eureka! to shine, that's Destruction, which hits with direct casts but levels the slowest.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"warlock-guide-demonology-instead\">\n      <summary><h3>Demonology instead?</h3></summary>\n      <p>Level Affliction to 27, then respec: Unholy Power, Demonic Energies, Fel Vitality, Master Summoner, Improved Sayaad and Demonic Brand. Searing Pain brands the demon's target so your Sayaad keeps threat. Never Searing Pain before the brand is up; it pulls a lot of threat. Demonic Pact comes at 40, and Demonology is the most-planned spec at 60.</p>\n    </details>\n\n  </div>\n  "
  },
  {
   "id": "macros",
   "label": "Copy them exactly",
   "h2": "Warlock macros",
   "html": "\n  <p class=\"sdesc\">12 macros, written exactly as they go in the game's macro window. One wrong letter and a macro does nothing, so copy them with the button.</p>\n  <div class=\"guide\">\n    <details class=\"gpanel wide\" data-key=\"macros-how-to-add-one\">\n      <summary><h3>How to add one</h3></summary>\n      <ol class=\"howto\">\n        <li>Type <code>/macro</code>, open the tab with this character's name, and click New.</li>\n        <li>Type the <b>macro name</b> as shown (16 characters at most) and pick the red question mark icon, so the button shows the spell's own icon.</li>\n        <li>Copy the <b>macro text</b> in exactly, line breaks included. Spell names must match your spellbook letter for letter: capitals, spaces and apostrophes.</li>\n        <li>Drag the macro onto your action bar.</li>\n      </ol>\n      <ul class=\"mtips\">\n        <li><span class=\"ph\">Highlighted words</span> are placeholders: replace them with the exact name of your own item.</li>\n        <li><b>Ctrl</b> means hold Ctrl as you press the button. <b>MO</b> means mouseover: it casts on whatever is under your mouse, and on your target when nothing is.</li>\n        <li>Leave rank numbers off and the macro always casts your highest rank, so you never have to re-drag spells after training.</li>\n        <li>The level tag is when the spell becomes available. Make the macro then, or it will just show a question mark.</li>\n      </ul>\n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-fighting\">\n      <summary><h3>Fighting</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Pet Bane</b><span class=\"lvl\">Lv 8</span></div><button class=\"copy\" id=\"copy-wm1\" data-for=\"wm1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wm1\">#showtooltip Bane of Agony\n/petattack\n/cast Bane of Agony</pre>\n        <p class=\"why\">Method's tip: send the demon first so the mob goes for it, not you.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Pet Bolt</b><span class=\"lvl\">Lv 1</span></div><button class=\"copy\" id=\"copy-wl1\" data-for=\"wl1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl1\">#showtooltip Shadow Bolt\n/petfollow [mod:ctrl]\n/stopmacro [mod:ctrl]\n/petattack\n/cast Shadow Bolt</pre>\n        <p class=\"why\">Every Shadow Bolt also sends your demon in. Hold Ctrl to call the demon back and cast nothing.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Corruption MO</b><span class=\"lvl\">Lv 4</span></div><button class=\"copy\" id=\"copy-wm3\" data-for=\"wm3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wm3\">#showtooltip Corruption\n/cast [@mouseover,harm,nodead][] Corruption</pre>\n        <p class=\"why\">DoTs a second mob without retargeting.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Bane MO</b><span class=\"lvl\">Lv 8</span></div><button class=\"copy\" id=\"copy-wl2\" data-for=\"wl2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl2\">#showtooltip Bane of Agony\n/cast [@mouseover,harm,nodead][] Bane of Agony</pre>\n        <p class=\"why\">The same for Bane of Agony.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Tap Drain</b><span class=\"lvl\">Lv 14</span></div><button class=\"copy\" id=\"copy-wl3\" data-for=\"wl3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl3\">#showtooltip [mod:ctrl] Life Tap; Drain Life\n/cast [mod:ctrl] Life Tap; Drain Life</pre>\n        <p class=\"why\">Drain Life when mana is higher than health. Hold Ctrl to Life Tap when health is higher.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Eureka Bolt</b><span class=\"lvl\">Lv 1</span></div><button class=\"copy\" id=\"copy-wl4\" data-for=\"wl4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl4\">#showtooltip Shadow Bolt\n/cast Eureka!\n/cast Shadow Bolt</pre>\n        <p class=\"why\">Eureka! doesn't boost DoTs, so it goes on Shadow Bolt. If Eureka! uses the global cooldown, press again for the bolt.</p></div>\n        \n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-control\">\n      <summary><h3>Control</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Focus Fear</b><span class=\"lvl\">Lv 8</span></div><button class=\"copy\" id=\"copy-wm2\" data-for=\"wm2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wm2\">#showtooltip Fear\n/cast [@focus,harm,nodead][] Fear</pre>\n        <p class=\"why\">Fears your focus, so you can juggle a second mob without losing your target. Set a focus with /focus.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Coil Howl</b><span class=\"lvl\">Lv 42</span></div><button class=\"copy\" id=\"copy-wl5\" data-for=\"wl5\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl5\">#showtooltip [mod:ctrl] Howl of Terror; Death Coil\n/stopcasting\n/cast [mod:ctrl] Howl of Terror; Death Coil</pre>\n        <p class=\"why\">Emergency Death Coil, cancelling your cast. Hold Ctrl for Howl of Terror (40).</p></div>\n        \n    </details>\n    <details class=\"gpanel macset\" data-key=\"macros-demons-items\">\n      <summary><h3>Demons & items</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>VW Sacrifice</b><span class=\"lvl\">Lv 16</span></div><button class=\"copy\" id=\"copy-wl6\" data-for=\"wl6\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl6\">#showtooltip Sacrifice\n/cast Sacrifice</pre>\n        <p class=\"why\">Puts the Voidwalker's shield on your main bar. Learned from a grimoire at the demon trainer.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Seduce Focus</b><span class=\"lvl\">Lv 20</span></div><button class=\"copy\" id=\"copy-wl7\" data-for=\"wl7\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl7\">#showtooltip Seduction\n/cast [@focus,harm,nodead][] Seduction</pre>\n        <p class=\"why\">Your Succubus or Incubus seduces your focus, or your target.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Spell Lock</b><span class=\"lvl\">Lv 30</span></div><button class=\"copy\" id=\"copy-wl8\" data-for=\"wl8\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl8\">#showtooltip Spell Lock\n/cast [@focus,harm,nodead][] Spell Lock</pre>\n        <p class=\"why\">Felhunter interrupt on your focus, or your target.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>Healthstone</b><span class=\"lvl\">Lv 10</span></div><button class=\"copy\" id=\"copy-wl9\" data-for=\"wl9\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"wl9\">#showtooltip\n/use Major Healthstone\n/use Greater Healthstone\n/use Healthstone\n/use Lesser Healthstone\n/use Minor Healthstone</pre>\n        <p class=\"why\">Eats whichever Healthstone you carry. The extra lines just fail quietly.</p></div>\n        <p class=\"why\">Forever renamed the Succubus line to Sayaad. If <b>Seduction</b> isn't the name on your pet bar, use the name shown there.</p>\n    </details>\n    <div class=\"gpanel wide\">\n      <p class=\"why\">Built from the guides on this page and the Forever macro lists on <a href=\"https://rankedboost.com/world-of-warcraft/forever/macros/\" target=\"_blank\" rel=\"noopener\">RankedBoost</a> (Nov 7) and <a href=\"https://kami-labs.fr/en/wow-forever/macros-wow-forever-9-classes/\" target=\"_blank\" rel=\"noopener\">Kami Labs</a>, checked against the spells your guides confirm exist in Forever. Ideas using removed spells, such as Tiger's Fury, were left out. Syntax follows the <a href=\"https://warcraft.wiki.gg/wiki/Macro_conditionals\" target=\"_blank\" rel=\"noopener\">macro conditionals reference</a>.</p>\n    </div>\n  </div>\n  "
  },
  {
   "id": "notes",
   "label": "Read before you commit",
   "h2": "Caveats &amp; sources",
   "html": "\n  <div class=\"notes\">\n<div class=\"note\"><h3>Guides disagree on early talents</h3><p>Warcraft Tavern takes Unholy Power and Demonic Energies at 20–26 for a stronger demon. ConquestCapped and Method rush Pandemic instead. Both work; the Warcraft Tavern order is the only full 10–60 path.</p></div>\n<div class=\"note\"><h3>Soul Siphon and Wrack, settled Nov 10</h3><p>Blizzard's Nov 10 hotfix made Soul Siphon boost Drain Life, Drain Soul and Wrack for each of your Corruption, Siphon Life and Bane of Agony on the target (4/8/12% each, up to 36%), so the points at 38 are worth it without Wrack. The same hotfix cut Wrack's damage by 30% and made it speed up your DoTs instead, and gave the Imp, Voidwalker and Succubus about 15% more health. Checked Nov 26.</p></div>\n<div class=\"note\"><h3>Beta numbers, live game</h3><p>Spec shares and first points come from the Talents Forever calculator on the final beta build. The game launched Nov 4, and Blizzard can still retune live.</p></div>\n<div class=\"note\"><h3>Older Warlock data</h3><p>Calculator leveling counts were taken before Oct 15, when Malediction was replaced by Grim Reach (+10/20% Affliction spell range).</p></div>\n  </div>\n  <h3 style=\"margin:28px 0 12px\">Sources</h3>\n  <ul class=\"sources\">\n    <li><a href=\"https://www.warcrafttavern.com/forever/guides/warlock-leveling/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Warlock leveling</a></li>\n    <li><a href=\"https://www.warcrafttavern.com/forever/guides/affliction-warlock/\" target=\"_blank\" rel=\"noopener\">Warcraft Tavern: Affliction Warlock (Nov 1)</a></li>\n    <li><a href=\"https://conquestcapped.com/guides/wow-forever/wow-forever-warlock-leveling/\" target=\"_blank\" rel=\"noopener\">ConquestCapped: Warlock leveling (Oct 28)</a></li>\n    <li><a href=\"https://www.method.gg/wow-forever/wow-forever-warlock-leveling-guide-and-talents\" target=\"_blank\" rel=\"noopener\">Method: Warlock leveling guide &amp; talents (Oct 17)</a></li>\n    <li><a href=\"https://wow.gg/guides/wow-forever-affliction-warlock-beta\" target=\"_blank\" rel=\"noopener\">WoW.gg: Affliction Warlock (Nov 4)</a></li>\n    <li><a href=\"https://mobalytics.gg/wow-forever/classes/warlock-leveling-guide\" target=\"_blank\" rel=\"noopener\">Mobalytics: Warlock leveling guide</a> (couldn't be read; not used)</li>\n    <li><a href=\"https://talentsforever.com/racials\" target=\"_blank\" rel=\"noopener\">Talents Forever: races, classes and racials</a></li>\n    <li><a href=\"https://talentsforever.com/leveling\" target=\"_blank\" rel=\"noopener\">Talents Forever: leveling builds</a></li>\n    <li><a href=\"https://hyjal.cc/racials\" target=\"_blank\" rel=\"noopener\">Hyjal: racial abilities</a></li>\n  </ul>\n  "
  }
 ]
};
