import { projectNameInput, projectsContainer } from '../components/main/main';

export function createProject() {
  class Project {
    constructor(name) {
      this.name = name;
      this.toDos = [];
    }
  }

  if (projectNameInput.value) {
    let newProject = new Project(projectNameInput.value);

    const projectItem = document.createElement('div');
    projectItem.classList.add('projectItem');
    projectsContainer.appendChild(projectItem);

    let projectName = document.createElement('span');
    projectName.classList.add('projectName');
    projectName.textContent = newProject.name;
    projectItem.appendChild(projectName);

    let addToDoBtn = document.createElement('button');
    addToDoBtn.classList.add('addToDoBtn');
    addToDoBtn.textContent = '+To-Do';
    projectItem.appendChild(addToDoBtn);

    let removeProjectBtn = document.createElement('button');
    removeProjectBtn.classList.add('removeProjectBtn');
    removeProjectBtn.textContent = 'X';
    projectItem.appendChild(removeProjectBtn);

    projectNameInput.value = '';
  } else {
    alert('Please enter a project name!');
  }
}
