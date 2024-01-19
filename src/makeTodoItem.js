import getTodoItemTitle from "./getTodoItemTitle";

export default function makeTodoItem(project) {

    const title = getTodoItemTitle();
    const description = prompt('Description: ');
    const dueDate = prompt('Due Date: ');
    const priority = prompt('Priority (High, Medium, or Low): ');
    const timeEstimate = prompt('How long will this take? (Hours) ');
    
    return {
        title,
        description,
        dueDate,
        priority,
        timeEstimate,
        markCompleted: 'Not Complete',
        project,
        details: false
    };

}