import getTodoItemProperty from "./getTodoItemProperty";

export default function getTodoItemPropertyController(property) {

    let propertyValue = getTodoItemProperty(property);

    if (property === 'Title') {

        while (propertyValue === '') {

            alert('Must have title.');
            propertyValue = getTodoItemProperty(property);

        };

    };

    if (property === 'Time Estimate') {

        while (Number.isNaN(+propertyValue)) {

            alert('How long will this take? (Time in hours)');
            propertyValue = getTodoItemProperty(property);
            
        };

    };

    return propertyValue;

}