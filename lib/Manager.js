const Employee = require('./Employee');

class Manager extends Employee {
    constructor(answers) {
        super(answers);
        officenumber = this.officenumber;
        this.type = 'Team Manager';
    }

    officeNumber() {
        return officenumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;