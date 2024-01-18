import deleteTodoItem from './deleteTodoItem';
import updateProjectsContainer from './updateProjectsContainer';
import makeDomTodoItemElement from './makeDomTodoItemElement';

export default function makeDomTodoItem(todoItem) {

    const domTodoItem = document.createElement('div');
    domTodoItem.classList.toggle('todo-item');

    const title = makeDomTodoItemElement(todoItem, 'title',  'h3');
    domTodoItem.appendChild(title);

    const description = makeDomTodoItemElement(todoItem, 'description');
    domTodoItem.appendChild(description);

    const dueDate = makeDomTodoItemElement(todoItem, 'dueDate');
    domTodoItem.appendChild(dueDate);

    const priority = makeDomTodoItemElement(todoItem, 'priority');
    domTodoItem.appendChild(priority);

    const timeEstimate = makeDomTodoItemElement(todoItem, 'timeEstimate');
    domTodoItem.appendChild(timeEstimate);

    const markCompleted = makeDomTodoItemElement(todoItem, 'markCompleted', 
                                                'button');
    domTodoItem.appendChild(markCompleted);

    // const deleteTodoItemButton = document.createElement('button');
    // deleteTodoItemButton.classList.toggle('delete-todo');
    // deleteTodoItemButton.textContent = 'Delete Todo Item';

    const deleteTodoItemButton = makeDomTodoItemElement(todoItem, 'delete',
                                                        'button');
    deleteTodoItemButton.addEventListener('click', () => {
        deleteTodoItem(todoItem);
        updateProjectsContainer();
    });
    domTodoItem.appendChild(deleteTodoItemButton);

    return domTodoItem;

}