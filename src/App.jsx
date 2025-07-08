import React from "react";
import Navbar from "./Components/Navbar";
import Clock from "./Components/Clock";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Certificates from "./Components/Certificates";
import Cursor from "./Components/Cursor";
import "./App.css";

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
    </>
  );
}

export default App;
