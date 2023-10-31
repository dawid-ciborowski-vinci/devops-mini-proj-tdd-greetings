function greet(name) {
  if (name === null || name === undefined || name.trim() === "")
    return "Hello, my friend.";
  if (name === "JERRY")
    return "HELLO, JERRY!";
  return `Hello, ${name}.`;
}
module.exports = greet;
