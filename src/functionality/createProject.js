import { projectNameInput } from '../components/main/main.js';
import { saveProjectsToLocalStorage } from './saveData.js';

export let projects = [];

export function createProject() {
  class Project {
    constructor(name) {
      this.name = name;
    }
  }

  // projectNameInput.value
  let newProject = new Project(projectNameInput.value);

  projects.push(newProject);
  saveProjectsToLocalStorage();

  projectNameInput.value = '';
  // console.log(newProject);

  return newProject;

}
