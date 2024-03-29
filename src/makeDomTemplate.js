import projectController from "./projectController";
import updateProjectsContainer from "./updateProjectsContainer";

const body = document.querySelector('body');

const projectsContainer = document.createElement('div');

export default function makeDomTemplate() {

    projectsContainer.classList.toggle('projects-container');

    const title = document.createElement('h1');
    title.textContent = 'Todo List';
    body.appendChild(title);
 
    const addProjectButton = document.createElement('button');
    addProjectButton.classList.toggle('add-project');
    addProjectButton.textContent = '+ New Project';
    addProjectButton.addEventListener('click', () => {
        projectController();
        updateProjectsContainer();
    });
    body.appendChild(addProjectButton);

}

export { body, projectsContainer };