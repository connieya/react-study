import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, toggleBtn }) => {
  return (
    <div className='TodoList'>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeList={onRemove}
          onToggle={toggleBtn}
        />
      ))}
    </div>
  );
};

export default TodoList;
