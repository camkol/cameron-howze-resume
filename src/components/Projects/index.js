import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects" className="righties">
      <h3>Projects</h3>
      {/* <div id="rock-paprer-scissor">
        <p>
          <strong>Rock-Paper-Scissors Game with Server Integration</strong>
        </p>
        <p>
          Developed a full-stack game using HTML, CSS, JavaScript, Node.js, and
          Express.js. Implemented RESTful API endpoints to handle game logic and
          store results.
        </p>
      </div> */}
      <div id="shoppingList">
        <p>
          <strong>Shopping List App with Local Storage Persistence</strong>
        </p>
        <ul>
          <li>
            Developed a React-based shopping list application with components
            for adding, displaying, and managing items.
          </li>
          <li>
            Implemented features to toggle item status, delete, and clear the
            list.
          </li>
          <li>
            Used a custom useLocalStorageState hook to persist the list across
            sessions, ensuring data retention even after refreshing or closing
            the browser.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
