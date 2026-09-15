const fs = require('fs');
const path = require('path');
const https = require('https');

const APP_DATA_PATH = path.join(__dirname, 'src', 'data', 'heroes.js');
const IMAGES_DIR = path.join(__dirname, 'public', 'images');
const CONCURRENCY_LIMIT = 15;
const MAX_RETRIES = 3;

// Extract wp_data from src/data/heroes.js
function getWpData() {
    const content = fs.readFileSync(APP_DATA_PATH, 'utf8');
    const match = content.match(/export const HEROES_DATA = (\[[\s\S]*?\]);/);
    if (!match) {
        throw new Error('Could not parse HEROES_DATA from src/data/heroes.js');
    }
    return JSON.parse(match[1]);
}

// Generate full queue of assets to download
function buildDownloadQueue(wpData) {
    const queue = [];

    // 1. tw-title assets (14 items)
    for (let i = 1; i <= 14; i++) {
        queue.push({
            url: `${BASE_URL}tw-title-thumb/${i}.jpg`,
            localPath: path.join(IMAGES_DIR, 'tw-title-thumb', `${i}.jpg`)
        });
        queue.push({
            url: `${BASE_URL}tw-title/${i}.png`,
            localPath: path.join(IMAGES_DIR, 'tw-title', `${i}.png`)
        });
    }

    // 2. Hero assets
    for (const hero of wpData) {
        const heroVal = hero.value;

        // Backgrounds
        for (let i = 1; i <= hero.bgCount; i++) {
            queue.push({
                url: `${BASE_URL}hero/${heroVal}/bg-thumb/${i}.jpg`,
                localPath: path.join(IMAGES_DIR, 'hero', heroVal, 'bg-thumb', `${i}.jpg`)
            });
            queue.push({
                url: `${BASE_URL}hero/${heroVal}/bg/${i}.jpg`,
                localPath: path.join(IMAGES_DIR, 'hero', heroVal, 'bg', `${i}.jpg`)
            });
        }

        // Skins
        for (let i = 1; i <= hero.skinsCount; i++) {
            queue.push({
                url: `${BASE_URL}hero/${heroVal}/skins-thumb/${i}.jpg`,
                localPath: path.join(IMAGES_DIR, 'hero', heroVal, 'skins-thumb', `${i}.jpg`)
            });
            queue.push({
                url: `${BASE_URL}hero/${heroVal}/skins/${i}.png`,
                localPath: path.join(IMAGES_DIR, 'hero', heroVal, 'skins', `${i}.png`)
            });
        }
    }

    return queue;
}

// Helper to download a single file with retries
function downloadFile(url, dest, attempt = 1) {
    return new Promise((resolve, reject) => {
        // Ensure folder exists
        fs.mkdirSync(path.dirname(dest), { recursive: true });

        // Skip if already exists and has data
        if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
            return resolve({ skipped: true });
        }

        const request = https.get(url, (response) => {
            if (response.statusCode !== 200) {
                response.resume(); // Consume response data to free up memory
                if (attempt < MAX_RETRIES) {
                    setTimeout(() => {
                        downloadFile(url, dest, attempt + 1).then(resolve).catch(reject);
                    }, 1000 * attempt);
                } else {
                    reject(new Error(`HTTP ${response.statusCode} for ${url}`));
                }
                return;
            }

            const fileStream = fs.createWriteStream(dest);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close(() => resolve({ downloaded: true }));
            });

            fileStream.on('error', (err) => {
                fs.unlink(dest, () => {}); // Delete temporary file on error
                if (attempt < MAX_RETRIES) {
                    setTimeout(() => {
                        downloadFile(url, dest, attempt + 1).then(resolve).catch(reject);
                    }, 1000 * attempt);
                } else {
                    reject(err);
                }
            });
        });

        request.on('error', (err) => {
            if (attempt < MAX_RETRIES) {
                setTimeout(() => {
                    downloadFile(url, dest, attempt + 1).then(resolve).catch(reject);
                }, 1000 * attempt);
            } else {
                reject(err);
            }
        });
    });
}

// Concurrency pool executor
async function processQueue(queue) {
    const total = queue.length;
    let completed = 0;
    let downloadedCount = 0;
    let skippedCount = 0;
    let failedCount = 0;

    console.log(`Starting download of ${total} assets with concurrency level ${CONCURRENCY_LIMIT}...`);

    let index = 0;
    async function worker() {
        while (index < queue.length) {
            const currentIndex = index++;
            const item = queue[currentIndex];
            try {
                const res = await downloadFile(item.url, item.localPath);
                completed++;
                if (res.skipped) {
                    skippedCount++;
                } else {
                    downloadedCount++;
                }
            } catch (err) {
                completed++;
                failedCount++;
                console.error(`\n[FAIL] (${completed}/${total}) ${item.url}: ${err.message}`);
            }

            if (completed % 50 === 0 || completed === total) {
                const pct = Math.floor((completed / total) * 100);
                process.stdout.write(`\rProgress: ${completed}/${total} (${pct}%) | Downloaded: ${downloadedCount} | Skipped: ${skippedCount} | Failed: ${failedCount}`);
            }
        }
    }

    const workers = Array.from({ length: CONCURRENCY_LIMIT }, () => worker());
    await Promise.all(workers);
    console.log(`\nFinished asset download process!`);
    console.log(`Summary: Total=${total}, Downloaded=${downloadedCount}, Skipped=${skippedCount}, Failed=${failedCount}`);
}

async function main() {
    try {
        const wpData = getWpData();
        const queue = buildDownloadQueue(wpData);
        await processQueue(queue);
    } catch (err) {
        console.error('Download process error:', err);
        process.exit(1);
    }
}

main();
