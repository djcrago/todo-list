import addDomProjectToProjectsContainer from "./addDomProjectToProjectsContainer";
import addDomTodoItemToDomProject from "./addDomTodoItemToDomProject";
import clearDomDisplay from "./clearDomDisplay";
import displayProjectsContainer from "./displayProjectsContainer";
import { listOfProjects } from "./index";
import makeDomProject from "./makeDomProject";
import makeDomTodoItem from "./makeDomTodoItem";

export default function domController() {

    clearDomDisplay();

    listOfProjects.forEach((project) => {

        const domProject = makeDomProject(project);

        project.todoItems.forEach((todoItem) => {

            const domTodoItem = makeDomTodoItem(todoItem);
            addDomTodoItemToDomProject(domTodoItem, domProject)

        });

        addDomProjectToProjectsContainer(domProject);        

    });

    displayProjectsContainer();

}