/* WoW Forever camping data. Checked Nov 15, 2026 against mmonster.co (client values by level, blueprint drops),
   wow-professions.com, Warcraft Tavern, wow.gg, warcraft.wiki.gg and RankedBoost. Beta-era numbers can move with hotfixes. */
window.FP_CAMP = {
  updated: "Nov 15, 2026",
  facts: [
    ["1 min", "sit or craft by the fire to get the buffs"],
    ["1 hour", "camp buffs last, all rolled into one Camp Benefits buff"],
    ["1 each", "camp object per player, so bring friends"],
    ["1 hour", "shared cooldown on all your camp objects"],
    ["3 · 5 · 10", "objects a Basic, Journeyman or Expert campfire holds"],
    ["~10 min", "a campfire burns; kits share a 5 min cooldown"]
  ],
  start: [
    ["The Great Outdoors", "Around level 5 this quest sits you at your first campfire. It's optional; camp buffs work without it."],
    ["Learn Cooking", "The Basic Campfire Kit comes with Cooking at skill 1. It's 1 Simple Wood (about 38 copper from general goods and trade vendors) plus a Flint and Tinder you keep."],
    ["Craft kits ahead", "Make a stack of Basic Campfire Kits in town. They take one bag slot and you can hand them to friends."],
    ["Bring your object", "At profession skill 20 the trainer (or the Camping 101 quest) teaches your profession's tier 1 camp object."],
    ["/sit for a minute", "Sit or craft next to the fire for 1 minute. Every object at the camp lands on you as one hour-long buff."]
  ],
  rules: [
    "No campfires in combat, in dungeons or raids, or in major cities, and fires must be spaced apart.",
    "Camp buffs are weaker than the class buff they mirror and don't stack with it. Workstations, vendors and repairs still work.",
    "A tier 2 or 3 object replaces your tier 1 object and keeps its buff. You can place it over a lower tier at the same camp, ignoring the cooldown.",
    "Buying someone's finished object doesn't help on its own: placing one needs the profession skill.",
    "Camp Tent's rested XP only applies when you have no rested XP saved, then blocks itself for an hour. Quest-giver campfires always give it."
  ],
  kits: [
    { name: "Basic Campfire", slots: 3, learn: 1, use: 1, wood: "Simple Wood", src: "Comes with Cooking" },
    { name: "Journeyman Campfire", slots: 5, learn: 90, use: 90, wood: "Star Wood", src: "Blueprint from Lord Serpentis, Wailing Caverns", note: "Use skill lowered from 140 to 90 on Nov 10" },
    { name: "Expert Campfire", slots: 10, learn: 200, use: 220, wood: "Thick Logs", src: "Blueprint from Slavecrusher Grox, Krol'dok Stronghold", note: "Found Nov 10. Learn at 200, place at 220" }
  ],
  /* the tier 1 buffs: steps = [level it starts, value] from the client tables (mmonster.co, build 1.60.1) */
  buffs: [
    { obj: "Fish Bowl", prof: "Fishing", pk: "s:fishing", kind: "pct", fmt: "+{v}% all stats", steps: [[1, 8]], clash: ["Blessing of Kings", "paladin"] },
    { obj: "First Aid Kit", prof: "First Aid", pk: "s:firstaid", fmt: "+{v} Stamina", steps: [[1, 3], [12, 8], [24, 21], [36, 34], [48, 45], [60, 56]], clash: ["Power Word: Fortitude", "priest"] },
    { obj: "Camp Chair", prof: "Skinning", pk: "Skinning", kind: "pct", fmt: "+{v}% crit, spells and attacks", steps: [[1, 2]], clash: ["Moonkin Aura or Leader of the Pack", "druid"] },
    { obj: "Enchanted Lute", prof: "Enchanting", pk: "Enchanting", fmt: "+{v} armor, +{w} all stats", steps: [[1, 71, 2], [20, 114, 4], [30, 163, 7], [40, 211, 9], [50, 260, 12], [60, 308, 13]], extra: "Resistances too, from level 30 (amounts unconfirmed)", clash: ["Mark of the Wild", "druid"] },
    { obj: "Lodestone", prof: "Mining", pk: "Mining", fmt: "+{v} melee attack power", steps: [[1, 12], [12, 20], [22, 32], [32, 49], [42, 67], [52, 90]], clash: ["Blessing of Might", "paladin"] },
    { obj: "Sharpening Wheel", prof: "Blacksmithing", pk: "Blacksmithing", fmt: "+{v} Strength", steps: [[1, 6], [24, 11], [38, 20], [52, 34]], clash: ["Strength of Earth Totem", "shaman"] },
    { obj: "Incense Candle", prof: "Herbalism", pk: "Herbalism", fmt: "+{v} Intellect", steps: [[1, 2], [14, 6], [28, 12], [42, 18], [56, 25]], clash: ["Arcane Intellect", "mage"] },
    { obj: "Faction Banner", prof: "Tailoring", pk: "Tailoring", fmt: "+{v} Spirit", steps: [[1, 14], [40, 19], [50, 27], [60, 32]], extra: "Your own faction only", clash: ["Divine Spirit", "priest"] },
    { obj: "Mana Well", prof: "Alchemy", pk: "Alchemy", fmt: "+{v} mana every 5 sec", steps: [[1, 10], [24, 15], [34, 20], [44, 24], [54, 29]], clash: ["Blessing of Wisdom", "paladin"] },
    { obj: "Camp Tent", prof: "Leatherworking", pk: "Leatherworking", kind: "text", fmt: "Rested XP, up to 5% of a level", extra: "Once an hour, only with no rested XP saved" },
    { obj: "Reagent Bot", prof: "Engineering", pk: "Engineering", kind: "text", fmt: "A vendor at the camp", extra: "Class reagents, threads, dyes, flux, spices, Simple Wood, Star Wood and Thick Logs" }
  ],
  /* every profession, tier by tier. src: blueprint boss and dungeon, r = beta drop rarity */
  profs: [
    { p: "Alchemy", pk: "Alchemy", t: [
      ["Mana Well", 20, "Mana regen buff", "Peacebloom, Empty Vial"],
      ["Fermenter", 140, "Workstation for some Alchemy recipes; keeps the Mana Well buff", "Leaded Vial, Kingsblood, Swiftthistle", "Rath'mael, Ruins of Lordaeron", "common"],
      ["Alchemy Laboratory", 300, "Workstation for top Alchemy recipes; keeps the buff", "Lich's Index Finger, Crystal Vial, 2 Dreamfoil"]] },
    { p: "Blacksmithing", pk: "Blacksmithing", t: [
      ["Sharpening Wheel", 20, "Strength buff", "Rough Stone, Copper Bar"],
      ["Anvil", 140, "Craft Blacksmithing plans at camp; keeps the buff", "5 Bronze Bar, 2 Coarse Grinding Stone, 2 Medium Leather", "Gilnid, The Deadmines", "rare"],
      ["Master Forge", 300, "Forge for certain plans; keeps the buff", "Golem Heart, 5 Thorium Bar, 2 Rugged Leather", "Golem Lord Argelmach, Blackrock Depths (one source)"]] },
    { p: "Enchanting", pk: "Enchanting", t: [
      ["Enchanted Lute", 20, "Armor, all stats and resistances", "Simple Wood, Strange Dust"],
      ["Arcane Salvager", 140, "Better disenchanting; keeps the buff", "2 Vision Dust, Lesser Nether Essence (Runed Truesilver Rod as a tool)", "Rath'mael, Ruins of Lordaeron · Shade of the Archmage, City of Dalaran · Charlga Razorflank, Razorfen Kraul", "common"],
      ["Arcane Forge", 300, "Workstation for certain formulas; keeps the buff", "Maker's Spark, 2 Large Brilliant Shard, 4 Greater Eternal Essence"]] },
    { p: "Engineering", pk: "Engineering", t: [
      ["Reagent Bot", 20, "Reagent and supplies vendor, no buff", "Handful of Copper Bolts, Copper Tube"],
      ["Repair Bot", 140, "Vendor plus repairs for everyone at the camp", "2 Whirring Bronze Gizmo, Bronze Tube, Heavy Leather (Arclight Spanner)", "Sneed, The Deadmines", "rare"],
      ["Anarchist's Workbench", 300, "Workstation for some schematics", "Essence of Anarchy, 2 Thorium Widget (Arclight Spanner)"]] },
    { p: "Herbalism", pk: "Herbalism", t: [
      ["Incense Candle", 20, "Intellect buff", "Peacebloom, Silverleaf"],
      ["Greenhouse", 140, "Plant seeds and grow herbs over time; keeps the buff", "2 Simple Wood, Arthas' Tears, Purple Lotus", "Shadetooth, Excavation Site: Wetlands", "common"],
      ["Seed Hybridizer", 300, "Multiplies seeds or turns them into rarer ones; keeps the buff", "4 Mountain Silversage, Crystal Vial, 2 Runecloth"]] },
    { p: "Leatherworking", pk: "Leatherworking", t: [
      ["Camp Tent", 20, "Rested XP, up to 5% of a level an hour", "5 Light Leather"],
      ["Tanning Rack", 125, "Workstation for certain materials; keeps the tent", "5 Medium Leather, 3 Fine Thread, 2 Simple Wood", "Razorclaw the Butcher, Shadowfang Keep", "rare"],
      ["Sewing Machine", 300, "Workstation for some patterns; keeps the tent", "Undeath Engine, 5 Rugged Leather, Rune Thread"]] },
    { p: "Mining", pk: "Mining", t: [
      ["Lodestone", 20, "Melee attack power buff", "Rough Stone, Copper Bar"],
      ["Rock Garden", 140, "Grows a common mining node over time; keeps the buff", "2 Heavy Stone, Iron Ore, Silver Bar", "Relic Guardian, Excavation Site: Wetlands", "common"],
      ["Molten Foundry", 300, "Needed to smelt some bars, like Heavy Thorium; keeps the buff", "5 Thorium Bar, 2 Dense Stone, Truesilver Bar"]] },
    { p: "Skinning", pk: "Skinning", t: [
      ["Camp Chair", 20, "+2% crit buff", "3 Light Leather, 2 Simple Wood"],
      ["Field Guide", 140, "Anyone who reads it learns Track Beasts; keeps the chair buff", "3 Medium Leather, 2 Slimy Murloc Scale, Fine Thread", "Lady Anacondra, Wailing Caverns", "rare"],
      ["Trapper's Workbench", 300, "Holds a trap (Brittle Trap roots for 10 sec); keeps the buff", "2 Simple Wood, 4 Heavy Leather, Iron Bar", "Possibly Houndmaster Loksey, Scarlet Monastery Library (very rare, unconfirmed)"]] },
    { p: "Tailoring", pk: "Tailoring", t: [
      ["Faction Banner", 20, "Spirit buff for your faction", "Bolt of Linen Cloth, Coarse Thread"],
      ["Spinning Wheel", 140, "Workstation for some materials; keeps the banner", "2 Simple Wood, 5 Bolt of Silk Cloth, 3 Fine Thread", "Unstable Sentinel, City of Dalaran", "common"],
      ["Loom", 300, "Workstation for some patterns; keeps the banner", "Bottled Screams, 4 Bolt of Runecloth, 4 Simple Wood", "Baroness Anastari, Stratholme (one source)"]] },
    { p: "Cooking", pk: "s:cooking", t: [
      ["Campfire kits", 1, "The fire itself: Basic, Journeyman and Expert (see Campfires)", "Simple Wood, Star Wood or Thick Logs"],
      ["Cookie's Feast", 140, "Stamina food for everyone at the camp", "2 Mystery Meat, Heavy Kodo Meat, Soothing Spices", "Cookie, The Deadmines", "rare"],
      ["Iron Oven", 300, "Station for the most advanced Cooking recipes", "10 Simple Flour, 5 Refreshing Spring Water, 4 Soothing Spices", "Quartermaster Zigris, Lower Blackrock Spire (one source)"]] },
    { p: "First Aid", pk: "s:firstaid", t: [
      ["First Aid Kit", 20, "Stamina buff", "3 Linen Bandage, Refreshing Spring Water"],
      ["Toxin Study", 140, "Healing potions and anti-venom; keeps the buff", "Anti-Venom, 2 Mageweave Bandage, 2 Simple Wood", "Commander Springvale, Shadowfang Keep", "rare"],
      ["Plague Doctor's Laboratory", 300, "Healing potions and poultices; keeps the buff", "2 Simple Wood, 2 Strong Anti-Venom, 5 Heavy Runecloth Bandage"]] },
    { p: "Fishing", pk: "s:fishing", t: [
      ["Fish Bowl", 20, "+8% all stats buff", "Raw Brilliant Smallfish, Empty Vial"],
      ["Fishing Rack", 140, "Lures and uncommon fish nearby for an hour; keeps the buff", "2 Simple Wood, Crystal Vial, 2 Raw Mithril Head Trout", "Gelihast, Blackfathom Deeps · also fished from pools", "rare"],
      ["Fishing Hut", 300, "Lures and rare fish nearby for an hour; keeps the buff", "5 Simple Wood, 2 Bolt of Runecloth, Seasonal Fish Steaks"]] }
  ],
  /* blueprint farming, grouped by dungeon */
  dungeons: [
    { d: "Wailing Caverns", b: [["Journeyman Campfire", "Cooking 90", "Lord Serpentis", "rare"], ["Field Guide", "Skinning 140", "Lady Anacondra", "rare"]] },
    { d: "The Deadmines", b: [["Anvil", "Blacksmithing 140", "Gilnid", "rare"], ["Repair Bot", "Engineering 140", "Sneed", "rare"], ["Cookie's Feast", "Cooking 140", "Cookie", "rare"]] },
    { d: "Shadowfang Keep", b: [["Tanning Rack", "Leatherworking 125", "Razorclaw the Butcher", "rare"], ["Toxin Study", "First Aid 140", "Commander Springvale", "rare"]] },
    { d: "Blackfathom Deeps", b: [["Fishing Rack", "Fishing 140", "Gelihast", "rare"]] },
    { d: "Razorfen Kraul", b: [["Arcane Salvager", "Enchanting 140", "Charlga Razorflank", "rare"]] },
    { d: "Excavation Site: Wetlands", nw: true, b: [["Greenhouse", "Herbalism 140", "Shadetooth", "common"], ["Rock Garden", "Mining 140", "Relic Guardian", "common"]] },
    { d: "Ruins of Lordaeron", nw: true, b: [["Fermenter", "Alchemy 140", "Rath'mael", "common"], ["Arcane Salvager", "Enchanting 140", "Rath'mael", "common"]] },
    { d: "City of Dalaran", nw: true, b: [["Spinning Wheel", "Tailoring 140", "Unstable Sentinel", "common"], ["Arcane Salvager", "Enchanting 140", "Shade of the Archmage", "common"]] },
    { d: "Krol'dok Stronghold", nw: true, b: [["Expert Campfire", "Cooking 200", "Slavecrusher Grox", ""]] },
    { d: "Blackrock Depths", b: [["Master Forge", "Blacksmithing 300", "Golem Lord Argelmach", "one source"]] },
    { d: "Lower Blackrock Spire", b: [["Iron Oven", "Cooking 300", "Quartermaster Zigris", "one source"]] },
    { d: "Stratholme", b: [["Loom", "Tailoring 300", "Baroness Anastari", "one source"]] }
  ],
  legacy: [
    ["Field Guide", "Adventure", "3 ranks", "Camp object cooldown 8% shorter per rank, so the hour drops to about 45 minutes at 3/3."],
    ["Permanence", "Resourcefulness", "2 ranks · needs Gourmand 3/3", "Camp buffs last 50% longer per rank, up to 2 hours at 2/2. Long class buffs get the same."],
    ["Reagent Economy", "Resourcefulness", "1 rank", "Class spells stop needing vendor reagents. Early tooltips also made tier 1 camp objects free to craft; the current client text no longer says so."]
  ],
  tips: [
    ["Fill gaps, don't double up", "Check who's in the group first. A Paladin's Blessing of Kings makes the Fish Bowl pointless, and a Mage's Arcane Intellect does the same to the Incense Candle."],
    ["Fish Bowl and Camp Chair are the stars", "They're percentages, so they're as strong at level 12 as at 60. Every other buff is small early and grows with your level."],
    ["Fishing, First Aid and Cooking are free picks", "They're secondary skills, so any character can bring a Fish Bowl or First Aid Kit without giving up a main profession."],
    ["Stop at camps before dungeons", "Ten minutes of fire and a one-hour buff covers most leveling dungeon runs. With Permanence 2/2 it covers two."],
    ["Farm blueprints in Forever's new dungeons", "Their bosses dropped blueprints at about 7 to 10% in the beta, against about 1% or less on Classic bosses."],
    ["Light the fire, then cook", "The campfire is a Cooking fire too: cook your Well Fed food (most of it now adds 5% kill XP) while you wait out the minute."]
  ],
  sources: [
    ["mmonster.co: Camping in WoW Forever (client values by level, blueprint drops)", "https://mmonster.co/wow-forever/guides/professions/camping"],
    ["wow-professions.com: WoW Forever Camping Guide", "https://www.wow-professions.com/forever/camping-guide"],
    ["Warcraft Tavern: Camping Objects & Buffs", "https://www.warcrafttavern.com/forever/guides/camping-objects-buffs/"],
    ["wow.gg: Camps in WoW Forever (timers and rules)", "https://wow.gg/guides/camping"],
    ["Warcraft Wiki: Blueprint: Expert Campfire", "https://warcraft.wiki.gg/wiki/Blueprint:_Expert_Campfire"],
    ["RankedBoost: WoW Forever Campfires (Journeyman change, Nov 10)", "https://rankedboost.com/world-of-warcraft/forever/camping/campfires/"],
    ["Icy Veins: Warcraft Forever Camping System Guide", "https://www.icy-veins.com/wow-forever/camping"],
    ["Mobalytics: Camping Guide", "https://mobalytics.gg/wow-forever/guides/camping-guide"]
  ]
};
