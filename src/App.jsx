import React from "react";
import Table from "./components/Table";
import BetterTable from "./components/BetterTable";
// import Todo from "./components/Todo"; TODO: Seperate Todo into seperate component
// https://goo.gl/tstZN4

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			value: "",
			category: "physical",
			weight: 5,
			physicalValue: 0,
			mentalValue: 0,
			blissValue: 0,
			data: {},
		};
		// // TODO: What does this do anyway?
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		fetch("/")
			.then(res => res.json())
			.then(data => this.setState({ data }));
		console.log("I'm mounted");
	}

	handleSubmit(e) {
		const newTodos = [
			...this.state.todos,
			{
				value: this.state.value,
				weight: this.state.weight,
				category: this.state.category,
			},
		];
		if (this.state.category === "physical") {
			this.setState({
				physicalValue:
					parseInt(this.state.physicalValue, 10) +
					parseInt(this.state.weight, 10),
			});
		} else if (this.state.category === "mental") {
			this.setState({
				mentalValue:
					parseInt(this.state.mentalValue, 10) +
					parseInt(this.state.weight, 10),
			});
		} else {
			this.setState({
				blissValue:
					parseInt(this.state.blissValue, 10) +
					parseInt(this.state.weight, 10),
			});
		}
		this.setState({
			value: "",
			category: "physical",
			weight: 5,
			todos: newTodos,
		});
		e.preventDefault();
	}

	handleChange(e) {
		this.setState({
			value: e.target.value,
		});
	}

	handleWeightChange(e) {
		this.setState({
			weight: e.target.value,
		});
	}

	handleCategoryChange(e) {
		this.setState({
			category: e.target.value,
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={e => this.handleSubmit(e)}>
					<input
						type="text"
						value={this.state.value}
						onChange={e => this.handleChange(e)}
					/>
					{/* This is the normal input number way
					<input
						type="number"
						value={this.state.weight}
						onChange={e => this.handleWeightChange(e)}
					/> */}
					<input
						type="range"
						min="1"
						max="10"
						value={this.state.weight}
						className="slider"
						id="myRange"
						onInput={e => this.handleWeightChange(e)}
					/>
					<select
						id="dropdown"
						onChange={e => this.handleCategoryChange(e)}
					>
						<option value="physical">Physical</option>
						<option value="mental">Mental</option>
						<option value="work">Work</option>
					</select>
					<input type="submit" onClick={e => this.handleSubmit(e)} />
				</form>
				<Table table={this.state.todos} />
				<BetterTable
					physical={this.state.physicalValue}
					mental={this.state.mentalValue}
					bliss={this.state.blissValue}
				/>
			</div>
		);
	}
}

export default App;
