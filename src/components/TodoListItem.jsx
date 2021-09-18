import React, { useState } from "react";
import { BtnOptions } from "./BtnOptions";
import { BtnDone } from "./BtnDone";
import { TodoMenu } from "./TodoMenu";

export const TodoListItem = ({
  todo,
  handleDoneTodo,
  handleDeleteTodo,
  handleDoingTodo,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);

  const handleState = (id, done, doing) => {
    if (!done && !doing) {
      handleDoingTodo(id);
    } else if (doing) {
      handleDoneTodo(id);
    } else if (done) {
      handleDoneTodo(id);
    }
  };
  return (
    <li
      key={todo.id}
      className="relative flex items-center bg-white rounded-md shadow-lg cursor-pointer select-none"
    >
      <span
        className={"w-full flex items-center py-2 px-4  space-x-4"}
        onClick={() => handleState(todo.id, todo.done, todo.doing)}
      >
        <BtnDone todo={todo} />
        <p
          className={
            todo.done
              ? "w-full line-through opacity-70 text-sm font-medium break-all"
              : "text-sm w-full font-medium break-all"
          }
        >
          {todo.todo}
        </p>
      </span>
      <BtnOptions handleShowMenu={handleShowMenu} />
      {showMenu && (
        <TodoMenu
          handleShowMenu={handleShowMenu}
          handleDeleteTodo={handleDeleteTodo}
          handleDoingTodo={handleDoingTodo}
          handleDoneTodo={handleDoneTodo}
          id={todo.id}
          done={todo.done}
          doing={todo.doing}
        />
      )}
    </li>
  );
};
