import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/indeex";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {     // function to add 
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])    // herre spred operation call at prev and todo toadd all the data from themm

  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))   // Herre we use duscorde operation like if-else ----- if prevTodo.id === id then return todo else prevTodo

  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))  // here we filter the todo-array and return only todo which id is not equals id we pass other is stay there 
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo)) // here we check if prevTodo.id is equals id if yes -- we take all prevTodo values and only override the completed value 
  }

  
  // local storage 
  //localStorage.getItem("todos")  //  local storage always save values in  string format wee have to convert it in json 

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  useEffect(() => {   // we can add more than one useEffect in react 
    localStorage.setItem("todos", JSON.stringify(todos))   // setting item in local storage ---- JSON.stringify is use to convert in string
  },[todos])



  return (
    <>
      <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-1 ">
        <h1 className="text-center text-3xl bg-slate-500 p-4 rounded-lg text-white font-bold">
          Todo Application Using Context API & Local Storage 
        </h1>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-4 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </TodoProvider>
    
    </>
  );
}

export default App;
