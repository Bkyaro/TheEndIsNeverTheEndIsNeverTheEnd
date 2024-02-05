// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let parentheses = 0;
  let brackets = 0;
  let braces = 0;
  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    if (item == "(" || item == ")") {
      parentheses++;
    }
    if (item == "[" || item == "]") {
      brackets++;
    }
    if (item == "{" || item == "}") {
      braces++;
    }
  }
  if (parentheses % 2 != 0 || brackets % 2 != 0 || braces % 2 != 0) {
    return false;
  } else {
    return true;
  }
};

module.exports = isValid;
