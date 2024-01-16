import './style.css';
import makeProject from './makeProject';
import addProjectToListOfProjects from './addProjectToListOfProjects';
import makeTodoItem from './makeTodoItem';
import addTodoItemToProject from './addTodoItemToProject';
import clearDisplay from './clearDisplay';
import displayListOfProjects from './displayListOfProjects';
import projectController from './projectController';
import todoItemController from './todoItemController';
import makeDomTemplate from './makeDomTemplate';


// To do list

const listOfProjects = [];

const defaultProject = projectController('Default');

export { listOfProjects, defaultProject };

// testing

makeDomTemplate();

// testing

// Seperate application logic from DOM-related stuff
    // Start in console

// User-interface
    // View all projects
    // View all todos in each project (probably just the title and duedate)
    // Expand a single todo to see/edit its details

// External libraries
    // date-fns

// localStorage