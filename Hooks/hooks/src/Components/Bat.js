import React, { useState } from 'react'

function Bat() {
  const [bat,setBat]=useState(100)// local to the component
   
  return (
    <>
    <div>{`Bat , count: ${bat}` }</div>
    <button onClick={()=>{setBat(bat-1)}}>Buy Bats</button>
    </>
  )
}

export default Bat