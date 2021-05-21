import React, { useState, useEffect } from 'react';

import './certify.css';

export const Slideshow = ({ images = [], interval = 3000 }) => {
	const [thumbnail, setThumbnail] = useState([]);
	const [previousSlide, setPreviousSlide] = useState({});
	const [current, setCurrent] = useState(0);
	const [nextSlide, setNextSlide] = useState({});
	const [slideStyle, setSlideStyle] = useState({});

	useEffect(() => {
		setThumbnail(images);
		setSlideStyle({
			backgroundImage: "url('" + images[current] + "')",
		});

		if (current > 0) {
			setPreviousSlide({
				backgroundImage: "url('" + images[current - 1] + "')",
			});
		} else {
			setPreviousSlide({
				backgroundImage: "url('" + images[images.length - 1] + "')",
			});
		}

		if (current === images.length - 1) {
			setNextSlide({
				backgroundImage: "url('" + images[0] + "')",
			});
		} else {
			setNextSlide({
				backgroundImage: "url('" + images[current + 1] + "')",
			});
		}

		const loop = setInterval(() => {
			if (current === images.length - 1) {
				setCurrent(0);
			} else {
				setCurrent(current + 1);
			}
		}, interval);
		return () => clearInterval(loop);
	}, [images, current, interval]);

	function previous() {
		if (current) {
			setCurrent(current - 1);
		} else {
			setCurrent(thumbnail.length - 1);
		}
	}

	function next() {
		if (current === thumbnail.length - 1) {
			setCurrent(0);
		} else {
			setCurrent(current + 1);
		}
	}

	return (
		<section className='slideshow'>
			<div className='slide-holder'>
				<section className='slide previous'>
					<div style={previousSlide} className='thumbnail'></div>
				</section>
				<section className='slide current'>
					<div style={slideStyle} className='thumbnail'></div>
				</section>
				<section className='slide next'>
					<div style={nextSlide} className='thumbnail'></div>
				</section>
			</div>
			<div className='controller'>
				<span onClick={previous}>Previous</span>
				<span onClick={next}>Next</span>
			</div>
		</section>
	);
};
