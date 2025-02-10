const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
    if(begin === end && end == step) return begin;
   
     let lastDigit = begin;
     let result = begin;
     while(lastDigit < end) {
        lastDigit += step;
        if(lastDigit < end) {
            result += lastDigit;       
        } else if(lastDigit === end) {
            result += end;
        }
     }
     return result;
 };

 console.log(sequenceSum(1, 5, 3));