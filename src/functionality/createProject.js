import { projects, newProject, populateProjects } from "./populateProjects";

export function createProject(){

  class Project {
    constructor(projectName) {
      this.projectName = projectName;
      this.todos = [];
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
  
    deleteProject() {
      // Implementation of deleting the project would depend on your application structure.
      // You may want to remove the project from a list of projects or perform any cleanup tasks.
      // For now, let's just log a message.
      console.log(`Project '${this.projectName}' deleted.`);
    }
  }

  //creates new project based on the Project class
  let myProject = new Project('Workout');
  
  //creates a new to-do for the project
  myProject.addTodo('Do Chest');

  //console logs the created project and its methods and its to-dos
  console.log(myProject)

  //console logs the created project name
  console.log(myProject.projectName);

  //console logs the to-dos in a project
  console.log(myProject.todos);

  //stores the project name in the empty newProject variable
  //so that it can be used to display the project name in the projects grid item
  newProject = myProject.projectName;

  //adds the newly created project in the projects array 
  projects.push(newProject);

  //console logs the projects that are stored in the projects array
  console.log(projects);




  populateProjects();
};
