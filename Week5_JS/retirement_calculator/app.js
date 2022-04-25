/**
 * Create a program that determines how many years you have left until retirement and ^
 * the year you can retire. It should prompt for your current age and the age you want
 * to retire and display the output as shown in the example that follows on the next slide.
 */

/**
 * What is your age? 25
At what age would you like to retire? 65
You have 40 years left until you can retire.
It's 2020, so you can retire in 2060.
 */

// input from user

let yourAge;
// input validation
do {
  yourAge = prompt("type your age pls");
} while (!Number.isInteger(parseInt(yourAge)) || yourAge < 0 || yourAge > 135);

// input validation

let RetirementAge;
do {
  RetirementAge = prompt("type pls What age would you like to retire");
} while (
  !Number.isInteger(parseInt(RetirementAge)) ||
  RetirementAge < yourAge ||
  RetirementAge > 135
);

// output
let howManyYearsLeft = RetirementAge - yourAge; // output
const today = new Date();
const year = today.getFullYear(); //
let RetirementYear = year + howManyYearsLeft; // output

console.log(`You have ${howManyYearsLeft} years left until you can retire `);

console.log(`Its ${year}, so you can retire in ${RetirementYear}`);
