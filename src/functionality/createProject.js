// Import populateProjects function from populateProjects.js
import { populateProjects } from "./populateProjects";

// Array to store projects
export let projects = [];

// Function to create a new project
export function createProject() {
  // Define Project class
  class Project {
    constructor(name) {
      this.name = name;
      this.todos = [];
      this.notes = [];
    }

    addTodo(todo) {
      this.todos.push(todo);
    }

    editTodo(todoIndex, updatedTodo) {
      if (todoIndex >= 0 && todoIndex < this.todos.length) {
        this.todos[todoIndex] = updatedTodo;
      } else {
        console.error("Invalid todo index");
      }
    }

    addNote(note) {
      this.notes.push(note);
    }

    deleteProject() {
      const index = projects.indexOf(this); // Find the index of the current project in the projects array
      if (index !== -1) {
        projects.splice(index, 1); // Remove the project object from the projects array
        console.log(`Project '${this.name}' deleted.`);
      } else {
        console.error("Project not found in array");
      }
    }
  }

  // Create a new project
  let myProject = new Project("Workout");
  
  // Add the newly created project to the projects array
  projects.push(myProject);

  // Call the populateProjects function to display the projects in the UI
  populateProjects();
}
