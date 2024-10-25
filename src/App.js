import React from "react";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Objective from "./components/Objective";
import { resumeData } from "./resumeData";
import "./App.css";

function App() {
  const skills = resumeData.skills;

  console.log(skills);

  return (
    <div className="App">
      <h1>Cameron Howze</h1>
      <h2>Front-end Web Developer</h2>
      <Objective />
      <Contact />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
