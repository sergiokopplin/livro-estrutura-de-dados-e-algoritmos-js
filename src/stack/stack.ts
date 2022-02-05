export class Stack {
  public readonly items: string[];

  constructor() {
    this.items = [];
  }

  push(element: string) {
    return this.items.push(element);
  }
}
