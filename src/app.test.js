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

test("should return HELLO, JERRY!", () => {
  const result = greet("JERRY");
  expect(result).toBe("HELLO, JERRY!");
});

test("should return HELLO, KENOBI!", () => {
  const result = greet("KENOBI");
  expect(result).toBe("HELLO, KENOBI!");
});

test("should return Hello, Jill and Jane.", () => {
  const result = greet(["Jill", "Jane"]);
  expect(result).toBe("Hello, Jill and Jane.");
});

test("should return Hello, Kratos and Thanathos.", () => {
  const result = greet(["Kratos", "Thanathos"]);
  expect(result).toBe("Hello, Kratos and Thanathos.");
});

test("should return Hello, Kratos, Thanathos and Hypnos.", () => {
  const result = greet(["Kratos", "Thanathos", "Hypnos"]);
  expect(result).toBe("Hello, Kratos, Thanathos and Hypnos.");
});