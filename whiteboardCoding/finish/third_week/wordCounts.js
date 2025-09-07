/** 2. Find Most Common Word
From the frequency object, find the word with the highest count.
👉 Use Object.entries() + reduce.
*/

const objCounts = {
  apple: 3,
  banana: 2,
  cherry: 1
};

function findMostCommonWord(objCounts) {
const mostCommonWord = Object.entries(objCounts).reduce((acc, [word, count]) => count > acc[1] ? [word, count] : acc, ['', 0]);
return mostCommonWord;
}

console.log(findMostCommonWord(objCounts))