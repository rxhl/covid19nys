#!/usr/bin/env node
/**
 * index.js
 *
 * Entry point for the app.
 *
 * Author: Rahul Sharma
 */

// CONSTANTS
const URL = 'https://on.ny.gov/33yu0cR';

// Local utils
const checkCases = require('./cases');
const inq = require('./inquire');

// Driver function
const driver = async () => {
  const cases = await checkCases(URL);
  inq(cases);
};

driver();
