import React, { memo } from 'react'

function Child({theme}) {
  console.log("child called")
  return (
    <div >Child</div>
  )
}

export default React.memo(Child)