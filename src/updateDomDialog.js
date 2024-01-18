import makeDomDialog from "./makeDomDialog";
import { body } from './makeDomTemplate';
import makeDomTodoItem from "./makeDomTodoItem";

export default function updateDomDialog(todoItem, dialog) {

    if (dialog) {

        dialog.close();      

    }

    console.log(dialog);

    const updatedDialog = makeDomDialog();

    const domTodoItem = makeDomTodoItem(todoItem, dialog);

    updatedDialog.appendChild(domTodoItem);

    body.appendChild(updatedDialog);

    updatedDialog.showModal();

    return updatedDialog;

}