import './style.css';
import makeTodoItem from './makeTodoItem';
import projectController from './projectController';
import makeDomTemplate from './makeDomTemplate';
import makeDomProject from './makeDomProject';
import makeDomTodoItem from './makeDomTodoItem';
import addDomProjectToProjectsContainer from './addDomProjectToProjectsContainer';
import updateDomDisplay from './updateDomDisplay';
import addDomTodoItemToDomProject from './addDomTodoItemToDomProject';
import domProjectController from './domProjectController';
import todoItemController from './todoItemController';


// To do list

const listOfProjects = [];

const defaultProject = projectController('Default');

export { listOfProjects, defaultProject };

// testing

makeDomTemplate();
domProjectController();

todoItemController();
todoItemController();
domProjectController();
// updateDomDisplay();

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