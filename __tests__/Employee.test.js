const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('employeeId');

    expect(employee.employeeId).toEqual(expect.any(Number));
});

test('gets name value', () => {
    const employee = new Employee('name');

    expect(employee.getName()).toEqual(expect.stringContaining('name'));
})

