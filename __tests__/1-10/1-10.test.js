const { twoSum } = require("../../leetcode/1-10/1-TwoSum.js");
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
