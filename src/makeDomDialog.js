export default function makeDomDialog() {

    const dialog = document.createElement('dialog');
    dialog.classList.toggle('dialog');

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
        dialog.close()
    });
    dialog.appendChild(closeButton);

    return dialog;

}