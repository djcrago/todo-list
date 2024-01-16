import displayDomTodoItem from "./displayDomTodoItem";
import { projectsContainer } from './makeDomTemplate';

export default function displayDomProject(domProject) {

    projectsContainer.appendChild(domProject);

    console.log(domProject);

    // project.todoItems.forEach(todoItem => {
        
    //     const domTodoItem = makeDomTodoItem(todoItem);
    //     domProject.appendChild(domTodoItem);

    // });

}