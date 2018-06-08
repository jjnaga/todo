import React from "react";
// Components
import TopBar from "./components/TopBar";
import Main from "./components/Main";
import History from "./components/History";
import BottomBar from "./components/BottomBar";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};

		this.getData = this.getData.bind(this);
	}

	getData(data) {
		this.setState({ data });
	}

	render() {
		return (
			<div>
				<TopBar getData={this.getData} />
				{/* <Main data={this.state.data}/> */}
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
