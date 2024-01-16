export default function addDomProjectButtons(domProject) {

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
    deleteProjectButton.addEventListener('click', () => {
        deleteProject();
        domController();
    });
    if (project.title !== 'Default') {
        domProject.appendChild(deleteProjectButton);        
    }

    return domProject;

}