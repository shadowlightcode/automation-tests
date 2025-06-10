    // **String palindrome**. 
    // A palindrome is a word, phrase, number, or sequence of words that reads the same backward as forward.
    
    // ### **Objective:**
    // Write a JavaScript function to check if a given string is a palindrome.
    
    // ### **Background:**
    // - A palindrome is a string that reads the same forwards and backwards.
    // - Palindromes are not limited to single words and can include phrases and numbers.
    // - It's important to consider case sensitivity and non-alphanumeric characters when checking for palindromes.
    
    // ### **Task:**
    // - Your function should take a single string as input.
    // - It should return **`true`** if the string is a palindrome and **`false`** otherwise.
    // - The check should be case-insensitive and ignore non-alphanumeric characters.
    
    // ### **Examples:**
    // 1. **Input**: **`"racecar"`**
    //     - Explanation: The string reads the same forwards and backwards.
    //     - **Expected Output**: **`true`**
    // 2. **Input**: **`"hello"`**
    //     - Explanation: The string does not read the same forwards and backwards.
    //     - **Expected Output**: **`false`**
    // 3. **Input**: **`"A man, a plan, a canal, Panama!"`**
    //     - Explanation: When ignoring case and non-alphanumeric characters, the string reads the same forwards and backwards.
    //     - **Expected Output**: **`true`**
    // 4. **Input**: **`"12321"`**
    //     - Explanation: The string reads the same forwards and backwards.
    //     - **Expected Output**: **`true`**
    
    // ### **Expected Task:**
    // Develop a JavaScript function that checks whether a given string is a palindrome. 
    // Your solution should handle case insensitivity and ignore non-alphanumeric characters. 
    // Consider using regular expressions to clean the string and then compare the cleaned string to its reversed version.

    // Pseudocode
    // remove non-alphanumeric characters
    // convert from uppercase 
    // clean regular expression to clean the string
    // return true if palindrom else false

    const isPalindrome = (str) => {
       const clean = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
       let reversed = '';
       for(let i = clean.length-1; i>=0; i--) {
            reversed += clean[i];
       }

       if(reversed === clean) {
        return true
       }

       return false;
    }

    console.log(isPalindrome('racecar'));
    console.log(isPalindrome('12321'));
    console.log(isPalindrome('hello'));
    console.log(isPalindrome('A man, a plan, a canal, Panama!'));


   
