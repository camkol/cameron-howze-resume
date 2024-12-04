import React from "react";
import Tooltip from "../Tooltip";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";

function Education({ education }) {
  return (
    <div id="education">
      <h3 className="my-2 text-2xl">Education</h3>

      {Object.entries(education).map(([institute, details]) => (
        <Institute key={institute} name={institute} details={details} />
      ))}
    </div>
  );
}

export default Education;

function Institute({ name, details }) {
  const { year, certificate, degrees } = details;

  // Map over certificates to generate links or plain text with Tooltip
  const formattedCertificates = certificate
    ? (Array.isArray(certificate) ? certificate : [certificate]).map(
        (cert, index) => {
          const lessonsList = (
            <ul>
              {cert.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex}>{lesson}</li>
              ))}
            </ul>
          );

          return (
            <Tooltip position="top" key={index} text={lessonsList}>
              {cert.link ? (
                <a
                  className="underline hover:text-gray-500"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cert.course}
                  {/* <FontAwesomeIcon icon={faLink} /> */}
                </a>
              ) : (
                <span>{cert.course}</span>
              )}
            </Tooltip>
          );
        }
      )
    : null;

  return (
    <div className="mb-2" id={name.replace(/\s+/g, "")}>
      <div className="flex justify-between">
        <h4 className="font-bold">{name}</h4>
        <p>{year}</p>
      </div>
      {/* Render certificates if present */}
      {formattedCertificates && (
        <div>
          Certificates:{" "}
          {formattedCertificates.reduce((prev, curr) => [prev, ", ", curr])}
        </div>
      )}

      {/* Render degrees if present */}
      {degrees && (
        <div>
          {degrees.map((degree, index) => (
            <div className="my-2" key={index}>
              <Tooltip
                position="top"
                text={
                  <ul>
                    {degree.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex}>{lesson}</li>
                    ))}
                  </ul>
                }
              >
                <p>{degree.degreeName}</p>
              </Tooltip>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
