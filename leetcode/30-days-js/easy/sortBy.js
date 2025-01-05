// Given an array arr and a function fn, return a sorted array sortedArr. 
// You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
// sortedArr must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.


//[5,4,1,2,3]
var sortBy = function (arr, fn) {
    let temp;
    let sorted = false
    while (!sorted){
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
            sorted=false;
        }
    }
}
    return arr;
};

console.log(sortBy( [[3, 4], [5, 2], [10, 1]]));

var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};