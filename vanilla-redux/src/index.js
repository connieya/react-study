import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  }
  if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
}; // data 를 변경하는 함수

const countStore = createStore(countModifier);

// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count++;
//   updateText();
// };

// const handleMinus = () => {
//   count--;
//   updateText();
// };

add.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD" });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});

console.log(countStore.getState());
