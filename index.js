const inquirer = require('inquirer');
const fs = require('fs');

const teamManager = managerData => {
    managerData = [];

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the Team Manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Team Manager's employee ID?",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Team Manager's email address?",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officenumber',
            message: "What is the Team Manager's office number?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's office number!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'add',
            message: "What would you like to do next?",
            choices: ['Add Engineer', 'Add Intern', 'Finish'],
            validate: addMember => {
                if ('Add Engineer') {
                    addEngineer();
                } 
                if ('Add Intern') {
                    addIntern();
                } 
                if ('Finish') {
                    populateTeam();
                } else {
                    console.log("Please select an option!");
                    return false;
                }
            }
        },
    ])
}

const addEngineer = engineerData  => {
    engineerData = []

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's employee ID?",
            validate: engineerID => {
                if (engineerID) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's email adress?",
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's GitHub username?",
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name!");
                    return false;
                }
            }
        },
    ])
}

teamManager();