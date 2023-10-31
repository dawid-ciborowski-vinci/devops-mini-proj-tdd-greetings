const greet = require("./app.js");

test("should return Hello, Bob", () => {
  const result = greet("Bob");
  expect(result).toBe("Hello, Bob.");
});

test("should return Hello, Jean-Kevin", () => {
  const result = greet("Jean-Kevin");
  expect(result).toBe("Hello, Jean-Kevin.");
});

test("should return Hello, my friend.", () => {
  const result = greet();
  expect(result).toBe("Hello, my friend.");
});

test("should return Hello, my friend.", () => {
  const result = greet(undefined);
  expect(result).toBe("Hello, my friend.");
});

test("should return Hello, my friend.", () => {
  const result = greet("");
  expect(result).toBe("Hello, my friend.");
});

test("should return Hello, my friend.", () => {
  const result = greet("  ");
  expect(result).toBe("Hello, my friend.");
});