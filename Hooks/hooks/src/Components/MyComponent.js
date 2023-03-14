
import React, { createContext, useContext } from 'react'
const MyContext=createContext(1);


function MyComponent() {
  return (
    <>
    <p>{useContext(MyContext)}</p>
    <MyContext.Provider value={2}>
    <p>{useContext(MyContext)}</p>
    </MyContext.Provider>
    </>
  )
}

export default MyComponent