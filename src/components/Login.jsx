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
			user: "",
		};
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleUserChange(e) {
		this.setState({ user: e.target.value });
	}

	handleLogin(e) {
		e.preventDefault();
		axios
			.get(`/user/?user=${this.state.user}`)
			.then(data => {
				this.props.login(data.data);
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div style={style}>
				<form onSubmit={e => this.handleLogin(e)}>
					<input
						type="text"
						placeholder="Username"
						value={this.state.user}
						onChange={this.handleUserChange}
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
