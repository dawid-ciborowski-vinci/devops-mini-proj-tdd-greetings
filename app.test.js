const greet = require('./app.js');

test('should return Hello, Bob', () => {
    const result = greet('Bob');
    expect(result).toBe('Hello, Bob');
});