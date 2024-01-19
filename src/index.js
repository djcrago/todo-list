import './style.css';
import projectController from './projectController';
import makeDomTemplate from './makeDomTemplate';
import updateProjectsContainer from './updateProjectsContainer';

const listOfProjects = [];

const defaultProject = projectController('Default');

makeDomTemplate();

updateProjectsContainer();

export { listOfProjects, defaultProject };

// External libraries
    // date-fns

// localStorage