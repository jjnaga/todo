import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

/**
 *
 * Category Descriptions:
 * 0: Body
 * 1: Mind
 * 2: Spirit
 *
 */
class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: "",
			category: 0,
			value: 5,
		};
		// // TODO: What does this do anyway?
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		axios
			.post("/api", {
				todo: this.state.todo,
				category: this.state.category,
				value: parseInt(this.state.value),
				user: this.props.user,
			})
			.then(res => {
				this.props.onChange(res, this.state.value);
				this.setState({
					todo: "",
					category: 0,
					value: 5,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
	handleChange(e) {
		this.setState({
			todo: e.target.value,
		});
	}

	handleValueChange(e) {
		this.setState({
			value: parseInt(e.target.value),
		});
	}

	handleCategoryChange(e) {
		this.setState({
			category: parseInt(e.target.value, 10),
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={e => this.handleSubmit(e)}>
					<input
						type="text"
						value={this.state.todo}
						onChange={e => this.handleChange(e)}
					/>
					<input
						type="range"
						min="1"
						max="10"
						value={this.state.value}
						className="slider"
						id="value"
						onChange={e => this.handleValueChange(e)}
					/>
					<select
						id="dropdown"
						onChange={e => this.handleCategoryChange(e)}
					>
						<option value="0">Body</option>
						<option value="1">Mind</option>
						<option value="2">Spirit</option>
					</select>
					<input type="submit" onClick={e => this.handleSubmit(e)} />
				</form>
			</div>
		);
	}
}

Input.propTypes = {};
export default Input;
