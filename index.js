const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./src/write-file')

// constructor classes and questions for each employee type
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern');
// stores all team member objects
const employeesArr = []

const init = () => { managerQuestions() }

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: titleInput => {
            if (titleInput){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Description about your project",
        validate: descriptionInput => {
            if(descriptionInput){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Provide instruction on how to install your project",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide any usage information",
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide any contribution guidlines.",
    },
    {
        type: "input",
        name: "test",
        message: "Provide any test instruction",
    },
    {
        type : "checkbox",
        name: "license",
        message: "Choose your license.",
        choices: ["GNU", "Mozilla", "Apache", "MIT", "Boost", "Unlicense", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "Provide your github username"
    },
    {
        type: "input",
        name: "email",
        message: "Provide your professional email",
    }
];

init();
