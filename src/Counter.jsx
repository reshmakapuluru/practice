import React from "react";
import { connect } from "react-redux";
function Counter(props){
    console.log('Counter::',props)
    return(
        <div>
            <h1>Counter:{props.count}</h1>
            <button onClick={()=>{props.increm}}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.decrem}}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.rese}}>Reset</button>&nbsp;&nbsp;&nbsp;
        </div>
    )
}

function mapStatetoProps(state){return state.c}

function mapDispatchtoProps(dispatch){
    return {
        increm:()=>{dispatch(incermentCount())},
        decrem:()=>{dispatch(decrementCount())},
        rese:()=>{dispatch(resetCount())}
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);