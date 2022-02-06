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

  size() {
    return Object.keys(this.items).length;
  }

  isEmpty() {
    return Object.keys(this.items).length === 0;
  }
}
