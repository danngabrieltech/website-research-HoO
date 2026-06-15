const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const competitors = [
  {"id": "burbeck", "url": "https://burbeckinteriors.com/"},
  {"id": "ljinteriors", "url": "https://ljinteriordesign.co.uk/"},
  {"id": "boxnine7", "url": "https://www.boxnine7.com/"},
  {"id": "featherington", "url": "https://www.featheringtoninteriors.com/"},
  {"id": "homestaginglondon", "url": "https://www.homestaginglondon.co.uk/"},
  {"id": "dressed2sell", "url": "https://dressed2sell.co.uk/"},
  {"id": "cullumdesign", "url": "https://cullum-design.com/"},
  {"id": "londonpropertystaging", "url": "https://www.londonpropertystaging.com/"},
  {"id": "louisajane", "url": "https://louisajaneinteriors.com/"},
  {"id": "thefinaltouch", "url": "https://www.thefinaltouch.co.uk/"}
];

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function main() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true
  });

  const results = {};

  for (const comp of competitors) {
    console.log(`Crawling links for ${comp.id} from ${comp.url}...`);
    const page = await browser.newPage();
    try {
      await page.goto(comp.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      
      const links = await page.evaluate((baseUrl) => {
        const anchors = Array.from(document.querySelectorAll('a'));
        const hrefs = anchors.map(a => {
          try {
            const resolved = new URL(a.getAttribute('href'), baseUrl);
            return resolved.href;
          } catch(e) {
            return null;
          }
        }).filter(h => h !== null);
        
        return Array.from(new Set(hrefs));
      }, comp.url);
      
      // Filter to keep only links on the same domain, and clean them up
      const urlObj = new URL(comp.url);
      const sameDomainLinks = links.filter(link => {
        try {
          const linkUrl = new URL(link);
          return linkUrl.hostname.replace('www.', '') === urlObj.hostname.replace('www.', '');
        } catch(e) {
          return false;
        }
      });
      
      results[comp.id] = sameDomainLinks;
      console.log(`  Found ${sameDomainLinks.length} internal links.`);
    } catch (e) {
      console.error(`  Error: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  
  fs.writeFileSync(
    path.join(__dirname, 'crawled_links.json'),
    JSON.stringify(results, null, 2)
  );
  console.log("Completed! Wrote results to crawled_links.json");
}

main();
