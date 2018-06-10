import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const style = {
	float: "right",
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
		};
		this.handleusernameChange = this.handleusernameChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleusernameChange(e) {
		this.setState({ username: e.target.value });
	}

	handleLogin(e) {
		e.preventDefault();
		this.props.login(this.state.username);
	}

	render() {
		return (
			<div style={style}>
				<form onSubmit={e => this.handleLogin(e)}>
					<input
						type="text"
						placeholder="Login"
						value={this.state.username}
						onChange={this.handleusernameChange}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
};

export default Login;
