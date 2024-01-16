import domController from "./domController";
import { addProject } from "./makeDomTemplate";
import projectController from "./projectController";

export default function addEventListeners() {

    addProject.addEventListener('click', () => {
        console.log('works');
        projectController();
        domController();
    })

}