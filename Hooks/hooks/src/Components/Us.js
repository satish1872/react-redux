import React, { useState } from 'react'

function Us() {
  const [count,setCount]=useState(0);
  const [obj,setObj]=useState({msg:'Hello msg'})
  return (
    <div>
      <h4>Current Count: {count}</h4>
      <button onClick={()=>{return setCount(count+1)}}></button>
      <h5>{obj.msg}</h5>
    </div>
  )
}

export default Us