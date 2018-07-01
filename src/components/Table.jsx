import React from "react";
import Proptypes from "prop-types";
import { Circle } from "rc-progress";

// TODO: Get the divs to line up left to right.

// TODO: This is some smart shit on how to use CSS to get elements to fit:
// https://goo.gl/de7PFd
const parent = {
	background: "gray",
	height: "auto",
	overflow: "hidden",
	textAlign: "center",
};

const circleStyle = {
	float: "left",
	height: "300px",
};

const bodyDiv = {
	overflow: "auto",
};
const mindDiv = {
	overflow: "auto",
};
const spiritDiv = {
	overflow: "auto",
};

const Table = ({ body, mind, spirit }) => (
	// Red: #ff0045
	// Green: #00c11a
	<div style={parent}>
		<div style={bodyDiv}>
			<Circle
				style={circleStyle}
				percent={body * 10}
				strokeWidth="2"
				strokeColor={body * 10 < 100 ? "#ff0045" : "#00c11a"}
			/>
		</div>
		<div style={mindDiv}>
			<Circle
				style={circleStyle}
				percent={mind * 10}
				strokeWidth="2"
				strokeColor={mind * 10 < 100 ? "#ff0045" : "#00c11a"}
			/>
		</div>
		<div style={spiritDiv}>
			<Circle
				style={circleStyle}
				percent={spirit * 10}
				strokeWidth="2"
				strokeColor={spirit * 10 < 100 ? "#ff0045" : "#00c11a"}
			/>
		</div>
	</div>
);

Table.propTypes = {
	// For Objects, objectOf() is when properties are all the same type.
	// shape is an object whos keys are known ahead of time, and represent
	// diffrent types.
	body: Proptypes.number.isRequired,
	mind: Proptypes.number.isRequired,
	spirit: Proptypes.number.isRequired,
};

export default Table;
