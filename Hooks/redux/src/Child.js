import React from 'react'
import { memo } from 'react'

function Child(props) {
  console.log('Child render')
  return (
    <div>{` count from child= ${props.count}`}</div>
  )
}

export default memo(Child)