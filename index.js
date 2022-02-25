'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk')
inquirer.registerPrompt('recursive', require('./separatejs/generatemarkdwn.js'));
const generateMarkdown = require('./separatejs/recursiveprompts.js')