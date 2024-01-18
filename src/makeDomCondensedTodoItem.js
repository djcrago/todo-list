import deleteTodoItem from "./deleteTodoItem";
import updateProjectsContainer from "./updateProjectsContainer";
import makeDomTodoItemElement from "./makeDomTodoItemElement";

export default function makeDomCondensedTodoItem(todoItem) {

    const domCondensedTodoItem = document.createElement('div');
    domCondensedTodoItem.classList.toggle('todo-item');

    const title = makeDomTodoItemElement(todoItem, 'title',  'h3');
    domCondensedTodoItem.appendChild(title);

    const dueDate = makeDomTodoItemElement(todoItem, 'dueDate');
    domCondensedTodoItem.appendChild(dueDate);

    const toggleDetailsButton = makeDomTodoItemElement(todoItem, 'details',
                                                       'button');
    toggleDetailsButton.addEventListener('click', () => {
        todoItem.details = !todoItem.details;
        updateProjectsContainer();
    });
    domCondensedTodoItem.appendChild(toggleDetailsButton);

    const deleteTodoItemButton = makeDomTodoItemElement(todoItem, 'delete',
                                                        'button');
    deleteTodoItemButton.addEventListener('click', () => {
        deleteTodoItem(todoItem);
        updateProjectsContainer();
    });
    domCondensedTodoItem.appendChild(deleteTodoItemButton);

    return domCondensedTodoItem;

}