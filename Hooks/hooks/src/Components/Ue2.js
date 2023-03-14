import React, { useEffect, useState } from 'react'

function Ue2() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log('useEffect')
    document.title=`Button clicked ${count} times`
    // class component ka theeno methoda ka kaam yaha kar sakte hai
    // side effects wala work yaha kar sakta hu

  },[])
  return (<>
  <h4>Current count {count}</h4>
  <button onClick={()=>setCount(count+1)}></button>
  </>
  )
}

export default Ue2