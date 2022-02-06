import { Stack } from '../../stack-objects/stack';

export function baseConverter(decNumber: number, base: number): string {
  const stack = new Stack();

  let binaryString = '';
  let number = decNumber;
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    stack.push(Math.floor(number % base));
    number = Math.floor(number / base);
  }

  while (!stack.isEmpty()) {
    binaryString += digits[stack.pop()];
  }

  return binaryString;
}
