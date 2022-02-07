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

  test('Should clear', () => {
    const queue = new Queue();

    queue.enqueue(34512);
    queue.enqueue(34512);
    queue.enqueue(34512);

    queue.clear();

    expect(queue.items).toEqual({});
    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Should return to string when empty', () => {
    const queue = new Queue();

    expect(queue.toString()).toEqual('');
  });

  test('Should return to string', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toEqual('3,1,2');
  });

  test('Should integrate', () => {
    const queue = new Queue();

    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toEqual(true);
    expect(queue.peek()).toEqual(undefined);
    expect(queue.toString()).toEqual('');

    queue.enqueue(123);
    queue.enqueue(321);
    queue.enqueue(213);

    expect(queue.size()).toEqual(3);
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.peek()).toEqual(123);
    expect(queue.toString()).toEqual('123,321,213');

    queue.dequeue();
    queue.dequeue();

    expect(queue.size()).toEqual(1);
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.peek()).toEqual(213);
    expect(queue.toString()).toEqual('213');

    queue.enqueue(123);
    queue.enqueue(321);

    expect(queue.size()).toEqual(3);
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.peek()).toEqual(213);
    expect(queue.toString()).toEqual('213,123,321');
  });
});
