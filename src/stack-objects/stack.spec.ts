import { Stack } from './stack';

describe('Stack', () => {
  test('Should init empty and count zero', () => {
    const stack = new Stack();

    expect(stack.count).toBe(0);
    expect(stack.items).toEqual({});
  });

  test('Should push element to stack and increment count', () => {
    const stack = new Stack();

    stack.push(12345);
    stack.push(23456);
    stack.push(34567);

    expect(stack.items).toEqual({
      0: 12345,
      1: 23456,
      2: 34567,
    });
    expect(stack.count).toEqual(3);
  });
});
