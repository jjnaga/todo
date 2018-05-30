/**
 *
 * Category Descriptions:
 * 0: Physical
 * 1: Mental
 * 2: Bliss
 *
 */
import React from "react";
import axios from "axios";
// import Table from "./components/Table";
import BetterTable from "./components/BetterTable";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			value: "",
			category: 0,
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
		fetch("/api")
			.then(response => response.json())
			.then(data => {
				this.setState({ data });
				const data2 = Object.values(this.state.data);
				data2.forEach(item => {
					switch (item.category) {
						case 0:
							this.setState({ physicalValue: item.weight });
							break;
						case 1:
							this.setState({ mentalValue: item.weight });
							break;
						case 2:
							this.setState({ blissValue: item.weight });
							break;
						default:
							break;
					}
				});
			})
			.catch(err => {
				console.log(err, "oh hi mark");
			});
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
		axios
			.post("/api", {
				value: this.state.value,
				weight: this.state.weight,
				category: this.state.category,
			})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
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
			category: parseInt(e.target.value, 10),
		});
	}

	render() {
		return (
			<div>
				<ul>
					{Object.values(this.state.data).map(item => (
						<li>{JSON.stringify(item)}</li>
					))}
				</ul>

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
						<option value="0">Physical</option>
						<option value="1">Mental</option>
						<option value="2">Work</option>
					</select>
					<input type="submit" onClick={e => this.handleSubmit(e)} />
				</form>
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
