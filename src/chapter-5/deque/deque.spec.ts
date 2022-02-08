import { Deque } from './deque';

describe('Deque', () => {
  test('Should construct correctly', () => {
    const deque = new Deque();

    expect(deque.toString()).toBe('');
  });

  test('Should add front', () => {
    const deque = new Deque();

    deque.addFront('John');
    deque.addFront('Jack');

    expect(deque.toString()).toBe('Jack,John');
  });

  test('Should add back', () => {
    const deque = new Deque();

    deque.addBack('John');
    deque.addBack('Jack');

    expect(deque.toString()).toBe('John,Jack');
  });

  test('Should remove front', () => {
    const deque = new Deque();

    deque.addBack('John');
    deque.addBack('Jack');
    deque.addBack('James');

    expect(deque.toString()).toBe('John,Jack,James');

    deque.removeFront();

    expect(deque.toString()).toBe('Jack,James');

    deque.removeFront();

    expect(deque.toString()).toBe('James');

    deque.removeFront();

    expect(deque.toString()).toBe('');
  });

  test('Should remove back', () => {
    const deque = new Deque();

    deque.addBack('John');
    deque.addBack('Jack');
    deque.addBack('James');

    expect(deque.toString()).toBe('John,Jack,James');

    deque.removeBack();

    expect(deque.toString()).toBe('John,Jack');

    deque.removeBack();

    expect(deque.toString()).toBe('John');

    deque.removeBack();

    expect(deque.toString()).toBe('');
  });

  test('Should peek front', () => {
    const deque = new Deque();

    deque.addBack('John');
    deque.addBack('Jack');
    deque.addBack('James');

    expect(deque.peekFront()).toBe('John');
  });

  test('Should peek back', () => {
    const deque = new Deque();

    deque.addBack('John');
    deque.addBack('Jack');
    deque.addBack('James');

    expect(deque.peekBack()).toBe('James');
  });

  test('Should Integrate', () => {
    const deque = new Deque();

    expect(deque.isEmpty()).toBe(true);

    deque.addBack('John');
    deque.addBack('Jack');

    expect(deque.toString()).toBe('John,Jack');

    deque.addBack('Camila');

    expect(deque.toString()).toBe('John,Jack,Camila');
    expect(deque.size()).toBe(3);
    expect(deque.isEmpty()).toBe(false);

    deque.removeFront();

    expect(deque.toString()).toBe('Jack,Camila');

    deque.removeBack();

    expect(deque.toString()).toBe('Jack');

    deque.addFront('John');

    expect(deque.toString()).toBe('John,Jack');
  });
});
