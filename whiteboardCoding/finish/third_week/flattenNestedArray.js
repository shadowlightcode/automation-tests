/** 10. Flatten Nested Arrays

Given:
const nested = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']];
Flatten it into a single array with flatMap.
*/

const nested = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']];

function flattenNestedArrays(arr) {
  
  return nested.flatMap(item => item);
}

console.log(flattenNestedArrays(nested));


