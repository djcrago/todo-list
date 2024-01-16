import './style.css';
import makeProject from './makeProject';
import addProjectToListOfProjects from './addProjectToListOfProjects';
import makeTodoItem from './makeTodoItem';
import addTodoItemToProject from './addTodoItemToProject';
import clearDisplay from './clearDisplay';
import displayListOfProjects from './displayListOfProjects';
import projectController from './projectController';
import todoItemController from './todoItemController';


// To do list

const listOfProjects = [];

const defaultProject = projectController('Default');

export { listOfProjects, defaultProject };

// testing

const hello = projectController('Hello');

todoItemController();

todoItemController(hello);


// testing



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