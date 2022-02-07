export class Queue {
  public items: { [key: number]: number };
  private count: number;
  private lowestCount: number;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element: number) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const value = this.items[this.lowestCount];
    delete this.items[this.lowestCount];

    this.lowestCount++;

    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }
}
