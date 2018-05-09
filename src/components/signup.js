import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailID: '',
      password: '',
      name: '',
      confirmpassword: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.baseState = this.state;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      emailID: '',
      password: '',
      name: '',
      confirmpassword: '',
    });
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
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
              <input
                className="inputboxsignup"
                type="text"
                placeholder="Enter your Name"
                name="name"
                value={this.state.name}
                onChange={event => this.handleInput(event)}
              />
              <input
                className="inputboxsignup"
                type="email"
                placeholder="Enter your Email"
                name="emailID"
                value={this.state.emailID}
                onChange={event => this.handleInput(event)}
              />
              <input
                className="inputboxsignup"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={event => this.handleInput(event)}
              />
              <input
                className="inputboxsignup"
                type="password"
                placeholder="Confirm your password"
                name="confirmpassword"
                value={this.state.confirmpassword}
                onChange={event => this.handleInput(event)}
              />
              <button className="inputboxsignup" type="submit">
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
