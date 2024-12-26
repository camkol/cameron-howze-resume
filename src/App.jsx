import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Objective from "./components/Objective";
import resumeData from "./resumeData.json";

function App() {
  const { skills, experience, education } = resumeData;

  return (
    <div id="App" className="flex m-auto text-sm">
      {/* Ref for printing */}
      <div className="bg-gradient-to-br from-gray-200 to-gray-500 w-4/12">
        <Contact />
        <Objective />
        <Skills skills={skills} />
      </div>
      <div className="w-8/12 bg-gradient-to-br from-gray-50 to-gray-300 p-2">
        <Projects />
        <hr className="border-gray-400 border-t-1 mb-4" />
        <Experience experience={experience} />
        <hr className="border-gray-400 border-t-1 mb-4" />
        <Education education={education} />
      </div>
    </div>
  );
}

export default App;
