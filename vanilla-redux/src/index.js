import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINNUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}; // data 를 변경하는 함수

const countStore = createStore(countModifier);

// 스토어에 변화가 있을 때마다 호출된다.
const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

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
  countStore.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});

const input = document.querySelector("input");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", dispatchDeleteTodo);
    btn.innerText = "DEL";
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintTodos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

form.addEventListener("submit", onSubmit);
