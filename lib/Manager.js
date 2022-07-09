const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, employeeId, role, officeNumber) {
        super(name, email, employeeId, role);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return Manager;
    }
}

module.exports = Manager;