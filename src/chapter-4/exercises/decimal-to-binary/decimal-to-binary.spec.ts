import { decimalToBinary } from './decimal-to-binary';

describe('Decimal To Binary', () => {
  test('Should return correctly', () => {
    expect(decimalToBinary(233)).toBe('11101001');
    expect(decimalToBinary(10)).toBe('1010');
    expect(decimalToBinary(1000)).toBe('1111101000');
  });
});
