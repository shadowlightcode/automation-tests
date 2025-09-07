/** 5. Find by Condition

Find the first fruit that starts with "b".
👉 Use find.
*/

const arr = [
  'banana',
  'banana',
  'cherry',
  'apple',
  'date',
  'elderberry',
  'elderberry',
  'date',
  'date',
  'apple',
  'apple',
  'apple',
  'cherry',
  'banana',
  'banana',
  'cherry'
]

function findByCondition(arr) {
  return arr.find((item) => item.startsWith('b'));
  
}

console.log(findByCondition(arr));