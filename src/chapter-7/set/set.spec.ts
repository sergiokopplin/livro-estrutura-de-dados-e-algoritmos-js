import { Set } from './set';

describe('Set', () => {
  test('Should construct correctly', () => {
    const set = new Set();

    expect(set).toMatchSnapshot();
  });

  test('Should work properly', () => {
    const set = new Set();

    set.add(1);

    expect(set).toMatchSnapshot();
    expect(set.values()).toEqual([1]);
    expect(set.has(1)).toBe(true);
    expect(set.size()).toBe(1);

    set.add(2);

    expect(set).toMatchSnapshot();
    expect(set.values()).toEqual([1, 2]);
    expect(set.has(2)).toBe(true);
    expect(set.size()).toBe(2);

    set.delete(1);

    expect(set).toMatchSnapshot();
    expect(set.values()).toEqual([2]);

    set.delete(2);

    expect(set).toMatchSnapshot();
    expect(set.values()).toEqual([]);

    set.add(1);
    expect(set.values()).toEqual([1]);
    set.clear();
    expect(set.values()).toEqual([]);
  });
});
