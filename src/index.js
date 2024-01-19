import './style.css';
import initializeDom from './initializeDom';
import populateListOfProjects from './populateListOfProjects';
import projectController from './projectController';

let listOfProjects = populateListOfProjects();

export default listOfProjects;

if (listOfProjects.length === 0) {

    const defaultProject = projectController('Default');

}

initializeDom();