const Engineer = require('../lib/Engineer');

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
  });