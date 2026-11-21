import { mkdirSync, readdirSync, copyFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const gameDir = join(root, 'game');
const screenshotsDir = join(root, 'screenshots');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(join(outDir, 'game'), { recursive: true });
mkdirSync(join(outDir, 'screenshots'), { recursive: true });

for (const name of readdirSync(gameDir)) {
  copyFileSync(join(gameDir, name), join(outDir, 'game', name));
}
for (const name of readdirSync(screenshotsDir)) {
  copyFileSync(join(screenshotsDir, name), join(outDir, 'screenshots', name));
}

const dossier = buildDossier(outDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  game_max_files: 993,
  game_max_bytes: 50331648,
  game_path_max_bytes: 1000,
});

writeFileSync(join(outDir, 'dossier.json'), dossier);
