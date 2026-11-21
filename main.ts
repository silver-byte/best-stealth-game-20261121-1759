import { mkdirSync, readdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildDossier } from './vendor/makefun-game.ts';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(join(outDir, 'game'), { recursive: true });
mkdirSync(join(outDir, 'screenshots'), { recursive: true });

for (const name of readdirSync('game')) {
  copyFileSync(join('game', name), join(outDir, 'game', name));
}
for (const name of readdirSync('screenshots')) {
  copyFileSync(join('screenshots', name), join(outDir, 'screenshots', name));
}

const dossier = buildDossier(outDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  game_max_files: 993,
  game_max_bytes: 50331648,
  game_path_max_bytes: 1000,
});

import { writeFileSync } from 'node:fs';
writeFileSync(join(outDir, 'dossier.json'), dossier);