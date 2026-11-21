# Silent Ledger

Silent Ledger is a complete, original top-down stealth game that plays offline in desktop Chrome from static files. You guide a blue agent across a walled ledger grid, slipping past patrolling red guards and their yellow vision cones, hiding behind wooden crates, and reaching the green exit without being seen.

## How to play

- **Move** — Use the **Arrow keys** or **WASD** to move one tile per press.
- **Vision cones** — Guards sweep translucent yellow cones ahead of them. If a cone touches your tile and no wall or crate blocks the line of sight, you are spotted and sent back to the start.
- **Crates** — Wooden crates block both movement and sightcars, so hiding behind one keeps you out of every cone.
- **Exit** — Step onto the bright green tile to escape. Finish unseen to win.
- **Restart** — Use the Restart button (or Space) to reset the level and your Moves/Seen counters.

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