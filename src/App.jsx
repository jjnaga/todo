import React from "react";
import axios from "axios";
// Components
import Table from "./components/Table";
import Input from "./components/Input";
import History from "./components/History";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			body: 0,
			mind: 2,
			spirit: 0,
			bliss: 0,
			isLoading: true,
		};
		console.log("test");
		fetch("/api/today")
			.then(response => response.json())
			.then(data => {
				let abody = 0;
				let amind = 0;
				let aspirit = 0;
				const data2 = Object.values(this.state.data);
				data.forEach(item => {
					console.log("Looping...");
					switch (item.category) {
						case 0:
							abody += item.value;
							break;
						case 1:
							amind += item.value;
							break;
						case 2:
							aspirit += item.value;
							break;
						default:
							break;
					}
				});
				this.setState({
					data: data,
					body: abody,
					mind: amind,
					spirit: aspirit,
					isLoading: false,
				});
			})
			.catch(err => {
				console.log(err);
			});
		this.handleNewTodo = this.handleNewTodo.bind(this);
	}

	handleNewTodo(category, value) {
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
				{this.state.isLoading ? (
					<p>Loading</p>
				) : (
					//TODO: We can do our today conditionals here.
					<History data={this.state.data} />
				)}
			</div>
		);
	}
}

export default App;
