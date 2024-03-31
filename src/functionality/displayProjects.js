import { projectsContainer } from '../components/main/main.js';
import { projects } from './createProject.js';

export function displayProjects() {

  // projects.forEach((project) => {

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
    projectName.textContent = 1;
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

    prioritySelect.addEventListener('change', function () {
      let selectedOption = this.value;

      if (selectedOption === 'low') {
        projectItem.style.borderLeft = '15px solid green';
      } else if (selectedOption === 'medium') {
        projectItem.style.borderLeft = '15px solid yellow';
      } else if (selectedOption === 'high') {
        projectItem.style.borderLeft = '15px solid red';
      }
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
      projectItem.remove();
    });

    // projectNameInput.value = '';
    // projectNameInput.style.border = 'none';
    // projectNameInput.placeholder = 'Project name...';

    // projectNameInput.style.border = '2px solid tomato';
    // projectNameInput.placeholder = 'Project name REQUIRED!!';
  // });
}
