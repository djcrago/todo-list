export default function populateListOfProjects() {

    let listOfProjects;

    if (localStorage.getItem('listOfProjects')) {

        const string = localStorage.getItem('listOfProjects');
        const array = JSON.parse(string);
        listOfProjects = array;

      } else {

        listOfProjects = [];

    };

    return listOfProjects;

}