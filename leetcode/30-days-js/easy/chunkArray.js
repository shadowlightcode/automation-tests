// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size.
// The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
//#1
var chunk = function (arr, size) {
    let result = [];
    let mid = [];
    if (arr.length > 0) {
        for (let i = 0; i <= arr.length; i++) {
            if (i !== arr.length) {
                if (mid.length === size) {
                    result.push(mid);
                    mid = [];
                    mid.push(arr[i]);
                } else {
                    mid.push(arr[i]);
                }
            } else {
                result.push(mid);
            }
        }
    }
    return result;
};

//#2
var chunk = function (arr, size) {
    let result = [];
    let mid = [];
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            mid.push(arr[i]);
            if (mid.length === size) {
                result.push(mid);
                mid = [];
            }
        }
        if (mid.length > 0) {
            result.push(mid);
        }
    }
    return result;
};
