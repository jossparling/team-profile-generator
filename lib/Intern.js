const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, employeeId, role, school) {
        super(name, email, employeeId, role);
        
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return Intern;
    }
}

module.exports = Intern;