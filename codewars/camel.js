// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(str) {
  let result = "";
  let count;
    if(str.length > 0 ) {
      for(const letter of str) {
        if(letter === letter.toUpperCase()) {
          count++;
          result += " ";
        }
        result += letter;
    }

      return count>0 ? result : "";
    }
      return "";
  }

  console.log(solution('camelCasingTest'));

