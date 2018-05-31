import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {FormErrors} from '../components/formErrors';
import Axios from "axios";
import style from '../css/style.css';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emailID: '',
			password: '',
			name: '',
			confirmpassword: '',
			formErrors: {
				emailID: '',
				name: '',
				password: '',
				confirmpassword: '',
			},
			emailValid: false,
			usernameValid: false,
			passwordValid: false,
			confirmPasswordValid: false,
			formValid: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let data = {
			"name": this.state.name,
			"emailID": this.state.emailID,
			"password": this.state.password
		}
		console.log(data);
		Axios.post("http://192.168.43.2:8082/user/register",data)
		.then(res => {
			console.log(res);

			if(res.data == "Registration Successful"){
				this.props.history.push("/login");
			}
			else {
				if(res.data == "This email id is already registerd"){
					document.getElementById("error").innerHTML = "This Email ID already Exists";
					this.props.history.push("/signup");
					this.setState({
						emailID: '',
						password: '',
						name: '',
						confirmpassword: ''
					});
				}
				else{}
			}

		  })
	
		  

	}

	handleUserInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value}, () => {
			this.validateField(name, value);
		});
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let usernameValid = this.state.usernameValid;
		let passwordValid = this.state.passwordValid;
		let confirmPasswordValid = this.state.confirmPasswordValid;
		switch (fieldName) {
			case 'emailID':
				emailValid = value.match(
					/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
				);
				fieldValidationErrors.emailID = emailValid ? '' : ' is invalid';
				break;

			case 'name':
				usernameValid = value.match(/^([a-zA-Z0-9]{3,15})$/i);
				fieldValidationErrors.name = usernameValid ? '' : 'is invalid';
				break;

			case 'password':
				passwordValid = value.length >= 6;
				fieldValidationErrors.password = passwordValid ? '' : ' is too short';
				break;

			case 'confirmpassword':
				if (this.state.confirmpassword === this.state.password) {
					confirmPasswordValid = true;
					fieldValidationErrors.confirmpassword = '';
				} else {
					fieldValidationErrors.confirmpassword = 'Mismatch';
				}
				break;
			default:
				break;
		}
		this.setState(
			{
				formErrors: fieldValidationErrors,
				emailValid: emailValid,
				usernameValid: usernameValid,
				passwordValid: passwordValid,
				confirmPasswordValid: confirmPasswordValid,
			},
			this.validateForm
		);
	}

	validateForm() {
		this.setState({
			formValid:
				this.state.emailValid &&
				this.state.passwordValid &&
				this.state.usernameValid &&
				this.state.confirmPasswordValid,
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="myNav">
					<div className="myflex">
						<div className="left">
							<img
								src="src/images/backgroundimage/logo.jpg"
								width="50px"
								height="50px"
								alt="SignUp"
							/>
						</div>
						<div className="right">
							<button>
								<Link to="/">About Us</Link>
							</button>
							<button>
								<Link to="/login">Log In</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="signuppageimage">
					<form onSubmit={this.handleSubmit}>
						<div className="inputinsignup">
							<label>
								<input
									className="inputboxsignup"
									type="text"
									placeholder="Enter your Name"
									name="name"
									value={this.state.name}
									onChange={event => this.handleUserInput(event)}
									required
								/>
								{this.state.name.length > 0 && !this.state.usernameValid ? (
									<i className=" warningstyles" />
								) : (
									''
								)}
							</label>

							<label>
								<input
									className="inputboxsignup"
									type="email"
									placeholder="Enter your Email"
									name="emailID"
									value={this.state.emailID}
									onChange={event => this.handleUserInput(event)}
									required
								/>
								{this.state.emailID.length > 0 && !this.state.emailValid ? (
									<i className=" warningstyles" />
								) : (
									''
								)}
							</label>

							<label>
								<input
									className="inputboxsignup"
									type="password"
									placeholder="Enter your password"
									name="password"
									value={this.state.password}
									onChange={event => this.handleUserInput(event)}
									required
								/>
								{this.state.password.length > 0 && !this.state.passwordValid ? (
									<i className=" warningstyles" />
								) : (
									''
								)}
							</label>

							<label>
								<input
									className="inputboxsignup"
									type="password"
									placeholder="Confirm your password"
									name="confirmpassword"
									value={this.state.confirmpassword}
									onChange={event => this.handleUserInput(event)}
									required
								/>
								{this.state.confirmpassword.length > 0 &&
								!this.state.confirmPasswordValid ? (
									<i className=" warningstyles" />
								) : (
									''
								)}
							</label>

							<div className="error">
								<FormErrors formErrors={this.state.formErrors} />
							</div>

							<p id = "error"></p>

							<button
								className="inputboxsignup"
								type="submit"
								disabled={!this.state.formValid}
							>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default Signup;
