/** 3. Unique Fruits as Objects

Return an array of unique fruit objects, where each object has { name, count }.
👉 Use reduce + map.
Example:

[
  { name: 'apple', count: 4 },
  { name: 'banana', count: 3 },
  ...
]
*/

const arrOfStrings = [
' banana', 
'Banana ', 
' chErRy ', 
' apple ',  
'DAte ', 
'ElderberrY ', 
' ElderberrY ',
' DAte ',
' DAte ',
' apple ',
' apple ',
' apple ',
' chErRy ',
'Banana ', 
'Banana ', 
' chErRy ',
]

function uniqueFruitsObjects(arr) {
    const cleanedArr = arr.map(item => item.toLowerCase().trim());
    const obj = cleanedArr.reduce(accum, item => {
        accum[item] = (accum[item] || 0) + 1;
        return accum;
    }, {});

    const mapped = Object.entries(obj).map(([word, count]) => {return {word, count}});
    return mapped;
}

console.log(uniqueFruitsObjects(arrOfStrings));