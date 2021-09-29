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

  return (
    <li
      key={todo.id}
      className="relative flex items-center bg-white rounded-md shadow-lg cursor-pointer select-none"
    >
      <span
        className={"w-full flex items-center py-2 px-4  space-x-4"}
         
      >
        <BtnDone todo={todo} />
        <p
          className={
            todo.done
              ? "w-full line-through opacity-70 text-sm font-medium break-word"
              : "text-sm w-full font-medium break-word"
          }
        >
          {todo.task}
        </p>
      </span>
      <BtnOptions handleShowMenu={handleShowMenu} />
      {showMenu && (
        <TodoMenu
          handleShowMenu={handleShowMenu}
          handleDeleteTodo={handleDeleteTodo}
          handleDoingTodo={handleDoingTodo}
          handleDoneTodo={handleDoneTodo}
          todo={todo}
        />
      )}
    </li>
  );
};
