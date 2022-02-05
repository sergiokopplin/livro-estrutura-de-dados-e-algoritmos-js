import { Stack } from './stack';

describe('Stack', () => {
  test('Should init with empty Array', () => {
    const stack = new Stack();

    expect(stack.items).toEqual([]);
  });

  test('Should push elements on the end of pile', () => {
    const stack = new Stack();

    stack.push(['2']);
    stack.push(['1']);
    stack.push(['3']);

    expect(stack.items).toEqual(['2', '1', '3']);
  });

  test('Should pop elements on pile', () => {
    const stack = new Stack();

    stack.push(['2']);
    stack.push(['1']);
    stack.push(['3']);

    const value = stack.pop();

    expect(value).toBe('3');
    expect(stack.items).toEqual(['2', '1']);
  });

  test('Should peek the last pile element', () => {
    const stack = new Stack();

    stack.push(['2']);
    stack.push(['1']);
    stack.push(['3']);

    const value = stack.peek();

    expect(value).toBe('3');
  });
});
