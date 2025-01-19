//saveData.js

export function saveProjectsToLocalStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}
