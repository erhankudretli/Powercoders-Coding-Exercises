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
  } else console.log(index + " is a ODD Number");
};

const showResult = (index) => {
  console.log(index + " is a Even Number");
};

const setApp = () => {
  createNumberArr();
  checkTheNumber();
  showResult();
};
setApp();
