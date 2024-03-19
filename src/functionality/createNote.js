import './createNote.css';
import { notesContainer } from "../components/main/main.js";

let notes = [];

export function createNotes(){

  const noteOverlay = document.createElement('div');
  noteOverlay.id = 'note-overlay';

  setTimeout(() => {
    noteOverlay.classList.add("active"); // Show overlay
  }, 0.8);

  const notePopupContainer = document.createElement("div");
  notePopupContainer.id = "note-popup-container";

  const closeNoteFormBtn = document.createElement("button");
  closeNoteFormBtn.textContent = "x";
  closeNoteFormBtn.id = 'close-note-form-btn';
  closeNoteFormBtn.addEventListener("click", () => {
    noteOverlay.classList.remove("active"); // Hide overlay
    setTimeout(() => {
      document.body.removeChild(noteOverlay); // Remove overlay after transition ends
    }, 1000); // 1000ms is the duration of the transition
  });

  notePopupContainer.appendChild(closeNoteFormBtn);

  const heading = document.createElement("h2");
  heading.textContent = "Create A Note";
  notePopupContainer.appendChild(heading);
  
  const form = document.createElement("form");
  form.id = "note-form";

  notePopupContainer.appendChild(form);
  
  const noteMessage = document.createElement("textarea");
  noteMessage.id = "note-message";
  noteMessage.name = "note-message";
  noteMessage.placeholder = 'Type Note Message';
  noteMessage.maxLength = 150;
  noteMessage.required = true;
  form.appendChild(noteMessage);

  const submitNoteBtn = document.createElement("button");
  submitNoteBtn.id = 'submit-note-btn';
  submitNoteBtn.type = "submit";
  submitNoteBtn.textContent = "Add Note";
  submitNoteBtn.addEventListener('click', (event) => {

    event.preventDefault();
    
    let newNote = noteMessage.value;
    notes.push(newNote);
    
    let noteCard = document.createElement('div');
    noteCard.classList.add('note-card');
    noteCard.textContent = newNote;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove Note";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      // Remove note card from notesContainer
      notesContainer.removeChild(noteCard);
      // Remove note from notes array
      const index = notes.indexOf(newNote);
      if (index !== -1) {
        notes.splice(index, 1);
      }
    });
    
    // Append delete button to note card
    noteCard.appendChild(deleteButton);

    // Append note card to notesContainer
    notesContainer.appendChild(noteCard);
    
    form.reset();

    noteOverlay.classList.remove("active");

    setTimeout(() => {
      document.body.removeChild(noteOverlay);
    }, 1000); 
  });

  form.appendChild(submitNoteBtn);

  noteOverlay.appendChild(notePopupContainer);

  document.body.appendChild(noteOverlay);
}
