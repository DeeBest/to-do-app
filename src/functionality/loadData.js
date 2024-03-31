import { displayProjects } from "./displayProjects.js";


// Function to load project data from localStorage
export function loadProjectsFromLocalStorage() {
  
  let returnedSavedData = JSON.parse(localStorage.getItem('projects'));

  returnedSavedData.forEach(element => {

    displayProjects();

    // console.log(element)
  });

}
