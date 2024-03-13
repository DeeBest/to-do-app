import { projectsDiv } from "../components/main/main.js";
import './createProjects.css'

export function firstProject() {
  let projectsList = document.createElement('div');
  projectsList.id = 'project-list';

  let projects = [
    'gym',
    'build website', 
    'trade forex',
    'eat'
  ];

  for (let i = 0; i < projects.length; i++){
    const projectItemDiv = document.createElement('div');
    projectItemDiv.classList.add('project-item-div');

    let projectName = document.createElement('span');
    projectName.classList.add('project-name');
    projectName.textContent = projects[i];

    let projectItemBtnsDiv = document.createElement('div');
    projectItemBtnsDiv.classList.add('project-items-btns-div');

    let projectAddToDoBtn = document.createElement('button');
    projectAddToDoBtn.classList.add('project-item-button');
    projectAddToDoBtn.id = 'project-add-to-do-button';
    projectAddToDoBtn.textContent = `+ To Do`;

    let projectEditBtn = document.createElement('button');
    projectEditBtn.classList.add('project-item-button');
    projectEditBtn.id = 'project-edit-button';
    projectEditBtn.textContent = 'Edit';

    let projectDeleteBtn = document.createElement('button');
    projectDeleteBtn.classList.add('project-item-button');
    projectDeleteBtn.id = 'project-delete-button';
    projectDeleteBtn.textContent = 'Delete';

    projectItemBtnsDiv.appendChild(projectAddToDoBtn)
    projectItemBtnsDiv.appendChild(projectEditBtn);
    projectItemBtnsDiv.appendChild(projectDeleteBtn);

    projectItemDiv.appendChild(projectName);
    projectItemDiv.appendChild(projectItemBtnsDiv);

    projectsList.appendChild(projectItemDiv);
  } 

  projectsDiv.appendChild(projectsList);
};