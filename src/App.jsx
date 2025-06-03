import React, { useState, useEffect } from 'react';
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Clock from "./Components/Clock.jsx";
import SplashCursor from "./Components/SplashCursor.jsx";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Clock />
      {/* <SplashCursor /> */}
      <Header />
      <About />
    </>
  );
}

export default App;
