// Prime number. 
// A prime number is a number that can only be divided by itself and 1 without remainder.

// Task
//     **Objective**: Write a <JavaScript | Python | Java> function to determine if a given number is a prime number. 
//     ### Background:
//     - A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//     - In other words, a prime number is a number that can only be divided by itself and 1 without leaving any remainder.
//     ### Task:
//     - Your function should take a single integer as input.
//     - It should return **`true`** if the number is a prime, and **`false`** otherwise.
    
//     ### Examples:
//     1. **Input**: **`5`**
//         - Explanation: The number 5 has no divisors other than 1 and 5.
//         - **Expected Output**: **`true`**
//     2. **Input**: **`4`**
//         - Explanation: The number 4 can be divided by 1, 2, and 4. Since it has a divisor other than 1 and itself, it is not a prime number.
//         - **Expected Output**: **`false`**

// Questions to ASK: What type can come as param?

//PseudoCode
// Check if number is non-numeric input
// Check if number is less than 2
// Iterate from 2 to the input number - 1
    // Inside the loop, check if the input number is divisible by any of these numbers
    // If yes, return false (the number is not prime)
// Return true (the number is prime as no divisors were found)

function findPrimeNumber(num) {
    if(typeof num !== "number") {
        return false;
    }

    if(num < 2 ) {
        return false;
    }

    for(let i = 2; i <= num - 1; i++) {
        if(num % i === 0) {
          return false;
        }
    }
    return true;
}

console.log(findPrimeNumber(5));
console.log(findPrimeNumber(-5));
console.log(findPrimeNumber(4.5));
console.log(findPrimeNumber(null));
console.log(findPrimeNumber(undefined));
console.log(findPrimeNumber(0));