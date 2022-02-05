import { Stack } from './stack';

describe('Stack', () => {
  test('Should work properly', () => {
    const stack = new Stack()
    expect(stack).toBeTruthy()
  });
});