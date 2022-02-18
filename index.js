const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = inputData => {
    inputData = [];

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        }
    ])
}