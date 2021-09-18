export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "done":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done, doing: false }
          : todo
      );
    case "doing":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, done: false, doing: !todo.doing }
          : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
