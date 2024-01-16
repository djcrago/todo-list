export default function makeDomProject(project) {

    const domProject = document.createElement('div');
    domProject.classList.toggle('dom-project');

    const title = document.createElement('h2');
    title.classList.toggle('project-title');
    title.textContent = project.title;
    domProject.appendChild(title);

    return domProject;

}