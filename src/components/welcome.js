import React from 'react';

class Welcome extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="welcomePageImage">
                    <div className="myNav">
                        <div className="myflex">
                            <div className="left">
                                <img src="src/images/backgroundimage/logo.jpg" width="50px" height="50px"/>
                            </div>
                            <div className="right">
                                <button>About Us</button>
                                <button>Sign Up</button>
                                <button>Log In</button>
                            </div>
                     </div>
                 </div>
                    <div  className="welcomeDesc">Its working</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Welcome;