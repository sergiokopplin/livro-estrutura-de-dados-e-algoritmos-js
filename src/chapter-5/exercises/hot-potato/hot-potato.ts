import { Queue } from '../../queue/queue';

export function hotPotato(names: string[], times: number) {
  const eliminated = [];
  const queue = new Queue();

  names.forEach(name => queue.enqueue(name));

  while (queue.size() > 1) {
    for (let i = 1; i <= times; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated.push(queue.dequeue());
  }

  return {
    eliminated,
    winner: queue.toString(),
  };
}
