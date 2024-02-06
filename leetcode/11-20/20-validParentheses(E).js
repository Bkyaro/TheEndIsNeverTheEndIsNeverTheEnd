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
  if (s.length <= 1) {
    return false;
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let topChar = stack.pop();
      if (
        (s[i] === ")" && topChar !== "(") ||
        (s[i] === "}" && topChar !== "{") ||
        (s[i] === "]" && topChar !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length ? false : true;
};

/**
 * fastest & lightest on leetcode
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Create a stack to keep track of opening parentheses
  const stack = [];
  // Create a mapping for opening and closing parentheses
  const parenthesesMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    // Check if the current character is an open parenthesis
    if (parenthesesMap.hasOwnProperty(currentChar)) {
      // If yes, push it onto the stack
      stack.push(currentChar);
    } else {
      // If no, it's a closing parenthesis
      // Pop the last element from the stack (if it's empty, assign a dummy value)
      const lastOpened = stack.pop() || "#";
      // Check if the closing parenthesis matches the corresponding opening parenthesis
      if (parenthesesMap[lastOpened] !== currentChar) {
        return false; // If not, the string is invalid
      }
    }
  }
  // After iterating through the entire string, the stack should be empty for a valid string
  return stack.length === 0;
};

module.exports = isValid;
