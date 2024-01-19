import deleteTodoItem from './deleteTodoItem';
import updateProjectsContainer from './updateProjectsContainer';
import makeDomTodoItemElement from './makeDomTodoItemElement';

export default function makeDomExpandedTodoItem(todoItem) {

    const domExpandedTodoItem = document.createElement('div');
    domExpandedTodoItem.classList.toggle('todo-item');

    const title = makeDomTodoItemElement(todoItem, 'title',  'h3');
    domExpandedTodoItem.appendChild(title);

    const description = makeDomTodoItemElement(todoItem, 'description');
    domExpandedTodoItem.appendChild(description);

    const dueDate = makeDomTodoItemElement(todoItem, 'dueDate');
    domExpandedTodoItem.appendChild(dueDate);

    const priority = makeDomTodoItemElement(todoItem, 'priority');
    domExpandedTodoItem.appendChild(priority);

    const timeEstimate = makeDomTodoItemElement(todoItem, 'timeEstimate');
    domExpandedTodoItem.appendChild(timeEstimate);

    const markCompleted = makeDomTodoItemElement(todoItem, 'markCompleted', 
                                                'button');
    domExpandedTodoItem.appendChild(markCompleted);
    markCompleted.addEventListener('click', () => {
        if (todoItem.markCompleted === 'Not Complete') {
            todoItem.markCompleted = 'Complete';
        } else {
            todoItem.markCompleted = 'Not Complete';
        };
        updateProjectsContainer();
    });

    const toggleDetailsButton = makeDomTodoItemElement(todoItem, 'details',
                                                       'button');
    toggleDetailsButton.addEventListener('click', () => {
        todoItem.details = !todoItem.details;
        updateProjectsContainer();
    });
    domExpandedTodoItem.appendChild(toggleDetailsButton);

    const deleteTodoItemButton = makeDomTodoItemElement(todoItem, 'delete',
                                                        'button');
    deleteTodoItemButton.addEventListener('click', () => {
        deleteTodoItem(todoItem);
        updateProjectsContainer();
    });
    domExpandedTodoItem.appendChild(deleteTodoItemButton);

    return domExpandedTodoItem;

}