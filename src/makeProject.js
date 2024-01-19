import getProjectTitle from "./getProjectTitle";

export default function makeProject(projectTitle) {

    let title;

    if (projectTitle) {
        title = projectTitle;
    } else {
        title = getProjectTitle();
    };

    return {
        title,
        todoItems: [],
    };

};