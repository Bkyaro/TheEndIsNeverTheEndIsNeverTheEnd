/*
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // create a map to store loop item
  let storage = new Map();

  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // get the subtract value
    let subtract = target - nums[i];

    // if the subtract value is in the map, return the index of the subtract value and the current index
    if (storage.get(subtract) >= 0) {
      return [storage.get(subtract), i];
    }

    // if the subtract value is not in the map, add the current value and index to the map
    storage.set(nums[i], i);
  }
};
module.exports = twoSum;

// timecomplexity: O(n)
