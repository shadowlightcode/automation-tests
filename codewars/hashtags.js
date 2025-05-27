/**The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

// 1
function generateHashtag (str) {
    if(str.length === 0) {
        return false;
    }

    let updatedStr = "#";
    const arr = str.split(" ");
  
    for(const word of arr) {
        if (word.length>0 && word !== " ") {
            updatedStr+= word[0].toUpperCase() + word.slice(1, word.length);
        }
    }

    return (updatedStr.length > 140 || (updatedStr.length === 1 && updatedStr[0] === "#")) ? false : updatedStr;
}

// 2
function generateHashtag(str) {
    if (!str.trim()) return false; // Check for empty or whitespace-only strings

    const hashtag = "#" + str
        .split(/\s+/) // Handle multiple spaces
        .filter(word => word.length > 0) // Remove empty words
        .map(word => word[0].toUpperCase() + word.slice(1)) // Capitalize first letter
        .join(""); // Join words without spaces

    return hashtag.length > 140 ? false : hashtag; // Check length constraint
}

// 3
function generateHashtag (str) {
    if(!str.trim()) {
        return false;
    }

    let hashTag = "#";
    const arr = str.split(" ");
  
    for(const word of arr) {
           if(word.trim()) {
             hashTag+= word[0].toUpperCase() + word.slice(1);
        }
    }
    return (hashTag.length <= 1 || hashTag.length > 140) ? false : hashTag;
}

// console.log(generateHashtag(" ".repeat(200)));
// console.log(generateHashtag("Do We have A Hashtag"));
// console.log(generateHashtag("Codewars"));
// console.log(generateHashtag("Codewars Is Nice"));
// console.log(generateHashtag("Codewars is nice"));
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
console.log(generateHashtag("a".repeat(139)));
// console.log(generateHashtag("a".repeat(140)));