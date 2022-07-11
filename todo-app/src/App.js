import React, { useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리엑트의 기초 알아보기",
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;
