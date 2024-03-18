import { notesContainer } from "../components/main/main.js";
import { createNotes } from "./createNote.js";

export function displayNote(){

  document.body.removeChild(overlay);
  console.log('displayNote function running');

}