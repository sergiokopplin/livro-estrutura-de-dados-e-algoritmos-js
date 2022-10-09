import { Set } from '../set/set';
import { SetOperations } from './set-operations';

describe('SetOperations', () => {
  test('Should construct correctly', () => {
    const setOperations = new SetOperations();

    expect(setOperations).toMatchSnapshot();
  });

  test('Should Union', () => {
    const setA = new SetOperations();

    setA.add(1);
    setA.add(2);
    setA.add(3);

    const setB = new Set();

    setB.add(3);
    setB.add(4);
    setB.add(5);
    setB.add(6);

    expect(setA.union(setB)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Should Intersect', () => {
    const setA = new SetOperations();

    setA.add(1);
    setA.add(2);
    setA.add(3);

    const setB = new Set();

    setB.add(2);
    setB.add(3);
    setB.add(4);

    expect(setA.intersection(setB)).toEqual([2, 3]);
  });

  test('Should Difference', () => {
    const setA = new SetOperations();

    setA.add(1);
    setA.add(2);
    setA.add(3);

    const setB = new Set();

    setB.add(2);
    setB.add(3);
    setB.add(4);

    expect(setA.difference(setB)).toEqual([1]);
  });

  test('Should calculate subsetOf', () => {
    const setA = new SetOperations();

    setA.add(1);
    setA.add(2);

    const setB = new SetOperations();

    setB.add(1);
    setB.add(2);
    setB.add(3);

    const setC = new SetOperations();

    setC.add(2);
    setC.add(3);
    setC.add(4);

    expect(setA.isSubsetOf(setB)).toBe(true);
    expect(setB.isSubsetOf(setC)).toBe(false);
  });
});
