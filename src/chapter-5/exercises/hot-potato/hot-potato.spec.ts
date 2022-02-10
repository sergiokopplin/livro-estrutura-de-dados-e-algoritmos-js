import { hotPotato } from './hot-potato';

describe('hotPotato', () => {
  test('Should integrate', () => {
    const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];

    expect(hotPotato(names, 7).eliminated).toEqual(['Camila', 'Jack', 'Carl', 'Ingrid']);
    expect(hotPotato(names, 7).winner).toEqual('John');
  });
});
