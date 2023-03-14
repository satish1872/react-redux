import React, { useReducer, useState } from 'react'


const initialState={
  count:0
}

const reducer=(state,action)=>{
  switch(action.type){
    case "Inc":
      return {count:state.count+1}
    case "Dec":
      return {count:state.count-1}
  }
}

function Counter() {
  // const [count,setCount]=useState(0);
  // const [count,setCount]=useState(10);
  // const [state,dispatch]=useReducer(reducer,initialState);

  // const [count,setCount]=useState(10);
  // const [count,setCount]=useState(10);
  // const [count,setCount]=useState(10);
  // const [count,setCount]=useState(10);
  const [state,dispatch]=useReducer(reducer,initialState)
  return (<>
    <div>{`Counter ${state.count}`}</div>
    {/* <button onClick={()=>setCount(count+1)}>increase</button>
    <button onClick={()=>setCount(count-1)}>decrease</button> */}

<button onClick={()=>dispatch({type:"Inc"})}>increase</button>
    <button onClick={()=>dispatch({type:"Dec"})}>decrease</button>
    </>
  )
}

export default Counter