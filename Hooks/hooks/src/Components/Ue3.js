import React, { useEffect, useState } from 'react'

function Ue3() {
  const [count,setCount]=useState(0);
  const [txt,setText]=useState('')
  const [obj,setObj]=useState({msg:'message'})
  let ChangeMsg=(e)=>{
    obj.msg=e.target.value;
    // setObj(obj)
  }
  useEffect(()=>{
    console.log('useEffect')
    document.title=`Button clicked ${count} times`
    // class component ka theeno methoda ka kaam yaha kar sakte hai
    // side effects wala work yaha kar sakta hu
    // setCount(100) 
    // let num=(Math.random()*100)%1000
    // setCount(num)
  },[count])
  return (<>
  <h4>Current count {count}</h4>
  <button onClick={()=>setCount(count+1)}></button>
  <input type={"text"} value={txt} onChange={e=>{
    setText(e.target.value)
    ChangeMsg(e);
  }}/>
  </>
  )
}

export default Ue3