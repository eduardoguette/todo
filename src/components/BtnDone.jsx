import React from "react";

export const BtnDone = ({ todo }) => {
  const classChecked = () => {
    if (todo.done)
      return "bg-gray-100 block p-1 rounded-md border border-green-400";
    else if (!todo.done && todo.doing)
      return "bg-gray-100 rounded-md p-1 border border-transparent border border-yellow-400";
    else return "bg-gray-100 block p-3 rounded-md border border-amaranth";
  };

  return (
    <button className={classChecked()}>
      {todo.doing && (
        <svg
          className="animate-spin  h-4 w-4 text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {todo.done && !todo.doing && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>
  );
};
