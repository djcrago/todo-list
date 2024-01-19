import makeExpandedDomTodoItem from "./makeExpandedDomTodoItem";
import makeDomCondensedTodoItem from "./makeDomCondensedTodoItem";


export default function populateDomProject(project, domProject) {

    const deleteProjectButton = domProject.querySelector('.delete-project');

    project.todoItems.forEach((todoItem) => {

        if (!todoItem.details) {

            const domCondensedTodoItem = makeDomCondensedTodoItem(todoItem);

            if (deleteProjectButton !== null) {

                domProject.insertBefore(domCondensedTodoItem, deleteProjectButton);

            } else {

                domProject.appendChild(domCondensedTodoItem);

            };

        } else {

            const domExpandedTodoItem = makeExpandedDomTodoItem(todoItem);

            if (deleteProjectButton !== null) {

                domProject.insertBefore(domExpandedTodoItem, deleteProjectButton);

            } else {

                domProject.appendChild(domExpandedTodoItem);

            };

        };

    });

}