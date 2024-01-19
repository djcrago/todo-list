import getProjectTitle from "./getProjectTitle";

export default function makeProject(projectTitle) {

    let title;

    if (projectTitle) {
        title = projectTitle;
    } else {
        title = getProjectTitle();
    };

    console.log(title);

    if (title === null) {
        return;
    };

    return {
        title,
        todoItems: [],
    };

};