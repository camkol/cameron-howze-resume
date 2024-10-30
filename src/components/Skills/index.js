import React from "react";
import "./Skills.css";

function Skills({ skills }) {
  return (
    <div className="lefties" id="skills">
      <h3>Skills</h3>
      {Object.entries(skills).map(([category, details]) => (
        <Category key={category} name={category} details={details} />
      ))}
    </div>
  );
}

export default Skills;

function Category({ name, details }) {
  return (
    <div className="categories">
      <p style={{ textDecoration: "underline" }} className="category">
        {name}:
      </p>
      <p className="skill">{details.join(", ")}</p>
      {/* Converts the array into a comma-separated string */}
    </div>
  );
}
