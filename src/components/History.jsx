import React from "react";

const History = data => (
	<ul>{data.data.map((data, index) => <li key={index}>{data.todo}</li>)}</ul>
);

export default History;
