import a_number from "./a";
import b_number from "./b";
import c_number from "./c";

const $buttonA = document.querySelector("#button-a");
const $buttonB = document.querySelector("#button-b");
const $buttonC = document.querySelector("#button-c");
const $display = document.querySelector("#display");

console.log($buttonA);
$buttonA.addEventListener("click", function () {
  console.log("dd");
  $display.textContent = a_number;
});

$buttonB.addEventListener("click", function () {
  $display.textContent = b_number;
});

$buttonC.addEventListener("click", function () {
  $display.textContent = c_number;
});
