import React from 'react';
import Typical from 'react-typical';
import myself from '../../images/myself.jpg';
import SoftwareDevResume1 from '../../images/SoftwareDevResume1.jpg';
import SoftwareDevResume2 from '../../images/SoftwareDevResume2.jpg';
import './about.css';

export const About = () => {
	return (
		<div>
			<div className='card mb-3 full-card'>
				<div className='row g-0'>
					<div className='col-md-4'>
						<img
							className='my-picture'
							style={{ maxWidth: '300px', maxHeight: '500px' }}
							src={myself}
							alt='creator'
						/>
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<h5 className='card-title'>About Me</h5>
							<p className='card-text'>
								My name is Waleed Saleh, I am 29 years old going on 30. Living
								in Chicago, IL. I began my journey into Software Development
								about 3 years. But I followed my dream getting into the industry
								and getting the party started and grasping the knowledge needed
								to get my foot into the door. I started learning HTML, CSS and
								JavaScript lightly while I was working as a Professional Truck
								Driver. Before the Pandemic happened I got into Kenzie Academy
								and took the next step to achieve my dream career.
							</p>
							<p className='card-text'>
								My hobbies consist of video games, some sports,
								technology(hardware and software) and now coding creating
								awesome projects. I enjoy learning new things especially if it
								has to do with tech. I recently learned how to build a pc on my
								own and upgrading my own pc to work even more amazing than it
								did when first learning to code. Aside of the current languages
								I have knowledge in, I am looking into learning Java and C++ to
								add to the library. I just can 't wait to get into the tech
								world and use my knowledge in a professional company.
							</p>
							<p>
								Some of the languages I currently have experience in are
								<Typical
									loop={Infinity}
									wrapper='b'
									steps={[
										' JavaScript!',
										1000,
										' HTML!',
										1000,
										' CSS!',
										1000,
										' NodeJS!',
										1000,
										' Express!',
										1000,
										' Python!',
										1000,
										' Django!',
										1000,
										' React!',
										1000,
										' Redux!',
										1000,
										' MongoDB!',
										1000,
										' Mongoose!',
										1000,
										' APIs!',
										1000,
										' Deployment!',
										1000,
										' Git!',
										1000,
										' Linux!',
										1000,
										' MySQL!',
										1000,
										' REST!',
										1000,
										' OOP!',
										1000,
										' SQL!',
										1000,
										' jQuery!',
										1000,
									]}
								/>
							</p>
						</div>
					</div>
				</div>
			</div>
			<h2 className='resume-header'>My Resume</h2>
			<div className='resume-container'>
				<img className='page1' src={SoftwareDevResume1} alt='Resume page 1' />
				<img className='page2' src={SoftwareDevResume2} alt='Resume page 2' />
			</div>
		</div>
	);
};
