import { ActualDate } from "./components/ActualDate";
import { TodoApp } from "./components/TodoApp";

function App() {
  return (
    <div className="font-sans bg-gray-50 max-w-full min-h-95 mx-auto">
      <ActualDate />
      <TodoApp />
    </div>
  );
}

export default App;
