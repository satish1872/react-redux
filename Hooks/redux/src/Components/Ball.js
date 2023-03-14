import React, { useState } from 'react'
import { connect } from 'react-redux'

function Ball({balls,buyBall,sellBall}) {
  const {qty,setQty}=useState(1);
  return (
    <>
        <div>{`Balls=${balls}`}</div>
        <input type={"number"} value={qty} onChange={(e)=>setQty(e.target.value)}/>
    <button onClick={buyBall}>Buy Ball</button>
    <button onClick={sellBall}>Sell Ball</button>
    </>
  )
}

const mapStateToProps=(state)=>{
  return {
    balls:state.ball.balls
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    buyBall:(qty)=>dispatch({type:"BUY_BALL", payload:qty}),
    sellBall:(qty)=>dispatch({type:"SELL_BALL", payload:qty})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball)