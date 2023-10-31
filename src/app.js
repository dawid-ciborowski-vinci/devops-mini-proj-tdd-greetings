function greet(names, language = "en") {
  const languages = {
    en: {
      incorrect: "Hello, my friend.",
      upperCase: "HELLO,",
      lowerCase: "Hello,",
      and: "and",
    },
    fr: {
      incorrect: "Bonjour, mon ami.",
      upperCase: "SALUT,",
      lowerCase: "Bonjour,",
      and: "et",
    },
    nl: {
      incorrect: "Hallo, mijn vriend.",
      upperCase: "HALLO,",
      lowerCase: "Hallo,",
      and: "en",
    },
  };

  const selectedLanguage = languages[language] || languages["en"];

  if (isIncorrect(names)) {
    return selectedLanguage.incorrect;
  }

  if (typeof names === "string") {
    if (isUpperCase(names)) {
      return `${selectedLanguage.upperCase} ${names}!`;
    } else {
      return `${selectedLanguage.lowerCase} ${names}.`;
    }
  } else if (Array.isArray(names) && names.length >= 2) {
    const andTranslation = selectedLanguage.and;
    let lowercaseNames = [];
    let uppercaseNames = [];

    names.forEach((name) => {
      if (isUpperCase(name)) {
        uppercaseNames.push(name);
      } else {
        lowercaseNames.push(name);
      }
    });

    if (lowercaseNames.length !== 0 && uppercaseNames.length !== 0) {
      return (
        lowercaseNamesToString(lowercaseNames, andTranslation) +
        " " +
        uppercaseNamesToString(uppercaseNames)
      );
    }
    return lowercaseNamesToString(lowercaseNames, andTranslation);
  }

  return `Hello, ${names}.`;
}

function lowercaseNamesToString(names, andTranslation) {
  return `Hello, ${names.slice(0, -1).join(", ")} ${andTranslation} ${
    names[names.length - 1]
  }.`;
}

function uppercaseNamesToString(names) {
  return `AND HELLO ${names[0]}!`;
}

function isUpperCase(name) {
  return name === name.toUpperCase();
}

function isIncorrect(name) {
  if (typeof name === "string") {
    return !name || name.trim() === "";
  } else if (Array.isArray(name)) {
    return name.length === 0;
  }
  return true;
}

module.exports = greet;
