import React from "react";

export const BtnDone = ({ todo }) => {
  const classChecked = () => {
    if (todo.done)
      return "bg-gray-100 block p-1 rounded-md border border-green-400";
    else if (!todo.done && todo.doing)
      return "bg-yellow-100 block p-3 rounded-md border border-transparent";
    else return "bg-gray-100 block p-3 rounded-md border border-amaranth";
  };

  return (
    <button className={classChecked()}>
      {todo.done && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>
  );
};
