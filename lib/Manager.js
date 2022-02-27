const Employee = require('./Employee');

class Manager extends Employee {
    constructor(answers) {
        super(answers);
        this.officenumber = answers.officenumber
        this.type = 'Team Manager';
    }

    officeNumber() {
        return this.officenumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;