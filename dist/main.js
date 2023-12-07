/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./greet.js":
/*!******************!*\
  !*** ./greet.js ***!
  \******************/
/***/ ((module) => {

eval("const languages = {\r\n    en: {\r\n        myFriend: 'Hello, my friend.',\r\n        upperHello: 'HELLO,',\r\n        lowerHello: 'Hello,',\r\n        lowerAnd: 'and',\r\n        upperAnd: 'AND',\r\n    },\r\n    fr: {\r\n        myFriend: 'Bonjour, mon ami.',\r\n        upperHello: 'BONJOUR,',\r\n        lowerHello: 'Bonjour,',\r\n        lowerAnd: 'et',\r\n        upperAnd: 'ET',\r\n    },\r\n    nl: {\r\n        myFriend: 'Hallo, mijn vriend.',\r\n        upperHello: 'HALLO,',\r\n        lowerHello: 'Hallo,',\r\n        lowerAnd: 'en',\r\n        upperAnd: 'EN',\r\n    },\r\n};\r\n\r\nfunction greet(names, language = 'en') {\r\n    if (!isLanguageSupported(language)) {\r\n        return 'This language is not supported.';\r\n    }\r\n\r\n    const selectedLanguage = languages[language];\r\n\r\n    if (typeof names === 'string' && !isNameIncorrect(names)) {\r\n        return formatSingleNameGreeting(names, selectedLanguage);\r\n    }\r\n    if (Array.isArray(names)) {\r\n        names = names.filter((name) => name.trim() !== '');\r\n        if (names.length === 0) {\r\n            return selectedLanguage.myFriend;\r\n        }\r\n        if (names.length === 1) {\r\n            return formatSingleNameGreeting(names[0], selectedLanguage);\r\n        }\r\n        return formatMultipleNamesGreeting(names, selectedLanguage);\r\n    }\r\n\r\n    return selectedLanguage.myFriend;\r\n}\r\n\r\nfunction isLanguageSupported(language) {\r\n    return languages[language] !== undefined;\r\n}\r\n\r\nfunction isNameIncorrect(name) {\r\n    return !name || name.trim() === '';\r\n}\r\n\r\nfunction formatSingleNameGreeting(name, selectedLanguage) {\r\n    if (isNameUppercase(name)) {\r\n        return `${selectedLanguage.upperHello} ${name}!`;\r\n    } else {\r\n        return `${selectedLanguage.lowerHello} ${name}.`;\r\n    }\r\n}\r\n\r\nfunction formatMultipleNamesGreeting(names, selectedLanguage) {\r\n    const { lowerAnd, lowerHello, upperHello, upperAnd } = selectedLanguage;\r\n    const lowercaseNames = [];\r\n    const uppercaseNames = [];\r\n\r\n    names.forEach((name) => {\r\n        if (isNameUppercase(name)) {\r\n            uppercaseNames.push(name);\r\n        } else {\r\n            lowercaseNames.push(name);\r\n        }\r\n    });\r\n\r\n    if (lowercaseNames.length !== 0 && uppercaseNames.length !== 0) {\r\n        return (\r\n            joinNames(lowercaseNames, lowerAnd, lowerHello) +\r\n            '. ' +\r\n            joinUppercaseNames(uppercaseNames, upperHello, upperAnd)\r\n        );\r\n    }\r\n\r\n    if (lowercaseNames.length !== 0) {\r\n        return joinNames(lowercaseNames, lowerAnd, lowerHello) + '.';\r\n    }\r\n\r\n    return joinNames(uppercaseNames, upperAnd, upperHello) + '!';\r\n}\r\n\r\nfunction joinNames(names, and, caseType) {\r\n    return `${caseType} ${names.slice(0, -1).join(', ')} ${and} ${\r\n        names[names.length - 1]\r\n    }`;\r\n}\r\n\r\nfunction joinUppercaseNames(names, upperHello, upperAnd) {\r\n    return `${upperAnd} ${upperHello} ${names[0]}!`;\r\n}\r\n\r\nfunction isNameUppercase(name) {\r\n    return name === name.toUpperCase();\r\n}\r\n\r\nmodule.exports = greet;\r\n\n\n//# sourceURL=webpack://mini-project1/./greet.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./greet.js");
/******/ 	
/******/ })()
;