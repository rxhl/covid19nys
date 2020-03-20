/**
 * cases.js
 *
 * Scrapes the New York State Dept of Health web page
 * for the most recent COVID-19 count.
 *
 * Author: Rahul Sharma
 */
const $ = require('cheerio');

// Local utils
const configureBrowser = require('./puppeteer');

const checkCases = async url => {
  let counts = {};
  try {
    // Load page
    const page = await configureBrowser(url);
    await page.reload();
    html = await page.evaluate(() => document.body.innerHTML);

    // Get DOM elements
    let data = [];
    $('tr td', html).each(function() {
      data.push(
        $(this)
          .text()
          .replace(/[,]/gi, '')
      );
    });

    // Format results
    for (let i = 0; i + 1 < data.length; i += 2) {
      counts[data[i]] = +data[i + 1];
    }
  } catch (err) {
    console.error(err);
  } finally {
    return counts;
  }
};

module.exports = checkCases;
