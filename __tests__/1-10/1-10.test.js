const twoSum = require("../../leetcode/1-10/1-TwoSum.js");
const addTwoNumbers = require("../../leetcode/1-10/2-AddTwoNumbers.js");
const lengthOfLongestSubstring = require("../../leetcode/1-10/3-LongestSubstringWithoutRepeatingCharacters.js");
const findMedianSortedArrays = require("../../leetcode/1-10/4-MedianOfTwoSortedArrays.js");
const longestPalindrome = require("../../leetcode/1-10/5-LongestPalindromicSubstring.js");
describe("1-Two Sums", () => {
  const testy = [
    { nums: [2, 7, 11, 15], target: 9, output: [0, 1] },
    { nums: [3, 2, 4], target: 6, output: [1, 2] },
    { nums: [3, 3], target: 6, output: [0, 1] },
  ];

  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(twoSum(test.nums, test.target)).toEqual(test.output);
    });
  });
});

// describe("2-Add two numbers", () => {
//   const testy = [
//     { l1: [2,4,3], l2: [5,6,4], output: [7,0,8] },
//     { l1: [0], l2: [0], output: [0] },
//     { l1: [9,9,9,9,9,9,9], l2: [9,9,9,9], output: [8,9,9,9,0,0,0,1] }
//   ];

//   testy.forEach((test, index) => {
//     it(`test${index}`, () => {
//       expect(addTwoNumbers(test.l1, test.l2)).toEqual(test.output);
//     });
//   });
// });

describe("3-Longest Substring Without Repeating Characters", () => {
  const testy = [
    { s: "abcabcbb", output: 3 },
    { s: "bbbbb", output: 1 },
    { s: "pwwkew", output: 3 },
    { s: "au", output: 2 },
    { s: "dvdh", output: 3 },
    { s: " ", output: 1 },
  ];

  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(lengthOfLongestSubstring(test.s)).toEqual(test.output);
    });
  });
});

describe("4-Median of Two Sorted Arrays", () => {
  const testy = [
    { s: [1, 3], t: [2], output: 2.0 },
    { s: [1, 2], t: [3, 4], output: 2.5 },
    { s: [1, 2], t: [3, 4, 5], output: 3 },
    { s: [1, 2, 3], t: [4, 5], output: 3 },
  ];

  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(findMedianSortedArrays(test.s, test.t)).toEqual(test.output);
    });
  });
});

describe("5-Longest Palindromic Substring", () => {
  const testy = [
    { s: "babad", output: "bab" },
    { s: "cbbd", output: "bb" },
    { s: "abcbaaaaaaaa", output: "aaaaaaaa" },
    { s: "a", output: "a" },
  ];

  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(longestPalindrome(test.s)).toEqual(test.output);
    });
  });
});
