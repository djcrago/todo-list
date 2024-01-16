const body = document.querySelector('body');

export default function makeDomTemplate() {

    const title = document.createElement('h1');
    title.textContent = 'Todo List';
    
    body.appendChild(title);

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.toggle('projects-container');
    body.appendChild(projectsContainer);

}

export { body };