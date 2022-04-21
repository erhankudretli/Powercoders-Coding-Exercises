let arr = [];
for (let index = 1; index < 21; index++) {
  arr[index - 1] = index;
}
console.log(arr);
let givenNumber = Math.floor(Math.random() * 21) + 1;

const checkGivenNumber = () => {
  if (givenNumber % 2 == 0) {
    console.log("Given Number: " + givenNumber + " = even");
  } else console.log("Given Number: " + givenNumber + " : odd");
};
checkGivenNumber();
