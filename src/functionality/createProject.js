//createProject.js

import { projectNameInput } from '../components/main/main.js';
import { saveProjectsToLocalStorage } from './saveData.js';
import { loadProjectsFromLocalStorage } from './loadData.js';


export let projects = [];
export function createProject() {
  class Project {
    constructor(name) {
      this.name = name;
    }
  }

  let newProject = new Project(projectNameInput.value);

  // Load existing projects from localStorage
  let existingProjects = JSON.parse(localStorage.getItem('projects')) || [];

  // Add the new project to the existing projects array
  existingProjects.push(newProject);

  // Update the projects array
  projects = existingProjects;

  // Save the updated projects array to localStorage
  saveProjectsToLocalStorage();

  // Clear the input field
  projectNameInput.value = '';

  // Reload projects from localStorage
  loadProjectsFromLocalStorage();
}

