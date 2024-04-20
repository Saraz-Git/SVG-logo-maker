// Runs the application using imports from lib/
// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs/promises');
const { generateSVG } = require('./lib/shapes');

// Create an array of questions for user input
const questions = [
    {
        type: "list",
        message: "Choose up to three letters",
        name: "letter",
        choices: ["A", "B", "C"],
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        default: "Project Title",
    },
];

//Create a function to initialize app
const init = async () => {
    try {
        const answer = await inquirer.prompt(questions);

        const SVGFile = generateSVG(answer);
        await fs.writeFile("./examples/result.svg", SVGFile);
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
