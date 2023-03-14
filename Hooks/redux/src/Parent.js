import React, { useState, useMemo } from 'react'
import Child from './Child';

function Parent() {
  const [count,setCount]=useState(0);
  const [text,setText]=useState('Hello') 
  const person={
    name:"Udai",
    city:"delhi"
  } 
  const memoized=useMemo(()=>person,[])
  console.log('Parent render')
  return (
    <>
    <button onClick={()=>setCount(count+1)}>Change count</button>
    <button onClick={()=>setText('Bye')}>Change Text</button>
    <Child count={count} person={memoized}/>
    </>
  )
}

export default Parent