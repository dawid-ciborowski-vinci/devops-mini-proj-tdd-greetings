const languages = {
    en: {
        myFriend: 'Hello, my friend.',
        upperHello: 'HELLO,',
        lowerHello: 'Hello,',
        lowerAnd: 'and',
        upperAnd: 'AND',
    },
    fr: {
        myFriend: 'Bonjour, mon ami.',
        upperHello: 'BONJOUR,',
        lowerHello: 'Bonjour,',
        lowerAnd: 'et',
        upperAnd: 'ET',
    },
    nl: {
        myFriend: 'Hallo, mijn vriend.',
        upperHello: 'HALLO,',
        lowerHello: 'Hallo,',
        lowerAnd: 'en',
        upperAnd: 'EN',
    },
};

function greet(names, language = 'en') {
    if (!isLanguageSupported(language)) {
        return 'This language is not supported.';
    }

    const selectedLanguage = languages[language];

    if (typeof names === 'string' && !isNameIncorrect(names)) {
        return formatSingleNameGreeting(names, selectedLanguage);
    }
    if (Array.isArray(names)) {
        names = names.filter((name) => name.trim() !== '');
        if (names.length === 0) {
            return selectedLanguage.myFriend;
        }
        if (names.length === 1) {
            return formatSingleNameGreeting(names[0], selectedLanguage);
        }
        return formatMultipleNamesGreeting(names, selectedLanguage);
    }

    return selectedLanguage.myFriend;
}

function isLanguageSupported(language) {
    return languages[language] !== undefined;
}

function isNameIncorrect(name) {
    return !name || name.trim() === '';
}

function formatSingleNameGreeting(name, selectedLanguage) {
    if (isNameUppercase(name)) {
        return `${selectedLanguage.upperHello} ${name}!`;
    } else {
        return `${selectedLanguage.lowerHello} ${name}.`;
    }
}

function formatMultipleNamesGreeting(names, selectedLanguage) {
    const { lowerAnd, lowerHello, upperHello, upperAnd } = selectedLanguage;
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
            joinNames(lowercaseNames, lowerAnd, lowerHello) +
            '. ' +
            joinUppercaseNames(uppercaseNames, upperHello, upperAnd)
        );
    }

    if (lowercaseNames.length !== 0) {
        return joinNames(lowercaseNames, lowerAnd, lowerHello) + '.';
    }

    return joinNames(uppercaseNames, upperAnd, upperHello) + '!';
}

function joinNames(names, and, caseType) {
    return `${caseType} ${names.slice(0, -1).join(', ')} ${and} ${
        names[names.length - 1]
    }`;
}

function joinUppercaseNames(names, upperHello, upperAnd) {
    return `${upperAnd} ${upperHello} ${names[0]}!`;
}

function isNameUppercase(name) {
    return name === name.toUpperCase();
}

module.exports = greet;
