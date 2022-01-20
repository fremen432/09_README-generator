const inquirer = require('inquirer')
const fs = require('fs')

const init = () => { askQuestions() }

const fileLocation = "./print/README.md"

const badgeArr = []

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please give a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instruction on how to install your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide information of how to use your project.",
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
        message: "Please choose any licenses your project uses.",
        choices: ["Mozilla", "Apache", "MIT", "Boost", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    }
];

// generates the appropriate badge based off users choices
function createBadges(item) {
    if (item === "Mozilla") badgeArr.push(` [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`)
    if (item === "Apache") badgeArr.push(` [![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`)
    if (item === "MIT") badgeArr.push(` [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)`)
    if (item === "Boost") badgeArr.push(` [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`)
    if (item === "None") badgeArr.push("None")
}

function askQuestions() {
    // clears badgeArr
    badgeArr.length = 0;
    // Asks questions from questions array
    inquirer.prompt(questions)
    .then(response => { 
        // calls createBadge function
        let license = response.license
        license.forEach(createBadges);
        // generates README file in print folder
        const readMe = createTemplate(response)
        createMDFile(fileLocation, readMe)
    })
};

// README.md template. takes in user inputs
function createTemplate(res) {
return `
# ${res.title}
## Licenses
${badgeArr.join(' ')}
## Description
${res.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${res.installation}
## Usage
${res.usage}
<br />
## Contributing
${res.contribution}
## Tests
${res.test}
## Questions
Contact me if you have any questions at the links below:
<br />

My GitHub: [${res.github}](https://github.com/${res.github}).  

My email: ${res.email}.  
`;
}

// writes README template data to a .md file 
function createMDFile(fileName, data) {
    fs.writeFile (fileName, data, err => {
        if (err){
            return console.log(err);
        }
        console.log("README.md successfully created !!")
    })
}

init();
