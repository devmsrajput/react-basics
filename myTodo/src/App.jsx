import { useEffect, useState } from 'react'
import { TodoContextProvider } from './contexts'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])

  const [editObj, setEditObj] = useState()

  const addTodo = (msg)=>{
    setTodos((prev)=> [{id: Date.now(), msg: msg}, ...prev])
  }

  const updateTodo = (id, msg)=>{
    setTodos((prev)=> prev.map((item)=> (item.id === Number(id) ? {id, msg} : item)));
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((item)=> item.id !== id));
  }

  useEffect(()=>{
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    if(allTodos && allTodos.length > 0){
      setTodos(allTodos);
      console.log(`Todos: ${todos}, allTodos: ${allTodos}`);
    }
  }, [])

  useEffect(()=>{
    const allTodos = localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const idCallback =(todo)=>{
    console.log("IdCallback", todo);
    setEditObj(todo);
  }

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo}}>
      <div className="container flex justify-center items-center h-screen">
        <div className="main border border-black bg-slate-500 p-5 rounded-lg w-72 sm:w-96">
          <TodoForm editObj = {editObj} />
          <hr />
          <div className='my-2 h-[250px] overflow-auto scrollbar'>
            {todos.map((todo)=>{
              return (
                <div className='w-full' key={todo.id}>
                  <TodoList todo={todo} idCallback={idCallback} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
