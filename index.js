const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const populatePage = require('./lib/populatePage');
const Manager = require('./lib/Manager');

const data = [];
const init = () => {
    const teamManager = () => {

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
                validate: managerOfficeNumber => {
                    if (managerOfficeNumber) {
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
                    if ('Add Engineer' || 'Add Intern' || 'Finish') {
                    return true;
                    } else {
                        return false;
                    }
                }
            },
        ])
        .then((answers) => {
            const newTeamManager = new Manager(answers);
            data.push(newTeamManager);
            if(answers.add === 'Add Engineer') {
                addEngineer()
            }
            if(answers.add === 'Add Intern') {
                addIntern()
            }
            if(answers.add === 'Finish') {
                populatePage(data)
            }
        })
        }

    const addEngineer = () => {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Engineer's name?",
                validate: engineerNameInput => {
                    if (engineerNameInput) {
                        return true;
                    } else {
                        console.log("Please enter the Engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
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
                name: 'email',
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
                name: 'github',
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
            {
                type: 'list',
                name: 'add',
                message: "What would you like to do next?",
                choices: ['Add Engineer', 'Add Intern', 'Finish'],
                validate: addMember => {
                    if ('Add Engineer' || 'Add Intern' || 'Finish') {
                    return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then((answers) => {
            const newEngineer = new Engineer(answers);
            data.push(newEngineer);

            if(answers.add === 'Add Engineer') {
                addEngineer()
            }
            if(answers.add === 'Add Intern') {
                addIntern()
            }
            if(answers.add === 'Finish') {
                populatePage(data)
            }
        })
    }

    const addIntern = () => {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Intern's name?",
                validate: internNameInput => {
                    if (internNameInput) {
                        return true;
                    } else {
                        console.log("Please enter the Intern's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Intern's employee ID?",
                validate: internIdInput => {
                    if (internIdInput) {
                        return true;
                    } else {
                        console.log("Please enter the Intern's employee ID number!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Intern's email address?",
                validate: internEmailInput => {
                    if (internEmailInput) {
                        return true;
                    } else {
                        console.log("Please enter the Intern's email address!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does this Intern attend?",
                validate: internNameInput => {
                    if (internNameInput) {
                        return true;
                    } else {
                        console.log("Please enter the Intern's school!");
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
                    if ('Add Engineer' || 'Add Intern' || 'Finish') {
                    return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then((answers) => {
            const newIntern = new Intern(answers);
            data.push(newIntern);
            if(answers.add === 'Add Engineer') {
                addEngineer()
            }
            if(answers.add === 'Add Intern') {
                addIntern()
            }
            if(answers.add === 'Finish') {
                populatePage(data)
            }
        })
    }

    teamManager();
}

init()

  
    









