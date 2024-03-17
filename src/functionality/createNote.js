import './createNote.css';
import { notesContainer } from "../components/main/main.js";

export function createNotes(){

  const noteOverlay = document.createElement('div');
  noteOverlay.id = 'note-overlay';

  setTimeout(() => {
    noteOverlay.classList.add("active"); // Show overlay
  }, 0.8);

  const notePopupContainer = document.createElement("div");
  notePopupContainer.id = "note-popup-container";

  const heading = document.createElement("h2");
  heading.textContent = "Create A Note";
  notePopupContainer.appendChild(heading);

  const form = document.createElement("form");
  form.id = "note-form";
  notePopupContainer.appendChild(form);

  form.reset();

  const closeNoteFormBtn = document.createElement("button");
  closeNoteFormBtn.textContent = "x";
  closeNoteFormBtn.id = 'close-note-form-btn';
  closeNoteFormBtn.addEventListener("click", () => {
    noteOverlay.classList.remove("active"); // Hide overlay
    setTimeout(() => {
      document.body.removeChild(noteOverlay); // Remove overlay after transition ends
    }, 1000); // 1000s is the duration of the transition
  });
  form.appendChild(closeNoteFormBtn);

  const noteMessage = document.createElement("textarea");
  noteMessage.id = "note-message";
  noteMessage.name = "note-message";
  noteMessage.placeholder = 'Type Note Message';
  noteMessage.maxLength = 250;
  noteMessage.required = true;
  form.appendChild(noteMessage);

  const submitNoteBtn = document.createElement("button");
  submitNoteBtn.id = 'submit-note-btn';
  submitNoteBtn.type = "submit";
  submitNoteBtn.textContent = "Add Note";
  form.appendChild(submitNoteBtn);

  noteOverlay.appendChild(notePopupContainer);

  document.body.appendChild(noteOverlay);
 
}