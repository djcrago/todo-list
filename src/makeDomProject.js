import updateProjectsContainer from "./updateProjectsContainer";
import todoItemController from "./todoItemController";
import deleteProject from './deleteProject';

export default function makeDomProject(project) {

    const domProject = document.createElement('div');
    domProject.classList.toggle('dom-project');

    const title = document.createElement('h2');
    title.classList.toggle('project-title');
    title.textContent = project.title;
    domProject.appendChild(title);

    const addTodoItemButton = document.createElement('button');
    addTodoItemButton.classList.toggle('add-todo-item');
    addTodoItemButton.textContent = 'New Todo Item';
    addTodoItemButton.addEventListener('click', () => {
        todoItemController(project);
        updateProjectsContainer();
    });
    domProject.appendChild(addTodoItemButton);

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.toggle('delete-project');
    deleteProjectButton.textContent = 'Delete Project';
    deleteProjectButton.addEventListener('click', () => {
        deleteProject(project);
        updateProjectsContainer();
    });
    if (project.title !== 'Default') {
        domProject.appendChild(deleteProjectButton);
    }

    return domProject;

}