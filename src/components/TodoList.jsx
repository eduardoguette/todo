import React, { useContext } from "react";
import { UserContext } from "../services/useContext";
import { TodoAdd } from "./TodoAdd";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({
  handleDoneTodo,
  handleDeleteTodo,
  handleAddTodo,
  handleDoingTodo,
}) => {
  const { session } = useContext(UserContext);

 
  return (
    <>
      <TodoAdd handleAddTodo={handleAddTodo} session={session} />
      <div className="flex flex-col md:flex-row md:justify-between gap-6 py-2">
        <div className="md:w-1/3" aria-label="todo">
          <h3 className="mb-6 font-bold">
            Todo
            <div className="flex">
              <div className="h-05 w-24 bg-amaranth-500"></div>
              <div className="bg-gray-200 h-05 w-full"></div>
            </div>
          </h3>
          <ul className="flex flex-col space-y-4">
            {session.data.map(
              (todo) =>
                !todo.done &&
                !todo.doing && (
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
            {session.data.map(
              (todo) =>
                todo.doing &&
                !todo.done && (
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
            {session.data.map(
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
