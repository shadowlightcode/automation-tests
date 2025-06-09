    // **String reverse**. Write a method that will take one string as an argument and return the reverse version of this string.
    // ### **Objective:**
    // Write a JavaScript function to reverse a given string.
    
    // ### **Background:**
    // - Reversing a string involves rearranging its characters so that the first becomes last, the second becomes second to last, and so on.
    // - This task is common in programming interviews to assess understanding of strings and arrays.
    
    // ### **Task:**
    // - Your function should accept a single string as input.
    // - It should return the reversed version of this string.
    
    // ### **Examples:**
    // 1. **Input**: **`"Hello, World!"`**
    //     - Explanation: The string should be reversed character by character.
    //     - **Expected Output**: **`"!dlroW ,olleH"`**
    
    // ### **Expected Task:**
    // Develop a JavaScript function that reverses a given string. 
    // Ensure your solution is efficient and covers edge cases, such as empty strings or strings with only one character. 
    // Consider exploring different methods to reverse a string, like using built-in functions, a loop, or a recursive approach.

    // what should be done:
    //1. function will accept only string
    //2. add check on typeOf
    //3. add check if string is empty
    //4. create a variable that is going to hold the reversed string

    function reversedString(str) {
        if(typeof str !== 'string') return 'Argument type is not string.'
        let reversedStr = '';
        for(let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        return reversedStr;
    }

    console.log(reversedString('Hello World!'));
    console.log(reversedString('q'));
    console.log(reversedString(67));
    console.log(reversedString(''));
    

