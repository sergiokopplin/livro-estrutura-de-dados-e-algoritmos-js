import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  test('Should construct correctly', () => {
    const linkedList = new LinkedList();

    expect(linkedList).toMatchSnapshot();
  });

  test('Should push', () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList).toMatchSnapshot();
  });

  test('Should removeAt', () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);

    expect(linkedList).toMatchSnapshot();

    expect(linkedList.removeAt(0)).toEqual(1);
    expect(linkedList.removeAt(3)).toEqual(5);
    expect(linkedList.removeAt(10)).toEqual(undefined);

    expect(linkedList).toMatchSnapshot();
  });

  test('Should getElementAt', () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);

    expect(linkedList.getElementAt(0)).toMatchSnapshot();
    expect(linkedList.getElementAt(3)).toMatchSnapshot();
    expect(linkedList.getElementAt(10)).toMatchSnapshot();
  });

  test('Should insert', () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);

    expect(linkedList.insert(10, 3)).toBe(true);
    expect(linkedList.insert(100, 1)).toBe(true);
    expect(linkedList.insert(1000, 0)).toBe(true);
    expect(linkedList.insert(10000, 100)).toBe(false);

    expect(linkedList.getElementAt(10)).toMatchSnapshot();
  });
});
