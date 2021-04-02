// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log("hi");
var inquirer = require("inquirer");
inquirer
    .prompt([
        { type: "input", name: "title", message: "what is yoyr title" },
        /* Pass your questions in here */
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });