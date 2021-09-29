import React, { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { UserContext } from "../services/useContext";

export const TodoAdd = ({ handleAddTodo }) => {
  const { session } = useContext(UserContext);
  const [{ task }, handeInputChange, reset] = useForm({
    task: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim().length < 1) return;
    const newTodo = {
      id: Date.now(),
      inserted_at: new Date().toISOString(),
      user_id: session.log.user.id,
      task: task,
      done: false,
      doing: false,
    }; 
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <form
      className="flex items-center gap-3 my-6 md:w-1/3"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handeInputChange}
        value={task}
        type="text"
        name="task"
        className="focus:ring focus:ring-gray-200 w-full px-4 py-2 text-sm border border-midnight-500 rounded-md shadow-md outline-none"
        placeholder="Write a new task"
      />
      <button className="focus:ring focus:ring-gray-200 p-2 text-white bg-midnight-500 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 17l-4 4m0 0l-4-4m4 4V3"
          />
        </svg>
      </button>
    </form>
  );
};
