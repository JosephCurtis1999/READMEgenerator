// function to generate markdown

const generateMarkdown = (data) => {

    switch (data.license) {
        case 'Apache 2.0':
          licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
          break;
        case 'BSD 2-Clause':
          licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
          break;
        case 'BSD 3-Clause':
          licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
          break;
        case 'GNU AGPLv3.0':
          licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
          break;
        case 'GNU GPLv2.0':
          licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
          break;
        case 'GNU GPLv3.0':
          licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
          break;
        case 'MIT':
          licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
          break;
        case 'Mozilla Public 2.0':
          licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
          break;
        default:
          break;
      }


    return `
    # ${data.title}
   
    ## Description
    ${data.description}

    ## Installation Instructions
    ${data.install}
    
    ## Usage Information
    ${data.usage}
    
    ## Contribution Guidelines
    ${data.contrib}

    ## Test Instructions
    ${data.test}
    
    ## License Information
    ${data.license}

    ## Credits
    ${data.credits}

    ## Github
    ${data.GitHub}
    
  `;
  


}

module.exports = generateMarkdown;