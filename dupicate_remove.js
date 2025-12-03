function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const sampleArray = [
  "rakib",
  "sakib",
  "rakib",
  "mamun",
  "sakib",
  "jamal",
  "rakib",
];
console.log(removeDuplicates(sampleArray));


//Option 2

// function removeDuplicates(arr) {
//     const uniqueItems = new Set(arr);
//     return Array.from(uniqueItems);
// }

// const sampleArray = [
//   "rakib",
//   "sakib",
//   "rakib",
//   "mamun",
//   "sakib",
//   "jamal",
//   "rakib",
// ];
// console.log(removeDuplicates(sampleArray)); // Output: [1, 2, 3, 4, 5]

