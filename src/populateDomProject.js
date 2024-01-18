import makeDomTodoItem from "./makeExpandedDomTodoItem";
import makeDomCondensedTodoItem from "./makeDomCondensedTodoItem";

export default function populateDomProject(project, domProject) {

    project.todoItems.forEach((todoItem) => {

        if (!todoItem.details) {

            const domCondensedTodoItem = makeDomCondensedTodoItem(todoItem);
            
            domProject.appendChild(domCondensedTodoItem);

        } else if (todoItem.details) {

            const domTodoItem = makeDomTodoItem(todoItem);

            domProject.appendChild(domTodoItem);

        };

    });

}