// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:
// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const n = nums.length;
  let ans = 0;
  let diff = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      const tmp = Math.abs(target - sum);
      if (tmp < diff) {
        ans = sum;
        diff = tmp;
      }

      if (sum > target) k--;
      else j++;
    }
  }
  return ans;
};

/**
 * fastest on leetcode
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let number = Infinity;
  let Val = 0;
  let flag = 0;
  let k = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum == target) {
          flag = 1;
          Val = sum;
          break;
        } else {
          let diff = Math.abs(sum - target);
          if (diff < number) {
            Val = sum;
            number = diff;
          }
        }
        if (flag == 1) {
          break;
        }
      }
      if (flag == 1) {
        break;
      }
    }
  }
  return Val;
};

module.exports = threeSumClosest;
