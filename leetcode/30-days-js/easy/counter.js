// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 
// 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = 0;
    return function() {
        let result = counter === 0 ? n: counter+n;
        counter++;
        return result;
    };
};
  const counter = createCounter(10)
 console.log(counter()); // 10
 console.log(counter()); // 11
 console.log(counter()); // 12
