import React from "react";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Cameron Howze</h1>
      <h2>Front-end Web Developer</h2>
      <Contact />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
