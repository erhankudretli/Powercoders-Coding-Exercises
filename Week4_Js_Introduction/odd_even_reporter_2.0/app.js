let arr = [];
const createNumberArr = () => {
  for (let index = 1; index < 21; index++) {
    arr[index - 1] = index;
    checkTheNumber(index);
  }
};

const checkTheNumber = (index) => {
  if (index % 2 == 0) {
    showResult(index);
  } else console.log(index + " is an ODD Number");
};

const showResult = (index) => {
  console.log(index + " is an Even Number");
};

createNumberArr();

let arr2 = Array.from(Array(21).keys());
console.log("array 2: " + arr2);
