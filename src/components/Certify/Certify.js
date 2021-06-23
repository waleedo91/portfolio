import React from 'react';
import ReactPlayer from 'react-player';
import { CertifySlideShow } from '../slideShow/CertifySlideShow';
import FullStack from '../../images/Waleed_Saleh_FULL STACK WEB DEVELOPMENT1024_1.jpg';
import FrontEnd from '../../images/Saleh, Waleed.png';
import NodeCertificate from '../../images/node-course.jpg';
import ReactCert from '../../images/ReactCert.jpg';
import SQL from '../../images/SQL.jpg';
import chatapp from '../../videos/chatapp.mp4';
import hypegames from '../../videos/hypegames.mp4';
import './Certify.css';
import '../layout/Landing.css';

export const Certify = () => {
	return (
		<div className='background'>
			<article>
				<h2 className='header'>Certificates I have received!</h2>
				<div className='slideshow-sec'>
					<CertifySlideShow
						className='slideshow'
						interval={3000}
						images={[FrontEnd, FullStack, SQL, NodeCertificate, ReactCert]}
					/>
				</div>
				<div className='project-container'>
					<h2 className='header'>Projects I am proud of!</h2>
					<div className='videos'>
						<div className='chatapp'>
							<a
								className='projects'
								href='https://saleh-chat-app.herokuapp.com/'
							>
								<ReactPlayer url={chatapp} playing={true} loop={true} />
							</a>
							<p className='description'>
								This app was just created for fun by me. JavaScript as the
								language as well as expressJS as the framework. Also, I used
								socketIO to implement a real time chat between 2 or more people
								in one room, and a geographical app to go along in case someone
								wants to share their location and just for fun, a profanity
								filter to filter any bad words.
							</p>
						</div>
						<div className='hypegames'>
							<a className='projects' href='https://hype-games.com/'>
								<ReactPlayer url={hypegames} playing={true} loop={true} />
							</a>
							<p className='description'>
								Here we have a final group project from Kenzie. We used python
								and JavaScript as the languages, Django as the Frame work. My
								job on this project was to ensure all functions worked properly
								and refactor them as well, CSS and ensuring repo was as clean as
								possible and merges were done efficiently as well. I also worked
								on a few of the functionality along side with the teammates such
								as the favorites button, login, logout and signup functions. As
								well as the database.
							</p>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};
