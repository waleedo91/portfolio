import React from 'react';

export const Contact = () => {
	return (
		<div>
			<h1>Contact Me!</h1>
			<div className='card' style={{ width: '18rem' }}>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						Email: <strong>wsaleh1991@gmail.com</strong>
					</li>
					<li className='list-group-item'>
						<a href='https://www.linkedin.com/in/waleed-saleh-808b6514b/'>
							LinkedIn
						</a>
					</li>
					<li className='list-group-item'>
						<a href='https://www.facebook.com/waleedo.91'>Facebook</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
