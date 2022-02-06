import { Stack } from './stack';

describe('Stack', () => {
  test('Should init empty and count zero', () => {
    const stack = new Stack();

    expect(stack.count).toBe(0);
    expect(stack.items).toEqual({});
  });
});
