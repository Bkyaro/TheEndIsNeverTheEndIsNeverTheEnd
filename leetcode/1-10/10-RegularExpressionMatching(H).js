// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

/**
 * understandable on leetcode
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = (string, pattern) => {
  debugger;
  // early return when pattern is empty
  if (!pattern) {
    // returns true when string and pattern are empty
    // returns false when string contains chars with empty pattern
    return !string;
  }

  // check if the current char of the string and pattern match when the string has chars
  const hasFirstCharMatch =
    Boolean(string) && (pattern[0] === "." || pattern[0] === string[0]);

  // track when the next character * is next in line in the pattern
  if (pattern[1] === "*") {
    // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
    // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
    // If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char.
    return (
      isMatch(string, pattern.slice(2)) ||
      (hasFirstCharMatch && isMatch(string.slice(1), pattern))
    );
  }

  // now we know for sure that we need to do 2 simple actions
  // check the current pattern and string chars
  // if so, then can proceed with next string and pattern chars (s+1, p+1)
  return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};

/**
 * fastest on leetcode
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 初始化：首先，创建一个 (s.length + 1) x (p.length + 1) 的二维数组 dp，并将所有元素初始化为 false。设置 dp[0][0] = true，因为两个空字符串是匹配的。

// 处理'*'字符：当模式中的第 j 个字符是 '*' 时，它会影响 dp[i][j] 的值。在这种情况下，'*' 字符可以表示它之前的字符出现0次或多次。因此，如果 dp[i][j-2] 为真（即忽略 '*' 及其之前的字符），或者 dp[i-1][j] 为真（且 s 的第 i 个字符与 p 中 '*' 之前的字符匹配），则 dp[i][j] 也为真。

// 处理'.'字符和普通字符：当模式中的第 j 个字符是 '.' 或者与 s 中的第 i 个字符相同时，dp[i][j] 的值取决于 dp[i-1][j-1]。

// 遍历填充dp数组：按行遍历 s 和按列遍历 p 来填充 dp 数组。

// 返回结果：最终，dp[s.length][p.length] 的值将表示整个字符串 s 是否与模式 p 匹配。
var isMatch = (s, p) => {
  const dp = Array.from({ length: s.length + 1 }, () =>
    Array(p.length + 1).fill(false)
  );

  dp[0][0] = true;

  for (let i = 0; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] =
          dp[i][j - 2] ||
          (i > 0 &&
            (s[i - 1] === p[j - 2] || p[j - 2] === ".") &&
            dp[i - 1][j]);
      } else {
        dp[i][j] =
          i > 0 &&
          dp[i - 1][j - 1] &&
          (s[i - 1] === p[j - 1] || p[j - 1] === ".");
      }
    }
  }

  return dp[s.length][p.length];
};

/**
 * lightest on leetcode
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = (s, p) => {
  function dfs(i, j) {
    if (i >= s.length && j >= p.length) {
      return true;
    }
    if (j >= p.length) {
      return false;
    }

    let isMatch = i < s.length && (s[i] === p[j] || p[j] === ".");
    if (j + 1 < p.length && p[j + 1] === "*") {
      return (isMatch && dfs(i + 1, j)) || dfs(i, j + 2);
    }
    if (isMatch) {
      return dfs(i + 1, j + 1);
    }
    //else
    return false;
  }
  return dfs(0, 0);
};

module.exports = isMatch;
