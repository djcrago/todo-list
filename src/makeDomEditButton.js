import domController from "./domController";
import editPropertyController from "./editPropertyController";

export default function makeDomEditButton(todoItem, property) {

    const editButton = document.createElement('button');
    editButton.classList.toggle('edit-property');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        editPropertyController(todoItem, property);
        domController();
    });

    return editButton;

}