import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'fs';

const demos = JSON.parse(readFileSync('public/demos.json', 'utf8'));
mkdirSync('/tmp/screenshots', { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 390, height: 520 },
  deviceScaleFactor: 2,
  isMobile: true,
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
});
const page = await context.newPage();

async function tryScreenshot(demo, attempt = 1) {
  const url = `https://alainprocs.github.io/ui-demos/${demo.slug}/`;
  const dest = `/tmp/screenshots/${demo.slug}.jpg`;

  try {
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });

    if (!response || response.status() >= 400) {
      console.error(`✗ ${demo.slug}: HTTP ${response?.status()} (attempt ${attempt})`);
      return false;
    }

    // Verify this isn't a 404 page masquerading as 200
    const title = await page.title();
    if (title.toLowerCase().includes('404') || title.toLowerCase().includes('not found')) {
      console.error(`✗ ${demo.slug}: page title indicates 404 — "${title}" (attempt ${attempt})`);
      return false;
    }

    // Let animations settle for 3 seconds as requested
    await page.waitForTimeout(3000);

    await page.screenshot({
      path: dest,
      type: 'jpeg',
      quality: 92,
      clip: { x: 0, y: 0, width: 390, height: 520 },
    });

    console.log(`✓ ${demo.slug} (attempt ${attempt})`);
    return true;
  } catch (e) {
    console.error(`✗ ${demo.slug}: ${e.message} (attempt ${attempt})`);
    return false;
  }
}

// Retry each demo up to 4 times with increasing delays
for (const demo of demos) {
  let success = false;
  const delays = [0, 30000, 60000, 90000]; // 0s, 30s, 60s, 90s between attempts

  for (let attempt = 1; attempt <= delays.length; attempt++) {
    if (delays[attempt - 1] > 0) {
      console.log(`  waiting ${delays[attempt - 1] / 1000}s before retry…`);
      await new Promise(r => setTimeout(r, delays[attempt - 1]));
    }
    success = await tryScreenshot(demo, attempt);
    if (success) break;
  }

  if (!success) {
    console.error(`✗ ${demo.slug}: all attempts failed — skipping (existing screenshot preserved)`);
  }
}

await browser.close();
