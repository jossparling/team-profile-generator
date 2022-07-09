class Employee {
    constructor(name, email, employeeId, role) {
        this.name = name;
        this.email = email;
        this.employeeId = employeeId;
        this.role = role;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.employeeId
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }

}

module.exports = Employee;