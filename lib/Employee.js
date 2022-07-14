class Employee {
    constructor(name, email, employeeId, role) {
        this.name = name;
        this.email = email;
        this.employeeId = employeeId;
        this.role = role;
    }

    // Method to get name of employee
    getName() {
        return this.name
    }

    // Method to get employee ID number
    getId() {
        return this.employeeId
    }

    // Method to get email address
    getEmail() {
        return this.email
    }

    // Method to get name of employee's role
    getRole() {
        return this.role
    }

}

module.exports = Employee;