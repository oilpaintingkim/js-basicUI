// function

// Q1. If you type minutes and seconds into the parameters in order of the function, try to create a function that returns by changing it in ms.
// (1s == 1000ms)

// Q1 - A.
function msChanger(m, s) {
  m *= 60000;
  s *= 1000;
  return m + s;
}
// or
function msChanger2(m, s) {
  let result = (m * 60 + s) * 1000;
  return result;
}

console.log(msChanger(1, 30));
console.log(msChanger2(2, 10));

// Q2. Create a function that returns a 10% discount when you enter the price into the parameter.
// Enter the first purchase also true/false in the parameter.
// If your first purchase is correct, you need to give us a discount of $1.50.

// Q2 - A.
function discounter(money, bool) {
  let total = 0;
  total = money * 0.9;
  if (bool == true) {
    total = total - 1.5;
  }

  return total;
}

console.log(discounter(10, true));
