import React from 'react'
import propTypes from 'prop-types';


function Examp({val}) {
  return (
    <div>Examp</div>
  )
}


Examp.propTypes={
  val:propTypes.string,
}

export default Examp
/* A component cannot update its own props unless they are arrays or 
objects (having a component update its own props even if possible is an anti-pattern),
 but can update its state and the props of its children. */