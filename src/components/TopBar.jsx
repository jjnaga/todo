import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Login from "./Login";
import Signup from "./Signup";

class TopBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		};

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	login(data) {
		this.props.getData(data);
		this.setState({
			loggedIn: true,
		});
	}

	logout() {
		this.setState({ loggedIn: true });
	}

	render() {
		return (
			<div>
				{this.state.loggedIn ? (
					<div>
						<p>Welcome ${this.state.username}</p>
						<button name="Logout" onClick={this.logout} />
					</div>
				) : (
					<Login login={data => this.login(data)} />
				)}
				<Signup />
			</div>
		);
	}
}

TopBar.propTypes = {
	getData: PropTypes.func.isRequired,
};

export default TopBar;
