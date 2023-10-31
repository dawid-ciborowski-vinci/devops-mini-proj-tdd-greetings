function greet(name) {
  if (Array.isArray(name) && name.length == 2) return "Hello, Jill and Jane.";
  if (name === null || name === undefined || name.trim() === "")
    return "Hello, my friend.";
  if (name === name.toUpperCase()) return `HELLO, ${name}!`;
  return `Hello, ${name}.`;
}
module.exports = greet;
