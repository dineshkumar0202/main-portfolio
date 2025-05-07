import { useState } from 'react'  
import './App.css'
import Navbar from './Components/NavBar.jsx';
import Clock from './Components/Clock.jsx';   
import SplashCursor from './Components/SplashCursor.jsx';
// import AnimatedContent from './Components/AnimatedContent.jsx';

function App  ()  {  
  return (
    <>
      <Navbar />
      <Clock  classname='' />
      <SplashCursor />
      {/* <AnimatedContent /> */}
    </>
  )
}

export default App
