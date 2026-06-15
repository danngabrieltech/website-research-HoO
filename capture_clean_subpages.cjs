const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const pagesToCapture = [
  // Burbeck
  {"id": "burbeck_home", "url": "https://burbeckinteriors.com/"},
  {"id": "burbeck_staging", "url": "https://burbeckinteriors.com/home-staging"},
  {"id": "burbeck_journal", "url": "https://burbeckinteriors.com/journal"},
  // LJ Interiors
  {"id": "ljinteriors_home", "url": "https://ljinteriordesign.co.uk/"},
  {"id": "ljinteriors_staging", "url": "https://ljinteriordesign.co.uk/home-staging/"},
  // BoxNine7
  {"id": "boxnine7_home", "url": "https://www.boxnine7.com/"},
  {"id": "boxnine7_staging", "url": "https://www.boxnine7.com/home-staging-company"},
  // Featherington
  {"id": "featherington_home", "url": "https://www.featheringtoninteriors.com/"},
  {"id": "featherington_areas", "url": "https://www.featheringtoninteriors.com/home-staging-areas-we-serve"},
  {"id": "featherington_blog", "url": "https://www.featheringtoninteriors.com/blog"},
  // Home Staging London
  {"id": "homestaginglondon_home", "url": "https://www.homestaginglondon.co.uk/"},
  {"id": "homestaginglondon_projects", "url": "https://www.homestaginglondon.co.uk/projects"},
  // Dressed2Sell
  {"id": "dressed2sell_home", "url": "https://dressed2sell.co.uk/"},
  // Cullum Design
  {"id": "cullumdesign_home", "url": "https://cullum-design.com/"},
  {"id": "cullumdesign_contact", "url": "https://cullum-design.com/contact/"},
  // London Property Staging
  {"id": "londonpropertystaging_home", "url": "https://www.londonpropertystaging.com/"},
  {"id": "londonpropertystaging_about", "url": "https://www.londonpropertystaging.com/about"},
  // Louisa Jane
  {"id": "louisajane_home", "url": "https://louisajaneinteriors.com/"},
  {"id": "louisajane_story", "url": "https://louisajaneinteriors.com/our-story/"},
  // The Final Touch
  {"id": "thefinaltouch_home", "url": "https://www.thefinaltouch.co.uk/"},
  {"id": "thefinaltouch_press", "url": "https://www.thefinaltouch.co.uk/in-the-press"}
];

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const outputDir = path.join(__dirname, "src", "assets", "screenshots");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function captureAll() {
  console.log(`Starting subpages capture using Chrome at ${chromePath}...`);
  
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--window-size=1280,800', '--hide-scrollbars']
  });

  for (const pageInfo of pagesToCapture) {
    const outFile = path.join(outputDir, `${pageInfo.id}.png`);
    console.log(`Capturing ${pageInfo.id} from ${pageInfo.url}...`);
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    try {
      // Go to page
      await page.goto(pageInfo.url, { waitUntil: 'load', timeout: 30000 });
      
      // Wait for cookies bot & overlays to load
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      // Inject CSS hiding scripts to remove cookie popups, backdrops, and overlay dialogs
      await page.evaluate(() => {
        // 1. Hide known selectors
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

        // 2. Hide common class/id substrings
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
          const id = (el.id || '').toLowerCase();
          const className = (typeof el.className === 'string' ? el.className : '').toLowerCase();
          
          if (
            (id.includes('cookie') && (id.includes('banner') || id.includes('consent') || id.includes('popup') || id.includes('dialog') || id.includes('notice') || id.includes('manage'))) ||
            (className.includes('cookie') && (className.includes('banner') || className.includes('consent') || className.includes('popup') || className.includes('dialog') || className.includes('notice'))) ||
            id === 'cybotcookiebotdialogbodyunderlay' || 
            className.includes('cookiebot')
          ) {
            el.style.display = 'none';
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';
            el.style.visibility = 'hidden';
          }
        });

        // 3. Enable scrolling if locked
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      });

      // Wait 500ms
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Capture screenshot
      await page.screenshot({ path: outFile });
      console.log(`  Success: Captured ${pageInfo.id}.png (${fs.statSync(outFile).size} bytes)`);
    } catch (e) {
      console.error(`  Error capturing ${pageInfo.id}: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("Subpages screenshot capture completed!");
}

captureAll();
