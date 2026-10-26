# Snack Match

A food memory-match game made for Jack, built to play on an iPad.

Flip two cards at a time and find the matching foods. Every match unlocks a food fact.

- **Solo** mode: counts moves and time, gives up to 3 stars, and keeps your best score for each board size.
- **2 players** mode: take turns on the same iPad. Match a pair and you go again. Tap a name to change it.
- Boards of 12, 16 or 20 cards, picked at random from 22 foods.
- Works offline once it has been opened.

## Put it on the iPad

1. On the iPad, open the game's link in **Safari**.
2. Tap the **Share** button, then **Add to Home Screen**, then **Add**.
3. Open Snack Match from the home screen. It runs full-screen like an app and works without Wi-Fi.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The whole game |
| `manifest.webmanifest` | App name, icon and colors for the home screen |
| `sw.js` | Saves the game on the device so it works offline |
| `icons/` | App icons |
| `fonts/` | Bowlby One and Nunito, bundled so they work offline (SIL Open Font License) |

## Changing the game

Foods and facts live in the `FOODS` list near the top of the script in `index.html`. Each entry is `[emoji, name, fact]`.

After you change any file, bump the `CACHE` name in `sw.js` (for example `snack-match-v2`) so iPads that already installed the game pick up the new version.
