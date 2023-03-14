import React, { useContext } from 'react'
import Child from './Child'
import context from './Context'

function Parent1() {
  const theme = useContext(context)
  console.log("Parent1 called")
  return (
    <>
      <div className={theme ? 'dark' : 'light'}>Parent1</div>
      <Child theme={theme} />
    </>
  )
}

export default Parent1