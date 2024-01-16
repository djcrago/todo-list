export default function makeTodoItem(project) {

    const title = prompt('Title: ', 'Test');
    const description = prompt('Description: ', 'This is a test.');
    const dueDate = prompt('Due Date: ', 'Tomorrow');
    const priority = prompt('Priority (High, Medium, or Low): ', 'Medium');
    const timeEstimate = prompt('How long will this take? (Hours) ', '8');
    
    return {
        title,
        description,
        dueDate,
        priority,
        timeEstimate,
        markCompleted: false,
        project
    };

}