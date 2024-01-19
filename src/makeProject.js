import getProjectTitle from "./getProjectTitle";

export default function makeProject(projectTitle) {

    let title;

    if (projectTitle) {
        title = projectTitle;
    } else {
        title = getProjectTitle();
    };

    if (title === null) {
        return;
    };

    return {
        title,
        todoItems: [],
    };

};