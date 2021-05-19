import React from 'react';
import FrontEnd from '../images/Saleh, Waleed.png';
import FullStack from '../images/Waleed_Saleh_FULL STACK WEB DEVELOPMENT1024_1.jpg';
import '../components/pages.css';

export const Certify = () => {
	return (
		<div>
			<h1>My Certificates!</h1>
			<div className='certify'>
				<div className='card' style={{ width: '18rem' }}>
					<img src={FrontEnd} className='card-img-top' alt='...' />
					<div className='card-body'>
						<p className='card-text'>
							First Certificate achieved from Kenzie Academy for learning HTML,
							CSS, JavaScript, ReactJS, Redux, NodeJS and ExpressJS.
						</p>
					</div>
				</div>

				<div className='card' style={{ width: '18rem' }}>
					<img src={FullStack} className='card-img-top' alt='...' />
					<div className='card-body'>
						<p className='card-text'>
							Second Certificate achieved from Kenzie Academy for learning
							Python, PostgreSQL and Django.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
