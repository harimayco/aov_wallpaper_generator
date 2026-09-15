import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://cdngarenanow-a.akamaihd.net/webmain/static/resource/wallpaper/hero/';
const HEROES_DATA_PATH = path.join(__dirname, 'src', 'data', 'heroes.js');
const PUBLIC_HERO_DIR = path.join(__dirname, 'public', 'images', 'hero');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(`
Usage:
  node add-hero.js <hero_name> [tag]

Examples:
  node add-hero.js florentino warrior
  node add-hero.js sinestrea assassin
`);
  process.exit(0);
}

const heroName = args[0].toLowerCase().trim();
const heroTag = (args[1] || 'warrior').toLowerCase().trim();

// Check if a remote URL exists (200 OK)
function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.end();
  });
}

// Download file from remote URL to local path
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const fileStream = fs.createWriteStream(dest);

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        fs.unlink(dest, () => {});
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(() => resolve(true));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function probeAndDownloadHero() {
  console.log(`Checking remote assets for hero "${heroName}" on Garena CDN...`);

  let skinsCount = 0;
  let bgCount = 0;

  // Probe skins (cutout PNG and thumb JPG)
  for (let i = 1; i <= 20; i++) {
    const thumbUrl = `${BASE_URL}${heroName}/skins-thumb/${i}.jpg`;
    const skinUrl = `${BASE_URL}${heroName}/skins/${i}.png`;

    const thumbExists = await checkUrl(thumbUrl);
    if (!thumbExists) break;

    console.log(`Found Skin #${i}... downloading...`);
    const thumbDest = path.join(PUBLIC_HERO_DIR, heroName, 'skins-thumb', `${i}.jpg`);
    const skinDest = path.join(PUBLIC_HERO_DIR, heroName, 'skins', `${i}.png`);

    await downloadFile(thumbUrl, thumbDest);
    await downloadFile(skinUrl, skinDest);
    skinsCount++;
  }

  // Probe backgrounds (JPG and thumb JPG)
  for (let i = 1; i <= 20; i++) {
    const thumbUrl = `${BASE_URL}${heroName}/bg-thumb/${i}.jpg`;
    const bgUrl = `${BASE_URL}${heroName}/bg/${i}.jpg`;

    const thumbExists = await checkUrl(thumbUrl);
    if (!thumbExists) break;

    console.log(`Found Background #${i}... downloading...`);
    const thumbDest = path.join(PUBLIC_HERO_DIR, heroName, 'bg-thumb', `${i}.jpg`);
    const bgDest = path.join(PUBLIC_HERO_DIR, heroName, 'bg', `${i}.jpg`);

    await downloadFile(thumbUrl, thumbDest);
    await downloadFile(bgUrl, bgDest);
    bgCount++;
  }

  if (skinsCount === 0 && bgCount === 0) {
    console.error(`❌ No assets found for hero "${heroName}" on Garena CDN!`);
    console.error(`URL checked: ${BASE_URL}${heroName}/skins-thumb/1.jpg`);
    process.exit(1);
  }

  console.log(`\n✅ Downloaded ${skinsCount} skins and ${bgCount} backgrounds for "${heroName}"!`);

  // Update src/data/heroes.js
  updateHeroesDataset(heroName, heroTag, skinsCount, bgCount);
}

function updateHeroesDataset(name, tag, skinsCount, bgCount) {
  const content = fs.readFileSync(HEROES_DATA_PATH, 'utf8');
  const match = content.match(/export const HEROES_DATA = (\[[\s\S]*?\]);/);
  if (!match) {
    throw new Error('Could not parse HEROES_DATA from src/data/heroes.js');
  }

  const heroes = JSON.parse(match[1]);
  const existingIdx = heroes.findIndex(h => h.value === name);

  const heroItem = {
    name: name,
    value: name,
    tag: tag,
    skinsCount: skinsCount,
    bgCount: bgCount
  };

  if (existingIdx !== -1) {
    heroes[existingIdx] = heroItem;
    console.log(`Updated existing hero "${name}" in src/data/heroes.js`);
  } else {
    heroes.push(heroItem);
    console.log(`Added new hero "${name}" to src/data/heroes.js`);
  }

  const updatedContent = `export const HEROES_DATA = ${JSON.stringify(heroes, null, 2)};\n`;
  fs.writeFileSync(HEROES_DATA_PATH, updatedContent, 'utf8');
  console.log(`Updated src/data/heroes.js successfully!`);
}

probeAndDownloadHero().catch((err) => {
  console.error('Error adding hero:', err);
  process.exit(1);
});
