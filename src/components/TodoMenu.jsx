import React from "react";
import { CopyIcon } from "../icons/CopyIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { DoneIcon } from "../icons/DoneIcon";
import { RealoadIcon } from "../icons/RealoadIcon";
import { WorkinkIcon } from "../icons/WorkinkIcon";

export const TodoMenu = ({
  handleShowMenu,
  handleDoingTodo,
  handleDeleteTodo,
  handleDoneTodo,
  todo,
}) => {
  return (
    <>
      <div
        className="fixed z-10 h-screen w-screen inset-0"
        onClick={handleShowMenu}
      ></div>
      <ul
        onClick={handleShowMenu}
        className="absolute py-2 z-20 text-sm right-0 top-full bg-white shadow-xl rounded-lg w-40"
      >
        <li>
          <button
            onClick={() => handleDoneTodo(todo)}
            className="flex w-full items-center py-2 px-4 gap-3"
          >
            {todo.done ? <RealoadIcon /> : <DoneIcon />}

            <span className="pointer-events-none">
              {todo.done ? "Reset" : "Done"}
            </span>
          </button>
        </li>
        <li>
          <button
            onClick={() => handleDoingTodo(todo)}
            className="flex w-full items-center py-2 px-4 gap-3"
          >
            <WorkinkIcon />
            <span className=" pointer-events-none">Doing</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center py-2 px-4 gap-3">
            <CopyIcon />
            <span className=" pointer-events-none">Copy</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className="flex items-center w-full  py-2 px-4 gap-3"
          >
            <DeleteIcon /> <span className=" pointer-events-none">Delete</span>
          </button>
        </li>
      </ul>
    </>
  );
};
