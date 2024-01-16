import domController from "./domController";
import { addProject } from "./makeDomTemplate";
import projectController from "./projectController";
import { addTodoItem } from "./makeDomProject";
import todoItemController from "./todoItemController";

export default function addEventListeners() {

    addProject.addEventListener('click', () => {
        console.log('works');
        projectController();
        domController();
    });

}