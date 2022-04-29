// Get The HTML ELEMENTS
let myHTag = document.getElementById("h1");
let btnH = document.getElementById("btn-h");
let myPTag = document.getElementsByTagName("p")[0];
let myAtag = document.getElementsByTagName("a")[0];
let Hcounter = 0;

btnH.addEventListener("click", () => {
  Hcounter += 1;
  myHTag.innerHTML += " " + Hcounter;
});
