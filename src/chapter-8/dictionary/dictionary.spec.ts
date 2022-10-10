import { Dictionary } from './dictionary';

describe('Dictionary', () => {
  test('Should construct correctly', () => {
    const dictionary = new Dictionary();

    expect(dictionary).toMatchSnapshot();
  });

  test('Should work properly', () => {
    const dictionary = new Dictionary();

    dictionary.set('Gandalf', 'gandalf@email.com');
    dictionary.set('John', 'john@email.com');
    dictionary.set('Tyrion', 'tyrion@email.com');

    expect(dictionary.has('Galdalf')).toBe(true);
    expect(dictionary.size()).toBe(3);
    expect(dictionary.keys()).toEqual(['Galdalf', 'John', 'Tyrion']);
    expect(dictionary.values()).toEqual([
      'gandalf@email.com',
      'john@email.com',
      'tyrion@email.com',
    ]);
    expect(dictionary.get('Tyrion')).toBe('tyrion@email.com');
    expect(dictionary.keyValues()).toEqual([
      {
        key: 'Gandalf',
        value: 'gandalf@email.com',
      },
      {
        key: 'John',
        value: 'john@email.com',
      },
      {
        key: 'Tyrion',
        value: 'tyrion@email.com',
      },
    ]);

    dictionary.remove('John');

    expect(dictionary.has('John')).toBe(false);
    expect(dictionary.size()).toBe(2);
    expect(dictionary.keys()).toEqual(['Galdalf', 'Tyrion']);
    expect(dictionary.values()).toEqual(['gandalf@email.com', 'tyrion@email.com']);
    expect(dictionary.keyValues()).toEqual([
      {
        key: 'Gandalf',
        value: 'gandalf@email.com',
      },
      {
        key: 'Tyrion',
        value: 'tyrion@email.com',
      },
    ]);
  });
});
