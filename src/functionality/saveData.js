import { projects } from './createProject.js';

export function saveProjectsToLocalStorage() {
 localStorage.setItem('projects', JSON.stringify(projects));
};
