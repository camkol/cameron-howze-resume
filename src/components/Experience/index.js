import React from "react";
import "./Experience.css";
import Tooltip from "../Tooltip";

function Experience({ experience }) {
  return (
    <div id="experience" className="righties">
      <h3>Work Experience</h3>
      {/* <h3>Volunteer Experience</h3> */}
      <p>
        <strong>XyLine | XysTinyFinds LLC</strong> (2023-Present)
      </p>
      <ul>
        <li>Developed and maintained the organization's website.</li>
        <li>Improved user experience and content updates.</li>
      </ul>
      {experience.map((job, index) => (
        <Job job={job} key={index} />
      ))}

      {/* <p>
        <strong>US Army</strong> | Petroleum Supply Specialist (2009-2016)
      </p>
      <ul>
        <li>Managed the distribution of 80K gallons of diesel fuel.</li>
        <li>Trained and mentored Afghan military personnel.</li>
      </ul> */}
    </div>
  );
}

export default Experience;

function Job({ job }) {
  const { company, title, duration, responsibilities } = job;

  const para = (
    <p>
      <strong>{company}</strong> | {title} ({duration})
    </p>
  );

  const responsible = (
    <ul>
      {responsibilities.map((res) => (
        <li>{res}</li>
      ))}
    </ul>
  );

  return (
    <div className="job" id={company.replace(/\s+/g, "")}>
      {/* Use replace to remove spaces if you need a class name */}

      <Tooltip text={responsible}>{para}</Tooltip>
    </div>
  );
}
