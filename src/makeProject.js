export default function makeProject(projectTitle) {

    let title;

    if (projectTitle) {
        title = projectTitle;
    } else {
        title = prompt('Name of Project:', 'New Project');
    }

    return {
        title,
        todoItems: [],
    };
};