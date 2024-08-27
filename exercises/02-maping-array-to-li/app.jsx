import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * Change the content inside the map function
 **/
const animalsInHTML = animals.map((singleAnimal, index) => {
	return <li key={index}>{singleAnimal}</li>;

});
//key must be unique so index is used,
ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
