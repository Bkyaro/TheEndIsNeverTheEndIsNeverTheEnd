// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result =
    x < 0
      ? -Number(
          Array.from(String(x).replace(/[^0-9]/g, ""))
            .reverse()
            .join("")
        )
      : Number(
          Array.from(String(x).replace(/[^0-9]/g, ""))
            .reverse()
            .join("")
        );
  return result < -2147483648 || result > 2147483647 ? 0 : result;
};

/**
 * fastest on leetcode
 * @param {number} x
 * @return {number}
//  */
// var reverse = function (x) {
//   let y = x.toString().split("");
//   let neg = false;
//   if (y[0] == "-") {
//     neg = true;
//     y.shift();
//   }
//   let z = y.reverse();
//   let q = Number(z.join(""));
//   if (q > 0x7fffffff) {
//     // Directly check against 2^31 - 1
//     return 0;
//   }
//   return Number(neg ? -q : q);
// };

/**
 * lighest on leetcode
 * @param {number} x
 * @return {number}
 */
// const LOW_LIMIT = Math.pow(-2, 31);
// const HIGH_LIMIT = Math.pow(2, 31) - 1;
// function reverse(x) {
//   let negative = false,
//     reversed = 0;

//   if (x < 0) {
//     negative = true;
//     x *= -1;
//   }

//   while (x > 0) {
//     let tail = x % 10;

//     reversed = reversed * 10 + tail;
//     x = (x - tail) / 10;

//     if (negative && reversed * -1 < LOW_LIMIT) return 0;
//     if (reversed > HIGH_LIMIT) return 0;
//   }

//   return negative ? reversed * -1 : reversed;
// }

module.exports = reverse;
