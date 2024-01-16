import todoItemController from "./todoItemController";
import domController from "./domController";

export default function makeDomProject(project) {

    const domProject = document.createElement('div');
    domProject.classList.toggle('dom-project');

    const title = document.createElement('h2');
    title.classList.toggle('project-title');
    title.textContent = project.title;
    domProject.appendChild(title);

    const addTodoItem = document.createElement('button');
    addTodoItem.classList.toggle('add-todo-item');
    addTodoItem.textContent = 'New Todo Item';
    addTodoItem.addEventListener('click', () => {
        todoItemController(project);
        domController();
    });
    domProject.appendChild(addTodoItem);

    return domProject;

}