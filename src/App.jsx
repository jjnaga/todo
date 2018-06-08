import React from "react";
import axios from "axios";
import uuid from "uuid";
// Components
import Table from "./components/Table";
import Input from "./components/Input";
import History from "./components/History";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			body: 0,
			mind: 2,
			spirit: 0,
			bliss: 0,
			hasData: false,
			username: "",
		};
	}

	componentDidMount() {
		// TODO: I think we need to fix.
		// fetch("/api/today")
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		let abody = 0;
		// 		let amind = 0;
		// 		let aspirit = 0;
		// 		const data2 = Object.values(this.state.data);
		// 		data.forEach(item => {
		// 			console.log("Looping...");
		// 			switch (item.category) {
		// 				case 0:
		// 					abody += item.value;
		// 					break;
		// 				case 1:
		// 					amind += item.value;
		// 					break;
		// 				case 2:
		// 					aspirit += item.value;
		// 					break;
		// 				default:
		// 					break;
		// 			}
		// 		});
		// 		this.setState({
		// 			data: data,
		// 			body: abody,
		// 			mind: amind,
		// 			spirit: aspirit,
		// 			isLoading: false,
		// 		});
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
	}

	handleNewTodo(res) {
		const { category, value } = res.data;
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

	handleLogin(user) {
		console.log("Getting user: ", user);
		axios
			.get(`/user/?user=${user}`)
			.then(data => {
				this.setState({
					hasData: true,
					username: user,
					data: data.data,
				});
				console.log(data, "thisis data");
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<div id="topbar">
					{this.state.hasData ? (
						<p>Welcome ${this.state.username}</p>
					) : (
						<Login handleSubmit={user => this.handleLogin(user)} />
					)}
					<Signup />
					<Input
						onChange={(category, value) =>
							this.handleNewTodo(category, value)
						}
						user={this.state.username}
					/>
				</div>
				<Table
					body={this.state.body}
					mind={this.state.mind}
					spirit={this.state.spirit}
				/>
				<History data={this.state.data} />
			</div>
		);
	}
}

export default App;
