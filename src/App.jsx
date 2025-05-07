import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Clock from './Components/Clock.jsx';
import SplashCursor from './Components/SplashCursor.jsx';
import Header from './Components/Header.jsx';
import Orb from './Components/Orb.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Clock className="" />
      <SplashCursor />
      <Header />
  <Orb
  hoverIntensity={0.5}
  rotateOnHover={true}
  hue={0}
  forceHoverState={false}
  // text="Hello"
  />
    </>
  );
}

export default App;
