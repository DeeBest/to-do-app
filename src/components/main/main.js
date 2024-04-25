//main.js

import './main.css';
import { createProject } from '../../functionality/createProject.js';

export const main = document.createElement('div');
main.id = 'main';

const projectForm = document.createElement('form');
projectForm.id = 'projectForm';
main.appendChild(projectForm);

export let projectNameInput = document.createElement('input');
projectNameInput.id = 'projectNameInput';
projectNameInput.type = 'text';
projectNameInput.placeholder = 'Project name...';
projectForm.appendChild(projectNameInput);

const submitProjectBtn = document.createElement('button');
submitProjectBtn.id = 'submitProjectBtn';
submitProjectBtn.type = 'submit';
submitProjectBtn.textContent = '+Project';
submitProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (projectNameInput.value !== '' && projectNameInput.value.length >= 1) {
    createProject();
    projectNameInput.placeholder = 'Project name...';
    projectNameInput.style.outline = 'none';
  } else {
    projectNameInput.placeholder =
      'Please enter a project name with 1 or more characters';
    projectNameInput.style.outline = '3px solid maroon';
  }
});
projectForm.appendChild(submitProjectBtn);

export const projectsContainer = document.createElement('div');
projectsContainer.id = 'projectsContainer';
main.appendChild(projectsContainer);
