/**

 * Remove Duplicates (Easy)
Given an array of numbers, return a new array without duplicates.
// Example
input = [1, 2, 2, 3, 4, 4];
output = [1, 2, 3, 4];

*/


const input = [1, 2, 2, 3, 4, 4];
//1
function deleteDuplicates(arr) {
  const set = new Set();
  for(let i of arr) {
      set.add(i);
  }
  return set;
  
}

//2

function deleteDuplicates(arr) {

let temp = [];
for(let i= 0;  i < arr.length; i++ ) {
  if(!temp.includes(arr[i])) {
    temp.push(arr[i]);
  }
}

return temp;
  
}


console.log(deleteDuplicates(input));