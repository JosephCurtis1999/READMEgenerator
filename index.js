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

const letsbegin = chalk.greenBright(`\n
Let's Generate a README!!!
//~~~~~~~~~~~~~~~~~~~~~~//
     MD syntax tips
-------------------------
Bold    **bold text**
Italics *italicized text*       
Links   [title](https://www.example.com)
Image   ![alt text](image.jpg)
\n`);

const success = chalk.greenBright(`
Congratulations! README Generated! It's in the Output folder
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
`);