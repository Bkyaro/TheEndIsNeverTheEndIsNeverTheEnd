// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  if (numRows === 2) {
    let row1 = "";
    let row2 = "";
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        row1 = row1 + s[i];
      } else {
        row2 = row2 + s[i];
      }
    }
    return row1 + row2;
  }

  debugger;
  // 确认首列
  let store = Array.from({ length: numRows }, (_, i) => s[i]);

  let rowFixedMagicMarker = numRows + (numRows - 2);

  store.forEach((rowStore, rowPosition) => {
    if (rowPosition == 0 || rowPosition == numRows) {
      // 行首和行尾，用的同一个增量
      while (s[rowFixedMagicMarker]) {
        store[rowPosition] = store[rowPosition] + s[rowFixedMagicMarker];
        rowFixedMagicMarker = rowFixedMagicMarker * 2;
      }
    }

    let rowSwipeMagicMarker = rowFixedMagicMarker - rowPosition * 2;
    let looperControl = 0;

    while (s[rowSwipeMagicMarker]) {
      if (looperControl % 2 === 0) {
        rowSwipeMagicMarker = rowFixedMagicMarker - rowPosition * 2;
      } else {
        rowSwipeMagicMarker =
          rowFixedMagicMarker - (rowFixedMagicMarker - rowPosition * 2);
      }
      store[rowPosition] = store[rowPosition] + s[rowSwipeMagicMarker];
      looperControl++;
    }
  });

  return store.flat().join("");
};

/**
 * random solution on github
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;
  const grid = Array(numRows).fill("");
  let i = 0,
    down = true;

  for (let c of s) {
    grid[i] += c;
    down ? i++ : i--;
    if (i === numRows - 1 || !i) down = !down;
  }
  return grid.join("");
};

/**
 * lightest on leetcode
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = new Array(s.length);
  let count = 1;
  let flag = 0;
  let key = 1;
  let check = 0;
  while (flag != s.length) {
    for (let i = 0; i < s.length; i++) {
      if (key == count) {
        result[flag] = s[i];
        flag += 1;
      }
      if (count == numRows || check == 1) {
        check = 1;
        count -= 1;
        if (count == 1) {
          check = 0;
        }
        if (count == 0) {
          count = 1;
        }
      } else if (check == 0) {
        count += 1;
      }
    }
    count = 1;
    key += 1;
    check = 0;
  }

  return result.join("");
};

/**
 * fastest on leetcode
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;

  let n = s.length;
  let charsInSection = numRows * 2 - 2;
  let res = "";

  for (let row = 0; row < numRows; row++) {
    let i = row;
    while (i < n) {
      res += s[i];

      if (row != 0 && row != numRows - 1) {
        let charsInBetween = charsInSection - 2 * row;
        let secondIndex = i + charsInBetween;
        if (secondIndex < n) res += s[secondIndex];
      }
      i += charsInSection;
    }
  }
  return res;
};

module.exports = convert;
