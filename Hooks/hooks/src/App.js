import './App.css';
import Infinite from './Components/Infinite';
import Ue1 from './Components/Ue1';
import Ue2 from './Components/Ue2';
import Ue3 from './Components/Ue3';
import Us from './Components/Us';
import context from './Components/Context';
import { useReducer, useState } from 'react';
import Navbar from './Components/Navbar';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';
import MyComponent from './Components/MyComponent';
import {Router, BrowserRouter , Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import PureComponent from './Components/PureComponent';
import Bat from './Components/Bat';
import Counter from './Components/Counter';
import


function App() {

  const [theme,setTheme]=useState(false);
 


  function contextWrapper() {
    return <>
      {<context.Provider value={theme}>
        <h1>Hello</h1>
        <button onClick={() => setTheme(!theme)}>Change theme</button>
        {/* <Us/> */}
        {/* <Ue1/> */}
        {/* <Ue2/> */}
        {/* <Infinite/> */}
        {/* <Ue3/> */}

        {/* <Navbar/>
            <Parent1/> */}

        {/* <MyComponent /> */}
        <Counter/>
      </context.Provider>}
    </>;
  }
  
  return (<>

  
  {contextWrapper()}
  

  {/* <BrowserRouter>
   <Routes>
   <Route path="/parent2" element={<Parent2/>}/>
   <Route  path="/" exact  element={<Parent1/>}/>
   </Routes>
  </BrowserRouter> */}

  {/* <BrowserRouter>
  <Navbar/> 
    <Routes>
      <Route exact path='/' element={<Dashboard/>} render={(props)=>{
        <>
        <Parent1 {...props}/>
        </>
      }}></Route>
      <Route exact path='/dashboard/profile' element={<Profile/>}></Route>
    </Routes>
  </BrowserRouter> */}

  {/* <PureComponent/> */}

  {/* <Bat/> */}



  </>
  );

}

export default App;
