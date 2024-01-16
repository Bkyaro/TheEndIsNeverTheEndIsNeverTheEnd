// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 正向排序，方便双指针解决
  let sorted = nums.sort((a, b) => a - b);
  // 待返回的 result
  let result = [];
  // 题目目标是三者和为 0，以 0 作为边界。
  let border = 0;
  // 由于后面会用双指针，此处的长度需要-2。循环排序后的数组，循环标记为左指针
  for (let left = 0; left < sorted.length - 2; left++) {
    // 如果左指针已经大于 0，可以不继续往下了。因为数组已经是正向排序，0 往后都是大于 0 的数字，相加不可能为 0
    if (sorted[left] > border) {
      break;
    }
    // 如果当前左指针不是最左，且比上一个左指针相等，就跳过，避免重复
    if (left > 0 && sorted[left] === sorted[left - 1]) {
      continue;
    }
    // 定义在左指针和右指针之间的滑块 slider
    let slider = left + 1;
    // 定义右指针
    let right = sorted.length - 1;
    // 当滑块比右指针小时，循环
    while (slider < right) {
      // 计算当前和
      let sum = sorted[left] + sorted[slider] + sorted[right];
      // 如果和为 0
      if (sum === border) {
        // 推入答案
        result.push([sorted[left], sorted[slider], sorted[right]]);
        // 推入后，如果下一个滑块和当前滑块相等，滑块右移一位
        while (sorted[slider] === sorted[slider + 1]) slider++;
        // 推入后，如果下一个右指针和当前右指针相等，右指针左移一位
        while (sorted[right] === sorted[right - 1]) right--;
        // 再次移动滑块和右指针
        slider++;
        right--;
      } else if (sum < border) {
        // 如果和小于 0，滑块自增
        slider++;
      } else {
        // 如果和大于 0，右指针自减
        right--;
      }
    }
  }
  return result;
};

module.exports = threeSum;
