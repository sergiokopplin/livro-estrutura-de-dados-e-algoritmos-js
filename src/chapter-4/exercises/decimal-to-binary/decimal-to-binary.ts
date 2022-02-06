import { Stack } from '../../stack-objects/stack';

export function decimalToBinary(decNumber: number): string {
  const stack = new Stack();
  let binaryString: string = '';
  let number = decNumber;
  let rem: number;

  while (number > 0) {
    rem = Math.floor(number % 2);
    stack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }

  return binaryString;
}
