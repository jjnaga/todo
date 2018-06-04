import React from "react";

const style = {
	float: "right",
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
			pass: "",
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
	handleSubmit(e, user) {
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
					<input
						type="text"
						placeholder="Password"
						value={this.state.pass}
						onChange={this.handlePassChange}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Login;
