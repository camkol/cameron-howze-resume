import React from "react";

function Skills({ skills }) {
  return (
    <div className="skills">
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
    <div className="category">
      <p style={{ textDecoration: "underline" }}>{name}:</p>
      <p>{details.join(", ")}</p>
      {/* Converts the array into a comma-separated string */}
    </div>
  );
}
