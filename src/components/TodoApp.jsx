import React, { useEffect, /* useReducer, */ useState } from "react";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../services";
// import { todoReducer } from "../todoReducer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TodoList } from "./TodoList";
import { ActualDate } from "./ActualDate";

/* const init = () => {
  return getTodos().then((elem) => {
    return elem;
  });
  // return JSON.parse(localStorage.getItem("todos")) || [];
}; */

export const TodoApp = ({ session }) => {
  // const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [data, setData] = useState(null);
  useEffect(() => {
    if (!data) {
      getTodos().then((elem) => {
        const [todos] = elem;
        setData(todos);
      });
    }
    // localStorage.setItem("todos", JSON.stringify(todos));
    // eslint-disable-next-line
  }, []);

  const handleDoneTodo = (toDo) => {
    updateTodo({ done: !toDo.done, doing: false }, { id: toDo.id }).then(
      (data) => {
        getTodos().then((elem) => {
          const [todos] = elem;
          setData(todos);
        });
      }
    );
    /* dispatch({
      type: "done",
      payload: toDo,
    }); */
  };
  const handleDoingTodo = (toDo) => {
    console.log(toDo)
    updateTodo({ doing: true, done: false }, { id: toDo.id }).then(
      (data) => {
        getTodos().then((elem) => {
          const [todos] = elem;
          setData(todos);
        });
      }
    );
    /* dispatch({
      type: "doing",
      payload: todoId,
    }); */
  };
  const handleAddTodo = (todoId) => {
    createTodo(todoId).then((data) => {
      const [todo] = data;
      setData((data) => [...data, todo[0]]);
      // dispatch({
      //   type: "add",
      //   payload: todoId,
      // });
    });
  };
  const handleDeleteTodo = (todoId) => { 
    deleteTodo({ id: todoId }).then((data) => {
      getTodos().then((elem) => {
        const [todos] = elem;
        setData(todos);
      });
    });
    /*  dispatch({
      type: "delete",
      payload: todoId,
    }); */
  };

  return (
    <>
      <div className="text-midnight-500 relative mx-auto">
        <Header />
        <div className="wrapper-1000 mx-auto px-6 min-h-80">
          <ActualDate />
          {data && (
            <TodoList
              session={session}
              state={data}
              handleDeleteTodo={handleDeleteTodo}
              handleDoneTodo={handleDoneTodo}
              handleAddTodo={handleAddTodo}
              handleDoingTodo={handleDoingTodo}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
