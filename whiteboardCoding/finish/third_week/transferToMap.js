/** 8. Transform to Map Object

Convert the frequency object into a real Map.
👉 Example:
Map { 'apple' => 4, 'banana' => 3, ... }
*/

const counts = {
  apple: 4,
  banana: 3,
  cherry: 2,
  date: 1
};

function transformToMapObj(counts) {
    return new Map(Object.entries(counts));
}

console.log(transformToMapObj(counts));