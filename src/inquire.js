#!/usr/bin/env node
/**
 * inquire.js
 *
 * Author: Rahul Sharma
 */
const inquirer = require('inquirer');

const inq = (cases) => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Select a county (Ctrl + C to exit)',
        name: 'county',
        choices: Object.keys(cases),
      },
    ])
    .then((res) => {
      console.log(`
        +=============================+
         Total cases as of ${new Date().toLocaleDateString()}             
                                         
         ${res.county}: ${cases[res.county]}                          
        +=============================+
      `);
      inq(cases);
    });
};

module.exports = inq;
