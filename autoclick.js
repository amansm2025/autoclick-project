const puppeteer = require('puppeteer');

// Add your links here
const LINKS_TO_OPEN = [
    'https://amantheprogrammer.blogspot.com/',
    'https://amantheprogrammer.blogspot.com/2025/05/selection-sort-code-algorithm.html',
    'https://amantheprogrammer.blogspot.com/',
    'https://amantheprogrammer.blogspot.com/',
    'https://amantheprogrammer.blogspot.com/',
    'https://amantheprogrammer.blogspot.com/',
    'https://amantheprogrammer.blogspot.com/',
    'https://amantheprogrammer.blogspot.com/',
    'https://amantheprogrammer.blogspot.com/'
];

async function autoclick() {
    console.log('Starting autoclick...');
    
    const browser = await puppeteer.launch({ headless: false });
    
    for (const link of LINKS_TO_OPEN) {
        console.log(`Opening and clicking: ${link}`);
        
        const page = await browser.newPage();
        await page.goto(link, { waitUntil: 'networkidle2' });
        
        // Click somewhere on the page (body element)
        await page.click('body');
        
        // Wait a bit before moving to next link
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        await page.close();
    }
    
    await browser.close();
    console.log('Autoclick completed successfully!');
}

autoclick().catch(console.error);