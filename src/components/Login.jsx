import React from "react";
import Proptypes from "prop-types";

const style = {
	float: "right",
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
			// For now, just username
			// pass: "",
		};
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUserChange(e) {
		this.setState({ user: e.target.value });
	}
	handlePassChange(e) {
		this.setState({ pass: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSubmit(this.state.user);
	}

	render() {
		return (
			<div style={style}>
				<form onSubmit={e => this.handleSubmit(e)}>
					<input
						type="text"
						placeholder="Username"
						value={this.state.user}
						onChange={this.handleUserChange}
					/>
					{/* Lets do password way later */}
					{/* <input
						type="text"
						placeholder="Password"
						value={this.state.pass}
						onChange={this.handlePassChange}
					/> */}
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

// eslint-disable-next-line react/no-typos
Login.Proptypes = {
	handleSubmit: Proptypes.func.isRequired,
};

export default Login;
