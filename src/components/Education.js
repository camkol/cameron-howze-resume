import React from "react";

function Education({ education }) {
  return (
    <div className="education">
      <h3>Education</h3>
      <ul>
        <li>Codecademy: Full-Stack Engineer Career Path (2023)</li>
        <li>freeCodeCamp: JavaScript Algorithms and Data Structures (2022)</li>
        <li>
          Udemy: The Web Developer Bootcamp, The Ultimate React Course (2021)
        </li>
        <li>
          ITT Technical Institute: BA in Digital Entertainment and Game Design
          (2008)
        </li>
        <li>
          ITT Technical Institute: AA in Computer Drafting and Design (2004)
        </li>
      </ul>

      {Object.entries(education).map(([institute, details]) => (
        <Institute key={institute} name={institute} details={details} />
      ))}
    </div>
  );
}

export default Education;

function Institute({ name, details }) {
  const { year, certificate, degrees } = details;

  const formattedCertificates = certificate ? (
    Array.isArray(certificate) ? (
      certificate.map((cert, index) =>
        cert.link ? (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cert.course}
          </a>
        ) : (
          cert.course
        )
      )
    ) : certificate.link ? (
      <a href={certificate.link} target="_blank" rel="noopener noreferrer">
        {certificate.course}
      </a>
    ) : (
      certificate.course
    )
  ) : null;

  return (
    <div className={name.replace(/\s+/g, "")}>
      <div>
        <h4>{name}</h4>
        <p>{year}</p>

        {/* Render certificates if present */}
        {/* Render certificates in a single paragraph */}
        {formattedCertificates && (
          <p>
            <strong>Certificates:</strong>{" "}
            {Array.isArray(formattedCertificates)
              ? formattedCertificates.reduce(
                  (acc, item, index) =>
                    acc.length ? [...acc, ", ", item] : [item],
                  []
                )
              : formattedCertificates}
          </p>
        )}

        {/* Render degrees if present */}
        {degrees && (
          <div>
            {degrees.map((degree, index) => (
              <div key={index}>
                <p>{degree.degreeName}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
