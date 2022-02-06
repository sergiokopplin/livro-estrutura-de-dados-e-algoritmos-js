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

  test('Should calculate if empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toEqual(true);

    stack.push(12345);
    stack.push(23456);
    stack.push(34567);

    expect(stack.isEmpty()).toEqual(false);
  });

  test('Should return undefined when pop on empty pile', () => {
    const stack = new Stack();

    const value = stack.pop();

    expect(value).toBe(undefined);
  });

  test('Should pop elements on pile', () => {
    const stack = new Stack();

    stack.push(12345);
    stack.push(23456);
    stack.push(34567);

    const value = stack.pop();

    expect(value).toBe(34567);
    expect(stack.items).toEqual({ 0: 12345, 1: 23456 });
  });
});
