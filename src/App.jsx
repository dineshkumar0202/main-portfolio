import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Clock from './Components/Clock.jsx';
// import SplashCursor from './Components/SplashCursor.jsx'; // Uncomment if needed
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx'; 
import Certificates  from './Components/Certificates.jsx';
// import ThreeBackground from './Components/ThreeBackground.jsx';



function App() {
  return (
    <>
      <Navbar />
      <Clock />
      {/* <SplashCursor /> */}
      <Header />    
      <About />
      <Skills />
      <Certificates />
    </>
  );
}

export default App;
