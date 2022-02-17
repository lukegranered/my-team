const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
    }

    officeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;