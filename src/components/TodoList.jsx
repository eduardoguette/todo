import React from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({
  state,
  handleDoneTodo,
  handleDeleteTodo,
  handleAddTodo,
  handleDoingTodo,
}) => {
  return (
    <>
      <TodoAdd handleAddTodo={handleAddTodo} />
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <div className="md:w-1/3" aria-label="todo">
          <h3 className="mb-6 font-bold">
            Todo
            <div className="flex">
              <div className="h-05 w-24 bg-amaranth-500"></div>
              <div className="bg-gray-200 h-05 w-full"></div>
            </div>
          </h3>
          <ul className="flex flex-col space-y-4">
            {state.map(
              (todo) =>
                (!todo.done &&
                !todo.doing) && (
                  <TodoListItem
                    key={todo.id}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleDoneTodo={handleDoneTodo}
                    handleDoingTodo={handleDoingTodo}
                  />
                )
            )}
          </ul>
        </div>
        <div className="md:w-1/3" aria-label="doing">
          <h3 className="mb-6 font-bold">
            Doing
            <div className="flex">
              <div className="h-05 w-24 bg-yellow-400"></div>
              <div className="bg-gray-200 h-05 w-full"></div>
            </div>
          </h3>
          <ul className="flex flex-col space-y-4">
            {state.map(
              (todo) =>
                (todo.doing  &&
                !todo.done) && (
                  <TodoListItem
                    key={todo.id}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleDoneTodo={handleDoneTodo}
                    handleDoingTodo={handleDoingTodo}
                  />
                )
            )}
          </ul>
        </div>
        <div className="md:w-1/3" aria-label="done">
          <h3 className="mb-6 font-bold">
            Done
            <div className="flex">
              <div className="h-05 w-24 bg-green-400"></div>
              <div className="bg-gray-200 h-05 w-full"></div>
            </div>
          </h3>
          <ul className="flex flex-col space-y-4">
            {state.map(
              (todo) =>
                todo.done && (
                  <TodoListItem
                    key={todo.id}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleDoneTodo={handleDoneTodo}
                    handleDoingTodo={handleDoingTodo}
                  />
                )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
