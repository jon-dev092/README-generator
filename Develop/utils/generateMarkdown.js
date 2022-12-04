// imported files from index.js
const indexJs = require('../index')


// returns a license badge based on user input 
function renderLicenseBadge(license) {
  var licecenseBadge = '';
  if (licecenseBadge === 'none') {
    licecenseBadge = '';
  } else if (license === 'MIT') {
    licecenseBadge = '![MIT](https://img.shields.io/badge/MIT-license-red)';
  } else if (license === 'Eclipse') {
    licecenseBadge = '![Eclipse](https://img.shields.io/badge/Eclipse-license-green)'
  } else if (license === 'GNUv3') {
    licecenseBadge = '![GNUv3](https://img.shields.io/badge/GNUv3-license-blue)'
  } return licecenseBadge;
}

// returns the license link based on user input
function renderLicenseLink(license) {
  var licenseLink = '';
  if (license === 'none') {
    licenseLink = '';
  } else if (license === 'MIT') {
    licenseLink = '[MIT Link](https://opensource.org/licenses/MIT)'
  } else if (license === 'Eclipse') {
    licenseLink = '[Eclipse Link](https://www.eclipse.org/legal/epl-2.0/)'
  } else if (license === 'GNUv3') {
    licenseLink = '[GNUv3 Link](https://www.gnu.org/licenses/gpl-3.0.en.html)'
  } return licenseLink;
}

// returns the user's chosen license 
function renderLicenseSection(license) {
  var licenseSection = '';
  if (license === 'none') {
    licenseSection = '';
  } else {
    licenseSection = `${license} License`
  } return licenseSection;
}

// .md template used to generate the .md file with imported data based on the user's choices. 
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Questions](#questions)
  

  ## Description: 
  -  ${data.description}


  ## Installation:
  These programs or steps must be installed before running this project. 
  - ${data.installation}


  ## Usage
  Using this program goes as follows.
  - ${data.usage}


  ## License 
  - ${renderLicenseBadge(data.license)}
  - ${renderLicenseSection(data.license)} 
  - ${renderLicenseLink(data.license)}


  ## Contributors
  - ${data.contributors}

  
  ## Questions
  Provided are the links associated with this project and a contact email.
  - Github: [Github Account](https://github.com/${data.github})
  - Github Repo: [Repo](https://github.com/${data.github}/${data.link})
  - Email: ${data.email}
`;
}

// exports data 
module.exports = generateMarkdown;
