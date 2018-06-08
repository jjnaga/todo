import React, { Component } from "react";
import Table from "./Table";
import Input from "./Input";

class Main extends Component {
	constructor(props) {
		super(props);
		this.setState({});
	}
	render() {
		return (
			<div>
				<Table
					body={this.state.body}
					mind={this.state.mind}
					spirit={this.state.spirit}
				/>
				<Input
					onChange={(category, value) =>
						this.handleNewTodo(category, value)
					}
					user={this.state.username}
				/>
			</div>
		);
	}
}

export default Main;
