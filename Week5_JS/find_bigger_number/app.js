/**
 * Declare 2 variables, both numbers
    Compare which number is greater
    Log the output, e.g. "The greater number of 5 and 10 is 10."
Add an output for the else statement, e.g. "The smaller number of 5 and 10 is 5."
 * 
 * 
 */

let number1 = prompt(`Please write first number`);
let number2 = prompt(`please write second number`);

if (number1 > number2) {
  console.log(`${number1} is bigger then ${number2} `);
} else if (number1 === number2) {
  console.log(`${number2} is equal to ${number1} `);
} else {
  console.log(`${number1} is smaller then ${number2} `);
}
