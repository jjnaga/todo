import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "./Login";
import Signup from "./Signup";
import FullHistory from "./FullHistory";

const style = {
	margin: "0px 0px 0px 0px",
	background: "black",
	overflow: "auto",
};

const Logo = {
	float: "left",
	color: "white",
	fontSize: "60px",
};

const rightSide = {
	float: "right",
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
				<p style={Logo}>Bliss</p>
				<div style={rightSide}>
					{this.state.loggedIn ? (
						<div>
							<p>Welcome ${this.state.username}</p>
							<button name="Logout" onClick={this.logout} />
						</div>
					) : (
						<Login login={this.login} />
					)}
					<Signup />
					{/* <FullHistory /> */}
				</div>
			</div>
		);
	}
}

TopBar.propTypes = {
	getData: PropTypes.func.isRequired,
};

export default TopBar;
