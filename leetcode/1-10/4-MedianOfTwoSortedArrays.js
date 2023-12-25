// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let result;

  if (nums1.length == 0) {
    result = findMediant(nums2);
  }
  if (nums2.length == 0) {
    result = findMediant(nums1);
  }
  let conbination = [...nums1, ...nums2];
  //对conbination进行排序
  let sorted = conbination.sort((a, b) => a - b);
  result = findMediant(sorted);

  function findMediant(arr) {
    if (arr.length % 2 == 1) {
      return arr[Math.floor(arr.length / 2)];
    } else {
      return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    }
  }

  return result;
};

/**
 * Fastest on leetcode
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2);
  arr = arr.sort((a, b) => a - b);
  let l = arr.length;

  let median = 0;
  if (l % 2 !== 0) {
    median = arr[(l - 1) / 2];
  } else {
    let medInd = arr[(l - 2) / 2] + arr[l / 2];
    median = medInd / 2;
  }
  return median;
};
/**
 * Smallest on leetcode
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;

  let low = 0;
  let high = m;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const minX =
      partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];

    const maxY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    const minY =
      partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      // Found the correct partition
      if ((m + n) % 2 === 0) {
        // Even total length
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        // Odd total length
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      // Move to the left in nums1
      high = partitionX - 1;
    } else {
      // Move to the right in nums1
      low = partitionX + 1;
    }
  }

  // This line is added to handle the case where the arrays are not sorted
  throw new Error("Input arrays are not sorted!");
};

module.exports = findMedianSortedArrays;
