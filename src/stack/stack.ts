export class Stack {
  public readonly items: string[];

  constructor() {
    this.items = [];
  }

  push(element: string[]) {
    this.items.push(...element);
  }

  pop() {
    return this.items.pop();
  }
}
