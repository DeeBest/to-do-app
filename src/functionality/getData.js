export function getData() {
  let projects = JSON.parse(localStorage.getItem('projects')) || [];
  return projects;
}
