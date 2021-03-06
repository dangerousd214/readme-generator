# readme-generator

## Your Task

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

The application will be invoked by using the following command:

node index.js

## User Story


AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project


## Acceptance Criteria

GIVEN a command-line application that accepts user input<br>
WHEN I am prompted for information about my application repository<br>
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions<br>

WHEN I enter my project title<br>
THEN this is displayed as the title of the README<br>

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions<br>
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests<br>

WHEN I choose a license for my application from a list of options<br>
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under<br>

WHEN I enter my GitHub username<br>
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile<br>

WHEN I enter my email address<br>
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions<br>

WHEN I click on the links in the Table of Contents<br>
THEN I am taken to the corresponding section of the README<br>


## Getting Started

Here are some guidelines to help you get started:

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.


## Review

You are required to submit the following for review:

* A walkthrough video demonstrating the functionality of the application.

* A sample README.md file for a project repository generated using your application

* The URL of the GitHub repository, with a unique name and a README describing the project

