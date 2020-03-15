/**
 * inquire.js
 *
 * Create a prompt to select a city
 *
 * Author: RS
 */
const inquirer = require('inquirer');

const inq = cases => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Select a city (Ctrl+C to exit)',
        name: 'city',
        choices: Object.keys(cases)
      }
    ])
    .then(res => {
      console.log(`${res.city}: ${cases[res.city]}`);
      inq(cases);
    });
};

module.exports = inq;
