const { twoSum } = require("../../leetcode/1-10/1-TwoSum.js");
const { addTwoNumbers } = require("../../leetcode/1-10/2-AddTwoNumbers.js");
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
