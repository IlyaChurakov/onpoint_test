import {createRef, useState, useEffect} from 'react';
import Slide1 from './components/Slide1';
import Slide5 from './components/Slide5';
import Slide4 from './components/Slide4';
import Slide3 from './components/Slide3';
import Slide2 from './components/Slide2';
import './css/App.css';
import './css/Animations.css'

const App = () => {
	const tape = createRef('tape'),
		  slider = createRef('slider')

	const [touchPosition, setTouchPosition] = useState(null), // Position of start touch in tape swipes
		  [offset, setOffset] = useState(0), // Offset of tape, need to moving tape and showing selected slide
		  [classTape, setClassTape] = useState(`slideTape`), // This variable need to set some classes for tape

		  // Variables need to set some classes for animation of pictures on second slide
		  
		  [classNameSperm1, setClassNameSperm1] = useState(`sperm1`),
		  [classNameSperm2, setClassNameSperm2] = useState(''),
		  [classNameSperm3, setClassNameSperm3] = useState(''),
		  [classNameSperm4, setClassNameSperm4] = useState(''),
		  [classNameSperm5, setClassNameSperm5] = useState('')
	
	// Control classes of animations on second slide

	useEffect(() => { 
		if (offset === -1024) {
			setClassNameSperm1('sperm1 sperm__anim1')
			setClassNameSperm2('sperm__anim2')
			setClassNameSperm3('sperm__anim3')
			setClassNameSperm4('sperm__anim4')
			setClassNameSperm5('sperm__anim5')
		} else {
			setClassNameSperm1(`sperm1`)
			setClassNameSperm2('')
			setClassNameSperm3('')
			setClassNameSperm4('')
			setClassNameSperm5('')
		}
	}, [offset])

	// Swipes

	const onTouchStart = (e) => {
		const touchDown = e.touches[0].clientX; // X coordinate - start of touch
		setTouchPosition(touchDown);
	}

	const onTouchMove = (e) => {
		if (touchPosition === null) {
		  	return;
		}
	
		const currentPosition = e.touches[0].clientX; // X coordinate - current position of touch
		const direction = touchPosition - currentPosition;

		let offs = offset

		if (direction > 10) { // Condition for next slide
			if (offset - slider.current.offsetWidth >= -4096) { // Limit of moving tape

				offs = offset - slider.current.offsetWidth // Future position of tape 

				switch (offs) {
					case -4096:
						moveTapeWithoutAnim(offs)
						break;
					case -3072:
						moveTapeWithoutAnim(offs)
						break;
					default:
						moveTape(offs)
				}
				setOffset(offs)
			}
		} 
		if (direction < -10) { // Condition for previous slide
			if (offset + slider.current.offsetWidth <= 0) { // Limit of moving tape

				offs = offset + slider.current.offsetWidth // Future position of tape 

				switch (offs) {
					case -4096:
						moveTapeWithoutAnim(offs)
						break;
					case -3072:
						moveTapeWithoutAnim(offs)
						break;
					case -2048:
						moveTapeWithoutAnim(offs)
						break;
					default:
						moveTape(offs)
				}
				setOffset(offs)
			}
		}
		setTouchPosition(null);
	}

	// Functions for moving tape

	const moveTape = (offset) => {
		switch (offset) {
			case 0:
				setClassTape('slideTape firstSlide')
			  	break;
			case -1024:
				setClassTape('slideTape secondSlide')
			  	break;
			case -2048:
				setClassTape('slideTape thirdSlide')
				break;
			case -3072:
				setClassTape('slideTape fourthSlide')
				break;
			case -4096:
				setClassTape('slideTape fifthSlide')
				break;
		}
	}

	const moveTapeWithoutAnim = (offset) => {
		switch (offset) {
			case 0:
				setClassTape('slideTape firstSlideWithoutAnim')
			  	break;
			case -1024:
				setClassTape('slideTape secondSlideWithoutAnim')
			  	break;
			case -2048:
				setClassTape('slideTape thirdSlideWithoutAnim')
				break;
			case -3072:
				setClassTape('slideTape fourthSlideWithoutAnim')
				break;
			case -4096:
				setClassTape('slideTape fifthSlideWithoutAnim')
				break;
		}
	}

	const toSlide = (value) => {
		moveTape(value)
		setOffset(value)
	}

	const toSlideWithoutAnim = (value) => {
		moveTapeWithoutAnim(value)
		setOffset(value)
	}

	return (
		<div 
			className="slider__wrapper" 
			ref={slider} 
			onTouchStart={onTouchStart} 
			onTouchMove={onTouchMove}
		>
			<div 
				className={classTape} 
				ref={tape}
			>
				<Slide1
					toSlide={toSlide}
				/>
				<Slide2
					toSlide={toSlide}
					classNameSperm1={classNameSperm1}
					classNameSperm2={classNameSperm2}
					classNameSperm3={classNameSperm3}
					classNameSperm4={classNameSperm4}
					classNameSperm5={classNameSperm5}
				/>
				<Slide3
					toSlide={toSlide}
					toSlideWithoutAnim={toSlideWithoutAnim}
				/>
				<Slide4
					toSlideWithoutAnim={toSlideWithoutAnim}
				/>
				<Slide5
					toSlideWithoutAnim={toSlideWithoutAnim}
				/>
			</div>
		</div>
	);
}

export default App;
