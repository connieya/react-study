import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { List } from "react-virtualized";

const TodoList = ({ todos, onRemove, toggleBtn }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          removeList={onRemove}
          onToggle={toggleBtn}
          style={style}
        />
      );
    },
    [onRemove, toggleBtn, todos]
  );
  return (
    <List
      className='TodoList'
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: "none" }} // List 에 기본 적용되는 outLine 스타일 제거
    />
  );
};

export default React.memo(TodoList);
