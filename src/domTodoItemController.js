import todoItemController from "./todoItemController";
import domController from "./domController";

export default function domTodoItemController(project) {

    todoItemController(project);
    domController();

}