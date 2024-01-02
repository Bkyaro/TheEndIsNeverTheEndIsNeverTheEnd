// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x.length == 1) return true;
  x = `${x}`;
  let right = `${x}`.length - 1;
  let left = 0;

  while (x[left] == x[right]) {
    if (left >= right) return true;
    right--;
    left++;
  }
  return false;
};

/**
 * fastest on gh
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let sum = 0;
  let num = x;

  while (num > 0) {
    const digit = num % 10;
    sum = sum * 10 + digit;
    num = ~~(num / 10);
  }
  return sum == x;
};

/**
 * lighest on gh
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const original = x;
  let reversed = 0;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
};

module.exports = isPalindrome;
