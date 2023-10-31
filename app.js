function greet(name) {
    if (name === null)
        return "Hello, my friend.";
    if (name === undefined)
        return "Hello, my friend.";
    if (name.trim() === "")
        return "Hello, my friend.";
    return `Hello, ${name}.`;
}
module.exports = greet;