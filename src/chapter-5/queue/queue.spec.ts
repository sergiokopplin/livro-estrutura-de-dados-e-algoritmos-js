import { Queue } from './queue';

describe('Queue', () => {
  test('Should enqueue correctly', () => {
    const queue = new Queue();

    queue.enqueue(12345);

    expect(queue.items).toEqual({ 0: 12345 });
  });
});
