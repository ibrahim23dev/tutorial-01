// (a + b)^2 = a^2 + 2ab + b^2
function squareAdd(a, b) {
  return a * a + 2 * a * b + b * b;
}

// (2x + 4y)^2
function formula(x, y) {
  return squareAdd(2 * x, 4 * y);
}

console.log(formula(3, 2));
