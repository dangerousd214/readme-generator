const inquirer = require('inquirer');
const fs = require('fs');


// questions about project to enter into readme 
inquirer.prompt(
    [{
        type: 'input',
        message: "What's the name of project?",
        name: 'title',
        //make sure user enters a name for project
        validate: (value) => {
            if (value) { return true
            } else { return 'Please enter a project name to continue'}},
        },
        //where do you install this app
        {
        type: 'input',
        message: 'How do you install your app?',
        name: 'installation',
        validate: (value) => {
            if (value) {
                return true
            } else {return 'Please enter instructions on how to install app to continue'}},
        },
        //additional info on how to install app
        {
        type: 'input',
        message: 'Instructions to be followed?',
        name: 'instructons',
        validate: (value) => {
            if (value) {return true
            } else {return 'Please enter instructions on how to use app to continue' }},
        },
        //
        {
        type: 'input',
        message: 'Collaborators?',
        name: 'collaborator',
        validate: (value) => {
            if (value) { return true
            } else {return 'Please enter any collaborators to continue'}},
        },
        //how do we use this app
        {
        type: 'input',
        message: 'How do you use app?',
        name: 'usage',
        validate: (value) => {
            if (value) { return true
            } else {return 'Please enter a project name to continue'}},
        },
        //list of license
        {
        type: 'list',
        message: 'What license do you want to use?',
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
        validate: (value) => {
            if (value) { return true
            } else {return 'Please select a license type to continue'}},
        },
        // enter github user
        {
        type: 'input',
        message: 'Github username:',
        name: 'git',
        validate: (value) => {
            if (value) {return true
            } else {return 'Please enter Github username to continue' }}, 
    }
]
).then(({
    title,
    installation,
    instructions,
    collaborator,
    license,
    git,
    usage,
    Linkedin
}) => {
    const template = `# ${title}

## Installation
${installation}
## Usage
${usage}
## Collaboration
${collaborator}
### Instructions
${instructions}
## License
${license}

#Contact
*Github: ${git}
*LinkedIn: ${Linkedin}`;

    writeFileAs(title, template);
});

function writeFileAs(fileName, data) {
    fs.writeFile(`./${fileName}.md`, data, (err) => {
        if (err) {
            console.log(error);
        }
        console.log('Readme has been generated!');
    })
}