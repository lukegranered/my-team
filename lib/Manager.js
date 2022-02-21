const Employee = require('./Employee');

class Manager extends Employee {
    constructor(answers) {
        super(answers);

    }

    officeNumber() {
        return this.officenumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;