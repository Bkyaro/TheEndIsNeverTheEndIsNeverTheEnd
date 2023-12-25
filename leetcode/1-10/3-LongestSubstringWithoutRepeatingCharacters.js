// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let maxSize = 0;
  let leftTag = 0;
  let union = new Set();

  for (let i = 0; i < s.length; i++) {
    while (union.has(s[i])) {
      union.delete(s[leftTag]);
      leftTag++;
    }

    union.add(s[i]);
    maxSize = Math.max(maxSize, i - leftTag + 1);
  }
  return maxSize;
};

module.exports = lengthOfLongestSubstring;
