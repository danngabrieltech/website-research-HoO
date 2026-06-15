const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

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
const outputDir = path.join(__dirname, "src", "assets", "screenshots");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function captureAll() {
  console.log(`Starting clean screenshots capture using Chrome at ${chromePath}...`);
  
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--window-size=1280,800', '--hide-scrollbars']
  });

  for (const comp of competitors) {
    const outFile = path.join(outputDir, `${comp.id}.png`);
    console.log(`Capturing ${comp.id} from ${comp.url}...`);
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    try {
      // Go to page and wait for load
      await page.goto(comp.url, { waitUntil: 'load', timeout: 30000 });
      
      // Wait another 3 seconds for lazy scripts and cookie banners to pop up
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      // Inject script to hide cookie banners and overlays
      await page.evaluate(() => {
        // 1. Hide known cookie banner selectors
        const bannerSelectors = [
          '#CybotCookiebotDialog',
          '#CybotCookiebotDialogBodyUnderlay',
          '.sqs-cookie-banner-v2',
          '#cookie-law-info-bar',
          '#onetrust-banner-sdk',
          '.cookie-notice',
          '.cookie-consent',
          '#cookie-consent-banner',
          '.cc-banner',
          '.cc-window',
          '.cc-revoke',
          '#hs-eu-cookie-confirmation',
          '#usercentrics-root',
          '#cookiebanner',
          '.cookie-policy',
          '#privacy-banner',
          '.optanon-alert-box-wrapper'
        ];
        
        bannerSelectors.forEach(sel => {
          try {
            const elements = document.querySelectorAll(sel);
            elements.forEach(el => {
              el.style.display = 'none';
              el.style.opacity = '0';
              el.style.pointerEvents = 'none';
              el.style.visibility = 'hidden';
            });
          } catch (e) {}
        });

        // 2. Hide anything else that looks like a cookie/consent/privacy banner by ID/Class search
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
          const id = (el.id || '').toLowerCase();
          const className = (typeof el.className === 'string' ? el.className : '').toLowerCase();
          
          if (
            (id.includes('cookie') && (id.includes('banner') || id.includes('consent') || id.includes('popup') || id.includes('dialog') || id.includes('notice') || id.includes('manage'))) ||
            (className.includes('cookie') && (className.includes('banner') || className.includes('consent') || className.includes('popup') || className.includes('dialog') || className.includes('notice')))
          ) {
            el.style.display = 'none';
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';
            el.style.visibility = 'hidden';
          }
          
          // Cookiebot overlay backdrop removal
          if (id === 'cybotcookiebotdialogbodyunderlay' || className.includes('cookiebot')) {
            el.style.display = 'none';
            el.style.opacity = '0';
          }
        });

        // 3. Remove blocking overflow hidden on html/body if banner locked it
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      });

      // Wait 500ms for animations to clear
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Take screenshot
      await page.screenshot({ path: outFile });
      console.log(`  Success: Captured ${comp.id}.png (${fs.statSync(outFile).size} bytes)`);
    } catch (e) {
      console.error(`  Error capturing ${comp.id}: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("Clean screenshot capture completed!");
}

captureAll();
