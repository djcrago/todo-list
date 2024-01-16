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

makeDomTemplate();

domController();

export { listOfProjects, defaultProject };

// testing

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