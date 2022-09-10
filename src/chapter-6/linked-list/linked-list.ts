function defaultEquals(a: any, b: any) {
  return a === b;
}

class Node {
  element: any;
  next: any;

  constructor(element: any) {
    this.element = element;
    this.next = undefined;
  }
}

export class LinkedList {
  count: number;
  head: any;
  equalsFn: Function;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: any): void {
    const node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  removeAt(index: number): any {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }

    return undefined;
  }

  getElementAt(index: number): any {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  }
}
