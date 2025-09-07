/**
 * 6. Check Conditions
 * Does every fruit contain the letter "a"? (every)
 * Does any fruit contain the letter "z"? (some)
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
  'cherry',
  'zirra'
]
 
 function checkCondition(arr) {
   
    const everyFruitContain = arr.every((item) => item.includes('a'));
    console.log(everyFruitContain);
    
    const anyFruitContain = arr.some((item) => item.includes('z'));
    console.log(anyFruitContain);
 }
 
 checkCondition(arr)