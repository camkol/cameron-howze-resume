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
  const experience = resumeData.experience;
  const education = resumeData.education;

  return (
    <div className="App">
      <div className="left">
        {" "}
        <Contact />
        <Objective />
        <Skills skills={skills} />
      </div>
      <div className="right">
        {" "}
        <Projects />
        <hr />
        <Experience experience={experience} />
        <hr />
        <Education education={education} />
      </div>
    </div>
  );
}

export default App;
