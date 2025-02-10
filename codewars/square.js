var isSquare = function(n){
    if(n > 0) {
        let sqrtN = Math.sqrt(n);
        return sqrtN === Math.floor(sqrtN); 
    }
    return false; 
  }


  console.log(isSquare(-1));