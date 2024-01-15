import './style.css';
import makeTodoItem from './makeTodoItem';
import displayTodoItem from './displayTodoItem';
import makeProject from './makeProject';
import addTodoItemToProject from './addTodoItemToProject';
import displayProject from './displayProject';

// To do list

const defaultProject = makeProject('Default');



const test = makeTodoItem('Test', 'This is a test', 'Tomorrow', 'High', '2', 
                          false);

const test2 = makeTodoItem('Test 2', 'This is a second test', 
                          'Tomorrow of Yesterday', 'Very High', '10', false);                          

addTodoItemToProject(test, defaultProject);
addTodoItemToProject(test2, defaultProject);


displayProject(defaultProject, displayTodoItem);

// Todo-item properties
    // title
    // description
    // dueDate
    // priority
    // timeEstimate
    // markCompleted

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