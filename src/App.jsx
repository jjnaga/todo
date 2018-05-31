import React from "react";
import axios from "axios";
// Components
import Table from "./components/Table";
import Input from "./components/Input";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			body: 0,
			mind: 0,
			spirit: 0,
			bliss: 0,
		};
		this.handleNewTodo = this.handleNewTodo.bind(this);
	}
	componentDidMount() {
		// TODO: I think, as of 1:34PM 5/30, the best option is to push this to
		// our Input. If anything, the only thing we should have as state, is an
		// array of the entire dataset. We can push that to Input.jsx, and
		// History.jsx, and then they can work with the data.
		//
		// So it's going to be: App.jsx => fetch()
		//                      Input.jsx => switch statement
		fetch("/api/today")
			.then(response => response.json())
			.then(data => {
				this.setState({ data });
				const data2 = Object.values(this.state.data);
				data2.forEach(item => {
					switch (item.category) {
						case 0:
							this.setState({ body: item.value });
							break;
						case 1:
							this.setState({ mind: item.value });
							break;
						case 2:
							this.setState({ spirit: item.value });
							break;
						default:
							break;
					}
				});
			})
			.catch(err => {
				console.log(err, "oh hi mark");
			});
	}

	handleNewTodo(category, value) {
		console.log(`this is working ${category}, ${value}`);
		switch (category) {
			case 0:
				this.setState({ body: value });
				break;
			case 1:
				this.setState({ mind: value });
				break;
			case 2:
				this.setState({ spirit: value });
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<div>
				<Input
					onChange={(category, value) =>
						this.handleNewTodo(category, value)
					}
				/>
				<Table
					body={this.state.body}
					mind={this.state.mind}
					spirit={this.state.spirit}
				/>
			</div>
		);
	}
}

export default App;
