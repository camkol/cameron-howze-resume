import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const contactInfo = [
    {
      icon: faGlobe,
      label: "Portfolio",
      link: "https://howzeitgoing.netlify.app/",
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/cameron-howze-28a646109",
    },
    {
      icon: faGithub,
      label: "GitHub",
      link: "https://github.com/camkol",
    },
    {
      icon: faEnvelope,
      label: "cameronhowze4@outlook.com",
      link: "mailto:cameronhowze4@outlook.com",
    },
  ];

  return (
    <div id="contact" className="bg-black text-white py-4 px-2 space-y-2">
      <h1 className="text-4xl">Cameron Howze</h1>
      <h2 className="text-lg">Front-end Web Developer</h2>
      {/* <p>Phone: (757) 447-4873</p>
      <p>WhatsApp: +49 157 53026132</p> */}
      <p>
        <FontAwesomeIcon icon={faLocationDot} className="mr-3" />
        <span>Berlin, Germany</span>
      </p>
      <p>
        <FontAwesomeIcon icon={faLocationDot} className="mr-3" />
        <span>Norfolk, VA</span>
      </p>
      {contactInfo.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          label={item.label}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default Contact;

function ContactItem({ icon, label, link }) {
  return (
    <p>
      <FontAwesomeIcon icon={icon} className="mr-2" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="hover:text-gray-500 mr-3"
      >
        {label}
      </a>
    </p>
  );
}
