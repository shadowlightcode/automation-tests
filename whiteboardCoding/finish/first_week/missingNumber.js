// ### **Objective:**
// Write a JavaScript function to find the missing number in a given sequence.

// ### **Background:**
// - The task involves a sequence of numbers where one number from the sequence is missing.
// - The sequence contains distinct numbers ranging from 0 to **`n`**.
// - The goal is to identify the missing number in the most efficient way possible.

// ### **Task:**
// - Your function should take an array of integers as input.
// - The array represents a sequence from 0 to **`n`** with one number missing.
// - Your function should return the missing number.

// ### **Examples:**
// 1. **Input**: **`[3, 0, 1]`**
//     - Explanation: The sequence should have numbers from 0 to 3. The missing number is 2.
//     - **Expected Output**: **`2`**
// 2. **Input**: **`[0, 1]`**
//     - Explanation: The sequence should have numbers from 0 to 2. The missing number is 2.
//     - **Expected Output**: **`2`**

// ### **Expected Task:**
// Develop a JavaScript function that efficiently finds the missing number in a given sequence.
// Your solution should consider optimizing for time and space complexity. 
// Think about using mathematical formulas or bitwise operations as potential approaches.


//Pseudo code
//1. find the min and max values
//2. convert array to the Set
//3. go over inside the loop and check if set has value or not

function missingNumber(arr) {
// const sorted = arr.sort((a, b) => a - b);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const set = new Set(arr);
  const missing = [];

  for (let i = min; i <= max; i++) {
    if (!set.has(i)) {
      missing.push(i);
    }
  }
  return missing;
}

function missingNumber(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const missing = [];

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}

console.log(missingNumber([0,1,10,8,4,6]));
console.log(missingNumber([3, 0, 1, 8, 6, 10]));//2,4
console.log(missingNumber([]));
console.log(missingNumber([0]));