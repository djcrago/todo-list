import getTodoItemPropertyController from "./getTodoItemPropertyController";

export default function makeTodoItem() {

    const title = getTodoItemPropertyController('Title');
    const description = getTodoItemPropertyController('Description');
    const dueDate = getTodoItemPropertyController('Due Date');
    const priority = getTodoItemPropertyController('Priority');
    const timeEstimate = getTodoItemPropertyController('Time Estimate');
    
    return {
        title,
        description,
        dueDate,
        priority,
        timeEstimate,
        markCompleted: 'Not Complete',
        details: false
    };

}