const entryMethods = require("../../leetcode/11-20/entry.js");
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
      expect(entryMethods.maxArea(test.height)).toEqual(test.output);
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
      expect(entryMethods.intToRoman(test.num)).toEqual(test.output);
    });
  });
});

describe("13-Roman to integer", () => {
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
      expect(entryMethods.romanToInt(test.s)).toEqual(test.output);
    });
  });
});

describe("14-Longest common prefix", () => {
  const testy = [
    { strs: ["flower", "flow", "flight"], output: "fl" },
    { strs: ["flower", "flower", "flower", "flower"], output: "flower" },
    { strs: ["dog", "racecar", "car"], output: "" },
    { strs: ["gggii", "ggod", "ggbond"], output: "gg" },
    { strs: ["gg", "gg", "gg"], output: "gg" },
    { strs: ["a"], output: "a" },
    { strs: ["a", "a"], output: "a" },
    { strs: ["a", "aa"], output: "a" },
  ];
  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(entryMethods.longestCommonPrefix(test.strs)).toEqual(test.output);
    });
  });
});

describe("15-Three sums", () => {
  const testy = [
    {
      nums: [-1, 0, 1, 2, -1, -4],
      output: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    { nums: [0, 0, 0], output: [[0, 0, 0]] },
    { nums: [0, 0, 1], output: [] },
  ];
  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(entryMethods.threeSum(test.nums)).toEqual(test.output);
    });
  });
});

describe("16-Three sum closest", () => {
  const testy = [
    {
      nums: [-1, 2, 1, -4],
      target: 1,
      output: 2,
    },
    {
      nums: [0, 0, 0],
      target: 1,
      output: 0,
    },
  ];
  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(entryMethods.threeSumClosest(test.nums, test.target)).toEqual(
        test.output
      );
    });
  });
});

describe("17-Letter combination of phone number", () => {
  const testy = [
    {
      digits: "23",
      output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
    {
      digits: "234",
      output: [
        "adg",
        "adh",
        "adi",
        "aeg",
        "aeh",
        "aei",
        "afg",
        "afh",
        "afi",
        "bdg",
        "bdh",
        "bdi",
        "beg",
        "beh",
        "bei",
        "bfg",
        "bfh",
        "bfi",
        "cdg",
        "cdh",
        "cdi",
        "ceg",
        "ceh",
        "cei",
        "cfg",
        "cfh",
        "cfi",
      ],
    },
    {
      digits: "2",
      output: ["a", "b", "c"],
    },
    {
      digits: "",
      output: [],
    },
  ];
  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(entryMethods.letterCombinations(test.digits)).toEqual(test.output);
    });
  });
});

describe("20-Valid parentheses", () => {
  const testy = [
    {
      s: "()",
      output: true,
    },
    {
      s: "()[]{}",
      output: true,
    },
    {
      s: "(]",
      output: false,
    },
    {
      s: "([)]",
      output: false,
    },
    {
      s: "{[]}",
      output: true,
    },
    {
      s: "(){}}{",
      output: false,
    },
    {
      s: "{{",
      output: false,
    },
  ];
  testy.forEach((test, index) => {
    it(`test${index}`, () => {
      expect(entryMethods.isValid(test.s)).toEqual(test.output);
    });
  });
});
