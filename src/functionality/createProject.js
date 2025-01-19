//createProject.js

import { projectNameInput } from '../components/main/main.js';
import { saveProjectsToLocalStorage } from './saveData.js';
import { createAppElements } from './createAppElements.js';
import { getData } from './getData.js';

export let projects = [];
export function createProject() {
  class Project {
    constructor(name) {
      this.id = new Date().getTime();
      this.name = name;
      this.notes = ''; // Add notes property to project
      this.dueDate = ''; // Add dueDate property to project
      this.priority = 'Low'; // Add priority property to project with default value
      this.isChecked = false; // Add isChecked property to project with default value
    }
  }

  let newProject = new Project(projectNameInput.value);

  // Load existing projects from localStorage
  let existingProjects = getData();

  // Add the new project to the existing projects array
  existingProjects.push(newProject);

  // Update the projects array
  projects = existingProjects;

  // Save the updated projects array to localStorage
  saveProjectsToLocalStorage(projects);

  // Clear the input field
  projectNameInput.value = '';

  // Reload projects from localStorage
  createAppElements();
}
