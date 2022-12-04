// TODO: Include packages needed for this application
const generateMarkdownFile = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Type the title of your project.',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Write a description of your project.',
    },
    {
        name: 'installation',
        input: 'input',
        message: 'Type the required steps or programs needed for the installation of your project.',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please enter the usage for this application.',
    },
    {
        name: 'license',
        type: 'list',
        message: 'What license does your project use?',
        choices: ['none', 'MIT', 'Eclipse', 'GNUv3'],
    },
    {
        name: 'contributors',
        input: 'input',
        message: 'Where there any contributors? If so please mention them here.',
    },
    {
        name: 'github',
        type: 'input',
        message: "What is the github account associated with this project?",
    },
    {
        name: 'link',
        type: 'input',
        message: 'What is the github repo associated with this project?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your contact email here.',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('generatedMarkdownPage.MD', data, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Your .MD file has been written!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
    writeToFile(generateMarkdownFile(data));    
    })
}

// Function call to initialize app
init();

module.exports = questions;
