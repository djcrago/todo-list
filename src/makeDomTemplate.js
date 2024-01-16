import displayProjectsContainer from "./displayProjectsContainer";

const body = document.querySelector('body');

const projectsContainer = document.createElement('div');

const addProject = document.createElement('button');


export default function makeDomTemplate() {

    projectsContainer.classList.toggle('projects-container');

    const title = document.createElement('h1');
    title.textContent = 'Todo List';
    body.appendChild(title);
 
    addProject.classList.toggle('add-project');
    addProject.textContent = 'New Project';
    body.appendChild(addProject);

    displayProjectsContainer();

}

export { body, projectsContainer, addProject };