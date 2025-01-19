//loadData.js

import { projectsContainer } from '../components/main/main.js';
import { getData } from './getData.js';
import { saveProjectsToLocalStorage } from './saveData.js';

// Function to load project data from localStorage
export function createAppElements() {
  //clearing the projectContainer before appending new projects to avoid duplications
  projectsContainer.innerHTML = '';

  let projects = getData();

  projects.forEach((project) => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('projectItem');
    projectsContainer.appendChild(projectItem);

    let projectHeader = document.createElement('div');
    projectHeader.classList.add('projectHeader');
    projectItem.appendChild(projectHeader);

    let projectNameAndCheckBoxDiv = document.createElement('div');
    projectNameAndCheckBoxDiv.classList.add('projectNameAndCheckBoxDiv');
    projectHeader.appendChild(projectNameAndCheckBoxDiv);

    let dueDateAndArrowDiv = document.createElement('div');
    dueDateAndArrowDiv.classList.add('dueDateAndArrowDiv');
    projectHeader.appendChild(dueDateAndArrowDiv);

    let projectCheckBox = document.createElement('input');
    projectCheckBox.classList.add('projectCheckBox');
    projectCheckBox.type = 'checkbox';
    projectCheckBox.checked = project.isChecked;
    projectNameAndCheckBoxDiv.appendChild(projectCheckBox);

    let projectName = document.createElement('span');
    projectName.classList.add('projectName');
    projectName.textContent = project.name;
    projectNameAndCheckBoxDiv.appendChild(projectName);

    let dueDate = document.createElement('span');
    dueDate.classList.add('dueDate');
    dueDate.textContent = project.dueDate;
    dueDateAndArrowDiv.appendChild(dueDate);

    let arrowSpan = document.createElement('span');
    arrowSpan.classList.add('arrowSpan');
    arrowSpan.textContent = '▼';
    dueDateAndArrowDiv.appendChild(arrowSpan);

    let projectBody = document.createElement('div');
    projectBody.classList.add('projectBody');
    projectItem.appendChild(projectBody);

    let notesDiv = document.createElement('div');
    notesDiv.classList.add('notesDiv');
    projectBody.appendChild(notesDiv);

    let notesHeading = document.createElement('h3');
    notesHeading.classList.add('notesHeading');
    notesHeading.textContent = 'Notes';
    notesDiv.appendChild(notesHeading);

    let notesTextarea = document.createElement('textarea');
    notesTextarea.classList.add('notesTextarea');
    notesTextarea.placeholder = 'Notes about the project...';
    notesTextarea.value = project.notes;
    notesDiv.appendChild(notesTextarea);

    let dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('dueDateDiv');
    projectBody.appendChild(dueDateDiv);

    let dueDateHeading = document.createElement('h3');
    dueDateHeading.classList.add('dueDateHeading');
    dueDateHeading.textContent = 'Due Date';
    dueDateDiv.appendChild(dueDateHeading);

    let dueDateInput = document.createElement('input');
    dueDateInput.classList.add('dueDateInput');
    dueDateInput.type = 'date';
    dueDateDiv.appendChild(dueDateInput);

    let priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priorityDiv');
    projectBody.appendChild(priorityDiv);

    let priorityHeading = document.createElement('h3');
    priorityHeading.classList.add('priorityHeading');
    priorityHeading.textContent = 'Priority';
    priorityDiv.appendChild(priorityHeading);

    let prioritySelect = document.createElement('select');
    prioritySelect.classList.add('prioritySelect');
    priorityDiv.appendChild(prioritySelect);

    const priorityOptions = ['Low', 'Medium', 'High'];

    priorityOptions.forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.value = option.toLowerCase();
      optionElement.textContent = option;
      prioritySelect.appendChild(optionElement);
    });
    prioritySelect.value = project.priority;

    let deleteProjectBtnDiv = document.createElement('div');
    deleteProjectBtnDiv.classList.add('deleteProjectBtnDiv');
    projectBody.appendChild(deleteProjectBtnDiv);

    let removeProjectBtn = document.createElement('button');
    removeProjectBtn.classList.add('removeProjectBtn');
    removeProjectBtn.textContent = 'Delete';
    deleteProjectBtnDiv.appendChild(removeProjectBtn);

    function handleArrowSpanClick() {
      projectBody.classList.toggle('show');
      arrowSpan.classList.toggle('arrowSpanUp');
    }
    arrowSpan.addEventListener('click', handleArrowSpanClick);

    projectCheckBox.addEventListener('change', () => {
      const projectName = projectItem.querySelector('.projectName').textContent;
      const foundProject = projects.filter(
        (project) => project.name === projectName
      );

      if (foundProject) {
        if (projectCheckBox.checked) {
          project.isChecked = true;
          saveProjectsToLocalStorage(projects);
        } else {
          project.isChecked = false;
          saveProjectsToLocalStorage(projects);
        }
      }
    });

    notesTextarea.addEventListener('change', (e) => {
      const projectName = projectItem.querySelector('.projectName').textContent;
      const foundProject = projects.filter(
        (project) => project.name === projectName
      );

      if (foundProject) {
        project.notes = e.target.value;
      }
      saveProjectsToLocalStorage(projects);
    });

    function applyPriorityStyles() {
      if (project.priority === 'high') {
        projectItem.style.borderLeft = '15px solid red';
      } else if (project.priority === 'medium') {
        projectItem.style.borderLeft = '15px solid yellow';
      } else {
        projectItem.style.borderLeft = '15px solid green';
      }
    }
    applyPriorityStyles();

    prioritySelect.addEventListener('change', function () {
      const projectName = projectItem.querySelector('.projectName').textContent;
      const foundProject = projects.filter(
        (project) => project.name === projectName
      );

      if (foundProject) {
        project.priority = this.value;
      }
      saveProjectsToLocalStorage(projects);
      applyPriorityStyles();
    });

    dueDateInput.addEventListener('change', function () {
      const projectName = projectItem.querySelector('.projectName').textContent;
      const foundProject = projects.filter(
        (project) => project.name === projectName
      );

      if (foundProject) {
        const selectedDate = this.value;
        const [year, month, day] = selectedDate.split('-');
        const formattedDate = `${day}/${month}/${year}`;
        project.dueDate = formattedDate;
        dueDate.textContent = project.dueDate;
        saveProjectsToLocalStorage(projects);
      }
    });

    removeProjectBtn.addEventListener('click', () => {
      // Remove the project item from the DOM
      projectItem.remove();

      // Find the index of the project to be removed in the projects array
      const projectName = projectItem.querySelector('.projectName').textContent;
      const foundProject = projects.findIndex(
        (project) => project.name === projectName
      );

      // If the project is found in the projects array, remove it
      if (foundProject !== -1) {
        projects.splice(foundProject, 1);

        // Save the updated projects array to localStorage
        saveProjectsToLocalStorage(projects);
      }
    });
    // console.log(projects);
  });
}
