import { useState } from "react";

export const UseStateDemo = () =>{
    const[Count,setCount] = useState(0)
    return(<>
    <h1>UseState Demo</h1>
    <button onClick={()=>{
        setCount(Count+1)
    }}>{Count}</button>
    </>)
}