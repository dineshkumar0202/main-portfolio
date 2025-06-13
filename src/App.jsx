import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Clock from './Components/Clock.jsx';
// import SplashCursor from './Components/SplashCursor.jsx'; // Uncomment if needed
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx'; 
import Spline from '@splinetool/react-spline';
import Certificates  from './Components/Certificates.jsx';
// import ThreeBackground from './Components/ThreeBackground.jsx';



function App() {
  return (
    <>
      {/* <ThreeBackground /> */}
      <Navbar />
      <Clock />
      {/* <SplashCursor /> */}
      <Header />    
      {/* <Spline scene="https://prod.spline.design/Mqs37QHO3Byc976G/scene.splinecode" /> */}
      <About />
      <Skills />
      <Certificates />
    </>
  );
}

export default App;
