import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
	return (
		<div>
			<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div class='container-fluid'>
					<Link to='/about' className='navbar-brand'>
						Waleed Saleh
					</Link>
					<div class='collapse navbar-collapse' id='navbarNavDropdown'>
						<ul class='navbar-nav'>
							<li class='nav-item'>
								<Link className='nav-link active' to='/'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/about'>
									About Me
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/certify'>
									Certifications
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);

	// 	<nav>
	// 		<h1>Waleed Saleh</h1>
	// 		<ul>
	// 			<li>
	// 				<Link to='/'>Home</Link>
	// 			</li>
	// 			<li>
	// 				<Link to='/about'>About Me</Link>
	// 			</li>
	// 			<li>
	// 				<Link to='/certify'>Certifications</Link>
	// 			</li>
	// 			<li>
	// 				<Link to='/contact'>Contact Me</Link>
	// 			</li>
	// 		</ul>
	// 	</nav>
	// );
};
