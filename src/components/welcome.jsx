import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Signup from '../components/signup.jsx';
import Login from '../components/login.jsx';
import About from '../components/about.jsx';
import Wrong from '../components/wrong.jsx';

class Welcome extends React.Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path="/" component={Home}/> */}
        {/* <Route path="/aboutUs" component={About}/> */}
        <Route exact path="/" component={About} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="*" component={Wrong} />
      </Switch>
    );
  }
}

export default Welcome;
