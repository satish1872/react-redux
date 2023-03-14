import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

function Bat(props) {
  const bats=useSelector(state=>state.bat.bats)
  const dispatch=useDispatch();
  // console.log(bats)
  return (
    <>
    <div>{`Bat count=${bats}`}</div>
    {/* <button onClick={props.buyBat}>Buy Bat</button> */}
    <button onClick={()=>dispatch({type:"BUY_BAT"})}>button</button>
    </>
  )
}

const mapStateToProps=(state)=>{
  return {
    bats:state.bat.bats
  }
}

// const mapDispatchToProps=(dispatch)=>{
//   return {
//     buyBat:()=>dispatch({type:"BUY_BAT"})
//   }
  
// }
 
// export default connect(mapStateToProps,mapDispatchToProps)(Bat)

export default connect(null,null)(Bat)