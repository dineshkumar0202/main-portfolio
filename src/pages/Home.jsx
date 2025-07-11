import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Clock from "../Components/Clock";
import Header from "../Components/Header";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Certificates from "../Components/Certificates";
import Cursor from "../Components/Cursor";
import Projects from "../Components/Projects.jsx";
import Contact from "../Components/Contact.jsx";

const Home = () => {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Clock />
      <Header />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
