import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emailID: "",
			password: ""
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.baseState = this.state;
	}

	// resetForm = () => {
	//   this.setState({this.baseState})
	// }

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			emailID: "",
			password: ""
		});
		alert("Form Submitted Successfully");
	}

	handleInput(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="loginPageImage">
					<div className="myNav">
						<div className="myflex">
							<div className="left">
								<img
									src="src/images/backgroundimage/logo.jpg"
									width="50px"
									height="50px"
									alt="Welcome"
								/>
							</div>
							<div className="right">
								<button>
									<Link to="/">About Us</Link>
								</button>
								<button>
									<Link to="/signup">Sign Up</Link>
								</button>
							</div>
						</div>
					</div>
					<div className="login">
						<form onSubmit={this.handleSubmit}>
							<label>
								<span className="fa fa-envelope env" />
								<input
									required="true"
									type="email"
									className="fa fa-envelope"
									name="emailID"
									placeholder="Email ID"
									value={this.state.emailID}
									onChange={event => this.handleInput(event)}
								/>
							</label>

							<label>
								<span className="fa fa-key pass" />
								<input
									required="true"
									type="password"
									name="password"
									placeholder="Password"
									value={this.state.password}
									onChange={event => this.handleInput(event)}
								/>
							</label>

							<div className="btnwrap">
								{/* <button onClick = {this.resetForm} type ="button">Cancel</button>  */}
								<button type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
