export default function makeTodoItem(project) {

    let title;
    do {
        title = prompt('Title: ', 'Test');
    }
    while (title === '');
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
        markCompleted: 'Not Complete',
        project,
        details: false
    };

}