import React from "react";
import axios from "axios";
// Components
import TopBar from "./components/TopBar";
import Main from "./components/Main";
import History from "./components/History";
import BottomBar from "./components/BottomBar";

const style = {
	background: "#DDDDDD",
	minHeight: "100vh",
	minWidth: "100vw",
	position: "absolute",
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			username: "",
		};

		this.getData = this.getData.bind(this);
	}

	getData(username) {
		axios
			.get(`/user/?user=${username}`)
			.then(data => {
				this.setState({
					data: data.data, // Data is value in Data object
					username,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div style={style}>
				<TopBar getData={this.getData} />
				<Main data={this.state.data} username={this.state.username} />
				<History data={this.state.data} />
				{/* <BottomBar /> */}
			</div>
		);
	}
}

// handleNewTodo(res) {
// 	const { category, value } = res.data;
// 	switch (category) {
// 		case 0:
// 			this.setState({ body: value });
// 			break;
// 		case 1:
// 			this.setState({ mind: value });
// 			break;
// 		case 2:
// 			this.setState({ spirit: value });
// 			break;
// 		default:
// 			break;
// 	}
// }

// addBlissLevels() {
// 	let body = 0;
// 	let mind = 0;
// 	let spirit = 0;

// 	this.state.data.forEach(data => {
// 		const { value } = data;
// 		switch (data.category) {
// 			case 0:
// 				body += value;
// 				break;
// 			case 1:
// 				mind += value;
// 				break;
// 			case 2:
// 				spirit += value;
// 				break;
// 			default:
// 				break;
// 		}
// 	});

// 	this.setState({
// 		body,
// 		mind,
// 		spirit,
// 	});
// }

export default App;
