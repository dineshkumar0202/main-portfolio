import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Clock from './Components/Clock.jsx';
import SplashCursor from './Components/SplashCursor.jsx';
import Header from './Components/Header.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Clock className="" />
      {/* <SplashCursor /> */}
      <Header />
    </>
  );
}

export default App;
