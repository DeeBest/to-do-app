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

    let projectHeader = document.createElement('div');
    projectHeader.classList.add('projectHeader');
    projectItem.appendChild(projectHeader);

    let projectCheckBox = document.createElement('input');
    projectCheckBox.classList.add('projectCheckBox');
    projectCheckBox.type = 'checkbox';
    projectHeader.appendChild(projectCheckBox);

    let projectName = document.createElement('span');
    projectName.classList.add('projectName');
    projectName.textContent = newProject.name;
    projectHeader.appendChild(projectName);

    let dueDate = document.createElement('span');
    dueDate.classList.add('dueDate');
    dueDate.textContent = '20/06/2024';
    projectHeader.appendChild(dueDate);

    let arrowSpan = document.createElement('span');
    arrowSpan.classList.add('arrowSpan');
    arrowSpan.textContent = '▼';
    projectHeader.appendChild(arrowSpan);

    let projectBody = document.createElement('div');
    projectBody.classList.add('projectBody');
    projectBody.textContent = 'project body';
    projectItem.appendChild(projectBody);
    
    // let addToDoBtn = document.createElement('button');
    // addToDoBtn.classList.add('addToDoBtn');
    // addToDoBtn.textContent = '+To-Do';
    // projectItem.appendChild(addToDoBtn);

    // let removeProjectBtn = document.createElement('button');
    // removeProjectBtn.classList.add('removeProjectBtn');
    // removeProjectBtn.textContent = '-Project';
    // projectItem.appendChild(removeProjectBtn);

    projectNameInput.value = '';
  } else {
    alert('Please enter a project name!');
  }
}

