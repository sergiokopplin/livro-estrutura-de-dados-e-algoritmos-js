export class Set {
  items: any;

  constructor() {
    this.items = {};
  }

  has(element: any): boolean {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element: any): boolean {
    if (!this.has(element)) {
      this.items[element] = element;

      return true;
    }

    return false;
  }

  delete(element: any): boolean {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  }

  clear(): void {
    this.items = {};
  }

  size(): number {
    return Object.keys(this.items).length;
  }

  values(): any[] {
    return Object.values(this.items);
  }
}
