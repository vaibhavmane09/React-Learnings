import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [            // array - 
        {   // fields 
            id: 1,                
            todo: "Todo Msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},      // methods - their functionality written in App.jsx
    updateTodo: (id, todo) => {},       
    deleteTodo: (id) => {},     
    toggleComplete: (id) => {}
})

export const useTodo = () => {        // context hook - a method
    return useContext(TodoContext)    // useContext ko ek context dena i padega 
}

export const TodoProvider = TodoContext.Provider    // provider exporter