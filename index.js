const inquirer = require('inquirer')
// const template = require('./src/page-template')
// const writeFile = require('./src/write-file')

const init = () => { askQuestions() }

const fileLocation = "./print"

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        // validate: titleInput => {
        //     if (titleInput){
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    },
    {
        type: "input",
        name: "description",
        message: "Please give a description of your project",
        // validate: descriptionInput => {
        //     if(descriptionInput){
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instruction on how to install your project",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide information of how to use your project",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide any contribution guidelines.",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide instructions on how to test your project",
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
        message: "What is your github username"
    },
    {
        type: "input",
        name: "email",
        message: "Provide your professional email",
    }
];

const licenses = [
    {
        name: "Mozilla",
        badge: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    },
    {
        name: "Apache",
        badge: `[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`
    },
    {
        name: "MIT",
        badge: `[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)`
    },
    {
        name: "Boost",
        badge: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    },
    {
        name: "None",
        badge: ""
    },
]

const dummyAnswers = {
    title: 'a',
    description: 's',
    installation: 'd',
    usage: 'f',
    contribution: 'a',
    test: 's',
    license: [],
    github: 'fd',
    email: 'e'
  }

function askQuestions() {

    // inquirer.prompt(questions)
    // .then(response => { 
        const readMe = createTemplate(dummyAnswers)
    //     createMDFile(fileLocation, readMe)
    // })
    console.log(readMe)
    // const readMe = createTemplate(dummyAnswers)
    // createMDFile(fileLocation, readMe)

    // .then(response => generateReadMe(response))
    //     .then(readme => {
    //         console.log(readme);
    //         writeToFile ("./dist/README.md", readme, err => {
    //         if (err){
    //           console.log(err);
    //           return;
    //         }
    //         console.log("README was successfully created !!!");
    //     });
    // }).catch(err => console.log(err));
};

function renderLicenseBadge(license) {
    if (license.toString() === "None" || !license){
      return "";
    }
    return `[![License](https://img.shields.io/badge/License-${license}-green)]`;
  }
  

function createTemplate(res) {
    // console.log(res.title);

    return `
    ## ${res.title}
    ${renderLicenseBadge(res.license)}(${renderLicenseLink(res.license)})

        `;

    // return `
    // ## ${res.title}
    // ${renderLicenseBadge(res.license)}(${renderLicenseLink(res.license)})
    // ## Description
    // ${res.description}
    // ## Table of Contents
    // - [Description](#description)
    // - [Installation](#installation)
    // - [Usage](#usage)
    // - [License](#license)
    // - [Contributing](#contributing)
    // - [Tests](#tests)
    // - [Questions](#questions)
    // ## Installation
    // ${res.installation}
    // ## Usage
    // ${res.usage}
    // ${renderLicenseSection(res.license)}
    // <br />
    // ## Contributing
    // ${res.contribution}
    // ## Tests
    // ${res.test}
    // ## Questions
    
    // Find me on GitHub: [${res.github}](https://github.com/${res.github}).  
    
    // Email me with any questions: ${res.email}.  
  
    // This README was generated with  by [README-generator](https://github.com/nguyen-william93/README-generator)
    //     `;
  }
  
  // TODO: Create a function to write README file
function createMDFile(fileName, data) {
    fs.writeFile (fileName, data, err => {
        if (err){
            return console.log(err);
        }
        console.log("README.md successfully created !!")
    })
}


init();
