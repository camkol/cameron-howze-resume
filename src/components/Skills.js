import React from "react";

function Skills({ skills }) {
  return (
    <div className="skills">
      <h3>Skills</h3>
      {Object.entries(skills).map(([category, details]) => (
        <Category key={category} name={category} details={details} />
      ))}
      <ul>
        <li>Programming Languages: JavaScript, PHP</li>
        <li>Front-end: HTML, CSS, Bootstrap, SASS, ReactJS, Redux, jQuery</li>
        <li>Back-end: Node.js, Express.js</li>
        <li>Version Control: Git, GitHub</li>
        <li>Testing: Mocha, Jest</li>
        <li>Problem Solving: Analytical Thinking, Troubleshooting</li>
        <li>Collaboration: Team Player, Effective Communicator</li>
      </ul>
    </div>
  );
}

export default Skills;

function Category({ name, details }) {
  return (
    <div className="category">
      <p style={{ textDecoration: "underline" }}>{name}:</p>
      <p>
        {details
          .map((skill, index) => (
            <span key={index}>
              {skill}
              {index < details.length - 1 ? ", " : ""}
            </span>
          ))
          .join(",")}
      </p>
    </div>
  );
}
