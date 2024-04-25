// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs/promises');
const shapes = require('./lib/shapes');

// Create a function to generate content for SVG file
function generateSVG(data) {
    const { text, color, shape, fill } = data;
    if (color === fill || text.length === 0 || text.length > 3 || (/\s/).test(text)) { throw new Error('wrong text format'); };
    userShape = new shapes[shape[0].toUpperCase() + shape.slice(1)](fill, text, color);
    userShape.setColor(fill);
    return userShape.renderSVG();
}

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter up to three characters for the logo",
        name: "text",
        default: "SVG",
    },
    {
        type: 'input',
        name: 'color',
        message: 'For text color, please enter a color keyword OR hex code?',
        default: "#A98067",
    },
    {
        type: "list",
        message: "Choose the shape of the logo",
        name: "shape",
        choices: ["circle", "triangle", "square"],
    },
    {
        type: 'input',
        name: 'fill',
        message: 'For the color of the shape, please enter a color keyword OR hex code?',
        default: "#E8D9EC",
    },
];

//Create a function to initialize app ??How to log message"Generated logo.svg"??
const init = async () => {
    try {
        const answer = await inquirer.prompt(questions);
        const SVGFile = generateSVG(answer);
        await fs.writeFile("./examples/logo.svg", SVGFile);
        console.log('Generated logo.svg');
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
