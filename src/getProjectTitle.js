export default function getProjectTitle() {

    let title;
    
    title = prompt('Name of Project:', 'New Project');

    while (title === '') {

            alert('Project must have title.');
            title = prompt('Name of Project:', 'New Project');

    };

    return title;

}