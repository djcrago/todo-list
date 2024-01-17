import domController from "./domController";
import editProperty from "./editProperty";

export default function editPropertyController(todoItem, property) {

    let newValue = prompt(`New ${property}:`);

    if (property === 'title') {

        while (newValue === '') {

            alert('Must have title.');
            newValue = prompt(`New ${property}:`);

        };

    };

    if (property === 'timeEstimate') {

        while (Number.isNaN(+newValue)) {

            alert('Enter number of hours.');
            newValue = prompt(`New ${property}:`);
            
        };

    };

    editProperty(todoItem, property, newValue);

}