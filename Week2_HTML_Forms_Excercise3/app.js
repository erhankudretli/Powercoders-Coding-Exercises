function myfunction(e) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
  console.log(e);
  e.className += " active";
}
