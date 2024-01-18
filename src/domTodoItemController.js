import makeDomDialog from "./makeDomDialog";
import makeDomShortTodoItem from "./makeDomShortTodoItem";
import makeDomTodoItem from "./makeDomTodoItem";
import { body } from './makeDomTemplate';

export default function domTodoItemController(todoItem) {

    const dialog = makeDomDialog();

    const shortDomTodoItem = makeDomShortTodoItem(todoItem, dialog);
    
    const domTodoItem = makeDomTodoItem(todoItem, dialog);             

    dialog.appendChild(domTodoItem);

    body.appendChild(dialog);

    return shortDomTodoItem;

}