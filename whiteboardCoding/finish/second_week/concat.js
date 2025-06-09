    // **String concatenation**: Write code to concatenate two strings without using the **`+`** operator.

    // ### **Objective:**
    // Write a JavaScript function to concatenate two strings without using the **`+`** operator.
    
    // ### **Background:**
    // - String concatenation is the process of joining two or more strings into one.
    // - While the **`+`** operator is commonly used for this in JavaScript, there are other methods to achieve the same result.
    // - Exploring alternative methods can be useful for understanding different aspects of string manipulation in JavaScript.
    
    // ### **Task:**
    // - Your function should accept two strings as input.
    // - It should return a new string that is the concatenation of these two strings, without using the **`+`** operator.
    
    // ### **Examples:**
    // 1. **Input**: **`"Hello"`**, **`", World!"`**
    //     - Explanation: Concatenate the two given strings **`"Hello"`** and **`", World!"`**.
    //     - **Expected Output**: **`"Hello, World!"`**
    
    // ### **Expected Task:**
    // Develop a JavaScript function that concatenates two given strings without using the **`+`** operator. 
    // Explore alternative methods such as using the **`concat()`** method, array methods, or template literals. 
    // Ensure your solution is efficient and can handle different types of inputs, including empty strings.

    //Approach:
    //1. function will accept 2 string
    //2. check if there params are string
    //3. use different method of concat, not +, use spread operator
   
    function concatStr(str1, str2) {
        if(typeof str1 === 'string' && typeof str2 === 'string') {
           let result = [...str1, ...str2];
           return result.join('');
        } 

        return 'input values were not string';
    }

    console.log(concatStr('hello', 'world!'));
    console.log(concatStr('hello', ''));
    console.log(concatStr(12, 'world!'));
    console.log(concatStr('hello', 89));

