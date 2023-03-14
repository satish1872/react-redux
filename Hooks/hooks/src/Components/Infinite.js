import React, { useEffect, useState } from 'react'

function Infinite() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log('useEffect')
    document.title=`Button clicked ${count} times`
    // class component ka theeno methoda ka kaam yaha kar sakte hai
    // side effects wala work yaha kar sakta hu
    // setCount(100) 
    // let num=(Math.random()*100)%1000
    // setCount(num)
  })
  return (<>
  <h4>Current count {count}</h4>
  <button onClick={()=>setCount(count+1)}></button>
  </>
  )
}

export default Infinite