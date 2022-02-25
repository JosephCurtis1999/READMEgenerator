'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk')
inquirer.registerPrompt('recursive', require('./separatejs/generatemarkdwn.js'));
const generateMarkdown = require('./separatejs/recursiveprompts.js')

const welcome = [
    { type: 'confirm',
      confirm: '\b',
      name: 'welcome',
      message: chalk.cyanBright('Welcome to my ReadME generator. To begin please press y or enter.'),
    },
];