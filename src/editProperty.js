import domController from "./domController";

export default function editProperty(todoItem, property) {

    const newValue = prompt(`New ${property}:`);

    todoItem[property] = newValue;

    console.log('connectedd');

    domController();

}