import displayProjectsContainer from "./displayProjectsContainer";

const body = document.querySelector('body');
const projectsContainer = document.createElement('div');
projectsContainer.classList.toggle('projects-container');

export default function makeDomTemplate() {

    const title = document.createElement('h1');
    title.textContent = 'Todo List';
    body.appendChild(title);

    displayProjectsContainer();

}

export { body, projectsContainer };