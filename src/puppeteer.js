/**
 * puppeteer.js
 *
 * Sets up a headless Chrome browser and opens the given URL.
 *
 * Author: Rahul Sharma
 */

const puppeteer = require('puppeteer');

const configureBrowser = async url => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto(url);
  } catch (error) {
    console.error(error);
  } finally {
    return page;
  }
};

module.exports = configureBrowser;
