import React from 'react';
import { Slideshow } from './Slideshow';
import FullStack from '../../images/Waleed_Saleh_FULL STACK WEB DEVELOPMENT1024_1.jpg';
import FrontEnd from '../../images/Saleh, Waleed.png';
import NodeCertificate from '../../images/node-course.jpg';
import './certify.css';

export const Certify = () => {
	return (
		<Slideshow
			interval={3000}
			images={[FrontEnd, FullStack, NodeCertificate]}
		/>
	);
};
