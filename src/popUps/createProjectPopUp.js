import './createProjectPopUp.css';
import { createProject, projects } from '../functionality/createProject.js';
import { populateProjects } from '../functionality/populateProjects.js';

// Function to create the popup
export function createProjectPopUp() {

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.id = "popup-overlay";

  // Create popup container
  const popupContainer = document.createElement("div");
  popupContainer.id = "popup-container";

  // Create heading
  const heading = document.createElement("h2");
  heading.textContent = "Create New Project";

  // Create form
  const form = document.createElement("form");

  form.reset();

  form.id = "project-form";

  // Create input for project name
  const projectNameLabel = document.createElement("label");
  projectNameLabel.for = "project-name";
  projectNameLabel.textContent = "Project Name:";

  const projectNameInput = document.createElement("input");
  projectNameInput.type = "text";
  projectNameInput.id = "project-name";
  projectNameInput.name = "project-name";
  projectNameInput.required = true;

  // Create submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Create";

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  // Append elements to form
  form.appendChild(projectNameLabel);
  form.appendChild(projectNameInput);
  form.appendChild(submitButton);

  // Append elements to popup container
  popupContainer.appendChild(heading);
  popupContainer.appendChild(form);
  popupContainer.appendChild(closeButton);

  // Append popup container to overlay
  overlay.appendChild(popupContainer);

  // Append overlay to body
  document.body.appendChild(overlay);
  
  // Add event listener for form submission
  form.addEventListener("submit", handleFormSubmit);

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault
    
    let newProjectClass = createProject();
    
    let myNewProject = new newProjectClass(projectNameInput.value);
    
    projects.push(myNewProject);

    console.log(projects);

    populateProjects();

    document.body.removeChild(overlay);

   // Remove event listener after handling form submission
   form.removeEventListener("submit", handleFormSubmit);
  }

  form.addEventListener("submit", handleFormSubmit);
}