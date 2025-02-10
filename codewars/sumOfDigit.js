function digitalRoot(n) {
    let sum = 0;
    const str = n.toString();
    if (n < 10) return n;
    for(const a of str) { 
        sum += Number(a);} 
  return digitalRoot(sum);
}
  console.log(digitalRoot(34534534));

 