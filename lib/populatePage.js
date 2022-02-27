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
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <header>
        <h1 class="banner">My Team</h1>
    </header>
    <body>
        ${data.filter(employee => employee.type === 'Team Manager').map((employee) => {
            return `
            <div class="card">
                <h1 class="title">Team Manager</h1>
                Name: ${employee.name}</br>
                ID: ${employee.id}</br>
                <a href="mailto:${employee.email}">Email</a></br>
                Office Number: ${employee.officenumber}</br>
            </div>
        `})}
        ${data.filter(employee => employee.type === 'Engineer').map((employee) => {
            return `
            <div class="card">
                <h1 class="title">Engineer</h1>
                Name: ${employee.name}</br>
                ID: ${employee.id}</br>
                <a href="mailto:${employee.email}">Email</a></br>
                <a target="_blank" href="https://github.com/${employee.github}">GitHub</a></br>
            </div>
        `})}
        ${data.filter(employee => employee.type === 'Intern').map((employee) => {
            return `
            <div class="card">
                <h1 class="title">Intern</h1>
                Name: ${employee.name}</br>
                ID: ${employee.id}</br>
                <a href="mailto:${employee.email}">Email</a></br>
                School: ${employee.school}</br>
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