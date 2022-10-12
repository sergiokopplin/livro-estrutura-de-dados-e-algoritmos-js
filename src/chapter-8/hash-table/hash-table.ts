import { Dictionary, defaultToString, ValuePair } from '../dictionary/dictionary';

export class HashTable extends Dictionary {
  table: {
    [key: string]: any;
  };
  toStrFn: any;

  constructor(toStrFn = defaultToString) {
    super();
    this.table = {};
    this.toStrFn = toStrFn;
  }

  loseLoseHashCode(key: string) {
    const tableKey: string = this.toStrFn(key);
    let hash = 0;

    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }

    return hash % 37;
  }

  hashCode(key: string): number {
    return this.loseLoseHashCode(key);
  }

  put(key: string, value: any): boolean {
    if (key != null && value != null) {
      const tableKey: number = this.loseLoseHashCode(key);
      this.table[tableKey] = new ValuePair(key, value);

      return true;
    }

    return false;
  }

  get(key: string): string {
    const tableKey: number = this.loseLoseHashCode(key);
    return this.table[tableKey] ? this.table[tableKey].value : undefined;
  }

  remove(key: string): boolean {
    const tableKey: number = this.loseLoseHashCode(key);

    if (this.table[tableKey]) {
      delete this.table[tableKey];
      return true;
    }

    return false;
  }
}
