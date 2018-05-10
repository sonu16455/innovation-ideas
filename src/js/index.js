import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Welcome from '../components/welcome.js';
// import Signup from '../components/signup.jsx';
// import Login from '../components/login.jsx';
// import Wrong from '../components/wrong.jsx';
import '../css/style.css';

// const root = document.getElementById('root');

ReactDOM.render(
  // <Signup />,
  // <Login />,
  //  <Wrong/>
  <Router>
    <Welcome />
  </Router>,
  document.getElementById('root')
);
