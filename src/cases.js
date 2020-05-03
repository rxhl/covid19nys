#!/usr/bin/env node
/**
 * cases.js
 *
 * Author: Rahul Sharma
 */

const fetch = require('node-fetch');

class Cases {
  static caseCount = async () => {
    // Get current local date (YYYY-MM-DD)
    const currDate = new Date();
    const dateStr = `${currDate.getFullYear()}-${currDate.getMonth() + 1}-${
      currDate.getDate() - 1
    }`;

    // Get current url
    const currUrl = `https://health.data.ny.gov/resource/xdss-u53e.json?test_date=${dateStr}`;

    try {
      const data = await fetch(currUrl);
      const res = await data.json();

      // Create a { county: case } map
      const countyMap = res.map((elem) => ({
        [elem['county']]: +elem['cumulative_number_of_positives'],
      }));

      // Reduce to a single object
      return Object.assign({}, ...countyMap);
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = Cases;
