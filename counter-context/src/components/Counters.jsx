import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext';

function Counters() {

  const {counter, setCounter} = useContext(CounterContext);

  return (
    <>
      <div className="main border border-black h-screen flex justify-center items-center">
        <div className="box rounded-lg bg-slate-600 flex flex-col justify-center items-center px-4 py-10">
          <div className="input-box w-fit">
            <input className='outline-none bg-slate-500 rounded-xl py-4 text-white text-2xl text-center' readOnly value={counter} type="text" name="finp" id="inp" />
          </div>
          <div className="btn-box flex flex-row justify-evenly mt-5 w-full">
            <div className="btn-1 hover:bg-slate-800 bg-slate-700 text-5xl text-white rounded-md px-7 pb-3">
              <button onClick={()=> setCounter((prev)=> prev-1)}>-</button>
            </div>
            <div className="btn-2 hover:bg-slate-800 bg-slate-700 text-5xl text-white rounded-md px-5 pb-3">
              <button onClick={()=> setCounter((prev)=> prev+1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counters