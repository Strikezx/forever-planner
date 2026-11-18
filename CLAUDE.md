# WoW Forever Planner — notes for Claude

A free, fan-made planner for World of Warcraft: Forever, built for Scott (GitHub: Strikezx) and his friends.
Live at https://strikezx.github.io/forever-planner (GitHub Pages, deployed from `main`).
Most friends have no Claude account, so everything must work as a plain website with no sign-in.

## How the project is built
- Plain HTML, CSS and JavaScript. No framework, no build step, no npm. Keep it that way unless Scott asks.
- `index.html`: the page shell. It loads `data/classes.js`, then `data/campfire.js`, then `assets/app.js`.
- `assets/app.js`: the whole app (roster, character planners, class guides, Legacy tracker, races).
- `assets/app.css`: styles for dark mode (default) and light mode.
- `data/classes.js`: `window.FP_DATA`, which holds class guides, talent orders, spells, races and racials.
- `data/campfire.js`: `window.FP_CAMP`, which holds camping data.
- Guide content goes in `data/`, not hard-coded in `app.js`.

## Don't break people's saved rosters
- Rosters live only in the visitor's browser (localStorage keys `fp:v1`, `fp:open`, `fp:look`).
- Friends also pass rosters around as share links and export files.
- If the saved-data shape changes, add a migration in the load path (`fixChar` / `fixBuild`) so old rosters, links and files still import. Never rename or drop a key without one.

## Design rules
- Default look is "Night Watch": a dark charcoal background, with section titles in the class colour.
- Light mode is "Class Banner" on a darker grey (`data-style="c"`), toggled by the Light mode button.
- Make it sleek, clean and efficient, not boxy. Colour-code each class page to its WoW class colour.
- Every section is collapsible, including "your character". "Expand all" must keep working.
- Most friends use PCs, but some use phones or tablets. Check every change at phone width too.

## Content rules
- WoW Forever reference sites: talentsforever.com, wowhead.com/forever, icy-veins.com/wow-forever, hyjal.cc, foreverchanges.pro. List the sources on each class page.
- Write macros exactly as they appear in the game's macro window: macro name first, then the exact macro text. The wording decides whether a macro works.
- Don't build a replica visual talent tree. Link to Talents Forever builds instead.
- When you change game data, update the "checked/updated" date at the top of that data file.
- Keep the "not affiliated with Blizzard" footer.

## How to work
1. Make changes on a branch and open a pull request with a short, plain-English summary of what changed for players. Push straight to `main` only when Scott says to.
2. Test before finishing. Run `python3 -m http.server` in the repo, load the page, check for console errors, and click through the part you changed. Check both dark and light modes and phone width.
3. Keep `README.md` in step when features change.
4. Scott's older Claude artifact planners are a separate backup. This repo doesn't need to match them.
