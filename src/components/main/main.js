import './main.css';
import { createProject } from '../../functionality/createProject';

export const main = document.createElement('div');
main.id = 'main';

const projectForm = document.createElement('form');
projectForm.id = 'projectForm';
main.appendChild(projectForm);

export let projectNameInput = document.createElement('input');
projectNameInput.id = 'projectNameInput';
projectNameInput.type = 'text';
projectNameInput.placeholder = 'Type in new project name...';
projectForm.appendChild(projectNameInput);

const submitProjectBtn = document.createElement('button');
submitProjectBtn.id = 'submitProjectBtn';
submitProjectBtn.type = 'submit';
submitProjectBtn.textContent = '+Project';
submitProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createProject();
});
projectForm.appendChild(submitProjectBtn);

export const projectsContainer = document.createElement('div');
projectsContainer.id = 'projectsContainer';
main.appendChild(projectsContainer);

// const projectItem = document.createElement('div');
// projectItem.classList.add('projectItem');
// projectsContainer.appendChild(projectItem);

// let projectName = document.createElement('span');
// projectName.classList.add('projectName');
// projectName.textContent = 'Project name';
// projectItem.appendChild(projectName);

// let addToDoBtn = document.createElement('button');
// addToDoBtn.classList.add('addToDoBtn');
// addToDoBtn.textContent = '+To-Do';
// projectItem.appendChild(addToDoBtn);

// let removeProjectBtn = document.createElement('button');
// removeProjectBtn.classList.add('removeProjectBtn');
// removeProjectBtn.textContent = 'X';
// projectItem.appendChild(removeProjectBtn);
