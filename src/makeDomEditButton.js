import editPropertyController from "./editPropertyController";
import updateDom from "./updateProjectsContainer";

export default function makeDomEditButton(todoItem, property) {

    const editButton = document.createElement('button');
    editButton.classList.toggle('edit-property');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        editPropertyController(todoItem, property);
        updateDom();
    });

    return editButton;

}