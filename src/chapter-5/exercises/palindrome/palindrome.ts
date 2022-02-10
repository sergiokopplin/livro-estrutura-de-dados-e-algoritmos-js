import { Deque } from '../../deque/deque';

export function palindrome(word: string): boolean {
  let isPalindrome = false;

  const deque = new Deque();
  const wordLength = word.length;

  for (var i = 0; i < wordLength; i++) {
    deque.addBack(word[i]);
  }

  for (var i = 1; i < wordLength; i++) {
    deque.removeBack();
    deque.removeFront();

    if (deque.size() === 1) {
      isPalindrome = true;
    }
  }

  return isPalindrome;
}
