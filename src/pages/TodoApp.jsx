import React, {
  useContext,
  useEffect,
  /* useReducer, */ useState,
} from "react";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../services";
// import { todoReducer } from "../todoReducer";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";
import { ActualDate } from "../components/ActualDate";
import { UserContext } from "../services/useContext";

/* const init = () => {
  return getTodos().then((elem) => {
    return elem;
  });
  // return JSON.parse(localStorage.getItem("todos")) || [];
}; */

export const TodoApp = () => {
  const { session, setSession } = useContext(UserContext);
  // const [todos, dispatch] = useReducer(todoReducer, [], init);
  // eslint-disable-next-line
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!session.data) {
      getTodos().then((resp) => {
        const [data] = resp;
        setSession({
          ...session,
          data,
        });
      });
    }
    // localStorage.setItem("todos", JSON.stringify(todos));
  }, [session, setSession]);

  const handleDoneTodo = (toDo) => {
    updateTodo({ done: !toDo.done, doing: false }, { id: toDo.id }).then(
      (data) => {
        getTodos().then((elem) => {
          const [todos] = elem;
          setSession({
            ...session,
            data: todos,
          });
        });
      }
    );
    /* dispatch({
      type: "done",
      payload: toDo,
    }); */
  };
  const handleDoingTodo = (toDo) => {
    updateTodo({ doing: true, done: false }, { id: toDo.id }).then((data) => {
      getTodos().then((elem) => {
        const [todos] = elem;
        setSession({
          ...session,
          data: todos,
        });
        console.log(session)
      });
    });
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
        setSession({
          ...session,
          data: todos,
        });
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
        <div className="wrapper-1000 mx-auto px-6 min-h-80 pb-5">
          <ActualDate />
          {session.data && (
            <TodoList
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
