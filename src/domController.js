import addDomProjectToProjectsContainer from "./addDomProjectToProjectsContainer";
import addDomTodoItemToDomProject from "./addDomTodoItemToDomProject";
import clearDomDisplay from "./clearDomDisplay";
import displayProjectsContainer from "./displayProjectsContainer";
import { listOfProjects } from "./index";
import makeDomProject from "./makeDomProject";
import makeDomShortTodoItem from "./makeDomShortTodoItem";
import makeDomTodoDialog from "./makeDomTodoDialog";
import makeDomTodoItem from "./makeDomTodoItem";
import { body } from './makeDomTemplate';

export default function domController() {

    clearDomDisplay();

    listOfProjects.forEach((project) => {

        const domProject = makeDomProject(project);

        project.todoItems.forEach((todoItem) => {

            const domTodoItem = makeDomTodoItem(todoItem);

            // testing

            const shortDomTodoItem = makeDomShortTodoItem(todoItem);

            const open = document.createElement('button');
            open.textContent = 'Open';
            open.addEventListener('click', () => {
                dialog.showModal();
            });          
            shortDomTodoItem.appendChild(open);  

            const dialog = document.createElement('dialog');
            dialog.classList.toggle('dialog');

            dialog.appendChild(domTodoItem);
        
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.addEventListener('click', () => {
                dialog.close()
            });
            dialog.appendChild(closeButton);

            body.appendChild(dialog);




            // testing

            addDomTodoItemToDomProject(shortDomTodoItem, domProject);

        });

        addDomProjectToProjectsContainer(domProject);        

    });

    displayProjectsContainer();

}