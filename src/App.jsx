import React, { useState, useEffect } from 'react';
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Clock from "./Components/Clock.jsx";
import SplashCursor from "./Components/SplashCursor.jsx";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Skills from './Components/Skills.jsx';



function App() {
  return (
    <>
      <Navbar />
      <Clock />
      {/* <SplashCursor /> */}
      <Header />
      <About />
      <Skills />
    </>
  );
}

export default App;
