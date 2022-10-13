import { factorial, fibonacci } from './recursion';

describe('Factorial', () => {
  it('Should return correctly', () => {
    expect(factorial(5)).toBe(120);
  });
});

describe('Fibonacci', () => {
  it('Should return correctly', () => {
    const list = new Array(100).fill(true);

    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(9)).toBe(34);
    expect(fibonacci(8)).toBe(21);
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(0)).toBe(0);
  });
});
