// variable, calculate improvement task

// Q1. Let's make a variable
// Let's save my age and where I'm from in JavaScript variables.
// Age changes every day, so it's a reassignable variables,
// The region of origin does not change, so try saving it to a variable that cannot be reassigned.

// Q1 - A.
let age = 20;
const hometown = 'korea';

// Q2. What will be displayed in the console window when the following code is executed?
var name = 'park';
var id = 0;

function showName() {
  var name = 'kim';
  var id = 1;
  console.log(name);
}

showName();
console.log(id);

// Q2 - A.
// kim
// 0

// Q3. Calculating interest rates
// KIM went to make a deposit at the bank and was very embarrassed to see that the interest rate varies depending on the amount of deposit.
// If the first deposit is less than 50,000 won, the interest rate is 15% per year,
// If the first deposit is more than 50,000 won, the interest rate is 20% per year.
// So, KIM
// (1) If you put the amount of deposits in the variable,
// (2) I'm going to make JavaScript a function that automatically prints out the total deposit amount in the console window after two years
// How can I write the code?

// Q3 - A.
var deposit = 60000;
var depositTotal = 0;

if (deposit >= 50000) {
  depositTotal = deposit * 1.2 * 1.2;
} else {
  depositTotal = deposit * 1.15 * 1.15;
}

console.log(depositTotal);

// Q4. There is a place that makes coffee refills weird. Let's calculate the maximum amount of coffee we can drink.
// There is a cafe that refills two-thirds of the coffee you just drank.
// For example, if you order 90ml of coffee for the first time, the first refill is 60ml, and the next refill is 40ml.
// Then let's write a code in the console window that calculates the maximum amount of coffee you can drink based on the amount of coffee you ordered.

// Q4 - A.
var first = 360;
var coffee = 0;

coffee = first + (first * 2) / 3 + (((first * 2) / 3) * 2) / 3;

console.log(coffee);

// Q5. Let's create a quick quiz UI.
/*
<p>When was Lee born??</p>
<input type="text" id="answer">
<button id="send-answer">submit</button>
*/
// Quiz UI that allows users to write answers to <input> and press the submit button
// 1. If the user answers correctly ('correct');
// 2. If the user answers 3 times and doesn't get it right, let's pop up alert('twit~');

// Q5 - A.
let tryCount = 0;
document.querySelector('#send-answer').addEventListener('click', function () {
  tryCount += 1;
  let answer = document.querySelector('#answer').value;
  if (answer == '1335') {
    alert('correct');
  } else if (tryCount >= 3 && answer != '1335') {
    alert('twit~');
  }
});
