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

  test('Should peek undefined when empty', () => {
    const queue = new Queue();

    const value = queue.peek();

    expect(value).toEqual(undefined);
  });

  test('Should peek', () => {
    const queue = new Queue();

    queue.enqueue(12345);
    queue.enqueue(23451);
    queue.enqueue(34512);

    const value = queue.peek();

    expect(value).toEqual(12345);
  });

  test('Should check if is empty', () => {
    const queue = new Queue();

    const value = queue.isEmpty();

    expect(value).toEqual(true);
  });

  test('Should check if is empty when items', () => {
    const queue = new Queue();

    queue.enqueue(34512);

    const value = queue.isEmpty();

    expect(value).toEqual(false);
  });

  test('Should return size', () => {
    const queue = new Queue();

    expect(queue.size()).toEqual(0);

    queue.enqueue(34512);
    queue.enqueue(34512);
    queue.enqueue(34512);

    expect(queue.size()).toEqual(3);
  });
});
