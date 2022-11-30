const colors = document.querySelector(".colors");
const red = document.querySelector(".red");
const grey = document.querySelector(".grey");
const blue = document.querySelector(".blue");
const orange = document.querySelector(".orange");
const btnHamburger = document.querySelector(".btn-hamburger");

function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load", function () {
  changeBackground("blue");
});

red.addEventListener("click", function () {
  changeBackground("red");
  colors.classList.add("hidden");
});

grey.addEventListener("click", function () {
  changeBackground("grey");
  colors.classList.add("hidden");
});
blue.addEventListener("click", function () {
  changeBackground("blue");
  colors.classList.add("hidden");
});

orange.addEventListener("click", function () {
  changeBackground("orange");
  colors.classList.add("hidden");
});
btnHamburger.addEventListener("mouseover", function () {
  colors.classList.remove("hidden");
});
