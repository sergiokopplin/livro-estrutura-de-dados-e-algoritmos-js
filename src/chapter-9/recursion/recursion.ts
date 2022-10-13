export function factorial(num: number): number {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

export function fibonacci(num: number): number {
  if (num < 1) return 0;
  if (num <= 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
