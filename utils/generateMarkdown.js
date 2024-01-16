// function to returns a license badge
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}.svg)`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
* Application URL
${data.link}
* Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Installation](#installation)
* [How to Use This Application](#HowtoUseThisApplication)
* [Application Licenses](#licence)
* [Contributors](#contributors)
* [Testing](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## How to Use This Application:
${data.usage}
## License
The liscese used in this project is: ${data.license}
## Contributors
${data.contributors}
## Tests
${data.test}
## Questions
Please send your questions [here](mailto:${
    data.email
  }?subject=[GitHub]%20Dev%20Connect) or visit [github/${
    data.creator
  }](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
