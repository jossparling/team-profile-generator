const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, employeeId, role, github) {
        super(name, email, employeeId, role);
        
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return Engineer
    }

}

module.exports = Engineer;