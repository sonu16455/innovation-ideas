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
                    <div  className="welcomeDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popula</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Welcome;