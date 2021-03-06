const Employee = require("./Employee");

class Intern extends Employee {
    constructor (answers) {
        super(answers);
        this.type = 'Intern';
        this.school = answers.school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;