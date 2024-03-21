import React, { useEffect, useState } from "react";
import { useTodo } from "../contexts";

function TodoForm({editObj}) {
  const [msgObj, setMsgObj] = useState({
    msg: "",
    id: 1
  });

  const {todos, addTodo, updateTodo, deleteTodo} = useTodo()

  const [term, setTerm] = useState("add")

  useEffect(()=>{
    if(editObj){
      setMsgObj({msg: editObj.msg, id: editObj.id})
      setTerm("remove");
      console.log();
    } else {
      console.log("EDITOBJ: EMPTY");
    }
  }, [editObj]);

  const handleForm = (e)=>{
    e.preventDefault();
    if(term == "add"){
      addTodo(msgObj.msg);
      setMsgObj({msg: "", id: 1});
      console.log("Added.")
    } else {
      console.log(`ObjId: ${msgObj.id}, ${msgObj.msg}`)
      updateTodo(msgObj.id, msgObj.msg);
      setMsgObj({msg: "", id: 1});
      setTerm("add")
    }
  }

  return (
    <div className="todo-form mb-5">
      <div className="heading mb-5">
        <h1 className="text-3xl text-white text-center font-bold">TO-DO</h1>
      </div>
      <div className="form-box">
        <form onSubmit={handleForm}>
          <div className="input-box flex justify-center">
            <input
              className="outline-none w-full text-white bg-slate-600 rounded-md px-3 py-2"
              type="text"
              name="message"
              id="messages"
              value={msgObj.msg}
              onChange={(e)=> setMsgObj((pre)=> {
                if(term == "add"){
                  return {
                    msg: e.target.value,
                    id: 1
                  }
                } else {
                  return {
                    msg: e.target.value,
                    id: pre.id
                  }
                }
              })}
            />
          </div>
          <div className="btn-box">
            <input
              className="bg-slate-600 rounded-md px-3 py-2 hover:bg-slate-700 mt-2 text-white"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
