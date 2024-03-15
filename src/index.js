import "./index.css";
import { header } from "./components/header/header.js";
import { main } from "./components/main/main.js";
import { footer } from "./components/footer/footer.js";

// import { populateProjects } from './functionality/populateProjects.js';
// import { createProject } from "./functionality/createProject.js";


(() => {
  const page = document.querySelector("body");

  // populateProjects();
  // createProject();

  page.appendChild(header);
  page.appendChild(main);
  page.appendChild(footer);
})();
