import React from "react";

const History = data => {
	const rows = data.data.map(element => (
		<div>
			<td align="center" colSpan="2" style={{ textAlign: "center" }}>
				{element.createDate}
			</td>
			<td align="center" colSpan="2" style={{ textAlign: "center" }}>
				{element.value}
			</td>
			<td align="center" colSpan="2" style={{ textAlign: "center" }}>
				{element.category}
			</td>
			<td align="center" colSpan="2" style={{ textAlign: "center" }}>
				{element.value}
			</td>
		</div>
	));
	return (
		<table id="history-table">
			<thead>
				<tr>
					<th>Date</th>
					<th>Todo</th>
					<th>Category</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>{rows}</tr>
			</tbody>
		</table>
	);
};

export default History;
