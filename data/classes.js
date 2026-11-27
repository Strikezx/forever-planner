/* WoW Forever Planner shared data: class order, talents, races, racials, Legacy System and console tips. Checked/updated Nov 26, 2026.
   The nine class guides live in data/class-<name>.js. Each one adds itself to window.FP_DATA.classes, so index.html loads them after this file. */
window.FP_DATA = {
 "order": [
  "warrior",
  "paladin",
  "hunter",
  "rogue",
  "priest",
  "shaman",
  "mage",
  "warlock",
  "druid"
 ],
 "classes": {},
 "talentAliases": {
  "druid": {
   "Improved Wrath": "Starlight Wrath",
   "Improved Moonfire": "Moon and Stars"
  }
 },
 "talents": {
  "warrior": [
   [
    "Arms",
    [
     [
      "Improved Heroic Strike",
      3,
      1,
      1,
      ""
     ],
     [
      "Deflection",
      5,
      1,
      2,
      ""
     ],
     [
      "Improved Rend",
      3,
      1,
      3,
      ""
     ],
     [
      "Improved Charge",
      2,
      2,
      1,
      ""
     ],
     [
      "Improved Tactical Mastery",
      3,
      2,
      2,
      ""
     ],
     [
      "Improved Overpower",
      2,
      2,
      4,
      ""
     ],
     [
      "Anger Management",
      1,
      3,
      2,
      "Improved Tactical Mastery"
     ],
     [
      "Deep Wounds",
      3,
      3,
      3,
      "Improved Rend"
     ],
     [
      "Spearing Strike",
      1,
      4,
      1,
      ""
     ],
     [
      "Two-Handed Weapon Specialization",
      3,
      4,
      2,
      ""
     ],
     [
      "Impale",
      2,
      4,
      3,
      "Deep Wounds"
     ],
     [
      "Bloodthrill",
      2,
      5,
      1,
      ""
     ],
     [
      "Sweeping Strikes",
      1,
      5,
      2,
      ""
     ],
     [
      "Weaponmaster",
      5,
      5,
      3,
      ""
     ],
     [
      "Improved Slam",
      2,
      6,
      1,
      ""
     ],
     [
      "Improved Hamstring",
      3,
      6,
      3,
      ""
     ],
     [
      "Mortal Strike",
      1,
      7,
      2,
      "Sweeping Strikes"
     ]
    ]
   ],
   [
    "Fury",
    [
     [
      "Booming Voice",
      5,
      1,
      2,
      ""
     ],
     [
      "Cruelty",
      5,
      1,
      3,
      ""
     ],
     [
      "Lingering Rage",
      5,
      2,
      2,
      ""
     ],
     [
      "Unbridled Wrath",
      5,
      2,
      3,
      ""
     ],
     [
      "Furious Precision",
      3,
      3,
      1,
      ""
     ],
     [
      "Piercing Howl",
      1,
      3,
      2,
      ""
     ],
     [
      "Blood Craze",
      3,
      3,
      3,
      ""
     ],
     [
      "Enrage",
      5,
      3,
      4,
      ""
     ],
     [
      "Dual Wield Specialization",
      5,
      4,
      1,
      ""
     ],
     [
      "Reckless Swings",
      1,
      4,
      2,
      ""
     ],
     [
      "Improved Execute",
      2,
      4,
      4,
      ""
     ],
     [
      "Improved Berserker Rage",
      2,
      5,
      1,
      ""
     ],
     [
      "Death Wish",
      1,
      5,
      2,
      ""
     ],
     [
      "Gore Drinker",
      2,
      5,
      3,
      "Blood Craze"
     ],
     [
      "Improved Intercept",
      2,
      5,
      4,
      ""
     ],
     [
      "Improved Whirlwind",
      2,
      6,
      1,
      ""
     ],
     [
      "Flurry",
      3,
      6,
      3,
      ""
     ],
     [
      "Bloodthirst",
      1,
      7,
      2,
      "Death Wish"
     ]
    ]
   ],
   [
    "Protection",
    [
     [
      "Improved Bloodrage",
      2,
      1,
      1,
      ""
     ],
     [
      "Shield Specialization",
      5,
      1,
      2,
      ""
     ],
     [
      "Iron Will",
      5,
      1,
      3,
      ""
     ],
     [
      "Anticipation",
      5,
      2,
      1,
      ""
     ],
     [
      "Improved Revenge",
      3,
      2,
      3,
      ""
     ],
     [
      "Improved Thunder Clap",
      3,
      2,
      4,
      ""
     ],
     [
      "Last Stand",
      1,
      3,
      1,
      ""
     ],
     [
      "Master of Defense",
      2,
      3,
      2,
      "Shield Specialization"
     ],
     [
      "Improved Disarm",
      3,
      3,
      3,
      ""
     ],
     [
      "Defiance",
      3,
      3,
      4,
      ""
     ],
     [
      "Improved Sunder Armor",
      3,
      4,
      1,
      ""
     ],
     [
      "Vanguard",
      1,
      4,
      2,
      ""
     ],
     [
      "Improved Shield Bash",
      2,
      4,
      3,
      ""
     ],
     [
      "Improved Shield Wall",
      2,
      5,
      1,
      ""
     ],
     [
      "Concussion Blow",
      1,
      5,
      2,
      ""
     ],
     [
      "Focused Rage",
      3,
      5,
      3,
      ""
     ],
     [
      "Bastion",
      5,
      6,
      3,
      ""
     ],
     [
      "Shield Slam",
      1,
      7,
      2,
      "Concussion Blow"
     ]
    ]
   ]
  ],
  "paladin": [
   [
    "Holy",
    [
     [
      "Spiritual Focus",
      5,
      1,
      2,
      ""
     ],
     [
      "Divine Strength",
      5,
      1,
      3,
      ""
     ],
     [
      "Healing Light",
      3,
      2,
      1,
      ""
     ],
     [
      "Reverence",
      2,
      2,
      2,
      ""
     ],
     [
      "Improved Seals",
      5,
      2,
      3,
      ""
     ],
     [
      "Purifying Power",
      2,
      2,
      4,
      ""
     ],
     [
      "Divine Favor",
      1,
      3,
      1,
      ""
     ],
     [
      "Illumination",
      5,
      3,
      2,
      "Reverence"
     ],
     [
      "Holy Conduit",
      2,
      3,
      3,
      ""
     ],
     [
      "Divine Precision",
      2,
      4,
      1,
      ""
     ],
     [
      "Infusion of Light",
      2,
      4,
      2,
      ""
     ],
     [
      "Oath of Light",
      1,
      4,
      3,
      ""
     ],
     [
      "Consecrated Ground",
      2,
      5,
      1,
      ""
     ],
     [
      "Holy Shock",
      1,
      5,
      2,
      ""
     ],
     [
      "Boundless Light",
      2,
      5,
      3,
      "Holy Shock"
     ],
     [
      "Holy Power",
      5,
      6,
      3,
      ""
     ],
     [
      "Light's Vigil",
      1,
      7,
      2,
      "Holy Shock"
     ]
    ]
   ],
   [
    "Protection",
    [
     [
      "Divine Intellect",
      5,
      1,
      2,
      ""
     ],
     [
      "Redoubt",
      5,
      1,
      3,
      ""
     ],
     [
      "Precision",
      3,
      2,
      1,
      ""
     ],
     [
      "Guardian's Favor",
      2,
      2,
      2,
      ""
     ],
     [
      "Sacred Duty",
      2,
      2,
      4,
      ""
     ],
     [
      "Templar's Bulwark",
      1,
      3,
      1,
      ""
     ],
     [
      "Improved Hammer of Justice",
      3,
      3,
      2,
      ""
     ],
     [
      "Shield Specialization",
      2,
      3,
      3,
      "Redoubt"
     ],
     [
      "Toughness",
      5,
      3,
      4,
      ""
     ],
     [
      "Swift Judgement",
      1,
      4,
      1,
      "Templar's Bulwark"
     ],
     [
      "Improved Righteous Fury",
      3,
      4,
      2,
      ""
     ],
     [
      "Anticipation",
      5,
      4,
      3,
      ""
     ],
     [
      "Stoicism",
      2,
      5,
      1,
      ""
     ],
     [
      "Holy Shield",
      1,
      5,
      2,
      ""
     ],
     [
      "Reckoning",
      5,
      5,
      3,
      ""
     ],
     [
      "Iron Creed",
      3,
      6,
      3,
      ""
     ],
     [
      "Shieldsworn",
      1,
      7,
      2,
      "Holy Shield"
     ]
    ]
   ],
   [
    "Retribution",
    [
     [
      "Deflection",
      5,
      1,
      2,
      ""
     ],
     [
      "Benediction",
      5,
      1,
      3,
      ""
     ],
     [
      "Improved Judgement",
      2,
      2,
      1,
      ""
     ],
     [
      "Conviction",
      3,
      2,
      2,
      ""
     ],
     [
      "Sanctified Judgement",
      3,
      2,
      3,
      ""
     ],
     [
      "Vindication",
      3,
      3,
      1,
      ""
     ],
     [
      "Unyielding Faith",
      2,
      3,
      2,
      ""
     ],
     [
      "Seal of Command",
      1,
      3,
      3,
      ""
     ],
     [
      "Pursuit of Justice",
      2,
      3,
      4,
      ""
     ],
     [
      "Eye for an Eye",
      2,
      4,
      1,
      ""
     ],
     [
      "Sacred Arbiter",
      1,
      4,
      2,
      ""
     ],
     [
      "Two-Handed Weapon Specialization",
      3,
      4,
      4,
      ""
     ],
     [
      "Turn Evil",
      2,
      5,
      1,
      ""
     ],
     [
      "Repentance",
      1,
      5,
      2,
      ""
     ],
     [
      "Vengeance",
      3,
      5,
      3,
      "Seal of Command"
     ],
     [
      "Champion of the Light",
      5,
      6,
      3,
      ""
     ],
     [
      "Unsealed Wrath",
      1,
      7,
      2,
      "Repentance"
     ]
    ]
   ]
  ],
  "hunter": [
   [
    "Beast Mastery",
    [
     [
      "Deadly Aspects",
      5,
      1,
      2,
      ""
     ],
     [
      "Endurance Training",
      5,
      1,
      3,
      ""
     ],
     [
      "Focused Fire",
      2,
      2,
      1,
      ""
     ],
     [
      "Improved Aspect of the Monkey",
      3,
      2,
      2,
      ""
     ],
     [
      "Improved Revive Pet",
      2,
      2,
      3,
      ""
     ],
     [
      "Pathfinding",
      2,
      3,
      1,
      ""
     ],
     [
      "Bestial Swiftness",
      1,
      3,
      2,
      ""
     ],
     [
      "Unleashed Fury",
      5,
      3,
      3,
      ""
     ],
     [
      "Improved Mend Pet",
      2,
      4,
      1,
      ""
     ],
     [
      "Ferocity",
      5,
      4,
      3,
      ""
     ],
     [
      "Summon Hawk",
      1,
      4,
      4,
      ""
     ],
     [
      "Spirit Bond",
      2,
      5,
      1,
      ""
     ],
     [
      "Intimidation",
      1,
      5,
      2,
      "Bestial Swiftness"
     ],
     [
      "Bestial Discipline",
      2,
      5,
      4,
      ""
     ],
     [
      "Frenzy",
      5,
      6,
      3,
      "Ferocity"
     ],
     [
      "Bestial Wrath",
      1,
      7,
      2,
      "Intimidation"
     ]
    ]
   ],
   [
    "Marksmanship",
    [
     [
      "Hawk Eye",
      3,
      1,
      1,
      ""
     ],
     [
      "Improved Concussive Shot",
      5,
      1,
      2,
      ""
     ],
     [
      "Lethal Attacks",
      5,
      1,
      3,
      ""
     ],
     [
      "Improved Stings",
      3,
      2,
      1,
      ""
     ],
     [
      "Efficiency",
      5,
      2,
      2,
      ""
     ],
     [
      "Careful Aim",
      5,
      2,
      3,
      ""
     ],
     [
      "Rapid Killing",
      2,
      3,
      1,
      ""
     ],
     [
      "Improved Arcane Shot",
      5,
      3,
      2,
      ""
     ],
     [
      "Lone Wolf",
      1,
      3,
      4,
      ""
     ],
     [
      "Trueshot Aura",
      1,
      4,
      2,
      ""
     ],
     [
      "Mortal Shots",
      5,
      4,
      3,
      "Careful Aim"
     ],
     [
      "Rapid Recuperation",
      2,
      5,
      1,
      "Rapid Killing"
     ],
     [
      "Barrage",
      3,
      5,
      3,
      ""
     ],
     [
      "Scatter Shot",
      1,
      5,
      4,
      ""
     ],
     [
      "Ranged Weapon Specialization",
      5,
      6,
      3,
      ""
     ],
     [
      "Sniper Shot",
      1,
      7,
      2,
      "Trueshot Aura"
     ]
    ]
   ],
   [
    "Survival",
    [
     [
      "Improved Tracking",
      5,
      1,
      2,
      ""
     ],
     [
      "Deflection",
      5,
      1,
      3,
      ""
     ],
     [
      "Entrapment",
      5,
      2,
      1,
      ""
     ],
     [
      "Savage Strikes",
      2,
      2,
      2,
      ""
     ],
     [
      "Survivalist",
      5,
      2,
      3,
      ""
     ],
     [
      "Improved Wing Clip",
      3,
      2,
      4,
      ""
     ],
     [
      "Clever Traps",
      2,
      3,
      1,
      ""
     ],
     [
      "Surefooted",
      3,
      3,
      2,
      ""
     ],
     [
      "Deterrence",
      1,
      3,
      3,
      ""
     ],
     [
      "Survival Tactics",
      2,
      4,
      1,
      ""
     ],
     [
      "Predator's Edge",
      5,
      4,
      2,
      ""
     ],
     [
      "Counterattack",
      1,
      4,
      3,
      "Deterrence"
     ],
     [
      "Resourcefulness",
      2,
      5,
      1,
      ""
     ],
     [
      "Expose Prey",
      2,
      5,
      2,
      ""
     ],
     [
      "Survivalist's Discipline",
      2,
      5,
      3,
      ""
     ],
     [
      "Strider Kick",
      1,
      5,
      4,
      ""
     ],
     [
      "Lightning Reflexes",
      5,
      6,
      3,
      ""
     ],
     [
      "Lacerating Strikes",
      1,
      7,
      2,
      "Expose Prey"
     ]
    ]
   ]
  ],
  "rogue": [
   [
    "Assassination",
    [
     [
      "Improved Gouge",
      3,
      1,
      1,
      ""
     ],
     [
      "Remorseless Attacks",
      2,
      1,
      2,
      ""
     ],
     [
      "Malice",
      5,
      1,
      3,
      ""
     ],
     [
      "Ruthlessness",
      3,
      2,
      1,
      ""
     ],
     [
      "Improved Expose Armor",
      2,
      2,
      2,
      ""
     ],
     [
      "Improved Slice and Dice",
      3,
      2,
      4,
      ""
     ],
     [
      "Vigor",
      2,
      3,
      1,
      ""
     ],
     [
      "Blood Splatter",
      1,
      3,
      2,
      ""
     ],
     [
      "Lethality",
      2,
      3,
      3,
      "Malice"
     ],
     [
      "Vile Poisons",
      5,
      4,
      1,
      ""
     ],
     [
      "Cold Blood",
      1,
      4,
      2,
      ""
     ],
     [
      "Improved Poisons",
      5,
      4,
      3,
      ""
     ],
     [
      "Relentless Strikes",
      5,
      5,
      1,
      ""
     ],
     [
      "Venom",
      1,
      5,
      2,
      ""
     ],
     [
      "Improved Kidney Shot",
      2,
      5,
      3,
      ""
     ],
     [
      "Seal Fate",
      3,
      6,
      3,
      ""
     ],
     [
      "Mutilate",
      1,
      7,
      2,
      "Venom"
     ]
    ]
   ],
   [
    "Combat",
    [
     [
      "Coup de Grace",
      3,
      1,
      1,
      ""
     ],
     [
      "Efficient Strikes",
      2,
      1,
      2,
      ""
     ],
     [
      "Lightning Reflexes",
      5,
      1,
      3,
      ""
     ],
     [
      "Puncturing Wounds",
      3,
      2,
      1,
      ""
     ],
     [
      "Deflection",
      3,
      2,
      2,
      ""
     ],
     [
      "Precision",
      3,
      2,
      3,
      ""
     ],
     [
      "Improved Sprint",
      2,
      2,
      4,
      ""
     ],
     [
      "Endurance",
      2,
      3,
      1,
      ""
     ],
     [
      "Riposte",
      1,
      3,
      2,
      "Deflection"
     ],
     [
      "Composure",
      2,
      3,
      4,
      ""
     ],
     [
      "Improved Kick",
      2,
      4,
      1,
      ""
     ],
     [
      "Flawless Execution",
      1,
      4,
      2,
      ""
     ],
     [
      "Weapon Expertise",
      2,
      4,
      3,
      "Precision"
     ],
     [
      "Aggression",
      3,
      4,
      4,
      ""
     ],
     [
      "Dual Wield Specialization",
      2,
      5,
      1,
      ""
     ],
     [
      "Blade Flurry",
      1,
      5,
      2,
      ""
     ],
     [
      "Hack and Slash",
      5,
      5,
      3,
      ""
     ],
     [
      "Flash of Steel",
      5,
      6,
      3,
      ""
     ],
     [
      "Adrenaline Rush",
      1,
      7,
      2,
      "Blade Flurry"
     ]
    ]
   ],
   [
    "Subtlety",
    [
     [
      "Setup",
      3,
      1,
      1,
      ""
     ],
     [
      "Master of Deception",
      3,
      1,
      2,
      ""
     ],
     [
      "Opportunity",
      5,
      1,
      3,
      ""
     ],
     [
      "Dirty Deeds",
      2,
      2,
      1,
      ""
     ],
     [
      "Camouflage",
      3,
      2,
      2,
      ""
     ],
     [
      "Improved Ambush",
      3,
      2,
      3,
      ""
     ],
     [
      "Dirty Tricks",
      2,
      2,
      4,
      ""
     ],
     [
      "Initiative",
      3,
      3,
      1,
      ""
     ],
     [
      "Premeditation",
      1,
      3,
      2,
      ""
     ],
     [
      "Serrated Blades",
      3,
      3,
      3,
      ""
     ],
     [
      "Elusiveness",
      2,
      4,
      1,
      ""
     ],
     [
      "Ghostly Strike",
      1,
      4,
      2,
      ""
     ],
     [
      "Quick Getaway",
      2,
      4,
      4,
      "Dirty Tricks"
     ],
     [
      "Heightened Senses",
      2,
      5,
      1,
      ""
     ],
     [
      "Preparation",
      1,
      5,
      2,
      ""
     ],
     [
      "Hemorrhage",
      1,
      5,
      3,
      "Serrated Blades"
     ],
     [
      "Boot Knife",
      5,
      6,
      3,
      ""
     ],
     [
      "Death Mark",
      1,
      7,
      2,
      "Preparation"
     ]
    ]
   ]
  ],
  "priest": [
   [
    "Discipline",
    [
     [
      "Power in Light",
      5,
      1,
      1,
      ""
     ],
     [
      "Wand Specialization",
      2,
      1,
      2,
      ""
     ],
     [
      "Twin Disciplines",
      5,
      1,
      3,
      ""
     ],
     [
      "Silent Resolve",
      3,
      2,
      1,
      ""
     ],
     [
      "Holy Precision",
      3,
      2,
      2,
      ""
     ],
     [
      "Mental Strength",
      5,
      2,
      3,
      ""
     ],
     [
      "Martyrdom",
      2,
      2,
      4,
      ""
     ],
     [
      "Mental Agility",
      3,
      3,
      1,
      ""
     ],
     [
      "Inner Focus",
      1,
      3,
      2,
      ""
     ],
     [
      "Improved Power Word: Shield",
      3,
      3,
      3,
      ""
     ],
     [
      "Meditation",
      3,
      3,
      4,
      ""
     ],
     [
      "Improved Inner Fire",
      3,
      4,
      1,
      ""
     ],
     [
      "Improved Mana Burn",
      2,
      4,
      2,
      ""
     ],
     [
      "Soul Warding",
      1,
      4,
      3,
      "Improved Power Word: Shield"
     ],
     [
      "Penance",
      1,
      5,
      2,
      ""
     ],
     [
      "Renewed Hope",
      5,
      5,
      3,
      "Soul Warding"
     ],
     [
      "Divine Aegis",
      3,
      6,
      3,
      ""
     ],
     [
      "Power Infusion",
      1,
      7,
      2,
      "Penance"
     ]
    ]
   ],
   [
    "Holy",
    [
     [
      "Twilight Focus",
      3,
      1,
      1,
      ""
     ],
     [
      "Improved Renew",
      3,
      1,
      2,
      ""
     ],
     [
      "Holy Specialization",
      5,
      1,
      3,
      ""
     ],
     [
      "Spell Warding",
      5,
      2,
      2,
      ""
     ],
     [
      "Divine Fury",
      5,
      2,
      3,
      ""
     ],
     [
      "Holy Nova",
      1,
      3,
      1,
      ""
     ],
     [
      "Blessed Recovery",
      3,
      3,
      2,
      ""
     ],
     [
      "Inspiration",
      3,
      3,
      4,
      ""
     ],
     [
      "Holy Reach",
      2,
      4,
      1,
      ""
     ],
     [
      "Improved Healing",
      3,
      4,
      2,
      ""
     ],
     [
      "Searing Light",
      2,
      4,
      3,
      "Divine Fury"
     ],
     [
      "Holy Binding",
      1,
      4,
      4,
      ""
     ],
     [
      "Litany of Light",
      2,
      5,
      1,
      ""
     ],
     [
      "Spirit of Redemption",
      1,
      5,
      2,
      ""
     ],
     [
      "Spiritual Guidance",
      5,
      5,
      3,
      ""
     ],
     [
      "Spiritual Healing",
      3,
      6,
      3,
      ""
     ],
     [
      "Prayer of Mending",
      1,
      7,
      2,
      "Spirit of Redemption"
     ]
    ]
   ],
   [
    "Shadow",
    [
     [
      "Shadow Focus",
      5,
      1,
      1,
      ""
     ],
     [
      "Blackout",
      5,
      1,
      2,
      ""
     ],
     [
      "Spirit Tap",
      5,
      1,
      3,
      ""
     ],
     [
      "Improved Mind Blast",
      5,
      2,
      1,
      ""
     ],
     [
      "Improved Shadow Word: Pain",
      2,
      2,
      3,
      ""
     ],
     [
      "Shadow Reach",
      2,
      2,
      4,
      ""
     ],
     [
      "Improved Psychic Scream",
      2,
      3,
      2,
      "Blackout"
     ],
     [
      "Mind Flay",
      1,
      3,
      3,
      ""
     ],
     [
      "Improved Mind Flay",
      2,
      3,
      4,
      "Mind Flay"
     ],
     [
      "Dark Inspiration",
      5,
      4,
      1,
      ""
     ],
     [
      "Vampiric Embrace",
      1,
      4,
      2,
      ""
     ],
     [
      "Shadow Weaving",
      3,
      4,
      3,
      ""
     ],
     [
      "Silence",
      1,
      5,
      1,
      ""
     ],
     [
      "Devouring Contagion",
      2,
      5,
      3,
      ""
     ],
     [
      "Early Demise",
      2,
      6,
      1,
      ""
     ],
     [
      "Darkness",
      5,
      6,
      3,
      ""
     ],
     [
      "Shadowform",
      1,
      7,
      2,
      "Vampiric Embrace"
     ]
    ]
   ]
  ],
  "shaman": [
   [
    "Elemental",
    [
     [
      "Convection",
      5,
      1,
      2,
      ""
     ],
     [
      "Concussion",
      5,
      1,
      3,
      ""
     ],
     [
      "Elemental Devastation",
      3,
      2,
      1,
      ""
     ],
     [
      "Reverberation",
      5,
      2,
      2,
      ""
     ],
     [
      "Elemental Alacrity",
      3,
      2,
      3,
      ""
     ],
     [
      "Call of Flame",
      3,
      2,
      4,
      ""
     ],
     [
      "Elemental Focus",
      1,
      3,
      1,
      ""
     ],
     [
      "Elemental Warding",
      3,
      3,
      2,
      ""
     ],
     [
      "Trial by Fire",
      2,
      4,
      1,
      ""
     ],
     [
      "Eye of the Storm",
      3,
      4,
      2,
      ""
     ],
     [
      "Earthbound",
      1,
      4,
      4,
      ""
     ],
     [
      "Elemental Reach",
      2,
      5,
      1,
      ""
     ],
     [
      "Call of Thunder",
      1,
      5,
      2,
      ""
     ],
     [
      "Lightning Overload",
      3,
      5,
      3,
      "Elemental Alacrity"
     ],
     [
      "Elemental Fury",
      5,
      6,
      3,
      "Lightning Overload"
     ],
     [
      "Lightning Mastery",
      1,
      7,
      2,
      "Call of Thunder"
     ]
    ]
   ],
   [
    "Enhancement",
    [
     [
      "Earth's Grasp",
      2,
      1,
      1,
      ""
     ],
     [
      "Thundering Strikes",
      5,
      1,
      2,
      ""
     ],
     [
      "Ancestral Knowledge",
      5,
      1,
      3,
      ""
     ],
     [
      "Guardian Totems",
      2,
      2,
      1,
      ""
     ],
     [
      "Mental Dexterity",
      3,
      2,
      2,
      ""
     ],
     [
      "Improved Lightning Shield",
      3,
      2,
      3,
      ""
     ],
     [
      "Elemental Weapons",
      3,
      3,
      1,
      ""
     ],
     [
      "Shamanistic Focus",
      1,
      3,
      3,
      ""
     ],
     [
      "Anticipation",
      3,
      3,
      4,
      ""
     ],
     [
      "Toughness",
      5,
      4,
      1,
      ""
     ],
     [
      "Flurry",
      5,
      4,
      2,
      "Mental Dexterity"
     ],
     [
      "Stormstrike",
      1,
      4,
      3,
      ""
     ],
     [
      "Improved Ghost Wolf",
      2,
      4,
      4,
      ""
     ],
     [
      "Spirit Weapons",
      1,
      5,
      1,
      ""
     ],
     [
      "Mental Quickness",
      2,
      5,
      2,
      ""
     ],
     [
      "Improved Stormstrike",
      2,
      5,
      3,
      "Stormstrike"
     ],
     [
      "Maelstrom Weapon",
      5,
      6,
      3,
      ""
     ],
     [
      "Rage of the Farseer",
      1,
      7,
      2,
      "Mental Quickness"
     ]
    ]
   ],
   [
    "Restoration",
    [
     [
      "Improved Healing Wave",
      5,
      1,
      2,
      ""
     ],
     [
      "Tidal Focus",
      5,
      1,
      3,
      ""
     ],
     [
      "Mindfulness",
      3,
      2,
      1,
      ""
     ],
     [
      "Natural Grace",
      3,
      2,
      2,
      ""
     ],
     [
      "Totemic Focus",
      5,
      2,
      3,
      ""
     ],
     [
      "Improved Reincarnation",
      2,
      2,
      4,
      ""
     ],
     [
      "Ancestral Healing",
      3,
      3,
      1,
      ""
     ],
     [
      "Healing Focus",
      3,
      3,
      2,
      ""
     ],
     [
      "Water Shield",
      1,
      3,
      3,
      ""
     ],
     [
      "Tidal Mastery",
      5,
      4,
      1,
      ""
     ],
     [
      "Restorative Totems",
      5,
      4,
      2,
      ""
     ],
     [
      "Mana Tide Totem",
      1,
      4,
      3,
      ""
     ],
     [
      "Healing Way",
      3,
      5,
      2,
      ""
     ],
     [
      "Nature's Swiftness",
      1,
      5,
      3,
      ""
     ],
     [
      "Purification",
      5,
      6,
      3,
      ""
     ],
     [
      "Riptide",
      1,
      7,
      2,
      "Healing Way"
     ]
    ]
   ]
  ],
  "mage": [
   [
    "Arcane",
    [
     [
      "Wand Specialization",
      2,
      1,
      1,
      ""
     ],
     [
      "Improved Channeling",
      5,
      1,
      2,
      ""
     ],
     [
      "Arcane Resilience",
      3,
      1,
      3,
      ""
     ],
     [
      "Arcane Subtlety",
      2,
      2,
      1,
      ""
     ],
     [
      "Magic Absorption",
      2,
      2,
      2,
      ""
     ],
     [
      "Arcane Concentration",
      5,
      2,
      3,
      ""
     ],
     [
      "Missile Barrage",
      2,
      2,
      4,
      ""
     ],
     [
      "Arcane Geometry",
      2,
      3,
      1,
      ""
     ],
     [
      "Arcane Impact",
      3,
      3,
      2,
      ""
     ],
     [
      "Arcane Blast",
      1,
      3,
      4,
      ""
     ],
     [
      "Arcane Shielding",
      2,
      4,
      1,
      ""
     ],
     [
      "Improved Counterspell",
      2,
      4,
      2,
      ""
     ],
     [
      "Arcane Meditation",
      3,
      4,
      3,
      "Arcane Concentration"
     ],
     [
      "Arcane Wrath",
      1,
      4,
      4,
      "Arcane Blast"
     ],
     [
      "Presence of Mind",
      1,
      5,
      2,
      ""
     ],
     [
      "Arcane Mind",
      5,
      5,
      3,
      ""
     ],
     [
      "Arcane Instability",
      3,
      6,
      3,
      ""
     ],
     [
      "Arcane Power",
      1,
      7,
      2,
      "Presence of Mind"
     ]
    ]
   ],
   [
    "Fire",
    [
     [
      "Incineration",
      5,
      1,
      2,
      ""
     ],
     [
      "Accelerant",
      5,
      1,
      3,
      ""
     ],
     [
      "Ignite",
      5,
      2,
      1,
      ""
     ],
     [
      "Flame Throwing",
      2,
      2,
      2,
      ""
     ],
     [
      "Impact",
      3,
      2,
      3,
      ""
     ],
     [
      "Burning Soul",
      3,
      3,
      1,
      ""
     ],
     [
      "Improved Flamestrike",
      3,
      3,
      2,
      ""
     ],
     [
      "Pyroblast",
      1,
      3,
      3,
      ""
     ],
     [
      "Improved Fire Blast",
      2,
      3,
      4,
      ""
     ],
     [
      "Improved Scorch",
      3,
      4,
      1,
      ""
     ],
     [
      "Improved Fire Ward",
      2,
      4,
      2,
      ""
     ],
     [
      "Heating Up",
      1,
      4,
      3,
      "Pyroblast"
     ],
     [
      "Master of Elements",
      3,
      4,
      4,
      ""
     ],
     [
      "Critical Mass",
      3,
      5,
      2,
      ""
     ],
     [
      "Blast Wave",
      1,
      5,
      3,
      ""
     ],
     [
      "Fire Power",
      3,
      6,
      3,
      ""
     ],
     [
      "Combustion",
      1,
      7,
      2,
      "Critical Mass"
     ]
    ]
   ],
   [
    "Frost",
    [
     [
      "Frost Warding",
      2,
      1,
      1,
      ""
     ],
     [
      "Improved Frostbolt",
      5,
      1,
      2,
      ""
     ],
     [
      "Precision",
      3,
      1,
      3,
      ""
     ],
     [
      "Ice Shards",
      5,
      2,
      1,
      ""
     ],
     [
      "Frostbite",
      3,
      2,
      2,
      ""
     ],
     [
      "Improved Frost Nova",
      2,
      2,
      3,
      ""
     ],
     [
      "Permafrost",
      3,
      2,
      4,
      ""
     ],
     [
      "Frost Channeling",
      3,
      3,
      1,
      ""
     ],
     [
      "Improved Blizzard",
      3,
      3,
      2,
      ""
     ],
     [
      "Ice Lance",
      1,
      3,
      3,
      ""
     ],
     [
      "Arctic Reach",
      2,
      4,
      1,
      ""
     ],
     [
      "Ice Block",
      1,
      4,
      2,
      ""
     ],
     [
      "Shatter",
      3,
      4,
      4,
      ""
     ],
     [
      "Improved Cone of Cold",
      3,
      5,
      1,
      ""
     ],
     [
      "Cold Snap",
      1,
      5,
      2,
      ""
     ],
     [
      "Fingers of Frost",
      2,
      5,
      3,
      "Ice Lance"
     ],
     [
      "Winter's Chill",
      5,
      6,
      3,
      ""
     ],
     [
      "Ice Barrier",
      1,
      7,
      2,
      "Cold Snap"
     ]
    ]
   ]
  ],
  "warlock": [
   [
    "Affliction",
    [
     [
      "Improved Life Tap",
      2,
      1,
      1,
      ""
     ],
     [
      "Suppression",
      5,
      1,
      2,
      ""
     ],
     [
      "Improved Corruption",
      5,
      1,
      3,
      ""
     ],
     [
      "Grim Reach",
      2,
      2,
      1,
      ""
     ],
     [
      "Soul Harvest",
      2,
      2,
      2,
      ""
     ],
     [
      "Improved Drains",
      3,
      2,
      3,
      ""
     ],
     [
      "Improved Bane of Agony",
      2,
      3,
      1,
      ""
     ],
     [
      "Fel Concentration",
      3,
      3,
      2,
      ""
     ],
     [
      "Amplify Curse",
      1,
      3,
      3,
      ""
     ],
     [
      "Pandemic",
      3,
      3,
      4,
      ""
     ],
     [
      "Malevolence",
      5,
      4,
      1,
      ""
     ],
     [
      "Nightfall",
      2,
      4,
      2,
      ""
     ],
     [
      "Curse of Exhaustion",
      1,
      4,
      3,
      "Amplify Curse"
     ],
     [
      "Siphon Life",
      1,
      5,
      2,
      ""
     ],
     [
      "Soul Siphon",
      3,
      5,
      3,
      ""
     ],
     [
      "Shadow Mastery",
      5,
      6,
      3,
      ""
     ],
     [
      "Wrack",
      1,
      7,
      2,
      "Siphon Life"
     ]
    ]
   ],
   [
    "Demonology",
    [
     [
      "Improved Health Funnel",
      2,
      1,
      1,
      ""
     ],
     [
      "Improved Imp",
      3,
      1,
      2,
      ""
     ],
     [
      "Demonic Embrace",
      5,
      1,
      3,
      ""
     ],
     [
      "Unholy Power",
      5,
      1,
      4,
      ""
     ],
     [
      "Demonic Aegis",
      2,
      2,
      1,
      ""
     ],
     [
      "Improved Voidwalker",
      3,
      2,
      2,
      ""
     ],
     [
      "Fel Vitality",
      3,
      2,
      3,
      ""
     ],
     [
      "Demonic Energies",
      2,
      2,
      4,
      ""
     ],
     [
      "Improved Sayaad",
      3,
      3,
      1,
      ""
     ],
     [
      "Demonic Sacrifice",
      1,
      3,
      2,
      ""
     ],
     [
      "Master Summoner",
      2,
      3,
      3,
      ""
     ],
     [
      "Decimation",
      2,
      4,
      1,
      ""
     ],
     [
      "Fel Domination",
      1,
      4,
      3,
      "Master Summoner"
     ],
     [
      "Demonic Brand",
      3,
      4,
      4,
      ""
     ],
     [
      "Improved Felhunter",
      3,
      5,
      1,
      ""
     ],
     [
      "Soul Link",
      1,
      5,
      2,
      "Demonic Sacrifice"
     ],
     [
      "Demonic Knowledge",
      3,
      5,
      3,
      ""
     ],
     [
      "Master Demonologist",
      5,
      6,
      3,
      ""
     ],
     [
      "Demonic Pact",
      1,
      7,
      2,
      "Soul Link"
     ]
    ]
   ],
   [
    "Destruction",
    [
     [
      "Destructive Reach",
      2,
      1,
      1,
      ""
     ],
     [
      "Improved Shadow Bolt",
      5,
      1,
      2,
      ""
     ],
     [
      "Bane",
      5,
      1,
      3,
      ""
     ],
     [
      "Molten Skin",
      5,
      2,
      1,
      ""
     ],
     [
      "Cataclysm",
      3,
      2,
      2,
      ""
     ],
     [
      "Aftermath",
      5,
      2,
      3,
      ""
     ],
     [
      "Ruin",
      5,
      3,
      2,
      ""
     ],
     [
      "Shadowburn",
      1,
      3,
      3,
      ""
     ],
     [
      "Intensity",
      3,
      4,
      1,
      ""
     ],
     [
      "Agonizing Flames",
      3,
      4,
      2,
      ""
     ],
     [
      "Conflagrate",
      1,
      4,
      3,
      ""
     ],
     [
      "Pyroclasm",
      2,
      5,
      1,
      "Intensity"
     ],
     [
      "Bane of Havoc",
      1,
      5,
      2,
      ""
     ],
     [
      "Fire and Brimstone",
      3,
      5,
      3,
      "Conflagrate"
     ],
     [
      "Shadow and Flame",
      5,
      6,
      3,
      ""
     ],
     [
      "Incinerate",
      1,
      7,
      2,
      "Bane of Havoc"
     ]
    ]
   ]
  ],
  "druid": [
   [
    "Balance",
    [
     [
      "Starlight Wrath",
      5,
      1,
      2,
      ""
     ],
     [
      "Genesis",
      5,
      1,
      3,
      ""
     ],
     [
      "Moonglow",
      3,
      2,
      1,
      ""
     ],
     [
      "Moon and Stars",
      2,
      2,
      2,
      ""
     ],
     [
      "Nature's Majesty",
      2,
      2,
      3,
      ""
     ],
     [
      "Nature's Reach",
      2,
      2,
      4,
      ""
     ],
     [
      "Improved Entangling Roots",
      3,
      3,
      1,
      ""
     ],
     [
      "Nature's Splendor",
      1,
      3,
      3,
      "Nature's Majesty"
     ],
     [
      "Insect Swarm",
      1,
      4,
      1,
      ""
     ],
     [
      "Vengeance",
      5,
      4,
      2,
      "Moon and Stars"
     ],
     [
      "Improved Starfire",
      5,
      4,
      3,
      ""
     ],
     [
      "Overgrowth",
      2,
      5,
      1,
      ""
     ],
     [
      "Nature's Grace",
      1,
      5,
      2,
      ""
     ],
     [
      "Eclipse",
      3,
      5,
      3,
      ""
     ],
     [
      "Moonfury",
      5,
      6,
      2,
      ""
     ],
     [
      "Moonkin Form",
      1,
      7,
      2,
      ""
     ]
    ]
   ],
   [
    "Feral Combat",
    [
     [
      "Ferocity",
      5,
      1,
      2,
      ""
     ],
     [
      "Furor",
      5,
      1,
      3,
      ""
     ],
     [
      "Feral Swiftness",
      2,
      2,
      1,
      ""
     ],
     [
      "Feral Instinct",
      3,
      2,
      2,
      ""
     ],
     [
      "Brutal Impact",
      2,
      2,
      3,
      ""
     ],
     [
      "Thick Hide",
      3,
      2,
      4,
      ""
     ],
     [
      "Shredding Attacks",
      3,
      3,
      1,
      ""
     ],
     [
      "Savage Fury",
      2,
      3,
      2,
      ""
     ],
     [
      "Feral Charge",
      1,
      3,
      3,
      ""
     ],
     [
      "Sharpened Claws",
      2,
      3,
      4,
      ""
     ],
     [
      "Predatory Strikes",
      3,
      4,
      1,
      ""
     ],
     [
      "Lacerate",
      1,
      4,
      2,
      "Savage Fury"
     ],
     [
      "Predatory Discipline",
      1,
      4,
      3,
      ""
     ],
     [
      "Blood Frenzy",
      2,
      4,
      4,
      "Sharpened Claws"
     ],
     [
      "Leader of the Pack",
      1,
      5,
      2,
      ""
     ],
     [
      "Natural Instinct",
      2,
      5,
      4,
      ""
     ],
     [
      "Rend and Tear",
      5,
      6,
      1,
      "Predatory Strikes"
     ],
     [
      "Natural Reaction",
      5,
      6,
      4,
      ""
     ],
     [
      "Primal Bite",
      1,
      7,
      2,
      "Leader of the Pack"
     ],
     [
      "Shifting Power",
      1,
      7,
      3,
      "Predatory Discipline"
     ]
    ]
   ],
   [
    "Restoration",
    [
     [
      "Nature's Focus",
      5,
      1,
      2,
      ""
     ],
     [
      "Heart of the Wild",
      5,
      1,
      3,
      ""
     ],
     [
      "Naturalist",
      5,
      2,
      1,
      ""
     ],
     [
      "Reflection",
      3,
      2,
      2,
      ""
     ],
     [
      "Natural Shapeshifter",
      3,
      2,
      3,
      ""
     ],
     [
      "Subtlety",
      3,
      3,
      2,
      ""
     ],
     [
      "Gift of Nature",
      5,
      3,
      3,
      ""
     ],
     [
      "Bloom",
      1,
      3,
      4,
      ""
     ],
     [
      "Tranquil Spirit",
      5,
      4,
      2,
      ""
     ],
     [
      "Improved Rejuvenation",
      3,
      4,
      3,
      ""
     ],
     [
      "Swiftmend",
      1,
      4,
      4,
      ""
     ],
     [
      "Nature's Swiftness",
      1,
      5,
      1,
      "Naturalist"
     ],
     [
      "Living Spirit",
      3,
      5,
      2,
      ""
     ],
     [
      "Improved Tranquility",
      2,
      5,
      4,
      ""
     ],
     [
      "Improved Regrowth",
      5,
      6,
      3,
      "Improved Rejuvenation"
     ],
     [
      "Wild Growth",
      1,
      7,
      2,
      "Living Spirit"
     ]
    ]
   ]
  ]
 },
 "ivids": {
  "warrior": {
   "0": 0,
   "1": 1,
   "2": 2,
   "3": 3,
   "4": 4,
   "5": 5,
   "6": 6,
   "7": 7,
   "8": 8,
   "9": 9,
   "a": 10,
   "b": 11,
   "c": 12,
   "d": 13,
   "e": 14,
   "f": 15,
   "g": 16,
   "h": 17,
   "i": 18,
   "j": 19,
   "k": 20,
   "l": 21,
   "m": 22,
   "n": 23,
   "q": 24,
   "o": 25,
   "Q": 26,
   "r": 27,
   "s": 28,
   "t": 29,
   "w": 30,
   "u": 31,
   "p": 32,
   "v": 33,
   "x": 34,
   "y": 35,
   "z": 36,
   "A": 37,
   "B": 38,
   "C": 39,
   "D": 40,
   "E": 41,
   "F": 42,
   "G": 43,
   "H": 44,
   "I": 45,
   "J": 46,
   "K": 47,
   "L": 48,
   "M": 49,
   "N": 50,
   "O": 51,
   "P": 52
  },
  "paladin": {
   "0": 29,
   "1": 17,
   "2": 2,
   "3": 0,
   "4": 4,
   "5": 40,
   "6": 11,
   "7": 3,
   "8": 5,
   "9": 10,
   "O": 1,
   "b": 6,
   "a": 7,
   "A": 8,
   "c": 9,
   "e": 12,
   "d": 13,
   "P": 14,
   "f": 15,
   "g": 16,
   "i": 18,
   "j": 19,
   "k": 20,
   "p": 21,
   "t": 22,
   "s": 23,
   "o": 24,
   "h": 25,
   "q": 26,
   "n": 27,
   "l": 28,
   "w": 30,
   "u": 31,
   "v": 32,
   "m": 33,
   "x": 34,
   "y": 35,
   "z": 36,
   "B": 37,
   "D": 38,
   "C": 39,
   "E": 41,
   "F": 42,
   "G": 43,
   "H": 44,
   "I": 45,
   "Q": 46,
   "K": 47,
   "J": 48,
   "L": 49,
   "N": 50
  },
  "hunter": {
   "0": 0,
   "1": 1,
   "2": 2,
   "3": 3,
   "4": 5,
   "5": 4,
   "6": 6,
   "7": 7,
   "8": 8,
   "9": 9,
   "a": 10,
   "b": 11,
   "c": 12,
   "d": 13,
   "e": 14,
   "f": 15,
   "g": 16,
   "h": 17,
   "i": 18,
   "j": 19,
   "k": 20,
   "l": 21,
   "m": 22,
   "n": 23,
   "o": 24,
   "p": 25,
   "q": 26,
   "r": 27,
   "s": 28,
   "t": 29,
   "u": 30,
   "v": 31,
   "w": 32,
   "x": 33,
   "y": 34,
   "z": 35,
   "A": 36,
   "B": 37,
   "C": 38,
   "D": 39,
   "E": 40,
   "F": 41,
   "G": 42,
   "H": 43,
   "I": 44,
   "J": 45,
   "K": 46,
   "L": 47,
   "M": 48,
   "N": 49
  },
  "rogue": {
   "0": 0,
   "1": 1,
   "2": 2,
   "3": 3,
   "4": 6,
   "5": 5,
   "6": 26,
   "7": 4,
   "8": 8,
   "9": 9,
   "c": 7,
   "a": 10,
   "b": 11,
   "R": 12,
   "g": 13,
   "e": 14,
   "f": 15,
   "d": 16,
   "h": 17,
   "i": 18,
   "j": 19,
   "k": 20,
   "l": 21,
   "m": 22,
   "p": 23,
   "n": 24,
   "o": 25,
   "q": 27,
   "r": 28,
   "v": 29,
   "w": 30,
   "S": 31,
   "t": 32,
   "u": 33,
   "s": 34,
   "x": 35,
   "B": 36,
   "z": 37,
   "A": 38,
   "L": 39,
   "y": 40,
   "E": 41,
   "D": 42,
   "F": 43,
   "J": 44,
   "K": 45,
   "C": 46,
   "G": 47,
   "O": 48,
   "I": 49,
   "M": 50,
   "N": 51,
   "P": 52,
   "Q": 53
  },
  "priest": {
   "0": 0,
   "1": 1,
   "2": 2,
   "3": 3,
   "4": 4,
   "5": 5,
   "6": 6,
   "7": 7,
   "8": 8,
   "9": 9,
   "a": 10,
   "b": 11,
   "c": 12,
   "d": 13,
   "e": 14,
   "f": 15,
   "g": 16,
   "h": 17,
   "i": 18,
   "j": 19,
   "k": 20,
   "l": 21,
   "m": 22,
   "n": 23,
   "o": 24,
   "p": 25,
   "q": 26,
   "r": 27,
   "s": 28,
   "t": 29,
   "u": 30,
   "v": 31,
   "w": 32,
   "x": 33,
   "y": 34,
   "z": 35,
   "A": 36,
   "B": 37,
   "C": 38,
   "D": 39,
   "E": 40,
   "F": 41,
   "G": 42,
   "H": 43,
   "I": 44,
   "J": 45,
   "K": 46,
   "L": 47,
   "M": 48,
   "N": 49,
   "O": 50,
   "P": 51
  },
  "shaman": {
   "0": 0,
   "1": 1,
   "2": 2,
   "3": 3,
   "4": 4,
   "5": 5,
   "6": 6,
   "7": 7,
   "8": 8,
   "9": 9,
   "a": 10,
   "b": 11,
   "c": 12,
   "d": 13,
   "e": 14,
   "f": 15,
   "g": 16,
   "h": 17,
   "i": 18,
   "j": 19,
   "k": 20,
   "m": 21,
   "n": 22,
   "o": 23,
   "p": 24,
   "q": 25,
   "r": 26,
   "s": 27,
   "l": 28,
   "t": 29,
   "u": 30,
   "v": 31,
   "w": 32,
   "x": 33,
   "y": 34,
   "z": 35,
   "A": 36,
   "B": 37,
   "C": 38,
   "D": 39,
   "E": 40,
   "F": 41,
   "G": 42,
   "H": 43,
   "I": 44,
   "J": 45,
   "K": 46,
   "L": 47,
   "M": 48,
   "N": 49
  },
  "mage": {
   "0": 0,
   "2": 1,
   "3": 2,
   "4": 3,
   "5": 4,
   "6": 5,
   "7": 6,
   "8": 7,
   "9": 8,
   "a": 9,
   "b": 10,
   "c": 11,
   "d": 12,
   "e": 13,
   "f": 14,
   "g": 15,
   "h": 16,
   "i": 17,
   "k": 18,
   "l": 19,
   "m": 20,
   "n": 21,
   "o": 22,
   "p": 23,
   "q": 24,
   "r": 25,
   "j": 26,
   "s": 27,
   "t": 28,
   "u": 29,
   "v": 30,
   "w": 31,
   "x": 32,
   "y": 33,
   "z": 34,
   "A": 35,
   "B": 36,
   "C": 37,
   "D": 38,
   "E": 39,
   "F": 40,
   "G": 41,
   "H": 42,
   "I": 43,
   "J": 44,
   "K": 45,
   "L": 46,
   "M": 47,
   "N": 48,
   "O": 49,
   "P": 50,
   "Q": 51,
   "R": 52
  },
  "warlock": {
   "0": 0,
   "1": 1,
   "2": 2,
   "3": 3,
   "4": 4,
   "5": 5,
   "6": 6,
   "7": 7,
   "8": 8,
   "9": 9,
   "a": 10,
   "b": 11,
   "c": 12,
   "d": 13,
   "e": 14,
   "f": 15,
   "g": 16,
   "h": 17,
   "i": 18,
   "j": 19,
   "k": 20,
   "l": 21,
   "m": 22,
   "n": 23,
   "o": 24,
   "p": 25,
   "q": 26,
   "r": 27,
   "s": 28,
   "t": 29,
   "u": 30,
   "v": 31,
   "w": 32,
   "x": 33,
   "y": 34,
   "z": 35,
   "A": 36,
   "B": 37,
   "C": 38,
   "D": 39,
   "E": 40,
   "F": 41,
   "G": 42,
   "H": 43,
   "I": 44,
   "J": 45,
   "K": 46,
   "L": 47,
   "M": 48,
   "N": 49,
   "O": 50,
   "P": 51
  },
  "druid": {
   "0": 0,
   "1": 1,
   "2": 2,
   "3": 3,
   "4": 4,
   "5": 5,
   "6": 6,
   "7": 7,
   "8": 8,
   "9": 9,
   "a": 10,
   "b": 11,
   "c": 12,
   "d": 13,
   "e": 14,
   "f": 15,
   "g": 16,
   "h": 17,
   "i": 18,
   "j": 19,
   "k": 20,
   "l": 21,
   "m": 22,
   "n": 23,
   "o": 24,
   "p": 25,
   "s": 26,
   "r": 27,
   "q": 28,
   "t": 29,
   "v": 30,
   "w": 31,
   "y": 32,
   "x": 33,
   "z": 34,
   "u": 35,
   "A": 36,
   "B": 37,
   "C": 38,
   "D": 39,
   "E": 40,
   "F": 41,
   "G": 42,
   "H": 43,
   "I": 44,
   "J": 45,
   "K": 46,
   "L": 47,
   "M": 48,
   "N": 49,
   "O": 50,
   "P": 51
  }
 },
 "races": {
  "Alliance": [
   "Human",
   "Dwarf",
   "Night Elf",
   "Gnome",
   "Skyborne (High Order)"
  ],
  "Horde": [
   "Orc",
   "Undead",
   "Tauren",
   "Troll",
   "Skyborne (Windshaper)"
  ]
 },
 "racials": {
  "Human": [
   [
    "Ruthless",
    "Passive",
    "+1% crit chance with all spells and attacks."
   ],
   [
    "The Human Spirit",
    "Passive",
    "+10% Spirit."
   ],
   [
    "Perception",
    "Active · 3 min",
    "Greatly increased stealth detection for 20 sec."
   ],
   [
    "Will to Survive",
    "Active · 3 min",
    "Removes all stun effects."
   ]
  ],
  "Dwarf": [
   [
    "Artisan's Precision",
    "Passive",
    "+1% hit chance with spells and attacks."
   ],
   [
    "Big Game Hunter",
    "Passive",
    "+5% damage vs Beasts."
   ],
   [
    "Stoneform",
    "Active · 3 min",
    "Removes and grants immunity to Bleed, Poison and Disease; −10% physical damage taken for 8 sec."
   ],
   [
    "Find Treasure",
    "Active",
    "Shows nearby treasure on the minimap and sometimes increases treasure found."
   ]
  ],
  "Night Elf": [
   [
    "Quickness",
    "Passive",
    "+1% dodge, +2% movement speed. Night Elf Rogues and Druids are harder to detect in Stealth (as if 1 level higher)."
   ],
   [
    "Wisp Spirit",
    "Passive",
    "Wisp form on death, +75% movement speed."
   ],
   [
    "Shadowmeld",
    "Active · 10 sec",
    "Stealth while still; 2 min cooldown if used in combat."
   ],
   [
    "Elune's Light",
    "Active · 3 min",
    "+10% crit chance with spells and attacks for 15 sec."
   ]
  ],
  "Gnome": [
   [
    "Expansive Mind",
    "Passive",
    "+5% maximum mana, rage or energy."
   ],
   [
    "Engineering Specialization",
    "Passive",
    "Engineering devices fail or backfire 20% less often."
   ],
   [
    "Escape Artist",
    "Active · 2 min",
    "Escape any movement-impairing effect, immune for 3 sec."
   ],
   [
    "Eureka!",
    "Active · 2 min",
    "8 sec: non-periodic damaging abilities cost 10% less and deal 10% more. Priests also get it on non-periodic heals."
   ]
  ],
  "Skyborne (High Order)": [
   [
    "Wind Blessed",
    "Passive",
    "+2% spell, melee and ranged haste."
   ],
   [
    "Elemental Insight",
    "Passive",
    "+5% damage vs Elementals."
   ],
   [
    "Read Leyline",
    "Active · 2 min",
    "+50% health and mana regen for 15 sec. Used at a Ley Line, it attunes you for 1 hour at +100%; lasts through death, ends when you enter a raid."
   ],
   [
    "Walk on Air",
    "Active · 90 sec",
    "Steerable downward glide for 10 sec."
   ]
  ],
  "Orc": [
   [
    "Hardiness",
    "Passive",
    "Stun durations on you −20%."
   ],
   [
    "Command",
    "Passive",
    "+5% damage from Hunter and Warlock pets."
   ],
   [
    "Blood Fury",
    "Active · 2 min",
    "+10% Attack Power and Spell Power for 15 sec."
   ],
   [
    "Shatter Curse",
    "Active · 3 min",
    "Removes all Curses and Banes; −5% magic damage taken for 8 sec."
   ]
  ],
  "Undead": [
   [
    "Touch of the Grave",
    "Passive",
    "Damaging spells and attacks can drain up to 5% of your max health from the target (30% chance for casters, 20% for Paladins, Rogues and Warriors). 15 sec internal cooldown."
   ],
   [
    "Underwater Breathing",
    "Passive",
    "Breath lasts 300% longer."
   ],
   [
    "Will of the Forsaken",
    "Active · 2 min",
    "Removes Charm, Fear and Sleep."
   ],
   [
    "Cannibalize",
    "Active · 2 min",
    "Regenerate 7% health and mana every 2 sec for 10 sec from a Humanoid or Undead corpse."
   ]
  ],
  "Tauren": [
   [
    "Endurance",
    "Passive",
    "+5% total health."
   ],
   [
    "Plainsrunning",
    "Passive",
    "+2% movement speed every 5 sec of moving, up to +60%. Damage or standing still reduces it; no mounted bonus."
   ],
   [
    "War Stomp",
    "Active · 90 sec",
    "Stuns up to 5 enemies within 8 yd for 2 sec."
   ],
   [
    "Cultivation",
    "Active · 15 min",
    "Grow a harvestable copy of a nearby herb, no Herbalism needed."
   ]
  ],
  "Troll": [
   [
    "Regeneration",
    "Passive",
    "+20% health regen; 20% of it continues in combat."
   ],
   [
    "Beast Slaying",
    "Passive",
    "+5% damage vs Beasts."
   ],
   [
    "Berserking",
    "Active · 3 min",
    "+10% cast and attack speed for 15 sec."
   ],
   [
    "Rapid Regeneration",
    "Active · 3 min",
    "Channel: regenerate 50% of max health over 6 sec."
   ]
  ],
  "Skyborne (Windshaper)": [
   [
    "Wind Blessed",
    "Passive",
    "+2% spell, melee and ranged haste."
   ],
   [
    "Elemental Insight",
    "Passive",
    "+5% damage vs Elementals."
   ],
   [
    "Skysight",
    "Active · 2 min",
    "+15% movement speed for 15 sec. Used at an elemental convergence, it charges you for 1 hour at +30%."
   ],
   [
    "Walk on Air",
    "Active · 90 sec",
    "Steerable downward glide for 10 sec."
   ]
  ]
 },
 "legacy": {
  "label": "Every character · account-wide",
  "h2": "Legacy System",
  "html": "\n  <p class=\"sdesc\">Forever's account-wide progression. You complete Legacy Challenges (an achievement-style list) to earn Legacy Points, and every character spends those points on its own perks in three Legacy Trees. These are separate from your 51 class talent points. Open it in game with <b>Y</b>. Numbers are from live-launch guides, cross-checked as of Nov 15.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" data-key=\"legacy-how\">\n      <summary><h3>How it works <small>the short version</small></h3></summary>\n      <ul>\n        <li><b>Unlocks</b> with your first Legacy Point. For most people that's the first character to reach level 25. Reaching 150 in a crafting profession or exploring the whole world map also does it.</li>\n        <li><b>65 points to earn</b> at launch, 1 per challenge, shared by every character on your Battle.net account.</li>\n        <li><b>16 points to spend per character</b> at launch. Blizzard will raise this cap over time. Points aren't used up: every character gets its own 16 from the same account total.</li>\n        <li><b>One character can earn 29</b>, so you can reach 16 without alts, but your roster gets there much faster.</li>\n        <li><b>Challenges are first-time milestones.</b> A second character of the same class earns nothing for reaching the same level.</li>\n        <li><b>Rewards</b> come from your total points earned (15 / 25 / 40 / 55), not from what you spend. Claim them from Innkeeper Wiley in Ratchet, The Barrens.</li>\n        <li><b>Reset</b> at your own class trainer (\"I wish to unlearn my class or legacy talents\"). The first Legacy reset costs 10 gold, per character.</li>\n        <li><b>Hardcore</b> (not open yet): Hardcore challenges count everywhere, but normal-realm challenges don't carry into Hardcore.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"legacy-tracker\" open>\n      <summary><h3>Your Legacy Points <small>tick what you've earned · saves with your planner</small></h3></summary>\n      <div class=\"tsum\" id=\"lgSum\"></div>\n      <div class=\"lgrewards\" id=\"lgRewards\"></div>\n      <div class=\"cols lgcols\" id=\"lgBox\">\n        <div><span class=\"label\">Classes <span class=\"mono colct\" data-lgc=\"c\"></span></span>\n          <p class=\"why lgnote\">Each class reaching 25, 45 and 60. Classes on your roster are marked.</p>\n          <div class=\"scroll\"><table class=\"lgt\"><thead><tr><th>Class</th><th>25</th><th>45</th><th>60</th></tr></thead><tbody>\n            <tr><th>Druid</th><td><input type=\"checkbox\" data-lg=\"c-druid-25\" aria-label=\"Druid level 25\"></td><td><input type=\"checkbox\" data-lg=\"c-druid-45\" aria-label=\"Druid level 45\"></td><td><input type=\"checkbox\" data-lg=\"c-druid-60\" aria-label=\"Druid level 60\"></td></tr>\n            <tr><th>Hunter</th><td><input type=\"checkbox\" data-lg=\"c-hunter-25\" aria-label=\"Hunter level 25\"></td><td><input type=\"checkbox\" data-lg=\"c-hunter-45\" aria-label=\"Hunter level 45\"></td><td><input type=\"checkbox\" data-lg=\"c-hunter-60\" aria-label=\"Hunter level 60\"></td></tr>\n            <tr><th>Paladin</th><td><input type=\"checkbox\" data-lg=\"c-paladin-25\" aria-label=\"Paladin level 25\"></td><td><input type=\"checkbox\" data-lg=\"c-paladin-45\" aria-label=\"Paladin level 45\"></td><td><input type=\"checkbox\" data-lg=\"c-paladin-60\" aria-label=\"Paladin level 60\"></td></tr>\n            <tr><th>Rogue</th><td><input type=\"checkbox\" data-lg=\"c-rogue-25\" aria-label=\"Rogue level 25\"></td><td><input type=\"checkbox\" data-lg=\"c-rogue-45\" aria-label=\"Rogue level 45\"></td><td><input type=\"checkbox\" data-lg=\"c-rogue-60\" aria-label=\"Rogue level 60\"></td></tr>\n            <tr><th>Shaman</th><td><input type=\"checkbox\" data-lg=\"c-shaman-25\" aria-label=\"Shaman level 25\"></td><td><input type=\"checkbox\" data-lg=\"c-shaman-45\" aria-label=\"Shaman level 45\"></td><td><input type=\"checkbox\" data-lg=\"c-shaman-60\" aria-label=\"Shaman level 60\"></td></tr>\n            <tr><th>Warlock</th><td><input type=\"checkbox\" data-lg=\"c-warlock-25\" aria-label=\"Warlock level 25\"></td><td><input type=\"checkbox\" data-lg=\"c-warlock-45\" aria-label=\"Warlock level 45\"></td><td><input type=\"checkbox\" data-lg=\"c-warlock-60\" aria-label=\"Warlock level 60\"></td></tr>\n            <tr><th>Mage</th><td><input type=\"checkbox\" data-lg=\"c-mage-25\" aria-label=\"Mage level 25\"></td><td><input type=\"checkbox\" data-lg=\"c-mage-45\" aria-label=\"Mage level 45\"></td><td><input type=\"checkbox\" data-lg=\"c-mage-60\" aria-label=\"Mage level 60\"></td></tr>\n            <tr><th>Priest</th><td><input type=\"checkbox\" data-lg=\"c-priest-25\" aria-label=\"Priest level 25\"></td><td><input type=\"checkbox\" data-lg=\"c-priest-45\" aria-label=\"Priest level 45\"></td><td><input type=\"checkbox\" data-lg=\"c-priest-60\" aria-label=\"Priest level 60\"></td></tr>\n            <tr><th>Warrior</th><td><input type=\"checkbox\" data-lg=\"c-warrior-25\" aria-label=\"Warrior level 25\"></td><td><input type=\"checkbox\" data-lg=\"c-warrior-45\" aria-label=\"Warrior level 45\"></td><td><input type=\"checkbox\" data-lg=\"c-warrior-60\" aria-label=\"Warrior level 60\"></td></tr>\n          </tbody></table></div>\n        </div>\n        <div><span class=\"label\">Crafting professions <span class=\"mono colct\" data-lgc=\"t\"></span></span>\n          <p class=\"why lgnote\">Skill 150, 225 and 300, once per profession across the account. Gathering doesn't count.</p>\n          <div class=\"scroll\"><table class=\"lgt\"><thead><tr><th>Profession</th><th>150</th><th>225</th><th>300</th></tr></thead><tbody>\n            <tr><th>Alchemy</th><td><input type=\"checkbox\" data-lg=\"t-alch-150\" aria-label=\"Alchemy 150\"></td><td><input type=\"checkbox\" data-lg=\"t-alch-225\" aria-label=\"Alchemy 225\"></td><td><input type=\"checkbox\" data-lg=\"t-alch-300\" aria-label=\"Alchemy 300\"></td></tr>\n            <tr><th>Blacksmithing</th><td><input type=\"checkbox\" data-lg=\"t-bs-150\" aria-label=\"Blacksmithing 150\"></td><td><input type=\"checkbox\" data-lg=\"t-bs-225\" aria-label=\"Blacksmithing 225\"></td><td><input type=\"checkbox\" data-lg=\"t-bs-300\" aria-label=\"Blacksmithing 300\"></td></tr>\n            <tr><th>Enchanting</th><td><input type=\"checkbox\" data-lg=\"t-ench-150\" aria-label=\"Enchanting 150\"></td><td><input type=\"checkbox\" data-lg=\"t-ench-225\" aria-label=\"Enchanting 225\"></td><td><input type=\"checkbox\" data-lg=\"t-ench-300\" aria-label=\"Enchanting 300\"></td></tr>\n            <tr><th>Engineering</th><td><input type=\"checkbox\" data-lg=\"t-eng-150\" aria-label=\"Engineering 150\"></td><td><input type=\"checkbox\" data-lg=\"t-eng-225\" aria-label=\"Engineering 225\"></td><td><input type=\"checkbox\" data-lg=\"t-eng-300\" aria-label=\"Engineering 300\"></td></tr>\n            <tr><th>Leatherworking</th><td><input type=\"checkbox\" data-lg=\"t-lw-150\" aria-label=\"Leatherworking 150\"></td><td><input type=\"checkbox\" data-lg=\"t-lw-225\" aria-label=\"Leatherworking 225\"></td><td><input type=\"checkbox\" data-lg=\"t-lw-300\" aria-label=\"Leatherworking 300\"></td></tr>\n            <tr><th>Tailoring</th><td><input type=\"checkbox\" data-lg=\"t-tail-150\" aria-label=\"Tailoring 150\"></td><td><input type=\"checkbox\" data-lg=\"t-tail-225\" aria-label=\"Tailoring 225\"></td><td><input type=\"checkbox\" data-lg=\"t-tail-300\" aria-label=\"Tailoring 300\"></td></tr>\n          </tbody></table></div>\n        </div>\n        <div><span class=\"label\">Dungeons, raids &amp; adventure <span class=\"mono colct\" data-lgc=\"dra\"></span></span>\n          <ul class=\"tick lgl\">\n            <li><label><input type=\"checkbox\" data-lg=\"d-novice\"><span><b>Novice Spelunker</b> <span class=\"why\">· final boss of every level 15–25 dungeon</span></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"d-exp\"><span><b>Experienced Spelunker</b> <span class=\"why\">· every level 26–45 dungeon</span></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"d-master\"><span><b>Master Spelunker</b> <span class=\"why\">· every level 46–60 dungeon</span></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"r-ony\"><span><b>Conqueror of the Lair</b> <span class=\"why\">· Onyxia</span></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"r-hyjal\"><span><b>Conqueror of the Wilds</b> <span class=\"why\">· all 13 Hyjal Summit bosses</span></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"r-barrow\"><span><b>Conqueror of the Deeps</b> <span class=\"why\">· all 8 Barrow Deeps bosses</span></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"a-explore\"><span><b>Explorer</b> <span class=\"why\">· explore the whole world map on one character</span></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"a-valthalak\"><span><b>Lord Valthalak</b> <span class=\"why\">· the dungeon-set questline, \"An Earnest Proposition\" to \"Saving the Best for Last\"</span></span></label></li>\n          </ul>\n        </div>\n        <div class=\"lgwide\"><span class=\"label\">PvP <span class=\"mono colct\" data-lgc=\"p\"></span></span>\n          <ul class=\"tick lgl lgpvp\">\n            <li><label><input type=\"checkbox\" data-lg=\"p-r3\"><span><b>PvP Rank 3</b></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-r7\"><span><b>PvP Rank 7</b></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-r10\"><span><b>PvP Rank 10</b></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-r13\"><span><b>PvP Rank 13</b></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-r14\"><span><b>PvP Rank 14</b></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-av\"><span><b>Exalted · Alterac Valley</b></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-ab\"><span><b>Exalted · Arathi Basin</b></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-wsg\"><span><b>Exalted · Warsong Gulch</b></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-di\"><span><b>Exalted · Darkspear Islands</b></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-foh4\"><span><b>Field of Honor · week 4</b> <span class=\"why\">· Season's Journey quest</span></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-foh7\"><span><b>Field of Honor · week 7</b></span></label></li>\n            <li><label><input type=\"checkbox\" data-lg=\"p-foh10\"><span><b>Field of Honor · week 10</b></span></label></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"tactions\"><button class=\"tbtn\" data-lgact=\"clear\">Clear Legacy ticks</button></div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"legacy-tree-adventure\">\n      <summary><h3>Adventure tree <small>leveling &amp; open world</small></h3></summary>\n      <div class=\"scroll\"><table class=\"lgperk\"><thead><tr><th>Perk</th><th>Tier</th><th>Ranks</th><th>At max rank</th></tr></thead><tbody>\n        <tr><td>Well Rested</td><td>1</td><td class=\"mono\">5</td><td>Rested XP builds 20% faster and the rested cap is 20% higher (4% per rank)</td></tr>\n        <tr><td>Thrill of Adventure</td><td>1</td><td class=\"mono\">5</td><td>A killing blow restores 5% of max Health and Mana over 10 sec. Outdoors only</td></tr>\n        <tr><td>Talented</td><td>2 · needs Well Rested 5/5</td><td class=\"mono\">5</td><td>First talent point at level 5 instead of 10, so all 51 points by 55. Retroactive. Still 51 total</td></tr>\n        <tr><td>High Alert</td><td>2</td><td class=\"mono\">2</td><td>Detect stealth as if 2 levels higher. Not in battlegrounds</td></tr>\n        <tr><td>Field Guide</td><td>2</td><td class=\"mono\">3</td><td>Camp feature cooldown about 25% shorter (8% per rank)</td></tr>\n        <tr><td>Field Medicine</td><td>2</td><td class=\"mono\">2</td><td>Recently Bandaged 10 sec shorter. Outdoors only</td></tr>\n        <tr><td>Frequent Flier</td><td>3 · needs Field Guide 3/3</td><td class=\"mono\">1</td><td>Flight paths half price and 20% faster</td></tr>\n      </tbody></table></div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"legacy-tree-resource\">\n      <summary><h3>Resourcefulness tree <small>endgame convenience</small></h3></summary>\n      <div class=\"scroll\"><table class=\"lgperk\"><thead><tr><th>Perk</th><th>Tier</th><th>Ranks</th><th>At max rank</th></tr></thead><tbody>\n        <tr><td>Gourmand</td><td>1</td><td class=\"mono\">3</td><td>Food buffs last twice as long (+33% per rank)</td></tr>\n        <tr><td>The Quick and the Dead</td><td>1</td><td class=\"mono\">2</td><td>10% faster while dead; helpful spells cost nothing for 2 min after you resurrect, or until combat</td></tr>\n        <tr><td>Reinforce</td><td>1</td><td class=\"mono\">5</td><td>40% less durability lost when you die</td></tr>\n        <tr><td>Diplomat</td><td>2</td><td class=\"mono\">5</td><td>+10% reputation with every faction</td></tr>\n        <tr><td>For Great Honor</td><td>2</td><td class=\"mono\">5</td><td>+10% Honor</td></tr>\n        <tr><td>Permanence</td><td>2 · needs Gourmand 3/3</td><td class=\"mono\">2</td><td>Long class buffs last 100% longer; camp rest benefits too</td></tr>\n        <tr><td>Reagent Economy</td><td>3 · needs Quick and the Dead 2/2</td><td class=\"mono\">1</td><td>Class abilities no longer need vendor-bought reagents</td></tr>\n      </tbody></table></div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"legacy-tree-prof\">\n      <summary><h3>Professions tree <small>crafting, gathering, gold</small></h3></summary>\n      <div class=\"scroll\"><table class=\"lgperk\"><thead><tr><th>Perk</th><th>Tier</th><th>Ranks</th><th>At max rank</th></tr></thead><tbody>\n        <tr><td>Working Overtime</td><td>1</td><td class=\"mono\">5</td><td>+20% chance of a skill-up in any tradeskill, Lockpicking included</td></tr>\n        <tr><td>Bountiful Harvest</td><td>1</td><td class=\"mono\">5</td><td>Scarce Mining, Herbalism and Skinning materials twice as likely</td></tr>\n        <tr><td>Bartering</td><td>2</td><td class=\"mono\">2</td><td>10% off vendor items (not training, riding or repairs)</td></tr>\n        <tr><td>Master Chef</td><td>2</td><td class=\"mono\">5</td><td>50% chance of an extra Cooking result</td></tr>\n        <tr><td>Luremaster</td><td>2</td><td class=\"mono\">2</td><td>50% chance of an extra fish while a lure is on</td></tr>\n        <tr><td>Performance Bonus</td><td>2 · needs Bountiful Harvest 5/5</td><td class=\"mono\">3</td><td>15% chance of double Merchant's Favor on crate turn-ins</td></tr>\n        <tr><td>Dedicated Study</td><td>3 · needs Bartering 2/2</td><td class=\"mono\">1</td><td>Once a day, +1 skill in your lowest profession; Elemental Essences once they're all 300</td></tr>\n      </tbody></table></div>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"legacy-tiers\">\n      <summary><h3>Tier rules</h3></summary>\n      <ul>\n        <li>Tier 1 is open. Tier 2 needs 5 points in that tree; tier 3 needs 10.</li>\n        <li>A perk with a \"needs\" note also needs that perk at max rank.</li>\n        <li>With 16 points you can reach one tier-3 perk.</li>\n        <li>Each tree has two locked slots for perks Blizzard hasn't named yet. Don't plan around them.</li>\n        <li>Tiers and prerequisites come from the beta build (Oct 15). Check the tree in game before a reset.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"legacy-builds\">\n      <summary><h3>Which 16 to take <small>picks for a PvE roster</small></h3></summary>\n      <div class=\"cols\">\n        <div><span class=\"label\">Leveling characters · recommended</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Well Rested</b></li>\n            <li><span class=\"rk\">5/5</span><b>Talented</b> <span class=\"why\">· your full talent build online 5 levels early</span></li>\n            <li><span class=\"rk\">5/5</span><b>Thrill of Adventure</b> <span class=\"why\">· less drinking between pulls</span></li>\n            <li><span class=\"rk\">1/2</span><b>Field Medicine</b></li>\n          </ol>\n          <p class=\"why\">Talented needs Well Rested 5/5 first, so the pair costs 10 points. Each Talented rank moves your first talent point one level earlier, and it's retroactive, so you lose nothing by adding it later.</p>\n        </div>\n        <div><span class=\"label\">At level 60 · dungeons and raids</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Reinforce</b></li>\n            <li><span class=\"rk\">3/3</span><b>Gourmand</b></li>\n            <li><span class=\"rk\">2/2</span><b>The Quick and the Dead</b></li>\n            <li><span class=\"rk\">2/2</span><b>Permanence</b></li>\n            <li><span class=\"rk\">1/1</span><b>Reagent Economy</b></li>\n            <li><span class=\"rk\">3/5</span><b>Diplomat</b></li>\n          </ol>\n          <p class=\"why\">Leveling perks do nothing at 60, so reset Adventure there (10 gold) and move into this.</p>\n        </div>\n        <div><span class=\"label\">Gathering or gold alt</span>\n          <ol class=\"talents\">\n            <li><span class=\"rk\">5/5</span><b>Bountiful Harvest</b></li>\n            <li><span class=\"rk\">2/2</span><b>Bartering</b></li>\n            <li><span class=\"rk\">3/3</span><b>Performance Bonus</b></li>\n            <li><span class=\"rk\">1/1</span><b>Dedicated Study</b></li>\n            <li><span class=\"rk\">5/5</span><b>Working Overtime</b></li>\n          </ol>\n          <p class=\"why\">Swap Working Overtime for Master Chef or Luremaster if you cook or fish more than you craft.</p>\n        </div>\n      </div>\n      <p class=\"why\">For Great Honor and High Alert are PvP perks, so they're low value on PvE realms.</p>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"legacy-gotchas\">\n      <summary><h3>Known issues &amp; tips <small>as of Nov 15</small></h3></summary>\n      <ul>\n        <li><b>Nov 6 hotfix:</b> The Quick and the Dead sometimes didn't work. Fixed.</li>\n        <li><b>\"Unable to apply talent\"</b> when moving Legacy points (reported Nov 8): unlearn them at your class trainer instead.</li>\n        <li><b>Legacy window won't open at 25:</b> some players report this bug; Blizzard hasn't responded.</li>\n        <li><b>Talented refunds:</b> on the beta, Talented could only be refunded after a class talent reset too, so expect two bills.</li>\n        <li><b>Glowing icon:</b> spending the point doesn't clear it. Open the Legacy Challenges tab and click the challenge that earned it.</li>\n        <li><b>Diplomat:</b> take it before turning in one-time reputation quests.</li>\n        <li><b>Raids</b> (Onyxia, Hyjal Summit, Barrow Deeps) open Dec 9, so those three points come later.</li>\n        <li><b>Coming later:</b> new challenges and perks with each content release, new trees, and Hardcore-only challenges and perks.</li>\n      </ul>\n    </details>\n\n  </div>\n  "
 },
 "console": {
  "label": "Every character · account-wide",
  "h2": "Graphics console commands",
  "html": "\n  <p class=\"sdesc\">Hidden graphics settings that go past the Options sliders, from <a href=\"https://www.threads.com/@richard.moschetti/post/DfnTAgGn_LM\" target=\"_blank\" rel=\"noopener\">richard.moschetti's Threads post</a> (Nov 12). Expect more foliage further out, better water and fuller weather, at some cost to frame rate.</p>\n  <div class=\"guide\">\n\n    <details class=\"gpanel wide\" data-key=\"console-how-to-apply\">\n      <summary><h3>How to apply <small>4 macros · 2 to apply, 2 to undo</small></h3></summary>\n      <ol class=\"howto\">\n        <li>Type <code>/macro</code> and stay on the <b>General Macros</b> tab, so every character on the account gets them. Click New.</li>\n        <li>Type the <b>macro name</b> as shown and pick any icon.</li>\n        <li>Copy the <b>macro text</b> in exactly, line breaks included. The commands are split over two macros because a macro holds 255 characters at most.</li>\n        <li>Click both GFX Boost macros once. The game saves most of these settings, so you usually only need to run them once.</li>\n      </ol>\n      <ul class=\"mtips\">\n        <li>Moving a related graphics slider in Options can overwrite these values. If that happens, click the macros again.</li>\n        <li>The post's author found the sharpen setting (<code>ResampleAlwaysSharpen</code>) underwhelming. Leave that line out if you don't like how it looks.</li>\n        <li>If frame rate drops too far, <code>terrainLodDist</code> and the two grass distance settings are the heavy ones.</li>\n      </ul>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"console-apply\">\n      <summary><h3>Apply</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>GFX Boost 1</b></div><button class=\"copy\" id=\"copy-gx1\" data-for=\"gx1\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"gx1\">/console cameraDistanceMaxZoomFactor 4\n/console groundEffectDensity 256\n/console groundEffectDist 500\n/console groundEffectFade 370\n/console ResampleAlwaysSharpen 1\n/console reflectionMode 3</pre>\n        <p class=\"why\">Camera, grass, sharpening and water.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>GFX Boost 2</b></div><button class=\"copy\" id=\"copy-gx2\" data-for=\"gx2\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"gx2\">/console weatherDensity 3\n/console lodObjectFadeScale 200\n/console lodObjectCullSize 8\n/console terrainLodDist 1000\n/console horizonstart 4000\n/console ssaotype 0</pre>\n        <p class=\"why\">Weather, draw distance, horizon and ambient occlusion.</p></div>\n    </details>\n\n    <details class=\"gpanel wide\" data-key=\"console-undo\">\n      <summary><h3>Undo</h3></summary>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>GFX Reset 1</b></div><button class=\"copy\" id=\"copy-gx3\" data-for=\"gx3\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"gx3\">/console cvar_default cameraDistanceMaxZoomFactor\n/console cvar_default groundEffectDensity\n/console cvar_default groundEffectDist\n/console cvar_default groundEffectFade\n/console cvar_default ResampleAlwaysSharpen\n/console cvar_default reflectionMode</pre>\n        <p class=\"why\">Puts the first six settings back to the game's defaults.</p></div>\n        <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Macro name</span><b>GFX Reset 2</b></div><button class=\"copy\" id=\"copy-gx4\" data-for=\"gx4\">Copy</button></div>\n        <span class=\"label\">Macro text</span>\n        <pre class=\"macro\" id=\"gx4\">/console cvar_default weatherDensity\n/console cvar_default lodObjectFadeScale\n/console cvar_default lodObjectCullSize\n/console cvar_default terrainLodDist\n/console cvar_default horizonstart\n/console cvar_default ssaotype</pre>\n        <p class=\"why\">Puts the other six back.</p></div>\n      <p class=\"why\">To reset just one setting, type <code>/console cvar_default</code> plus its name in chat.</p>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"console-what-each-one-does\">\n      <summary><h3>What each one does</h3></summary>\n      <ul><li><code>cameraDistanceMaxZoomFactor 4</code> <span class=\"why\">· Lets you zoom the camera further out</span></li><li><code>groundEffectDensity 256</code> <span class=\"why\">· Thicker grass and ground clutter</span></li><li><code>groundEffectDist 500</code> <span class=\"why\">· Grass drawn further out</span></li><li><code>groundEffectFade 370</code> <span class=\"why\">· Where that grass fades out</span></li><li><code>ResampleAlwaysSharpen 1</code> <span class=\"why\">· Sharpening filter</span></li><li><code>reflectionMode 3</code> <span class=\"why\">· Better water reflections</span></li><li><code>weatherDensity 3</code> <span class=\"why\">· Fuller rain and snow</span></li><li><code>lodObjectFadeScale 200</code> <span class=\"why\">· Objects stay detailed further out</span></li><li><code>lodObjectCullSize 8</code> <span class=\"why\">· Draws smaller distant objects</span></li><li><code>terrainLodDist 1000</code> <span class=\"why\">· Detailed terrain further out</span></li><li><code>horizonstart 4000</code> <span class=\"why\">· Pushes the horizon back</span></li><li><code>ssaotype 0</code> <span class=\"why\">· Turns off ambient occlusion shading</span></li></ul>\n    </details>\n\n    <details class=\"gpanel\" data-key=\"console-left-out-giquality-0\">\n      <summary><h3>Left out: giquality 0</h3></summary>\n      <p>The original post also listed <code>/console giquality 0</code>. Several players, including the author, said it turned the screen almost black. It switches off secondary lighting: frame rate goes up, but dark areas become unplayable. It isn't in the macros above.</p>\n      <p class=\"why\">If you already ran it, undo it with:</p>\n      <div class=\"mac\"><div class=\"macrohead\"><div class=\"mname\"><span class=\"label\">Chat command</span><b>Undo giquality</b></div><button class=\"copy\" id=\"copy-gx5\" data-for=\"gx5\">Copy</button></div>\n        <pre class=\"macro\" id=\"gx5\">/console cvar_default giquality</pre></div>\n    </details>\n  </div>\n  "
 }
};
