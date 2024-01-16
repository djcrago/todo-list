import todoItemController from "./todoItemController";
import domController from "./domController";
import deleteProject from "./deleteProject";

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

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.toggle('delete-project');
    deleteProjectButton.textContent = 'Delete Project';
    console.log(project);
    deleteProjectButton.addEventListener('click', () => {
        deleteProject();
        domController();
    });
    if (project.title !== 'Default') {
        domProject.appendChild(deleteProjectButton);        
    }


    return domProject;

}