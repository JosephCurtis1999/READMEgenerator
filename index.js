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

// Creating an array of objects for the user questions

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project',
    },
    {
        type: 'confirm',
        name: 'install',
        message: 'Would you like to add any installation notes?',
    },
    {
        type: 'input',
        name: 'installNotes',
        message: `Please add your installation notes`,
        when: function (answers) {
            return answers.install;
        }
    },
    {
        type: 'confirm',
        name: 'usage',
        message: `Do you want to provide the user with usage information?`,
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: `Please add your usage info`,
        when: function (answers) {
            return answers.usage;
        }
    },
    {
        type: 'confirm',
        name: 'contrib',
        message: `Do you want to add any notes on contributing to the repo?`,
    },
    {
        type: 'input',
        name: 'contribNotes',
        message: `Please add your what you want the user to know about contributing to the repo`,
        when: function (answers) {
            return answers.contrib;
        }
    },
    {
        type: 'confirm',
        name: 'test',
        message: `Do you want to add any instructions for running tests?`,
    },
    {
        type: 'input',
        name: 'testNotes',
        message: `Please add your instructions for running tests`,
        when: function (answers) {
            return answers.test;
        }
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which open source license would you like to use? ',
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],
    },
    {
        type: 'confirm',
        name: 'credits',
        message: `Would you like to add any credits to the repo?`,
    },
    {
        type: 'input',
        name: 'creditData',
        message: `Please add your credits`,
        when: function (answers) {
            return answers.credits;
        }
    },
    {
        type: 'recursive',
        prefix: '\b',
        name: 'moreCredits',
        message: `Would you like to add more credits to the repo?`,
        when: function (answers) {
            return answers.creditData;
        },
        prompts: [
            {
                type: 'input',
                name: 'moreCreditData',
                message: 'Please add your credits',
            },
        ]
    },
]