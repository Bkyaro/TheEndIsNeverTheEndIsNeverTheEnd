const maxArea = require("../../leetcode/11-20/11-ContainerWithMostWater(M).js");
const intToRoman = require("../../leetcode/11-20/12-IntegerToRoman(M).js");
const romanToInt = require("../../leetcode/11-20/13-RomanToInteger(E).js");
const longestCommonPrefix = require("../../leetcode/11-20/14-LongestCommonPrefix(E).js");
describe("11-Container with most water", () => {
  const testy = [
    { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], output: 49 },
    { height: [1, 1], output: 1 },
    { height: [4, 3, 2, 1, 4], output: 16 },
    { height: [1, 2, 1], output: 2 },
    { height: [1, 2, 1, 2, 1, 2, 1, 2, 1], output: 12 },
  ];
  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(maxArea(test.height)).toEqual(test.output);
    });
  });
});

describe("12-Integer to roman", () => {
  const testy = [
    { num: 3, output: "III" },
    { num: 4, output: "IV" },
    { num: 9, output: "IX" },
    { num: 58, output: "LVIII" },
    { num: 1994, output: "MCMXCIV" },
    { num: 3999, output: "MMMCMXCIX" },
  ];
  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(intToRoman(test.num)).toEqual(test.output);
    });
  });
});

describe("12-Roman to integer", () => {
  const testy = [
    { s: "III", output: 3 },
    { s: "IV", output: 4 },
    { s: "IX", output: 9 },
    { s: "LVIII", output: 58 },
    { s: "MCMXCIV", output: 1994 },
    { s: "MMMCMXCIX", output: 3999 },
  ];
  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(romanToInt(test.s)).toEqual(test.output);
    });
  });
});

describe("13-Longest common prefix", () => {
  const testy = [
    { strs: ["flower", "flow", "flight"], output: "fl" },
    { strs: ["dog", "racecar", "car"], output: "" },
    { strs: ["a"], output: "a" },
    { strs: ["a", "a"], output: "a" },
    { strs: ["a", "aa"], output: "a" },
  ];
  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(longestCommonPrefix(test.strs)).toEqual(test.output);
    });
  });
});
