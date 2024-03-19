import { projects } from "./createProject.js";
import { createProject } from "./createProject.js";

export function createProjectToDo(){

  //this makes the newToDo a class and it inherit the methods from the createProject function class which is Project
  let newToDo = createProject();

  //now the newToDo can creates classes
  let myNewProject = new newToDo('Master JavaScript');

  let createNewToDo = myNewProject.addTodo();

  let myNewToDo = new createNewToDo('Learn CSS', '20/09/2025');

  myNewProject.todos.push(myNewToDo);
  console.log(myNewProject);
}