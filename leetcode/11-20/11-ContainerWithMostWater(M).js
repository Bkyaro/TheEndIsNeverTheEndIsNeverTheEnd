// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// IMAGE DEMONSTRATION: import image from "../../assets/11-ContainerWithMostWater.png";
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let array = height;
  let result = 0;
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    result = Math.max(
      result,
      Math.min(array[left], array[right]) * (right - left)
    );
    if (array[left] < array[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};

/**
 * lightest on leetcode
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;

  const l = height.length;
  for (let left = 0; left < l; left++) {
    for (let right = l - 1; right > left; right--) {
      const min = Math.min(height[left], height[right]);

      maxArea = Math.max((right - left) * min, maxArea);

      if (height[left] === height[right]) {
        break;
      }
    }
  }

  return maxArea;
};

/**
 * fastest on leetcode
 * @param {number[]} height
 * @return {number}
 */

function findMax(maxWater, currentWater) {
  return maxWater > currentWater ? maxWater : currentWater;
}
var maxArea = function (height) {
  let i = 0,
    arrayLength = height.length,
    start = height[i],
    j = arrayLength - 1,
    end = height[j],
    maxWater = 0,
    k = j;
  while (k > 0) {
    if (start > end) {
      maxWater = findMax(maxWater, end * (j - i));
      j -= 1;
      end = height[j];
    } else {
      maxWater = findMax(maxWater, start * (j - i));
      i += 1;
      start = height[i];
    }
    k--;
  }
  return maxWater;
};

module.exports = maxArea;
