const greet = require('../greet.js');

test('should return Hello, Bob', () => {
    const result = greet('Bob');
    expect(result).toBe('Hello, Bob.');
});

test('should return Hello, Jean-Kevin', () => {
    const result = greet('Jean-Kevin');
    expect(result).toBe('Hello, Jean-Kevin.');
});

test('should return Hello, my friend.', () => {
    const result = greet();
    expect(result).toBe('Hello, my friend.');
});

test('should return Hello, my friend.', () => {
    const result = greet(undefined);
    expect(result).toBe('Hello, my friend.');
});

test('should return Hello, my friend.', () => {
    const result = greet('');
    expect(result).toBe('Hello, my friend.');
});

test('should return Hello, my friend.', () => {
    const result = greet('  ');
    expect(result).toBe('Hello, my friend.');
});

test('should return HELLO, JERRY!', () => {
    const result = greet('JERRY');
    expect(result).toBe('HELLO, JERRY!');
});

test('should return HELLO, KENOBI!', () => {
    const result = greet('KENOBI');
    expect(result).toBe('HELLO, KENOBI!');
});

test('should return Hello, Jill and Jane.', () => {
    const result = greet(['Jill', 'Jane']);
    expect(result).toBe('Hello, Jill and Jane.');
});

test('should return Hello, Kratos and Thanathos.', () => {
    const result = greet(['Kratos', 'Thanathos']);
    expect(result).toBe('Hello, Kratos and Thanathos.');
});

test('should return Hello, Kratos, Thanathos and Hypnos.', () => {
    const result = greet(['Kratos', 'Thanathos', 'Hypnos']);
    expect(result).toBe('Hello, Kratos, Thanathos and Hypnos.');
});

test('should return Hello, Amy and Charlotte. AND HELLO BRIAN!', () => {
    const result = greet(['Amy', 'BRIAN', 'Charlotte']);
    expect(result).toBe('Hello, Amy and Charlotte. AND HELLO, BRIAN!');
});

test('should return Hello, Thanathos and Hypnos. AND HELLO KRATOS!', () => {
    const result = greet(['KRATOS', 'Thanathos', 'Hypnos']);
    expect(result).toBe('Hello, Thanathos and Hypnos. AND HELLO, KRATOS!');
});

test('should return Bonjour, Marie.', () => {
    const result = greet('Marie', 'fr');
    expect(result).toBe('Bonjour, Marie.');
});

test('should return Bonjour Kratos et Thanatos.', () => {
    const result = greet(['Kratos', 'Thanatos'], 'fr');
    expect(result).toBe('Bonjour, Kratos et Thanatos.');
});

test('should return Hallo, Saskie en Annick. EN HALLO JOHAN.', () => {
    const result = greet(['Saskie', 'JOHAN', 'Annick'], 'nl');
    expect(result).toBe('Hallo, Saskie en Annick. EN HALLO, JOHAN!');
});

test('should return This language is not supported.', () => {
    const result = greet(['Saskie', 'JOHAN', 'Annick'], 'pl');
    expect(result).toBe('This language is not supported.');
});

test('should return BONJOUR, KRATOS ET THANATHOS!', () => {
    const result = greet(['KRATOS', 'THANATHOS'], 'fr');
    expect(result).toBe('BONJOUR, KRATOS ET THANATHOS!');
});

test('should return Hello, Kratos.', () => {
    const result = greet(['Kratos', '']);
    expect(result).toBe('Hello, Kratos.');
});

test('should return Bonjour, Jacqueline.', () => {
    const result = greet(['', '', 'Jacqueline'], 'fr');
    expect(result).toBe('Bonjour, Jacqueline.');
});

test('should return BONJOUR, ATREUS ET ZEUS!', () => {
    const result = greet(['', 'ATREUS', 'ZEUS'], 'fr');
    expect(result).toBe('BONJOUR, ATREUS ET ZEUS!');
});
