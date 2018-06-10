import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "./Login";
import Signup from "./Signup";
import FullHistory from "./FullHistory";

const style = {
	margin: "0px 0px 50px 0px",
	border: "5px solid red",
};

class TopBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		};

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	login(username) {
		this.props.getData(username);
		this.setState({
			loggedIn: true,
		});
	}

	logout() {
		this.setState({ loggedIn: true });
	}

	render() {
		return (
			<div style={style}>
				{this.state.loggedIn ? (
					<div>
						<p>Welcome ${this.state.username}</p>
						<button name="Logout" onClick={this.logout} />
					</div>
				) : (
					<Login login={this.login} />
				)}
				<Signup />
				<FullHistory />
			</div>
		);
	}
}

TopBar.propTypes = {
	getData: PropTypes.func.isRequired,
};

export default TopBar;
