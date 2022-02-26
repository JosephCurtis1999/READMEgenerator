'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const generateMarkdown = require('./separatejs/generateMarkdown.js');
const fileName = './output/README.md';

// a welcome message for the user using chalk 
const welcome = [
    { type: 'confirm',
      confirm: '\b',
      name: 'welcome',
      message: chalk.cyanBright('Welcome to my ReadME generator. To begin please press y or enter.'),
    },
];

// letsbegin function to alert the user that its time to start writing the readme
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
Congratulations! README Generated!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
`);

// licenses to choose from 

const licenses = [
  {
    name: "Apache License 2.0",
    value: {
      title: "Apache License 2.0",
      licenseBadge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      badgeLink: "https://opensource.org/licenses/Apache-2.0",
    },
  },
  {
    name: "GNU General Public License v3.0",
    value: {
      title: "GNU General Public License v3.0",
      licenseBadge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
      licenseLink: "https://www.gnu.org/licenses/gpl-3.0",
    },
  },
  {
    name: 'BSD 2-Clause "Simplified" License',
    value: {
      title: 'BSD 2-Clause "Simplified" License',
      licenseBadge:
        "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
      licenseUrl: "https://opensource.org/licenses/BSD-2-Clause",
    },
  },
  {
    name: 'BSD 3-Clause "New" or "Revised" License',
    value: {
      title: 'BSD 3-Clause "New" or "Revised" License',
      licenseBadge:
        "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
      licenseUrl: "(https://opensource.org/licenses/BSD-3-Clause",
    },
  },
  {
    name: "Boost Software License 1.0",
    value: {
      title: "Boost Software License 1.0",
      licenseBadge:
        "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
      licenseLink: "https://www.boost.org/LICENSE_1_0.txt",
    },
  },
  {
    name: "Eclipse Public License 1.0",
    value: {
      title: "Eclipse Public License 1.0",
      licenseBadge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
      licenseLink: "https://opensource.org/licenses/EPL-1.0",
    },
  },
  {
    name: "GNU General Public License v2.0",
    value: {
      title: "GNU General Public License v2.0",
      licenseBadge: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
      licenseLink: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    },
  },
  {
    name: "MIT License",
    value: {
      title: "MIT License",
      licenseBadge: "https://img.shields.io/badge/License-MIT-yellow.svg",
      licenseLink: "https://opensource.org/licenses/MIT",
    },
  },
  {
    name: "IBM Public License Version 1.0",
    value: {
      title: "IBM Public License Version 1.0",
      licenseBadge: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
      licenseLink: "https://opensource.org/licenses/IPL-1.0",
    },
  },
  {
    name: "None",
    value: "None",
  },
];

// Creating an array of objects for the user questions

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Would you like to add any installation notes?',
        validate: (answer) => {
            if (answer === "y") {
              return "please enter the installation instruction";
            }
            return true;
          },
        },
   
    {
        type: 'input',
        name: 'usage',
        message: `Do you want to provide the user with usage information?`,
        validate: (answer) => {
            if (answer === "y") {
              return "please enter the usage information";
            }
            return true;
          },
        },
    
    {
        type: 'input',
        name: 'contrib',
        message: `Do you want to add any notes on contributing to the repo?`,
        validate: (answer) => {
            if (answer === "y") {
              return "please enter the contribution guidelines";
            }
            return true;
          },
        },
   
    {
        type: 'input',
        name: 'test',
        message: `Do you want to add any instructions for running tests?`,
        validate: (answer) => {
            if (answer === "y") {
              return "please enter the instructions";
            }
            return true;
          },
        },
        {
          type: "list",
          name: "license",
          message: "select a license",
          choices: licenses,
        },
    
    {
        type: 'input',
        name: 'credits',
        message: `Would you like to add any credits to the repo?`,
        validate: (answer) => {
            if (answer === "y") {
              return "please write the credits";
            }
            return true;
          },
        },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
]

// write readME file function 

const writetoFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
    err? console.error(err) : console.log(success)
    );
}

// init function 
const init = async () => {
    try {
        await inquirer.prompt(welcome);
        console.log(letsbegin);
        const data = await inquirer.prompt(questions);
        writetoFile(fileName, generateMarkdown(data));
    } catch (err) {
        console.log(err);
    }
}


// init function called
init();