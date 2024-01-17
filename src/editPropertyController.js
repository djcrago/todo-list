import editProperty from "./editProperty";
import domController from "./domController";

export default function editPropertyController(todoItem, property) {

    let newValue = prompt(`New ${property}:`);

    if (property === 'title') {

        while (newValue === '') {

            alert('Must have title.');
            newValue = prompt(`New ${property}:`);

        };

    };

    if (property === 'time estimate') {

        if (Number.isNaN(+newValue)) {

            alert('Enter number of hours.');
            newValue = prompt(`New ${property}:`);
            
        };

    };

    editProperty(todoItem, property, newValue);

    domController();

}

// import domController from "./domController";

// export default function editProperty(todoItem, property) {

//     const newValue = prompt(`New ${property}:`);

//     todoItem[property] = newValue;

//     domController();

// }