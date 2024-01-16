import './style.css';
import makeTodoItem from './makeTodoItem';
import displayTodoItem from './displayTodoItem';
import makeProject from './makeProject';
import addTodoItemToProject from './addTodoItemToProject';
import displayProject from './displayProject';
import displayListOfProjects from './displayListOfProjects';
import addProjectToProjects from './addProjectToProjects';

// To do list

const listOfProjects = [];

const defaultProject = makeProject('Default');

addProjectToProjects(defaultProject);

const test = makeTodoItem();

addTodoItemToProject(test, defaultProject);

console.log(defaultProject);

displayListOfProjects();






// Projects (seperate lists of todos)
    // When user first opens app have 'default' project
    // Create new projects
    // Choose which project a new todo goes into

// Seperate application logic from DOM-related stuff
    // Start in console

// User-interface
    // View all projects
    // View all todos in each project (probably just the title and duedate)
    // Expand a single todo to see/edit its details

// External libraries
    // date-fns

// localStorage

export { listOfProjects };