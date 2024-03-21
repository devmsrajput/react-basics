import React, { useEffect, useState } from 'react'
import { useTodo } from '../contexts'

function TodoList({todo, idCallback}) {
  const {deleteTodo} = useTodo()
  
  return (
    <div className='list border-b pb-2 mt-2 flex flex-row justify-between'>
      <div className="list-box w-[70%] bg-slate-600 p-2 rounded-lg">
        <span className='text-white'>{todo.msg}</span>
      </div>
      <div className="tool-box flex flex-row pr-1">
        <div className="edit-btn ml-1">
          <button onClick={()=> idCallback(todo)} className='bg-slate-600 hover:bg-slate-700 p-2 rounded-md text-white'>Edit</button>
        </div>
        <div className="delete-btn ml-1">
          <button onClick={()=> deleteTodo(todo.id)} className='bg-slate-600 hover:bg-slate-700 p-2 rounded-md text-white'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoList