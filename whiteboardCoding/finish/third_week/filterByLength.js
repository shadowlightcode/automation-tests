/** 4. Filter by Length

Filter out fruits with a name length less than 6 characters.
👉 Use filter.
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

function filterByLength(arr) {
  const cleaned = arr.map((item) => item.toLowerCase().trim());
  return cleaned.filter((item) => item.length < 6 );
}

console.log(filterByLength(arrOfStrings));