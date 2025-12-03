function maxRepte(arr) {
  const countMap = new Map();
  let maxCount = 0;
    let maxItem = null;
    for (const item of arr) {
        const count = (countMap.get(item) || 0) + 1;
        countMap.set(item, count);
        if (count > maxCount) {
            maxCount = count;
            maxItem = item;
        }
    }
    return maxItem;
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
console.log(maxRepte(sampleArray)); // Output: "rakib"