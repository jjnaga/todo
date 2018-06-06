import React from "react";
import axios from "axios";

class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			value: "",
		};
	}

	handleChange(e) {
		this.setState({
			value: e.target.value,
		});
	}

	handleSubmit(e) {
		axios.post("/user", {
			value: this.state.value,
		});
		// 	.then(res => {})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});

		e.preventDefault();
	}

	render() {
		return (
			<div>
				<p>Enter Username</p>
				<input
					type="text"
					placeholder="Signup Here!"
					value={this.state.value}
					onChange={e => this.handleChange(e)}
				/>
				<input type="submit" onClick={e => this.handleSubmit(e)} />
			</div>
		);
	}
}

export default Signup;
