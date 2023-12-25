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
 * method2
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays2 = function (nums1, nums2) {
  return !nums1.length
    ? findMediant(nums2)
    : !nums2.length
    ? findMediant(nums1)
    : findMediant([...nums1, ...nums2].sort((a, b) => a - b));

  function findMediant(arr) {
    if (arr.length % 2 == 1) {
      return arr[Math.floor(arr.length / 2)];
    } else {
      return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    }
  }
};

module.exports = findMedianSortedArrays;
