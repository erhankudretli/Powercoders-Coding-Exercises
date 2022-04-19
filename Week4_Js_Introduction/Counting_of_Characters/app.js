function CalculateChars() {
  let text = document.getElementById("input").value;
  document.getElementById("input-value").innerText =
    "You typed: " + " " + text + "";
  console.log(text);
  countchar();
}

function countchar() {
  let text = document.getElementById("input").value;
  document.getElementById("number").innerText =
    "the number of characters you typed :" + text.length;
}
