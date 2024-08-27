import React from "react"; // Main React.js library

//import ReactDOM from "react-dom";  We use ReactDOM to render into the DOM
import { createRoot } from "react-dom/client";

// WHAT: This variable contains the html to render
let output = (
	<span>
		James is <strong>12</strong> years old
	</span>
);
//------this has been updated to a newer version of react------------
// WHERE: A DOM element that will contain the entire react generated html
const domNode = document.getElementById("myDiv");
const root = createRoot(domNode);

//what  //where
root.render(output);
