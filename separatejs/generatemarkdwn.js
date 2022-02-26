// function to generate markdown

const generateMarkdown = (data) => {


    return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}
   
    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [Credits](#credits)

    ## Installation Instructions
    ${data.install}
    
    ## Usage Information
    ${data.usage}
    
    ## Contribution Guidelines
    ${data.contrib}

    ## Test Instructions
    ${data.test}
    
    ## License
    ${renderLicenseBadge(data.license)}
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}


    ## Credits
    ${data.credits}

    ## Github
    ${data.GitHub}
    
  `;
  
};

const renderLicenseBadge = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `![License](${license.licenseBadge})`;
  }
};

const renderLicenseLink = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `${license.licenseLink}`;
  }
};

function renderLicenseSection(license) {
  if (license === "None") {
    return 'No license selected';
  } else {
    console.log(license);
  } return `
  This app is under the ${license.title} `;
}


module.exports = generateMarkdown;