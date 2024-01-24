// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const dataSet = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length == 1) return dataSet[digits[0]];
  let result = [];
  function looper(index, char) {
    if (index == digits.length) {
      result.push(char);
      return;
    }
    dataSet[digits[index]].forEach((item) => {
      looper(index + 1, char + item);
    });
  }
  looper(0, "");
  return result;
};

/**
 * fastest on leetcode
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const MAP = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];
  const dfs = (index, curStr) => {
    if (curStr.length === digits.length) {
      res.push(curStr.join(""));
      return;
    }

    for (let i = 0; i < MAP[digits.charAt(index)].length; i++) {
      // curStr.push(MAP[digits.charAt(index)].charAt(i));
      dfs(index + 1, [...curStr, MAP[digits.charAt(index)].charAt(i)]);
      // curStr.pop();
    }
  };
  if (digits.length > 0) {
    dfs(0, []);
  }

  return res;
};

/**
 * lightest on leetcode
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const output = [];
  backtrack("", digits, phone_map, output);
  return output;

  function backtrack(combination, next_digits, phone_map, output) {
    if (next_digits.length === 0) {
      output.push(combination);
    } else {
      const letters = phone_map[next_digits[0] - "2"];
      for (const letter of letters) {
        backtrack(
          combination + letter,
          next_digits.slice(1),
          phone_map,
          output
        );
      }
    }
  }
};

module.exports = letterCombinations;
