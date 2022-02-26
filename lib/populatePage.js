const fs = require('fs');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const index = require('../index');

function populatePage(data) {
console.log(data);
    const returnData = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' ref='style.css'>
        <title>Document</title>
    </head>
    <header>
        My Team
    </header>
    <body>
        ${data.filter(employee => employee.type === 'Team Manager').map((employee) => {
            return `
            <div>
                <h1>Team Manager</h1>
                ${employee.name}
                ${employee.id}
                ${employee.email}
                ${employee.officenumber}
            </div>
        `})}
        ${data.filter(employee => employee.type === 'Engineer').map((employee) => {
            return `
            <div>
                <h1>Engineer</h1>
                ${employee.name}
                ${employee.id}
                ${employee.email}
                ${employee.github}
            </div>
        `})}
        ${data.filter(employee => employee.type === 'Intern').map((employee) => {
            return `
            <div>
                <h1>Intern</h1>
                ${employee.name}
                ${employee.id}
                ${employee.email}
                ${employee.school}
            </div>
        `})}
    </body>
    </html>`

    writeToFile(returnData)
            .then(copyFile)
}

const writeToFile = returnData => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/myteam.html', returnData, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Team Page created!',
            });
        });
    });
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet created'
            });
        });
    });
};


module.exports = populatePage;