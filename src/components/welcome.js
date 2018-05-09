import React, { Component,Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from '../components/signup.js';
import Login from '../components/login.js';
import About from '../components/about.js';
import Wrong from '../components/wrong.js';

const Welcome = () => (
  <Switch>
    {/* <Route exact path="/" component={Home}/> */}
    {/* <Route path="/aboutUs" component={About}/> */}
    <Route exact path="/" component={About} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="*" component={Wrong} />
  </Switch>
);

export default Welcome;
