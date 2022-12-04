// imported files
const generateMdFile = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// Displays array of objects used as questions for inquirer
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

// Writes a README.md file and logs an error if there is one otherwise logs its success. 
function writeToFile(data) {
    fs.writeFile('generatedMarkdownPage.md', data, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Your .md file has been written!')
        }
    })
}

// initializes the application using the data recived from inquirer and generateMarkdown.js
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    writeToFile(generateMdFile(data));    
    })
}

// Function call to initialize app
init();


// exports data used in generateMarkdown.js
module.exports = questions;
