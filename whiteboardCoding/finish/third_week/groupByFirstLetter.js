/** 7. Group by First Letter
Use reduce to group words by their first letter.
👉 Example:
{
  a: ['apple'],
  b: ['banana'],
  c: ['cherry'],
  d: ['date'],
  e: ['elderberry']
}
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

function groupByFirstLetter(arr) {
    arr.reduce((accum, item) => {
        const firstLetter = item[0];
        if(!accum[firstLetter]) {
            accum[firstLetter] = [];
        } 

        accum[firstLetter].push(item);
        return accum;
    }, {});
}

console.log(groupByFirstLetter(arr));