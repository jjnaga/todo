import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import Input from "./Input";

const style = {
	margin: "50px 0px 50px 0px",
	border: "5px solid red",
};

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			body: 0,
			mind: 0,
			spirit: 0,
		};
	}

	componentWillReceiveProps(nextProps) {
		let body = 0;
		let mind = 0;
		let spirit = 0;
		nextProps.data.forEach(data => {
			const { value } = data;
			switch (data.category) {
				case 0:
					body += value;
					break;
				case 1:
					mind += value;
					break;
				case 2:
					spirit += value;
					break;
				default:
					break;
			}
		});
		this.setState({
			body,
			mind,
			spirit,
		});
	}

	render() {
		return (
			<div style={style}>
				<Table
					body={this.state.body}
					mind={this.state.mind}
					spirit={this.state.spirit}
				/>
				<Input user={this.props.username} />
			</div>
		);
	}
}

Main.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			category: PropTypes.number.isRequired,
			todo: PropTypes.string.isRequired,
			user: PropTypes.string,
			value: PropTypes.number.isRequired,
		}),
	),
	username: PropTypes.string,
};

Main.defaultProps = {
	data: [],
	username: "",
};

export default Main;
