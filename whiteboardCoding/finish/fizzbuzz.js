// - **FizzBuzz.** Print numbers from 1 to 100. 
// If a number is divisible by 3 print ***Fizz.
// *** If a number is divisible by 5 print ***Buzz.
// *** If a number is divisible by both 3 and 5 print ***FizzBuzz.***
    
//     ### **Objective:**
//     Write a JavaScript function for the FizzBuzz problem.
//     ### **Background:**
//     - The FizzBuzz problem is a classic test used in coding interviews.
//     - The task is to print numbers from 1 to 100.
//     - For numbers divisible by 3, print "Fizz" instead of the number.
//     - For numbers divisible by 5, print "Buzz".
//     - For numbers divisible by both 3 and 5, print "FizzBuzz".
    
//     ### **Task:**
//     - Your function should print the numbers from 1 to 100.
//     - Replace numbers divisible by 3 with "Fizz".
//     - Replace numbers divisible by 5 with "Buzz".
//     - Replace numbers divisible by both 3 and 5 with "FizzBuzz".
    
//     ### **Examples:**
//     - **Input**: No input required.
//     - **Expected Output**:
//         - 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, ..., 98, "Fizz", "Buzz"

//Approach: 
// create loop with start index 1 and  conditon <= 100
// check if index number %3 === 0 add to result fizz
// check if index number %5 === 0 add to result buzz
// if %5 !== 0  && %3 !== 0 add to result index
// if %5 === 0  && %3 === 0 add to result fizzbuzz

const fizzbuzz = () => {
    let result = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'fizzbuzz';
        } else if (i % 3 === 0) {
            result += 'fizz';
        } else if (i % 5 === 0) {  
            result += 'buzz';
        } else {
            result += i;
        }
    
        if (i < 100) {
            result += ', ';
        }
    }
    return result;
}

const fizzbuzzOptimized = (limit = 100) => {
    const results = [];
    
    for (let i = 1; i <= limit; i++) {
        if (i % 15 === 0) {        // 15 = 3 * 5, more efficient
            results.push('fizzbuzz');
        } else if (i % 3 === 0) {
            results.push('fizz');
        } else if (i % 5 === 0) {
            results.push('buzz');
        } else {
            results.push(i);
        }
    }
    return results.join(', ');
};

console.log(fizzbuzz());
