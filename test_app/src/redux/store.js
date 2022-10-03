import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// redux toolkit 을 사용하기 전

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addTodo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteTodo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter((todo) => todo.id !== action.id);
//     default:
//       return state;
//   }
// };

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    state.filter((toDo) => toDo.id !== action.payload);
  },
});

const stroe = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default stroe;
