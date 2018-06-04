import React from "react";
import { Table } from "react-bootstrap";

const style = {
	// margin: "15px",
	// borderStyle: "ridge",
	// borderWidth: "5px",
	// borderColor: "red",
};

const History = input => {
	const data = input.data;

	function createTable() {
		let table = [];

		//Outer loop
		for (let i = 0; i < data.length; i++) {
			let children = [];
			// Converts category number into a string
			let category = "";
			switch (data[i].category) {
				case 0:
					category = "Body";
					break;
				case 1:
					category = "Mind";
					break;
				case 2:
					category = "Spirit";
					break;
			}

			children.push(<td>{data[i].createDate}</td>);
			children.push(<td>{data[i].todo}</td>);
			children.push(<td>{category}</td>);
			children.push(<td>{data[i].value}</td>);
			table.push(<tr>{children}</tr>);
		}
		return table;
	}

	return (
		<div style={style}>
			<Table id="history-table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Todo</th>
						<th>Category</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>{createTable()}</tbody>
			</Table>
		</div>
	);
};

export default History;
