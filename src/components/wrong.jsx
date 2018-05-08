import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wrong extends Component {
    
  render() {
    return (
      <React.Fragment>
          <div className="myNav">
                <div className="myflex">
                    <div className="left">
                        <img src="src/images/backgroundimage/logo.jpg" width="50px" height="50px" alt="Welcome"/>
                    </div>
                    <div className="right"> 
                        <button><Link to="/">About Us</Link></button>
                        <button><Link to="/signup">Sign Up</Link></button>
                        <button><Link to="/login">Log In</Link></button>
                    </div>
                </div>
             </div>
        <h1 className="notfound">404 Not Found</h1>
      </React.Fragment>
    )
  }
}
