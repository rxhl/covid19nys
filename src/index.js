#!/usr/bin/env node
/**
 * index.js
 *
 * Author: Rahul Sharma
 */

// Local utils
const cases = require('./cases');
const inq = require('./inquire');

// Driver function
const driver = async () => {
  const caseMap = await cases.caseCount();
  inq(caseMap);
};

driver();
