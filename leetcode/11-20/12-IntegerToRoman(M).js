// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    romanNum = "";

  for (let i in roman) {
    while (num >= roman[i]) {
      romanNum += i;
      num -= roman[i];
    }
  }
  return romanNum;
};

/**
 * lightest on leetcode
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const letters = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let res = "";

  for (let i = 0; i < nums.length; i++) {
    if (num >= nums[i]) {
      res += letters[i];
      num -= nums[i];
      i--;
    }
  }

  return res;
};

/**
 * lightest on leetcode
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let res = "";

  while (num > 0) {
    if (num >= 1000) {
      num -= 1000;
      res += "M";
    } else if (num >= 900 && num < 1000) {
      num -= 900;
      res += "CM";
    } else if (num >= 500) {
      num -= 500;
      res += "D";
    } else if (num >= 400 && num < 500) {
      num -= 400;
      res += "CD";
    } else if (num >= 100) {
      num -= 100;
      res += "C";
    } else if (num >= 90 && num < 100) {
      num -= 90;
      res += "XC";
    } else if (num >= 50) {
      num -= 50;
      res += "L";
    } else if (num >= 40 && num < 50) {
      num -= 40;
      res += "XL";
    } else if (num >= 10) {
      num -= 10;
      res += "X";
    } else if (num >= 9 && num < 10) {
      num -= 9;
      res += "IX";
    } else if (num >= 5) {
      num -= 5;
      res += "V";
    } else if (num >= 4 && num < 5) {
      num -= 4;
      res += "IV";
    } else if (num >= 1) {
      num -= 1;
      res += "I";
    }
  }

  return res;
};
module.exports = intToRoman;
