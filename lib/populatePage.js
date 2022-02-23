const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function populatePage(data) {
console.log(data);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' ref='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'>
        <title>Document</title>
    </head>
    <header>
        My Team
    </header>
    <body>
        ${data.filter(employee => employee.type === 'Team Manager').map((employee) => {
            return `
        <h1>Team Manager</h1>
        <div>
        ${employee.name}
        ${employee.id}
        ${employee.email}
        ${employee.officenumber}
        </div>
        `})}
    </body>
    </html>`
}

module.exports = populatePage;