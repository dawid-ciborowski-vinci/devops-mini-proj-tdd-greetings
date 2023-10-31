function greet(names) {
  if (twoNames(names)) return `Hello, ${names[0]} and ${names[1]}.`;
  if (isIncorrect(names)) return "Hello, my friend.";
  if (isUpperCase(names)) return `HELLO, ${names}!`;
  return `Hello, ${names}.`;
}
function twoNames(names) {
  if (Array.isArray(names) && names.length == 2) return true;
  return false;
}
function isIncorrect(name) {
  if (names === null || names === undefined || names.trim() === "") return true;
  return false;
}
function isUpperCase(name) {
  if (names === names.toUpperCase()) return true;
  return false;
}
module.exports = greet;
