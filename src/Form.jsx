import React,{ useEffect } from "react";
function Form(){
  var firstnameRef=React.useRef()
  var lastnameRef=React.useRef()
  
  useEffect(()=>{
    firstnameRef.current.focus()
  })
  function focuslastnameRef(e){
    if(e.key==='Enter'){
      lastnameRef.current.focus()
    }
  }
  return (
    <div className='mybox'>
        
    <input type="text" ref={firstnameRef} onKeyUp={(ev)=>{focuslastnameRef(ev)}}></input>
    <br></br>
    <input type="text" ref={lastnameRef}></input>
    </div>
  );
}
export default Form;