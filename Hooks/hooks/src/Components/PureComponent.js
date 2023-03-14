import React from 'react'

// React.Component and React.PureComponent
class PureComponent extends React.PureComponent{
  constructor(){
    super()
    this.state={
      count:10,
      val:{
        value1:10
      }
    }
  }
 render(){
  console.log('Render called');
  return (
    <div> 
      {this.state.count}
      <button onClick={()=>{
        return (
          this.setState({count:10,val:{
            value1:1000
          }})
        )
      }}>Update State</button>
    </div>
  )
 }
}

export default  PureComponent