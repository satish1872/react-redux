
const initialState={
  balls:50
}

const BallReducer=(state=initialState,action)=>{
  console.log(action)
  switch(action.type){
    case "BUY_BALL":
      return {...state,balls:state.balls+action.payload}
      case "SELL_BALL":
      return {...state,balls:state.balls-action.payload}
      default:
        return state;
  }
}

export default BallReducer