import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo,deletetodo } from "./todoSlice";

 function Todolist(){
    var[nt,setnt]=React.useState([])
    var todo =useSelector((state)=>{return state.t.todos})
    var dispatch = useDispatch()
    return(
        <div className="mybox">
            <h1>Todolist</h1>
            <input type='text' onChange={(e)=>{setnt(e.target.value)}}></input>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{dispatch(addtodo(nt))}}>Add todo</button>
            <ul>
                {
                    todo.map((t,i)=>{
                        return <li>
                            {t}
                            <button onClick={()=>{dispatch(deletetodo(i,1))}}>Delete</button>
                            </li>
                    })
                }
            </ul>
        </div>
    )
 }
 export default Todolist;