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
          <strong>
            <a
              href="https://shoppinglist25.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopping List App with Local Storage Persistence
            </a>
          </strong>
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
      <div id="codecademy-store-redux">
        <p>
          <a
            href="https://codecademystoreredux.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Codecademy Store with Redux</strong>
          </a>
        </p>
        <ul>
          <li>
            Built a Redux-based store application, managing complex state across
            multiple slices (inventory, cart, currency) and resolving challenges
            in combining reducers and creating a responsive store structure.
          </li>
          <li>
            Integrated state and dispatch methods to ensure real-time updates,
            and implemented actions to modify item quantities, improving the
            user experience through optimized state immutability and search
            filter functionality.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
