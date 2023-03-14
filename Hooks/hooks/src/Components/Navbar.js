import React ,{useContext} from 'react'
import { BrowserRouter, Link, Routes } from 'react-router-dom'
import context from './Context'
import Dashboard from './Dashboard'
import Parent1 from './Parent1'
import Parent2 from './Parent2'
import Profile from './Profile'


function Navbar() {
  const val=useContext(context)
  console.log("Navbar called",val)
  return (
    <>
    <div className={val?"dark":"light"}>Navbar<br/></div>

    <Link to={"/dashboard/profile"} >Profile</Link>
    <Link to={"/"} >Dashboard</Link>
  
    </>
  )
}

export default Navbar