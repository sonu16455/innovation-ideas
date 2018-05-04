import React from 'react';

class Signup extends React.Component {
    render(){
        return(
            <React.Fragment>
                    <div className="myNav">
                        <div className="myflex">
                            <div className="left">
                                <img src="src/images/backgroundimage/logo.jpg" width="50px" height="50px"/>
                            </div>
                            <div className="right">
                                <button>About Us</button>
                                <button>Log In</button>
                            </div>
                        </div>
                   </div>
                <div className="signuppageimage">
                    <div>
                        <input type="email" placeholder="Enter your Email here"/>
                        <input type="password" placeholder="Enter your password here"/>
                        <input type="password" placeholder="Enter your Confirm password here"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Signup;