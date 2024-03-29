// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(ans) !== 0) {
      ans = ans.substring(0, ans.length - 1);
      if (ans === "") {
        return "";
      }
    }
  }
  return ans;
};

/**
 * fastest on leetcode
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    const currChar = firstStr[i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== currChar) {
        return prefix;
      }
    }

    prefix += currChar;
  }

  return prefix;
};
module.exports = longestCommonPrefix;
