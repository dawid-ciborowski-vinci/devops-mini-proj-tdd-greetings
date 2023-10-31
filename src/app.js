function greet(names) {
  if (Array.isArray(names) && names.length == 2) return `Hello, ${names[0]} and ${names[1]}.`;
  if (names === null || names === undefined || names.trim() === "")
    return "Hello, my friend.";
  if (names === names.toUpperCase()) return `HELLO, ${names}!`;
  return `Hello, ${names}.`;
}
module.exports = greet;
