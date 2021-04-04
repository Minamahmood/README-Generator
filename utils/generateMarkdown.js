// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// "![ISC License](https://img.shields.io/badge/License-Apache-Green)";
// party_blob
// partykeanu
// keanu-thanks

// "![ISC License](https://img.shields.io/badge/License-ISC-Green)";

// "![ISC License](https://img.shields.io/badge/License-GNUv3-Green)";

// "![MIT License](https://img.shields.io/badge/License-MIT-Green)";
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let output = `# TITLE: ${data.title}\n`;
    output += `## DESCRIPTION:${data.description}\n\n\n`;
    output += `## TABLE OF CONTENTS: 
* [github](#GITHUB)
* [email](#EMAIL)
* [LICENSE](#LICENSE)\n\n\n`;
    output += `## GITHUB: ${data.github}\n\n\n`;
    output += `## EMAIL: ${data.email}\n\n\n`;
    output += `## LICENSE: ${data.license}\n\n\n`;
    output += ` ![${data.license} License](https://img.shields.io/badge/License-${data.license}-Green)\n\n\n`;
    output += `## INSTALLATION: ${data.installation}\n\n\n`;
    output += `## TEST: ${data.test}\n\n\n`;
    output += `## USAGE: ${data.usage}\n\n\n`;

    output += `## CONTRIBUTING: ${data.contributing}`;
    return output;
}

module.exports = generateMarkdown;