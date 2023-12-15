// if/else function improvement task

// Q1. 369 games
// A function that determines whether or not a number is a multiple of 3 if you put a number in the function.
// Example of execution results:
// Game (6): If you run it, it's a multiple of 3, so the word "applause" should appear in the console window.
// Game (12): If you run it, it's a multiple of 3, so the word "clap" should appear in the console window.
// Game (11): If you run it, it's not a multiple of 3, so the word "pass" should appear in the console window.

// Q1 - A.
function game369(number) {
  if (number % 3 == 0) {
    console.log('clap!');
  } else {
    console.log('pass!');
  }
}

game369(3);

// Q2. 369 games upgrade
// 369 game upgrade version is correct to clap in multiples of 3, but you have to clap twice in multiples of 9.

// Q2 - A.
function game369V2(number) {
  if (number % 3 == 0) {
    if (number % 9 == 0) {
      console.log('clap! clap!');
      return;
    }
    console.log('clap!');
  } else {
    console.log('pass!');
  }

  // or (i think that is better...)
  if (number % 9 == 0) {
    console.log('clap! clap!');
  } else if (number % 3 == 0) {
    console.log('pass!');
  } else {
    console.log('pass!');
  }
}

game369V2(9);

// Q3. Create a function that tells you if you have passed when you enter your test score.
// There are two subjects for the A exam.
// Each subject has a perfect score of 100, but if you get more than 120 points in both subjects, you will pass.
// However, if a subject has less than 40 points, it will be rejected due to a fall.
// If you enter 2 subject scores as parameters, create a function that outputs pass or fail in the console window.

// Example of execution results:
// Pass (70, 70): The total score is 120, so 'pass' must be displayed in the console window.
// Pass (30, 100): One error is missing at execution, so 'fail' must be displayed in the console window.
// Pass (50, 50): Total score is less than 120 when running, so 'fail' must be displayed in the console window.

// Q3 - A.
function isPassed(test1, test2) {
  if (test1 < 40 || test2 < 40 || test1 + test2 < 120) {
    console.log('fail..');
  } else {
    console.log('pass!');
  }
}
isPassed(30, 100);

// Q1 upgrade 1
// It's not clapping in multiples of three, it's making the 'clap' output when the last digit is a number ending in 3, 6, 9.
function game369V3(number) {
  number = number.toString(); // Convert to string
  number = number.charAt(number.length - 1); // Get the last letter
  if ((number == 3) | (number == 6) | (number == 9)) {
    console.log('clap!');
  } else {
    console.log('pass!');
  }
}
game369V3(16);

// Q1 upgrade 2
// original 369 difficult version (ex 369! -> clap!clap!clap!)
function game369V4(number) {
  number = number.toString(); // Convert to string
  number = Array.from(number); // Convert to array

  let nlength = number.filter(
    (value) => value == 3 || value == 6 || value == 9
  ); // Gets the value that matches the condition as a filter function and returns it to the array
  console.log('clap!'.repeat(nlength.length)); // repeat!
}
game369V4(3); // clap!
game369V4(136); // clap!clap!
game369V4(369); // clap!clap!clap!

// Q3 upgrade
// If someone enters a non-numerical number between 0 and 100, they're trying to alert you not to play around.
function isPassedV2(test1, test2) {
  const regex = /[0-9]/g;
  if (!(regex.test(test1) && regex.test(test2))) {
    console.log('u r not human!');
    return;
  }
  if (test1 < 0 || test1 > 100 || test2 < 0 || test2 > 100) {
    console.log('sorry! please enter 0 ~ 100 number!');
    return;
  }

  if (test1 < 40 || test2 < 40 || test1 + test2 < 120) {
    console.log('fail..');
  } else {
    console.log('pass!');
  }
}

isPassedV2('hello', 100);
