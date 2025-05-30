import React, { useState, useEffect } from 'react';
import "../App.css";
import Navbar from "./Components/Navbar.jsx";
import Clock from "./Components/Clock.jsx";
import SplashCursor from "./Components/SplashCursor.jsx";
import Header from "./Components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Clock />
      <SplashCursor />
      <Header />
    </>
  );
}

export default App;
