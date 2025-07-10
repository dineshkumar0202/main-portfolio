import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Clock from "./Components/Clock";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Certificates from "./Components/Certificates";
import Cursor from "./Components/Cursor";
import Projects from "./Components/project.jsx";
import "./App.css";
// import Home from "./pages/Home.jsx";
// import Social from "./pages/Social.jsx";

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Clock />
      <Header />
      <About />
      <Skills />
      <Certificates />
      <Projects />

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} /> */}
          {/* <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} /> */}
        {/* </Routes>  */}
      
    </>
  );
}

export default App;
