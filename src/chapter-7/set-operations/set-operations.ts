import { Set } from '../set/set';

export class SetOperations extends Set {
  items: any;

  constructor() {
    super();
    this.items = {};
  }

  union(otherSet: any): any[] {
    const unionSet = new Set();

    this.values().forEach(item => unionSet.add(item));
    otherSet.values().forEach((item: any) => unionSet.add(item));

    return unionSet.values();
  }

  intersection(otherSet: any): any[] {
    const intersectionSet = new Set();

    this.values().forEach(item => {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    });

    return intersectionSet.values();
  }

  difference(otherSet: any): any[] {
    const differenceSet = new Set();

    this.values().forEach(item => {
      if (!otherSet.has(item)) {
        differenceSet.add(item);
      }
    });

    return differenceSet.values();
  }

  isSubsetOf(otherSet: any): boolean {
    if (otherSet.size() < this.size()) {
      return false;
    }

    let isSubset = true;

    this.values().every(item => {
      if (!otherSet.has(item)) {
        isSubset = false;
        return false;
      }

      return true;
    });

    return isSubset;
  }
}
