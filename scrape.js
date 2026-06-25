import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.helllo.ai/', { waitUntil: 'networkidle0' });
  
  // Extract the HTML of the #root element
  const rootHtml = await page.evaluate(() => {
    const rootElement = document.getElementById('root');
    return rootElement ? rootElement.innerHTML : '';
  });

  fs.writeFileSync('helllo_rendered.html', rootHtml);
  console.log('DOM saved to helllo_rendered.html');
  await browser.close();
})();
