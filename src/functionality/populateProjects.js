import "./populateProjects.css";
import { projectsDiv } from "../components/main/main.js";
import { projects } from "./createProject.js";


// Function to populate the projects grid item
export function populateProjects() {

  const projectItems = document.querySelectorAll(".project-item-div");
  projectItems.forEach(item => item.remove());

  // Create a container for the projects list
  let projectsList = document.createElement("div");
  projectsList.id = "project-list";

  // Loop through the projects array
  projects.forEach((project) => {
    // Create a div for each project
    const projectItemDiv = document.createElement("div");
    projectItemDiv.classList.add("project-item-div");

    // Create a span element to display the project name
    let projectName = document.createElement("span");
    projectName.classList.add("project-name");
    projectName.textContent = project.name;

    // Create div for project item buttons
    let projectItemBtnsDiv = document.createElement("div");
    projectItemBtnsDiv.classList.add("project-items-btns-div");

    // Create button to add a todo
    let projectAddToDoBtn = document.createElement("button");
    projectAddToDoBtn.classList.add("project-item-button");
    projectAddToDoBtn.id = "project-add-to-do-button";
    projectAddToDoBtn.textContent = `+ To Do`;

    // Create button to edit the project
    let projectEditBtn = document.createElement("button");
    projectEditBtn.classList.add("project-item-button");
    projectEditBtn.id = "project-edit-button";
    projectEditBtn.textContent = "Edit";

    // Create button to delete the project
    let projectDeleteBtn = document.createElement("button");
    projectDeleteBtn.classList.add("project-item-button");
    projectDeleteBtn.id = "project-delete-button";
    projectDeleteBtn.textContent = "Delete";

    // Append buttons to the project item buttons div
    projectItemBtnsDiv.appendChild(projectAddToDoBtn);
    projectItemBtnsDiv.appendChild(projectEditBtn);
    projectItemBtnsDiv.appendChild(projectDeleteBtn);

    // Append project name and buttons div to the project item div
    projectItemDiv.appendChild(projectName);
    projectItemDiv.appendChild(projectItemBtnsDiv);

    // Append project item div to the projects list container
    projectsList.appendChild(projectItemDiv);

  });
  
  // Append the projects list container to the projects div in the DOM
  projectsDiv.appendChild(projectsList);
}
