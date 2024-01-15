export default function makeTodoItem(title, description, dueDate, priority, 
    timeEstimate, markCompleted) {
    return {
        title,
        description,
        dueDate,
        priority,
        timeEstimate,
        markCompleted
    };
}