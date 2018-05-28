import React from "react";
import Proptypes from "prop-types";
import { Circle } from "rc-progress";

// TODO: Get the divs to line up left to right.

// TODO: This is some smart shit on how to use CSS to get elements to fit:
// https://goo.gl/de7PFd
const parent = {};
const circleStyle = {
	height: "200px",
};

const textStyle = {
	textAlign: "center",
	verticalAlign: "middle",
	lineHeight: "0px",
};

const Table = ({ physical, mental, bliss }) => (
	// Red: #ff0045
	// Green: #00c11a
	<div style={parent}>
		<Circle
			style={circleStyle}
			percent={physical * 10}
			strokeWidth="2"
			strokeColor={physical * 10 < 100 ? "#ff0045" : "#00c11a"}
		/>
		<p style={textStyle}>Physical</p>
		<Circle
			style={circleStyle}
			percent={mental * 10}
			strokeWidth="2"
			strokeColor={mental * 10 < 100 ? "#ff0045" : "#00c11a"}
		/>
		<p style={textStyle}>Mental</p>
		<Circle
			style={circleStyle}
			percent={bliss * 10}
			strokeWidth="2"
			strokeColor={bliss * 10 < 100 ? "#ff0045" : "#00c11a"}
		/>
		<p style={textStyle}>Bliss</p>
	</div>
);

Table.propTypes = {
	// For Objects, objectOf() is when properties are all the same type.
	// shape is an object whos keys are known ahead of time, and represent
	// diffrent types.
	physical: Proptypes.number.isRequired,
	mental: Proptypes.number.isRequired,
	bliss: Proptypes.number.isRequired,
};

export default Table;
