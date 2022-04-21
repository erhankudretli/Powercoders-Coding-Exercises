const multipleby = 9;
let arr = [];
const createNumberArr = () => {
  for (let index = 1; index < 11; index++) {
    arr[index - 1] = index;
  }
};
createNumberArr();

const MultipledArr = arr.map((number) => {
  return number * multipleby;
});
console.log(MultipledArr);
