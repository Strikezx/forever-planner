# WoW Forever Planner

A free, fan-made planner for **World of Warcraft: Forever**. Build your own roster and get a planner for every character, with no sign-up.

- **Your roster:** add characters with name, faction, race, class, realm type, guild, main or alt, professions and notes. Only valid race/class combinations are offered.
- **Planner for each character:** a "What to do now" panel driven by your level, a talent checklist for the build you follow, rotation, gear, class quests, macros you can copy, and that race's racials.
- **Set your level anywhere:** a 1–60 dropdown with − / + buttons in the top bar and in the "Your character" card (or in "What to do now" on class pages). They stay in step, and your level is saved with the character.
- **Everything follows your level:** "What to do now", talent points due, the guide steps (done, now, coming soon), and which phase of your talent build you are in. "Jump to my level" opens the guide at your level, and "Hide earlier levels" tucks away the steps you have passed.
- **Class guides for all nine classes:** browse any class without making a character.
- **Legacy System tracker:** tick the challenges your account has done and see how many points each character can spend.
- **Races & racials:** which races can play which class, and every racial with its current numbers.

## Your data

Everything you enter is saved **only in your own browser** (localStorage). Nothing is sent to a server.

- **Share roster link:** packs your whole roster into a link. Opening it offers to import the roster. Use it to send your roster to a friend or move it between your PC and phone.
- **Export file / Import:** save a backup file, or load one.

Clearing your browser data deletes your roster, so export a backup now and then.

## Sources

Guides are summarised from community sources (Mobalytics, Warcraft Tavern, Icy Veins, Wowhead, Talents Forever, Method, MMARKERS, We Ding Again, NickTew and others). Each class page lists its sources. Talent data comes from Talents Forever's read of the WoW Forever client.

Not affiliated with or endorsed by Blizzard Entertainment. World of Warcraft is a trademark of Blizzard Entertainment.

## Files

- `index.html`: the page
- `assets/app.js`: the app
- `assets/app.css`: styles (dark and light modes)
- `data/classes.js`: shared data (class order, talents, races, racials, Legacy System, console tips)
- `data/class-<name>.js`: one file per class guide (guide, builds, spells, macros, sources)
- `data/campfire.js`: camping data
