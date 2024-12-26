import React from "react";

function Projects() {
  return (
    <div id="projects" className="">
      <h3 className="my-2 text-2xl">Projects</h3>
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
      <div className="mb-2" id="shoppingList">
        <p className="underline">
          <strong>
            <a
              href="https://shoppinglist25.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              Shopping List App with Local Storage Persistence
            </a>
          </strong>
        </p>
        <ul className="list-disc ml-5">
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
      <div className="mb-2" id="codecademy-store-redux">
        <p className="underline">
          <a
            href="https://codecademystoreredux.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <strong>Codecademy Store with Redux</strong>
          </a>
        </p>
        <ul className="list-disc ml-5">
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
