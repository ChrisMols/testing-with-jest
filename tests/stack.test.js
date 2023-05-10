const Stack = require('../src/stack.js'); // Importera Stack-klassen från stack.js




describe('Stack', () => {
    // testfall kommer att skrivas här
  });

  test('testar om push() fungerar korrekt', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });
  
