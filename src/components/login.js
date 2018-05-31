import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Dashboard from './Dashboard'
import style from '../css/style.css'

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emailID: '',
			password: '',
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}




	handleSubmit(event) {
		console.log(this.state);
		event.preventDefault();

		let collection = {}
		collection.emailID = this.state.emailID,
		collection.password = this.state.password
		console.warn(collection);


	let url = `http://192.168.43.2:8082/user/login?emailID=${this.state.emailID}&password=${this.state.password}`;
	
	Axios.get(url)
      .then(res => {
        console.log(res);
		console.log(res.data);
		if(res.data == "login success"){
			this.props.history.push("/dashboard");
		}

		else {
			if(res.data == "login failed"){
				document.getElementById("loginError").innerHTML = "Invalid EmailID or Password";
				this.props.history.push("/login");
				this.setState({
					emailID: '',
					password: ''
				});
			}
			else{}
		}
		
		// else{
		// 	this.props.history.push("/login");
		// }
      })
     


		// this.setState({
		// 	emailID: '',
		// 	password: '',
		// });
	}

	handleInput(event) {
		this.setState({
			[event.target.name]: event.target.value,
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
							<label htmlFor="Email">
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

							<label htmlFor="password">
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

							<p id = "loginError"></p>

							<div className="btnwrap">
								{/* <button onClick = {this.resetForm} type ="button">Cancel</button>  */}
								<button
									type="submit"
									disabled={
										!this.state.emailID && this.state.password.length < 5
									}
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
