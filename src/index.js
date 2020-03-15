/**
 * index.js
 *
 * Entry point for the app.
 *
 * Author: Rahul Sharma
 */

// CONSTANTS
const URL = 'https://www.health.ny.gov/diseases/communicable/coronavirus/';

// Local utils
const checkCases = require('./cases');
const inq = require('./inquire');

// Driver function
const driver = async () => {
  const cases = await checkCases(URL);
  inq(cases);
};

driver();
