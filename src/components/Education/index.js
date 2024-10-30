import React from "react";
import Tooltip from "../Tooltip";

function Education({ education }) {
  return (
    <div className="education">
      <h3>Education</h3>

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
            <Tooltip key={index} text={lessonsList}>
              {cert.link ? (
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.course}
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
    <div className="institute" id={name.replace(/\s+/g, "")}>
      <div>
        <h4>{name}</h4>
        <p>{year}</p>
      </div>
      {/* Render certificates if present */}
      {formattedCertificates && (
        <p>
          <strong>Certificates:</strong>{" "}
          {formattedCertificates.reduce((prev, curr) => [prev, ", ", curr])}
        </p>
      )}

      {/* Render degrees if present */}
      {degrees && (
        <div>
          {degrees.map((degree, index) => (
            <div key={index}>
              <Tooltip
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
