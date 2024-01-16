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
import makeDomProject from './makeDomProject';
import makeDomTodoItem from './makeDomTodoItem';
import displayDomTodoItem from './displayDomTodoItem';
import displayDomProject from './displayDomProject';
import addDomProjectToProjectsContainer from './addDomProjectToProjectsContainer';
import updateDomDisplay from './updateDomDisplay';
import addDomTodoItemToDomProject from './addDomTodoItemToDomProject';
import updateDisplay from './updateDisplay';


// To do list

const listOfProjects = [];

const defaultProject = projectController('Default');

export { listOfProjects, defaultProject };

// testing

makeDomTemplate();
const defaultDomProject = makeDomProject(defaultProject);
addDomProjectToProjectsContainer(defaultDomProject);
updateDomDisplay();

const test = makeTodoItem();
const domTest = makeDomTodoItem(test);
addDomTodoItemToDomProject(domTest, defaultDomProject);
updateDomDisplay();

const test2 = makeTodoItem();
const domTest2 = makeDomTodoItem(test2);
addDomTodoItemToDomProject(domTest2, defaultDomProject);
updateDisplay();

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