import React from "react";

export const HeaderForm = ({ state }) => {
  return (
    <header className="py-2">
      <img src="/img/logo.png" height="30" width="115" alt="Logo" />
      <h1 className="font-bold text-2xl my-2">{state} to To-do</h1>
      <p className="text-sm text-gray-600">
        I'll help you organize your day and increase your productivity.
      </p>
    </header>
  );
};
