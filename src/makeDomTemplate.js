import displayProjectsContainer from "./displayProjectsContainer";
import projectController from "./projectController";
import domController from "./domController";

const body = document.querySelector('body');

const projectsContainer = document.createElement('div');


export default function makeDomTemplate() {

    projectsContainer.classList.toggle('projects-container');

    const title = document.createElement('h1');
    title.textContent = 'Todo List';
    body.appendChild(title);
 

    const addProject = document.createElement('button');
    addProject.classList.toggle('add-project');
    addProject.textContent = 'New Project';
    addProject.addEventListener('click', () => {
        projectController();
        domController(); 
    });
    body.appendChild(addProject);

    displayProjectsContainer();

}

export { body, projectsContainer };