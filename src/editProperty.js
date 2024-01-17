import domController from "./domController";

export default function editProperty(todoItem, property, newValue) {

    todoItem[property] = newValue;

}