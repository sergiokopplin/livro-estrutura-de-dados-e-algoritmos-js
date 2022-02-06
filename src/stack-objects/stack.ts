export class Stack {
  public items: { [key: number]: number };
  private count: number;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: number) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;

    const value = this.items[this.count];
    delete this.items[this.count];

    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    const value = this.items[this.count - 1];

    return value;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }
}
