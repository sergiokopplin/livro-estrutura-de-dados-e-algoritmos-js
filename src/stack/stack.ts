export class Stack {
  public items: number[];

  constructor() {
    this.items = [];
  }

  push(element: number[]) {
    this.items.push(...element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    const length = this.items.length;
    return this.items[length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}
