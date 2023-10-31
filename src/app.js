function greet(names) {
  if (typeof names === "string") {
    if (isIncorrect(names)) {
      return "Hello, my friend.";
    } else if (isUpperCase(names)) {
      return `HELLO, ${names}!`;
    } else {
      return `Hello, ${names}.`;
    }
  } else if (Array.isArray(names) && names.length >= 2) {
    let lowercaseNames = [];
    let uppercaseNames = [];

    names.forEach((name) => {
      if (isUpperCase(name)) {
        uppercaseNames.push(name);
      } else {
        lowercaseNames.push(name);
      }
    });
    if (lowercaseNames.length != 0 && uppercaseNames.length != 0)
      return (
        lowercaseNamesToString(lowercaseNames) +
        " " +
        uppercaseNamesToString(uppercaseNames)
      );
    return lowercaseNamesToString(lowercaseNames);
  } else if (!names) {
    return "Hello, my friend.";
  }

  return `Hello, ${names}.`;
}

function lowercaseNamesToString(names) {
  return `Hello, ${names.slice(0, -1).join(", ")} and ${
    names[names.length - 1]
  }.`;
}

function uppercaseNamesToString(names) {
  return `AND HELLO ${names[0]}!`;
}

function isIncorrect(name) {
  return !name || name.trim() === "";
}

function isUpperCase(name) {
  return name === name.toUpperCase();
}

module.exports = greet;
