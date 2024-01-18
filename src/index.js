import './style.css';
import projectController from './projectController';
import makeDomTemplate from './makeDomTemplate';
import updateDom from './updateProjectsContainer';

const listOfProjects = [];

const defaultProject = projectController('Default');

makeDomTemplate();

updateDom();

export { listOfProjects, defaultProject };

// User-interface
    // Expand a single todo to edit its details

// External libraries
    // date-fns

// localStorage