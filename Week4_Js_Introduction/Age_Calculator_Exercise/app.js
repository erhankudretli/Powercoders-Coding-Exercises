let myBirthYear = 1992;
let aYearinFuture = 2043;
let myAge = aYearinFuture - myBirthYear;
let myPossibleAge;

const calculatePossibleAge = () => {
  myPossibleAge = myAge - 1;
};

const showResult = () => {
  console.log(
    "I will be either " +
      myPossibleAge +
      " or " +
      myAge +
      " in " +
      aYearinFuture
  );
};
calculatePossibleAge();
showResult();
