import './newToDoForm.css'
import { createProjectToDo } from './createToDo.js';

export function newToDoForm() {

  // Create overlay element
  const newToDoFormOverlay = document.createElement("div");
  newToDoFormOverlay.id = "new-to-do-form-overlay";
  
  setTimeout(() => {
    newToDoFormOverlay.classList.add("active"); // Show overlay
  }, 0.8); 

  // Create popup container
  const toDoPopupContainer = document.createElement("div");
  toDoPopupContainer.id = "to-do-popup-container";

  // Create heading
  const heading = document.createElement("h2");
  heading.textContent = `Add A New To-Do For Your Project`;

  // Create form
  const form = document.createElement("form");

  form.reset();

  form.id = "to-do-form";

  const toDoInput = document.createElement("input");
  toDoInput.type = "text";
  toDoInput.id = "to-do-input";
  toDoInput.required = true;

  const toDoDueDate = document.createElement('input');
  toDoDueDate.type = 'date';
  toDoDueDate.id = 'to-do-due-date';
  toDoDueDate.required = true;

  // Create submit button
  const submitButton = document.createElement("button");
  // submitButton.type = "submit";
  submitButton.textContent = "Add ToDo";
  submitButton.addEventListener('click', createProjectToDo);

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "x";
  closeButton.id = 'close-to-do-popup-container';
  closeButton.addEventListener("click", () => {
    newToDoFormOverlay.classList.remove("active"); // Hide overlay
    setTimeout(() => {
      document.body.removeChild(newToDoFormOverlay); // Remove overlay after transition ends
    }, 1000); // 1000s is the duration of the transition
  });

  // Append elements to form
  form.appendChild(toDoInput);
  form.appendChild(toDoDueDate);
  form.appendChild(submitButton);

  // Append elements to popup container
  toDoPopupContainer.appendChild(closeButton);
  toDoPopupContainer.appendChild(heading);
  toDoPopupContainer.appendChild(form);

  // Append popup container to overlay
  newToDoFormOverlay.appendChild(toDoPopupContainer);

  // Append overlay to body
  document.body.appendChild(newToDoFormOverlay);
}