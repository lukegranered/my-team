const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(answers) {
        super(answers);
        this.type = 'Engineer';
        this.github = answers.github; 
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;