// 12 a,b,c,d,e,f,g,h,i,j,k,l- m

function printerError(str) {
    let countGoodColor = 0; 
    const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];

   for(const l of str) {
     if(arr.includes(l)) {
        countGoodColor++;
     }
   }
   return (str.length-countGoodColor) + '/' + countGoodColor;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm"));