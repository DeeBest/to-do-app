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

    // Array of priority options
    const priorityOptions = ['Low', 'Medium', 'High'];

    priorityOptions.forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.value = option.toLowerCase();
      optionElement.textContent = option;
      prioritySelect.appendChild(optionElement);
    });

    let deleteProjectBtnDiv = document.createElement('div');
    deleteProjectBtnDiv.classList.add('deleteProjectBtnDiv')
    projectBody.appendChild(deleteProjectBtnDiv);

    let removeProjectBtn = document.createElement('button');
    removeProjectBtn.classList.add('removeProjectBtn');
    removeProjectBtn.textContent = 'Delete';
    deleteProjectBtnDiv.appendChild(removeProjectBtn);

    projectNameInput.value = '';
  } else {
    alert('Please enter a project name!');
  }
}

