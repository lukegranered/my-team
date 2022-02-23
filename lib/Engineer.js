const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(answers) {
        super(answers);
        this.type = 'Engineer';
        github = this.github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;