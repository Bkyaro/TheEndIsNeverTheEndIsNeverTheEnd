// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let definition = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; ) {
    if (definition[s[i] + s[i + 1]] && s[i + 1]) {
      result += definition[s[i] + s[i + 1]];
      i = i + 2;
    } else {
      result += definition[s[i]];
      i++;
    }
  }
  return result;
};

/**
 * fastest on leetcode
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanVal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let crtSymVal = romanVal[s[i]];
    let nxtSymVal = romanVal[s[i + 1]];
    if (nxtSymVal > crtSymVal) {
      result += -crtSymVal;
    } else {
      result += crtSymVal;
    }
  }
  return result;
};

/**
 * lightest on leetcode
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let c = s.charAt(i);
    switch (c) {
      case "I":
        res += res >= 5 ? -1 : 1;
        break;
      case "V":
        res += 5;
        break;
      case "X":
        res += 10 * (res >= 50 ? -1 : 1);
        break;
      case "L":
        res += 50;
        break;
      case "C":
        res += 100 * (res >= 500 ? -1 : 1);
        break;
      case "D":
        res += 500;
        break;
      case "M":
        res += 1000;
        break;
    }
  }
  return res;
};

module.exports = romanToInt;
