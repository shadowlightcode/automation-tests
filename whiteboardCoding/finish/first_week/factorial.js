 //Calculate the factorial of a given number.
    // ### **Objective:**
    // Write a JavaScript function to calculate the factorial of a given number.

    // ### **Background:**
    // - A factorial of a non-negative integer **`n`** is the product of all positive integers less than or equal to **`n`**.
    // - The factorial of **`n`** is denoted as **`n!`**.
    // - For example, the factorial of 5 (denoted as **`5!`**) is 5 × 4 × 3 × 2 × 1 = 120.

    // ### **Task:**
    // - Your function should accept a single integer **`n`** as input.
    // - It should return the factorial of **`n`**.
    
    // ### **Examples:**
    // 1. **Input**: **`5`**
    //     - Explanation: The factorial of 5 (5!) is calculated as 5 × 4 × 3 × 2 × 1.
    //     - **Expected Output**: **`120`**
    // 2. **Input**: **`3`**
    //     - Explanation: The factorial of 3 (3!) is calculated as 3 × 2 × 1.
    //     - **Expected Output**: **`6`**
    
    // ### **Expected Task:**
    // Develop a JavaScript function that efficiently calculates the factorial of a given number.
    // Your solution should handle edge cases (like 0 and negative numbers) and be optimized for performance.
    // Consider using both iterative and recursive approaches to understand different methodologies.

//PseudoCode
    // Check if n is non-numeric input
    // Check that factorial of 0 is 1 !0 = 1
    // Throw error in case of negative numbers
    // Iterate from 1 to the input n
        // Inside the loop, count the number that should be added to the sequence
    // Return the number

function factorialIterApproach(n) {
    let result = 1;

    if(typeof n !== 'number') { 
        return 'n was not a number';
    }

    if (n < 0) {
        return 'Factorial is not defined for negative numbers';
    }

    if (n === 0) {
        return 1; 
    }

    for(let i = n; i >=1; i--) {
            result = result * i; 
    }
    return result;
}

console.log(factorialIterApproach(5));
console.log(factorialIterApproach(0));
console.log(factorialIterApproach(null));
console.log(factorialIterApproach(-1));
//5*4*3*2*1

function factorialRecursionApproach(n) {
    if (typeof n !== 'number') {
        return 'Input must be an integer number';
    }

    if (n < 0) {
        return 'Factorial is not defined for negative numbers';
    }

    if (n === 0) {
        return 1; 
    }

    return n * factorialRecursionApproach(n - 1);
}

console.log(factorialRecursionApproach(5));
console.log(factorialRecursionApproach(0));
console.log(factorialRecursionApproach(null));
console.log(factorialRecursionApproach(-1));