/*
* 

*/
let amountOfBill;
let percentageOfBill;
let TipAmount;
const takeAmountofBill = () => {
  amountOfBill = document.getElementById("bill-amount").value;
  parseInt(amountOfBill);
  console.log(amountOfBill);
};

const decidePercentageofTip = (e) => {
  percentageOfBill = parseInt(e.value);

  console.log(typeof percentageOfBill);
};

const calculateAmountofTip = () => {
  takeAmountofBill();
  TipAmount = (amountOfBill * percentageOfBill) / 100;
  console.log(TipAmount);
  showResult();
};

const showResult = () => {
  document.getElementById("result").innerHTML = `Your Tip is: ${TipAmount}`;
};
