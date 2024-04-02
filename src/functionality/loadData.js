//loadData.js

import { projectsContainer } from '../components/main/main.js';
import { saveProjectsToLocalStorage } from './saveData.js';

// Function to load project data from localStorage
export function loadProjectsFromLocalStorage() {
  //clearing the projectContainer before appending new projects to avoid duplications
  projectsContainer.innerHTML = '';

  let projects = JSON.parse(localStorage.getItem('projects'));

  projects.forEach((project) => {
    let currentDateDay = `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`;

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
    projectNameAndCheckBoxDiv.appendChild(projectCheckBox);

    let projectName = document.createElement('span');
    projectName.classList.add('projectName');
    projectName.textContent = project.name;
    projectNameAndCheckBoxDiv.appendChild(projectName);

    let dueDate = document.createElement('span');
    dueDate.classList.add('dueDate');
    dueDate.textContent = currentDateDay;
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

    let deleteProjectBtnDiv = document.createElement('div');
    deleteProjectBtnDiv.classList.add('deleteProjectBtnDiv');
    projectBody.appendChild(deleteProjectBtnDiv);

    let removeProjectBtn = document.createElement('button');
    removeProjectBtn.classList.add('removeProjectBtn');
    removeProjectBtn.textContent = 'Delete';
    deleteProjectBtnDiv.appendChild(removeProjectBtn);

    arrowSpan.addEventListener('click', handleArrowSpanClick);

    prioritySelect.value = project.priority.toLowerCase(); // Set the selected option

    // Define a function to apply styles based on the selected priority
    function applyPriorityStyles(selectedOption, projectItem) {
      if (selectedOption === 'low') {
        projectItem.style.borderLeft = '15px solid green';
      } else if (selectedOption === 'medium') {
        projectItem.style.borderLeft = '15px solid yellow';
      } else if (selectedOption === 'high') {
        projectItem.style.borderLeft = '15px solid red';
      }
    }

    prioritySelect.addEventListener('change', function () {
      let selectedOption = prioritySelect.value;

      // Apply styles based on the selected priority
      applyPriorityStyles(selectedOption, projectItem);

      // Update the priority value in the projects array
      let updatedProjects = JSON.parse(localStorage.getItem('projects')) || [];
      let projectName = projectItem.querySelector('.projectName').textContent;
      let projectToUpdate = updatedProjects.find(
        (project) => project.name === projectName
      );
      if (projectToUpdate) {
        projectToUpdate.priority = selectedOption;
      }

      // Save the updated projects array back to local storage
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
    });

    window.addEventListener('load', function () {
      let selectedOption = prioritySelect.value;
      applyPriorityStyles(selectedOption, projectItem);
    });

    function handleArrowSpanClick() {
      projectBody.classList.toggle('show');
      arrowSpan.classList.toggle('arrowSpanUp');
    }

    dueDateInput.addEventListener('change', function () {
      const selectedDate = this.value;
      const [year, month, day] = selectedDate.split('-');
      const formattedDate = `${day}/${month}/${year}`;
      dueDate.textContent = formattedDate;
      project.dueDate = this.value;
    });

    projectCheckBox.addEventListener('change', function () {
      if (this.checked) {
        projectName.classList.add('completedProject');
        dueDate.classList.add('completedProject');
        arrowSpan.removeEventListener('click', handleArrowSpanClick);
        projectBody.classList.remove('show');
        arrowSpan.classList.remove('arrowSpanUp');
      } else {
        projectName.classList.remove('completedProject');
        dueDate.classList.remove('completedProject');
        arrowSpan.addEventListener('click', handleArrowSpanClick);
      }
    });

    removeProjectBtn.addEventListener('click', () => {
      // Remove the project item from the DOM
      projectItem.remove();

      // Find the index of the project to be removed in the projects array
      const projectName = projectItem.querySelector('.projectName').textContent;
      const indexToRemove = projects.findIndex(
        (project) => project.name === projectName
      );

      // If the project is found in the projects array, remove it
      if (indexToRemove !== -1) {
        projects.splice(indexToRemove, 1);

        // Save the updated projects array to localStorage
        localStorage.setItem('projects', JSON.stringify(projects));
        // saveProjectsToLocalStorage()
      }
    });
  });
}
