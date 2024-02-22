import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <h1 className="text-center text-3xl bg-slate-500 p-4 rounded-lg text-white font-bold">
        Todo Application Using Context API & Local Storage
      </h1>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;