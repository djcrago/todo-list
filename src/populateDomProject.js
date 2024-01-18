import makeDomTodoItem from "./makeDomTodoItem";

export default function populateDomProject(project, domProject) {

    project.todoItems.forEach((todoItem) => {     

        const domTodoItem = makeDomTodoItem(todoItem);

        domProject.appendChild(domTodoItem);

    });

}