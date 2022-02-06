import { Stack } from '../../stack-objects/stack';

export function decimalToBinary(decNumber: number): string {
  const stack = new Stack();

  let binaryString = '';
  let number = decNumber;

  while (number > 0) {
    stack.push(Math.floor(number % 2));
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }

  return binaryString;
}
