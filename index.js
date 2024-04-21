// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs/promises');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Create a function to generate content for SVG file
function generateSVG(data) {
    if (data.shape === 'circle') { userShape = new Circle() };
    if (data.shape === 'triangle') { userShape = new Triangle() };
    if (data.shape === 'square') { userShape = new Square() };
    userShape.setColor(data.fill);

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${userShape.render()}

  <text x="150" y="125" font-size="60" font-family="Arial, Helvetica, sans-serif" text-anchor="middle" fill="${data.color}">${data.text}</text>

</svg>   
    `;
}

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter up to three characters for the logo",
        name: "text",
        default: "ABC",
    },
    {
        type: 'input',
        name: 'color',
        message: 'For text color, please enter a color keyword OR hex code?',
        default: "black",
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
        default: "mediumslateblue",
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
