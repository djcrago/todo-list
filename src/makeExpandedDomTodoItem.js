import makeDomTodoItemElement from './makeDomTodoItemElement';
import makeDomCondensedTodoItem from './makeDomCondensedTodoItem';
import updateProjectsContainer from './updateProjectsContainer';

export default function makeDomExpandedTodoItem(todoItem) {

    const domExpandedTodoItem = makeDomCondensedTodoItem(todoItem);
    const toggleDetailsButton = domExpandedTodoItem.querySelector('.details');

    const description = makeDomTodoItemElement(todoItem, 'description');
    domExpandedTodoItem.insertBefore(description, toggleDetailsButton);

    const priority = makeDomTodoItemElement(todoItem, 'priority');
    domExpandedTodoItem.insertBefore(priority, toggleDetailsButton);

    const timeEstimate = makeDomTodoItemElement(todoItem, 'timeEstimate');
    domExpandedTodoItem.insertBefore(timeEstimate, toggleDetailsButton);

    const markCompleted = makeDomTodoItemElement(todoItem, 'markCompleted', 
                                                'button');
    domExpandedTodoItem.insertBefore(markCompleted, toggleDetailsButton);
    markCompleted.addEventListener('click', () => {
        if (todoItem.markCompleted === 'Not Complete') {
            todoItem.markCompleted = 'Complete';
        } else {
            todoItem.markCompleted = 'Not Complete';
        };
        updateProjectsContainer();
    });

    return domExpandedTodoItem;

}