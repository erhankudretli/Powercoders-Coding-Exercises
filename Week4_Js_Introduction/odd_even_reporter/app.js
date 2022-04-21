let arr = [];
let givenNumber;
const createNumberArr = () => {
  for (let index = 1; index < 21; index++) {
    arr[index - 1] = index;
  }
};

const RandomiseNumber = () => {
  givenNumber = Math.floor(Math.random() * 21) + 1;
};

const checkGivenNumber = () => {
  if (givenNumber % 2 == 0) {
    console.log("Given Number: " + givenNumber + " = even");
  } else console.log("Given Number: " + givenNumber + " : odd");
};

const showNumberArr = () => {
  console.log(arr);
};

const setApp = () => {
  createNumberArr();
  showNumberArr();
  RandomiseNumber();
  checkGivenNumber();
};

setApp();
