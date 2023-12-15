// array & for

// Q1. Creating a function that finds the name in the array.
// Let's create a function that prints the name in the console window when you put the name in the function as a parameter and the name is in the attendance book.

// Example of operation:
// Name Find ('yh') : When written, the console window should display the word 'here!'.
// Name Find ('noname') : This should prevent any characters from appearing in the console window.
// (Conditions) Do not use JavaScript basic functions such as find and indexOf found in strange places

// Q1 - A.
let attendanceBook = ['hm', 'yq', 'yh', 'jh', 'yh'];
function nameFinder(name) {
  for (var i = 0; i < attendanceBook.length; i++) {
    if ( name == attendanceBook[i]) {
      console.log('here!')

      return
    }
  }
}

nameFinder('yh');
nameFinder('noname');

// Q2. Multiplication table (2 ~ 9)

// Q2 - A.
for(let i = 2; i <= 9; i++) {
  console.log(`🤍 ${i} start 🤍`)
  for(let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`)
  }
}

// Q3. Creating an average score calculator
// In a function, put all the existing test scores in the array data and enter them as the first parameter.
// If I enter this November's test results as the second parameter, I would like to tell you the results of how good my November grades are compared to the average of my previous grades.

// Example of operation:
// If you write a function ([10, 20, 30, 40, 50], 40), you should see "10 points above average" in the console window. (Because the average is 30)
// When you write a function ([40, 40, 40], 20), the console window should say, "It's 20 points below average..." (Because the average is 40)

function avgCalculator(score1, score2) {
  let result = 0;

  score1.forEach((item) => {
    result += item;
  });
  result = result / score1.length ;
  result = score2 - result;

  if (result > 0) {
    console.log(`${result} points above average!`)
  } else if (result < 0) {
    console.log(`It's ${result} points below average...`)
  } else {
    console.log(`you same`)
  }
}

avgCalculator([10, 20, 30, 40, 50], 40);
avgCalculator([40, 40, 40], 20);