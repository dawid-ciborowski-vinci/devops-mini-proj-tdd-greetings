function greet(names, language = "en") {
  if (language != "en" && language != "fr" && language != "nl") {
    return "This language is not supported.";
  }
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
    const lowerCaseTranslation = selectedLanguage.lowerCase;
    const upperCaseTranslation = selectedLanguage.upperCase;
    const andUpperTranslation = selectedLanguage.andUpper;
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
        namesToString(lowercaseNames, andTranslation, lowerCaseTranslation) + ". " +
        uppercaseNamesToString(uppercaseNames, upperCaseTranslation, andUpperTranslation)
      );
    }
    if(lowercaseNames.length !== 0){
      return namesToString(lowercaseNames, andTranslation, lowerCaseTranslation)+".";
    }
    return namesToString(uppercaseNames, andUpperTranslation, upperCaseTranslation)+"!";
  }

  return `Hello, ${names}.`;
}

function namesToString(names, and, lowerCase) {
  return `${lowerCase} ${names.slice(0, -1).join(", ")} ${and} ${
    names[names.length - 1]
  }`;
}

function uppercaseNamesToString(names, upperCase, andUpper) {
  return `${andUpper} ${upperCase} ${names[0]}!`;
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
