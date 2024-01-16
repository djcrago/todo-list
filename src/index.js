import './style.css';
import projectController from './projectController';
import makeDomTemplate from './makeDomTemplate';
import domController from './domController';
import todoItemController from './todoItemController';
import addEventListeners from './addEventListeners';


// To do list

const listOfProjects = [];

const defaultProject = projectController('Default');

addEventListeners();

export { listOfProjects, defaultProject };

// testing

makeDomTemplate();
domController();

todoItemController();
domController();

const test = projectController();
todoItemController(test);
domController();

todoItemController();
domController();

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