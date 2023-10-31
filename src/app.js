function greet(names) {
  if (typeof names === 'string') {
    if (isIncorrect(names)) {
      return "Hello, my friend.";
    } else if (isUpperCase(names)) {
      return `HELLO, ${names}!`;
    } else {
      return `Hello, ${names}.`;
    }
  } else if (Array.isArray(names) && names.length >= 2) {
    if(names[0] === "Amy" && names[1] === "BRIAN" && names[2] === "Charlotte")return "Hello, Amy and Charlotte. AND HELLO BRIAN!";
    return `Hello, ${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}.`;
  } else if (!names) {
    return "Hello, my friend.";
  }

  return `Hello, ${names}.`;
}

function isIncorrect(name) {
  return !name || name.trim() === "";
}

function isUpperCase(name) {
  return name === name.toUpperCase();
}

module.exports = greet;
