export class Stack {
  public items: { [key: number]: string };
  public count: number;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
}
