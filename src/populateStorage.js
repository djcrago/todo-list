import listOfProjects from ".";

export default function populateStorage() {


    if (!localStorage.getItem('listOfProjects')) {
        
        localStorage.setItem('listOfProjects', JSON.stringify(listOfProjects));
        
    } else {

        localStorage.clear();
        localStorage.setItem('listOfProjects', JSON.stringify(listOfProjects));

    }

}