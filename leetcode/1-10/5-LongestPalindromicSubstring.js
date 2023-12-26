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

/**
 * fastest on leetcode
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s === [...s].reverse().join("")) {
    return s;
  }

  let result = s[0];

  for (let i = 0; i < s.length; i += 1) {
    let l1 = i;
    let r1 = i;
    let oddStr = "";

    let l2 = i;
    let r2 = i + 1;
    let evenStr = "";

    while (l1 >= 0 && r1 < s.length && s[l1] === s[r1]) {
      l1--;
      r1++;
    }

    while (l2 >= 0 && r2 < s.length && s[l2] === s[r2]) {
      l2--;
      r2++;
    }

    oddStr = s.slice(l1 + 1, r1);
    evenStr = s.slice(l2 + 1, r2);

    if (oddStr.length > result.length) {
      result = oddStr;
    }

    if (evenStr.length > result.length) {
      result = evenStr;
    }
  }

  return result;
};

/**
 * lightest on leetcode
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let start = i;
      let end = i + j;
      while (s[start] && s[start] === s[end]) {
        start -= 1;
        end += 1;
      }
      if (end - start - 1 > str.length) {
        str = s.slice(start + 1, end);
      }
    }
  }
  return str;
};

module.exports = longestPalindrome;
