import './main.css';
import { createProjectPopUp } from '../../popUps/createProjectPopUp.js';

export  const main = document.createElement('div');
main.id = 'main';

export const projectsDiv = document.createElement('div');
projectsDiv.id = 'projects-div';
projectsDiv.classList.add('main-grid-item');

const projectsHeader = document.createElement('h3');
projectsHeader.textContent = `One's Projects`;

const projectsHr = document.createElement('hr');
projectsHr.classList.add = 'grid-item-hr';

const addProjectBtn = document.createElement('div');
addProjectBtn.id = 'add-project-button';
addProjectBtn.textContent = '+';
addProjectBtn.addEventListener('click', createProjectPopUp);

projectsDiv.appendChild(projectsHeader);
projectsDiv.appendChild(projectsHr);
projectsDiv.appendChild(addProjectBtn);

const toDosDiv = document.createElement('div');
toDosDiv.id = 'to-dos-div';
toDosDiv.classList.add('main-grid-item');

const toDosHeader = document.createElement('h3');
toDosHeader.textContent = "One's To-Do's";

const toDosHr = document.createElement('hr');
toDosHr.classList.add = 'grid-item-hr';

toDosDiv.appendChild(toDosHeader);
toDosDiv.appendChild(toDosHr);

const notesDiv = document.createElement('div');
notesDiv.id = 'notes-div';
notesDiv.classList.add('main-grid-item');

const notesHeader = document.createElement('h3');
notesHeader.textContent = "Notes To Self";

const notesHr = document.createElement('hr');
notesHr.classList.add = 'grid-item-hr';

notesDiv.appendChild(notesHeader);
notesDiv.appendChild(notesHr);

main.appendChild(projectsDiv);
main.appendChild(toDosDiv);
main.appendChild(notesDiv);