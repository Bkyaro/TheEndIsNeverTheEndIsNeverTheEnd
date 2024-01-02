/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
* Input: l1 = [2,4,3], l2 = [5,6,4]
* Output: [7,0,8]
* Explanation: 342 + 465 = 807.
* Example 2:

* Input: l1 = [0], l2 = [0]
* Output: [0]
* Example 3:

* Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
* Output: [8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const looper = (temp1, temp2, rest = 0) => {
    if (!temp1 && !temp2 && !rest) return null;
    let sum = (temp1?.val || 0) + (temp2?.val || 0) + rest;
    // temp1 即 l1.val  + temp2 即 l2.val + rest 即 上一次相加的结果的进位
    // 比如 temp1 + temp2 = 15，下一次相加时需要加1; temp1 + temp2 = 23, 下一次相加时需要加2
    let newNode = looper(temp1?.next, temp2?.next, Math.floor(sum / 10));

    // sum % 10 即，相加后，如果大于 10，那么原本的位置放的是余数。
    // 比如 相加后 = 15，那么本位为 5
    return new ListNode(sum % 10, newNode);
  };
  return looper(l1, l2);
};

module.exports = addTwoNumbers;
