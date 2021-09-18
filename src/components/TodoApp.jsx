import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";
import { TodoList } from "./TodoList";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDoneTodo = (toDo) => {
    dispatch({
      type: "done",
      payload: toDo,
    });
  };
  const handleDoingTodo = (todoId) => {
    dispatch({
      type: "doing",
      payload: todoId,
    });
  };
  const handleAddTodo = (todoId) => {
    dispatch({
      type: "add",
      payload: todoId,
    });
  };
  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: "delete",
      payload: todoId,
    });
  };

  return (
    <div className="px-4 text-midnight-500 relative min-h-screen wrapper-1000 mx-auto">
      <TodoList
        state={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleDoneTodo={handleDoneTodo}
        handleAddTodo={handleAddTodo}
        handleDoingTodo={handleDoingTodo}
      />
    </div>
  );
};
