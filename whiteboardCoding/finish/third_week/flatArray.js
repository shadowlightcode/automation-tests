/**
4. Flatten Nested Arrays (Medium)

👉 Convert nested arrays into a single-level array.

/*/ 
const input = [1, [2, [3, 4], 5]]
const output = [1, 2, 3, 4, 5]

function flattenNestedArrays(arr) {
  const result =  arr.flat(Infinity);
  return result;
}


console.log(flattenNestedArrays(input));