import './style.css';
import projectController from './projectController';
import makeDomTemplate from './makeDomTemplate';
import domController from './domController';

const listOfProjects = [];

const defaultProject = projectController('Default');

makeDomTemplate();

domController();

export { listOfProjects, defaultProject };

// User-interface
    // View all projects
    // View all todos in each project (probably just the title and duedate)
    // Expand a single todo to see/edit its details

// External libraries
    // date-fns

// localStorage