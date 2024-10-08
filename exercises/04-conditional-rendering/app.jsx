import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
	// Add the condition inside this function
	return ( //rather then an if else react uses ternary expression to decide
		<div className="alert alert-primary" role="alert" style={{ display: props.show ? "block" : "none" }}>
			{props.text}
		</div>
	);
};

Alert.propTypes = {};

// Here is where the <Alert /> component is being used, you don't have to edit this part
// But it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert show={false} text="This is a primary alert - check it out!" />
		<Alert show={true} text="This alert shouldn't appear" />
	</div>,
	document.querySelector("#myDiv")
);
