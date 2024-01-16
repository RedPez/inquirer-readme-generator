const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//Array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project name?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project about?",
  },
  {
    type: "input",
    name: "screenshot",
    message:
      "Input the relative path of the image you want to use as the screenshot.",
  },
  {
    type: "input",
    name: "link",
    message: "Input the URL for your deployed application?",
  },
  {
    type: "input",
    name: "installation",
    message: "Are there any guidelines for installation?",
  },
  {
    type: "input",
    name: "usage",
    message: "State any languages or technologies used in this project.",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license.",
    choices: [
      "APACHE2.0",
      "BSD2",
      "BSD3",
      "Boost1.0",
      "GNU GPLv3",
      "MIT",
      "MPL2.0",
      "none",
    ],
    default: "none",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "List any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide a walkthrough of required tests if applicable.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional Sample12.md File...");
    writeToFile("./Sample12.md", generateMarkdown({ ...responses }));
  });
}
init();
