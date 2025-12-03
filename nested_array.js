function countMoney(beg) {
    let total = 0;

    for (const item of beg) {
        if (Array.isArray(item)) {
            total += countMoney(item);
        } else {
            total += item;
        }
    }
    return total;
}

const moneyBag = [1, [2, 3], [4, [5, 10]], 7];
console.log(countMoney(moneyBag)); // Output: 28