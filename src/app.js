const languages = {
  en: {
    incorrect: "Hello, my friend.",
    upperCase: "HELLO,",
    lowerCase: "Hello,",
    and: "and",
    andUpper: "AND",
  },
  fr: {
    incorrect: "Bonjour, mon ami.",
    upperCase: "BONJOUR,",
    lowerCase: "Bonjour,",
    and: "et",
    andUpper: "ET",
  },
  nl: {
    incorrect: "Hallo, mijn vriend.",
    upperCase: "HALLO,",
    lowerCase: "Hallo,",
    and: "en",
    andUpper: "EN",
  },
};

function greet(names, language = "en") {
  if (!isLanguageSupported(language)) {
    return "This language is not supported.";
  }

  const selectedLanguage = languages[language];

  if (isNameIncorrect(names)) {
    return selectedLanguage.incorrect;
  }

  if (isSingleName(names)) {
    return formatSingleNameGreeting(names, selectedLanguage);
  } else if (isMultipleNames(names)) {
    return formatMultipleNamesGreeting(names, selectedLanguage);
  }

  return `Hello, ${names}.`;
}

function isLanguageSupported(language) {
  return languages[language] !== undefined;
}

function isNameIncorrect(name) {
  if (typeof name === "string") {
    return !name || name.trim() === "";
  } else if (Array.isArray(name)) {
    return name.length === 0;
  }
  return true;
}

function isSingleName(name) {
  return typeof name === "string";
}

function isMultipleNames(names) {
  return Array.isArray(names) && names.length >= 2;
}

function formatSingleNameGreeting(name, selectedLanguage) {
  if (isNameUppercase(name)) {
    return `${selectedLanguage.upperCase} ${name}!`;
  } else {
    return `${selectedLanguage.lowerCase} ${name}.`;
  }
}

function formatMultipleNamesGreeting(names, selectedLanguage) {
  const { and, lowerCase, upperCase, andUpper } = selectedLanguage;
  const lowercaseNames = [];
  const uppercaseNames = [];

  names.forEach((name) => {
    if (isNameUppercase(name)) {
      uppercaseNames.push(name);
    } else {
      lowercaseNames.push(name);
    }
  });

  if (lowercaseNames.length !== 0 && uppercaseNames.length !== 0) {
    return (
      joinNames(lowercaseNames, and, lowerCase) +
      ". " +
      joinUppercaseNames(uppercaseNames, upperCase, andUpper)
    );
  }

  if (lowercaseNames.length !== 0) {
    return joinNames(lowercaseNames, and, lowerCase) + ".";
  }

  return joinNames(uppercaseNames, andUpper, upperCase) + "!";
}

function joinNames(names, and, caseType) {
  return `${caseType} ${names.slice(0, -1).join(", ")} ${and} ${
    names[names.length - 1]
  }`;
}

function joinUppercaseNames(names, upperCase, andUpper) {
  return `${andUpper} ${upperCase} ${names[0]}!`;
}

function isNameUppercase(name) {
  return name === name.toUpperCase();
}

module.exports = greet;
