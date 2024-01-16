import addDomProjectToProjectsContainer from "./addDomProjectToProjectsContainer";
import addDomTodoItemToDomProject from "./addDomTodoItemToDomProject";
import { listOfProjects } from "./index";
import makeDomProject from "./makeDomProject";
import makeDomTodoItem from "./makeDomTodoItem";
import updateDomDisplay from "./updateDomDisplay";

export default function domProjectController() {

    listOfProjects.forEach((project) => {

        const domProject = makeDomProject(project);

        project.todoItems.forEach((todoItem) => {

            const domTodoItem = makeDomTodoItem(todoItem);
            addDomTodoItemToDomProject(domTodoItem, domProject)

        });

        addDomProjectToProjectsContainer(domProject);        

    });

    updateDomDisplay();

}