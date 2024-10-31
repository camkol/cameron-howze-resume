import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
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
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Print Resume</button> {/* Print button */}
      <div className="App" ref={componentRef}>
        {" "}
        {/* Ref for printing */}
        <div className="left">
          <Contact />
          <Objective />
          <Skills skills={skills} />
        </div>
        <div className="right">
          <Projects />
          <hr />
          <Experience experience={experience} />
          <hr />
          <Education education={education} />
        </div>
      </div>
    </div>
  );
}

export default App;
