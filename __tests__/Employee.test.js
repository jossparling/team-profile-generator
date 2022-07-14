const Employee = require('../lib/Employee');

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
  
//   test("Can get id via getId()", () => {
//     const testValue = '100';
//     const e = new Employee("Foo", testValue);
//     expect(e.getId()).toBe(testValue);
//   });

// jest.mock('../lib/Employee.js');

// test('creates an employee object', () => {
//     const employee = new Employee('Josie', '2111', 'Josie@gmail.com');

//     expect(employee.name).toBe('Josie');
//     expect(employee.employeeId).toBe('2111');
//     expect(employee.email).toBe('Josie@gmail.com')
//     expect(employee.getRole()).toBe('employee')
// });

// test('gets name value', () => {
   
//     const employee = new Employee('Josie');

//     expect(employee.getName()).toBe('Josie');
// });

// test('gets email value', () => {
   
//     const employee = new Employee('Josie', '2111', 'Josie@gmail.com');

//     expect(employee.getEmail()).toEqual(expect.stringContaining('Josie@gmail.com'));
// });

// test('gets email value', () => {
   
//     const employee = new Employee('Josie', '2111', 'Josie@gmail.com');

//     expect(employee.getEmail()).toEqual(expect.stringContaining('Josie@gmail.com'));
// });

// test('gets email value', () => {
   
//     const employee = new Employee('Josie', '2111', 'Josie@gmail.com');

//     expect(employee.getEmail()).toEqual(expect.stringContaining('Josie@gmail.com'));
// });