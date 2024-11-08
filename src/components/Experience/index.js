import React from "react";
import "./Experience.css";
import Tooltip from "../Tooltip";

function Experience({ experience }) {
  return (
    <div id="experience" className="righties">
      <h3>Work Experience</h3>
      {/* <h3>Volunteer Experience</h3> */}

      <div className="job" id="xysTinyFindsLLC">
        <p>
          <strong>
            XysTinyFinds LLC |{" "}
            <a
              href="https://camkol.github.io/xystinyfind/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xyline
            </a>{" "}
            |
          </strong>{" "}
          Freelancer (2023-Present)
        </p>{" "}
        <ul>
          <li>
            Striving for consistency, I emulated the design of their old
            website, then enhance upon request.
          </li>{" "}
          <li>
            A JavaScript-based slideshow was implemented for visual appeal.
          </li>{" "}
          <li>
            Leveraging my Photoshop skills, I converted images to JPG format to
            enhance accessibility and reduce file sizes, subsequently improving
            load times.
          </li>
        </ul>
      </div>
      {experience.map((job, index) => (
        <Job job={job} key={index} />
      ))}
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
      {responsibilities.map((res, index) => (
        <li key={index}>{res}</li>
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
