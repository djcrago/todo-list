import './style.css';
import makeTodoItem from './makeTodoItem';
import displayTodoItem from './displayTodoItem';

// To do list

const test = makeTodoItem('Test', 'This is a test', 'Tomorrow', 'High', '2', 
                          false);

displayTodoItem(test);

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