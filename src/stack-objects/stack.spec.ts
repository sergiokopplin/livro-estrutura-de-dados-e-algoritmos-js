import { Stack } from './stack';

describe('Stack', () => {
  test('Should init empty and count zero', () => {
    const stack = new Stack();

    expect(stack.items).toEqual({});
  });

  test('Should push element to stack', () => {
    const stack = new Stack();

    stack.push(12345);
    stack.push(23456);
    stack.push(34567);

    expect(stack.items).toEqual({
      0: 12345,
      1: 23456,
      2: 34567,
    });
  });

  test('Should calculate size', () => {
    const stack = new Stack();

    expect(stack.size()).toEqual(0);

    stack.push(12345);
    stack.push(23456);
    stack.push(34567);

    expect(stack.size()).toEqual(3);
  });
});
