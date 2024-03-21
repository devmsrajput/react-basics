import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (msg)=>{},
    updateTodo: (msg, id)=>{},
    deleteTodo: (id)=>{},
});

export const TodoContextProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext);
}