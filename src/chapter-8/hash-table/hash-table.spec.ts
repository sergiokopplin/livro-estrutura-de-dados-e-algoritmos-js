import { HashTable } from './hash-table';

describe('HashTable', () => {
  test('Should construct correctly', () => {
    const hashTable = new HashTable();

    expect(hashTable).toMatchSnapshot();
  });

  test('Should work properly', () => {
    const hashTable = new HashTable();

    hashTable.put('Gandalf', 'gandalf@email.com');
    hashTable.put('John', 'John@email.com');
    hashTable.put('Tyrion', 'Tyrion@email.com');

    expect(hashTable.hashCode('Gandalf')).toBe(19);
    expect(hashTable.hashCode('John')).toBe(29);
    expect(hashTable.hashCode('Tyrion')).toBe(16);
    expect(hashTable.get('Gandalf')).toBe('gandalf@email.com');
    expect(hashTable.get('Kopplin')).toBe(undefined);

    hashTable.remove('Gandalf');
    expect(hashTable.get('Gandalf')).toBe(undefined);
  });
});
