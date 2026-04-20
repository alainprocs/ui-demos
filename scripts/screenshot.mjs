import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'fs';

const demos = JSON.parse(readFileSync('public/demos.json', 'utf8'));
mkdirSync('/tmp/screenshots', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 800 });

for (const demo of demos) {
  const url = `https://alainprocs.github.io/ui-demos/${demo.slug}/`;
  const dest = `/tmp/screenshots/${demo.slug}.jpg`;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 40000 });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: dest, type: 'jpeg', quality: 92 });
    console.log(`✓ ${demo.slug}`);
  } catch (e) {
    console.error(`✗ ${demo.slug}: ${e.message}`);
  }
}

await browser.close();
