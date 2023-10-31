const greet = require('./app.js');

test('should return Hello, Bob', () => {
    const result = greet();
    expect(result).toBe('Hello, Bob');
});