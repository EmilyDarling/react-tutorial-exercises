import React from "react";
import ReactDOM from "react-dom";

const clickHandler = (e) => {
	console.log("I was clicked!", e);
};

const Alert = () => {
	return ( //the onclick is written like below in react instead of onclick="myFunction()" like in JS
		<button className="btn btn-success btn-lg" onClick={clickHandler}>
			Click Me
		</button>
	);
};

// You don't have to edit anything below
ReactDOM.render(<Alert />, document.querySelector("#myDiv"));
