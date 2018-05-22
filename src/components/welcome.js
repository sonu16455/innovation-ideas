import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Signup from '../components/signup.js';
import Login from '../components/login.js';
import About from '../components/about.js';
import Wrong from '../components/wrong.js';
import Dashboard from '../components/Dashboard.js';

const Welcome = () => (
	<Switch>
		<Route exact path="/" component={About} />
		<Route path="/signup" component={Signup} />
		<Route path="/login" component={Login} />
		<Route path="/dashboard" component={Dashboard} />
		<Route path="*" component={Wrong} />
	</Switch>
);

export default Welcome;
