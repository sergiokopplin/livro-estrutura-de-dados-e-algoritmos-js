import { Queue } from './queue';

describe('Queue', () => {
  test('Should enqueue correctly', () => {
    const queue = new Queue();

    queue.enqueue(12345);

    expect(queue.items).toEqual({ 0: 12345 });
  });

  test('Should dequeue with undefined when empty', () => {
    const queue = new Queue();

    const value = queue.dequeue();

    expect(value).toEqual(undefined);
  });

  test('Should dequeue correctly', () => {
    const queue = new Queue();

    queue.enqueue(12345);
    queue.enqueue(23451);
    queue.enqueue(34512);

    expect(queue.dequeue()).toEqual(12345);
    expect(queue.dequeue()).toEqual(23451);
    expect(queue.dequeue()).toEqual(34512);
    expect(queue.dequeue()).toEqual(undefined);
  });
});
