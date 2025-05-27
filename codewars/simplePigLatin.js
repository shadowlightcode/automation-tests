function pigIt(str){

  return str.split(" ").map(word => 
    word.match(/[a-zA-Z]/) ? word.slice(1, word.length) + word[0] + 'ay ' : word
  ).join('').trim();
}

console.log(pigIt('Hello world !'));


function pigIt(str){
    let result = '';
    const arr = str.split(" ");
    for(const word of arr) {
          const ch = word.charCodeAt(word.length -1);
          if (
             !(ch >= 65 && ch <= 90) &&
              !(ch >= 97 && ch <= 122)
          ) {
              result += word.slice(1, word.length) + word[0]
          } else {
              result += word.slice(1, word.length) + word[0] + 'ay '; 
          }
    }
    return result.trim();
  }
  
  console.log(pigIt('Hello world !'));