const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const pagesToCapture = [
  // 1. Burbeck (6 pages)
  {"id": "burbeck_home", "url": "https://burbeckinteriors.com/"},
  {"id": "burbeck_staging", "url": "https://burbeckinteriors.com/home-staging"},
  {"id": "burbeck_show_home", "url": "https://burbeckinteriors.com/show-home-styling"},
  {"id": "burbeck_portfolio", "url": "https://burbeckinteriors.com/portfolio"},
  {"id": "burbeck_journal", "url": "https://burbeckinteriors.com/journal"},
  {"id": "burbeck_contact", "url": "https://burbeckinteriors.com/contact"},

  // 2. LJ Interiors (6 pages)
  {"id": "ljinteriors_home", "url": "https://ljinteriordesign.co.uk/"},
  {"id": "ljinteriors_staging", "url": "https://ljinteriordesign.co.uk/home-staging/"},
  {"id": "ljinteriors_furniture", "url": "https://ljinteriordesign.co.uk/furniture-packages/"},
  {"id": "ljinteriors_portfolio", "url": "https://ljinteriordesign.co.uk/portfolio-luxury-property-styling/"},
  {"id": "ljinteriors_journal", "url": "https://ljinteriordesign.co.uk/journal-interior-design/"},
  {"id": "ljinteriors_contact", "url": "https://ljinteriordesign.co.uk/contact-us/"},

  // 3. BoxNine7 (5 pages)
  {"id": "boxnine7_home", "url": "https://www.boxnine7.com/"},
  {"id": "boxnine7_staging", "url": "https://www.boxnine7.com/home-staging-company"},
  {"id": "boxnine7_furniture", "url": "https://www.boxnine7.com/curated-furniture-packages-service"},
  {"id": "boxnine7_bcorp", "url": "https://www.boxnine7.com/b-corp-force-for-good"},
  {"id": "boxnine7_contact", "url": "https://www.boxnine7.com/get-in-touch"},

  // 4. Featherington (6 pages)
  {"id": "featherington_home", "url": "https://www.featheringtoninteriors.com/"},
  {"id": "featherington_areas", "url": "https://www.featheringtoninteriors.com/home-staging-areas-we-serve"},
  {"id": "featherington_blog", "url": "https://www.featheringtoninteriors.com/blog"},
  {"id": "featherington_pricing", "url": "https://www.featheringtoninteriors.com/property-staging-pricing-packages"},
  {"id": "featherington_calculator", "url": "https://www.featheringtoninteriors.com/free-uk-home-staging-calculator"},
  {"id": "featherington_quote", "url": "https://www.featheringtoninteriors.com/request-a-home-staging-quote"},

  // 5. Home Staging London (5 pages)
  {"id": "homestaginglondon_home", "url": "https://www.homestaginglondon.co.uk/"},
  {"id": "homestaginglondon_projects", "url": "https://www.homestaginglondon.co.uk/projects"},
  {"id": "homestaginglondon_services", "url": "https://www.homestaginglondon.co.uk/services-1"},
  {"id": "homestaginglondon_refurbishment", "url": "https://www.homestaginglondon.co.uk/refurbishment-maintenance"},
  {"id": "homestaginglondon_contact", "url": "https://www.homestaginglondon.co.uk/contact"},

  // 6. Dressed2Sell (5 pages)
  {"id": "dressed2sell_home", "url": "https://dressed2sell.co.uk/"},
  {"id": "dressed2sell_about", "url": "https://dressed2sell.co.uk/about"},
  {"id": "dressed2sell_gallery", "url": "https://dressed2sell.co.uk/gallery"},
  {"id": "dressed2sell_testimonials", "url": "https://dressed2sell.co.uk/testimonials"},
  {"id": "dressed2sell_contact", "url": "https://dressed2sell.co.uk/contact"},

  // 7. Cullum Design (5 pages)
  {"id": "cullumdesign_home", "url": "https://cullum-design.com/"},
  {"id": "cullumdesign_staging", "url": "https://cullum-design.com/home-staging-london/"},
  {"id": "cullumdesign_interior", "url": "https://cullum-design.com/interior-design-services/"},
  {"id": "cullumdesign_rental", "url": "https://cullum-design.com/furniture-rental-for-tenants/"},
  {"id": "cullumdesign_contact", "url": "https://cullum-design.com/contact/"},

  // 8. London Property Staging (6 pages)
  {"id": "londonpropertystaging_home", "url": "https://www.londonpropertystaging.com/"},
  {"id": "londonpropertystaging_about", "url": "https://www.londonpropertystaging.com/about"},
  {"id": "londonpropertystaging_services", "url": "https://www.londonpropertystaging.com/services"},
  {"id": "londonpropertystaging_projects", "url": "https://www.londonpropertystaging.com/projects"},
  {"id": "londonpropertystaging_pricing", "url": "https://www.londonpropertystaging.com/pricing"},
  {"id": "londonpropertystaging_contact", "url": "https://www.londonpropertystaging.com/contact"},

  // 9. Louisa Jane (5 pages)
  {"id": "louisajane_home", "url": "https://louisajaneinteriors.com/"},
  {"id": "louisajane_story", "url": "https://louisajaneinteriors.com/our-story/"},
  {"id": "louisajane_projects", "url": "https://louisajaneinteriors.com/projects/"},
  {"id": "louisajane_staging", "url": "https://louisajaneinteriors.com/home-staging/"},
  {"id": "louisajane_contact", "url": "https://louisajaneinteriors.com/contact/"},

  // 10. The Final Touch (6 pages)
  {"id": "thefinaltouch_home", "url": "https://www.thefinaltouch.co.uk/"},
  {"id": "thefinaltouch_press", "url": "https://www.thefinaltouch.co.uk/in-the-press"},
  {"id": "thefinaltouch_services", "url": "https://www.thefinaltouch.co.uk/selling-property-services"},
  {"id": "thefinaltouch_about", "url": "https://www.thefinaltouch.co.uk/the-final-touch"},
  {"id": "thefinaltouch_before_after", "url": "https://www.thefinaltouch.co.uk/before-and-after-property-update"},
  {"id": "thefinaltouch_contact", "url": "https://www.thefinaltouch.co.uk/contact-homestaging"}
];

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const outputDir = path.join(__dirname, "src", "assets", "screenshots");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function captureAll() {
  console.log(`Starting complete subpages capture using Chrome at ${chromePath}...`);
  
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--window-size=1280,800', '--hide-scrollbars']
  });

  for (let i = 0; i < pagesToCapture.length; i++) {
    const pageInfo = pagesToCapture[i];
    const outFile = path.join(outputDir, `${pageInfo.id}.png`);
    console.log(`[${i + 1}/${pagesToCapture.length}] Capturing ${pageInfo.id} from ${pageInfo.url}...`);
    
    // Check if the page is a PDF (we can't easily capture it as PNG, but none in our list are PDFs except boxnine7 PDF list which we skipped)
    if (pageInfo.url.endsWith('.pdf')) {
      console.log(`  Skipping PDF url: ${pageInfo.url}`);
      continue;
    }

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    try {
      // Go to page
      await page.goto(pageInfo.url, { waitUntil: 'load', timeout: 30000 });
      
      // Wait for cookies bot & overlays to load
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Inject CSS hiding scripts to remove cookie popups, backdrops, and overlay dialogs
      await page.evaluate(() => {
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
          '.optanon-alert-box-wrapper',
          '#cookies-mandate'
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

        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      });

      await new Promise(resolve => setTimeout(resolve, 500));
      
      await page.screenshot({ path: outFile });
      console.log(`  Success: Captured ${pageInfo.id}.png (${fs.statSync(outFile).size} bytes)`);
    } catch (e) {
      console.error(`  Error capturing ${pageInfo.id}: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("All screenshots captured!");
}

captureAll();
