export default function makeDomEditButton() {

    const editButton = document.createElement('button');
    editButton.classList.toggle('edit-property');
    editButton.textContent = 'Edit';

    return editButton;

}