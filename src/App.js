import { ActualDate } from "./components/ActualDate";
import { Header } from "./components/Header";
import { TodoApp } from "./components/TodoApp";

function App() {
  return (
    <div className="font-sans bg-gray-50 max-w-full mx-auto">
      <Header />
      <ActualDate />
      <TodoApp />
    </div>
  );
}

export default App;
