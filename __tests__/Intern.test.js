const Intern = require('../lib/Intern');

test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Intern(name);
    expect(e.name).toBe(name);
  });