import { palindrome } from './palindrome';

describe('palindrome', () => {
  test('Should integrate', () => {
    const palindromeWords = ['aibofobia', 'omissíssimo', 'sopapos'];
    const notPalindromeWords = ['John', 'Jack', 'Carl'];

    expect(palindrome(palindromeWords[0])).toEqual(true);
    expect(palindrome(palindromeWords[1])).toEqual(true);
    expect(palindrome(palindromeWords[2])).toEqual(true);

    expect(palindrome(notPalindromeWords[0])).toEqual(false);
    expect(palindrome(notPalindromeWords[1])).toEqual(false);
    expect(palindrome(notPalindromeWords[2])).toEqual(false);
  });
});
