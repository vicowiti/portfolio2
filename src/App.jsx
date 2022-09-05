import React from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
