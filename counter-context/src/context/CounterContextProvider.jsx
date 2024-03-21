import { useState } from "react";
import CounterContext from "./CounterContext";

const CounterContextProvider = ({children})=>{
    const [counter, setCounter] = useState(1);

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
        {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;