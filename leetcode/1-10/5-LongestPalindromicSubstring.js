// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s;
  }
  let result = "";
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      if (s[j] === s[i] && isPalindrome(s, i, j)) {
        let currentPalindromic = s.slice(i, j + 1);
        if (currentPalindromic.length > result.length) {
          result = currentPalindromic;
        }
        break;
      }
    }
  }

  function isPalindrome(str, start, end) {
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }

  return result;
};

module.exports = longestPalindrome;
