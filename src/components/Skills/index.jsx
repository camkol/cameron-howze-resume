import React from "react";

function Skills({ skills }) {
  return (
    <div className="text-gray-900 py-4 px-2" id="skills">
      <h3 className="my-2 text-2xl">Skills</h3>
      {Object.entries(skills).map(([category, details]) => (
        <Category key={category} name={category} details={details} />
      ))}
    </div>
  );
}

export default Skills;

function Category({ name, details }) {
  return (
    <div className="">
      <p className="underline mt-2">{name}:</p>
      <p>{details.join(", ")}</p>
      {/* Converts the array into a comma-separated string */}
    </div>
  );
}
