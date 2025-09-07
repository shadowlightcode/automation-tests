/** 1. Word Frequency Counter
Given an array of words (like your arrOfStrings),
clean them (trim(), toLowerCase()) and use reduce to create an object with counts.
Output:
{ banana: 3, cherry: 3, apple: 4, date: 3, elderberry: 2 }
*/

//USED map and reduce//
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

/**
 * 
 * If obj[key] already has a value (e.g. 1, 2, 10) → use that.
 * If acc[key] is undefined, null, 0, false, or an empty string → use 0.
 */

function wordFrequencyCounter(arr) {
    const cleanedArr = arrOfStrings.map(item => item.toLowerCase().trim());

    const objectWithCounts = cleanedArr.reduce((obj, item) => {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    }, {})

    return objectWithCounts;
}

console.log(wordFrequencyCounter(arrOfStrings));