import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

const About = () => (
	<Fragment>
		<div className="welcomePageImage">
			<div className="myNav">
				<div className="myflex">
					<div className="left">
						<img
							src="src/images/backgroundimage/logo.jpg"
							width="50px"
							height="50px"
							alt="Welcome"
						/>
					</div>
					<div className="right">
						<button>
							<Link to="/signup">Sign Up </Link>
						</button>
						<button>
							<Link to="/login">Log In </Link>
						</button>
					</div>
				</div>
			</div>
			<div className="welcomeDesc">
				Everyone has at least one idea for the next big thing.What makes startup
				founders different is their willingness to take action to make one of
				those ideas a reality.
			</div>
		</div>
	</Fragment>
);
export default About;
