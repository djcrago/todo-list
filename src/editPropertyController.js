import editProperty from "./editProperty";
import getNewValue from "./getNewValue";

export default function editPropertyController(todoItem, property) {

    let newValue = getNewValue(property);

    if (property === 'title') {

        while (newValue === '') {

            alert('Must have title.');
            newValue = getNewValue(property);

        };

    };

    if (property === 'timeEstimate') {

        while (Number.isNaN(+newValue)) {

            alert('Enter number of hours.');
            newValue = getNewValue(property);
            
        };

    };

    editProperty(todoItem, property, newValue);

}