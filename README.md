# Silent Ledger

Silent Ledger is a complete, original top-down stealth game that plays offline in desktop Chrome from static files. You guide a blue agent across a walled ledger grid, slipping past patrolling red guards and their yellow vision cones, hiding behind wooden crates, and reaching the green exit without being seen.

## How to play

- **Move** — Use the **Arrow keys** or **WASD** to move one tile per press.
- **Vision cones** — Guards sweep translucent yellow cones ahead of them. If a cone touches your tile and no wall or crate blocks the line of sight, you are spotted and sent back to the start. When you are spotted, a **red X marker** is drawn on the tile where it happened until your next successful move.
- **Crates** — Wooden crates block both movement and sight, so hiding behind one keeps you out of every cone.
- **Two levels** — Reach the green exit on Level 1 to clear it, then press **Space** (or click the band) to advance to Level 2. Your **Moves** and **Seen** counters accumulate across both levels. Reaching the Level 2 exit is the final win.
- **Escape grades** — On the final win you are graded from your cumulative counters: **Seen 0 & Moves ≤ 60** = "GHOST"; **Seen 0** = "UNSEEN"; **Seen ≤ 2** = "SHADOW"; otherwise "DETECTED BUT OUT". The win band shows your grade in green.
- **Restart** — The Restart button, the **R** key, or Space during normal play resets the whole game back to Level 1 with Moves 0, Seen 0. Space only advances levels when Level 1 is clear and waiting.

## Run it

```sh
node serve.ts
```

Then open http://localhost:8080 in a desktop Chrome browser. The game is fully static — no build step and no network.

To produce an entry for the make.fun grader (copying `game/` and `screenshots/` and writing `dossier.json`):

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

[![Silent Ledger on make.fun](https://make.fun/badge/best-stealth-game-20261121-1759.svg)](https://make.fun/bounty/best-stealth-game-20261121-1759)
[![rank](https://make.fun/badge/best-stealth-game-20261121-1759/silver-byte/best-stealth-game-20261121-1759/rank.svg)](https://make.fun/bounty/best-stealth-game-20261121-1759)
[![reward](https://make.fun/badge/best-stealth-game-20261121-1759/silver-byte/best-stealth-game-20261121-1759/reward.svg)](https://make.fun/bounty/best-stealth-game-20261121-1759)