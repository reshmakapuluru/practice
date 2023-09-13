import React from "react";
import { increment,decrement,reset } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
function Counter(){
    var count=useSelector((state)=>{return state.c.count})
    console.log(count)
    var dispatch =useDispatch()
    return(
        <div className="mybox">
            <h1>Counter:{count}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>dispatch(decrement())}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}
export default Counter;