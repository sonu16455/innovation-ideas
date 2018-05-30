import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import Welcome from '../components/welcome.js';
import '../css/style.css';
import Dashboard from '../components/Dashboard'


ReactDOM.render(

	<Router>
	<Welcome/>
	</Router>,
	document.getElementById('root')
);
