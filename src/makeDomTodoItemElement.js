import editPropertyController from "./editPropertyController";
import updateProjectsContainer from "./updateProjectsContainer";

export default function makeDomTodoItemElement(todoItem, property, elementType) {

    const propertyValue = todoItem[property];

    if (!elementType) {
        elementType = 'p';
    };

    const element = document.createElement(elementType);
    element.classList.toggle('element');

    if (property === 'markComplete') {

        element.classList.toggle('markCompleted');

    }

    if (property === 'dueDate') {
        element.textContent = `Due: ${propertyValue}`;
    } else if (property === 'description') {
        element.textContent = `Description: ${propertyValue}`;
    } else if (property === 'priority') {
        element.textContent = `Priority: ${propertyValue}`;
    } else if (property === 'timeEstimate') {
        if (propertyValue !== '') {
            element.textContent = `Time Estimate: ${propertyValue} hours`            
        } else {
            element.textContent = 'Time Estimate:';
        };
    } else if (property === 'details') {
        element.textContent = 'Show / Hide Details';    
    } else if (property === 'delete') {
        element.textContent = 'Remove Todo Item';
    } else {
        element.textContent = propertyValue;
    };

    if (property !== 'markCompleted' && property !== 'delete' &&
        property !== 'details') {
        const editButton = document.createElement('button');
        editButton.classList.toggle('edit-property');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            editPropertyController(todoItem, property);
            updateProjectsContainer();
        });
        element.appendChild(editButton);
    };

    return element;

}