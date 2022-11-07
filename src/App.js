import { createRef, useState } from 'react'
import Slide1 from './components/Slide1'
import Slide4 from './components/Slide4'
import Slide3 from './components/Slide3'
import Slide2 from './components/Slide2'
import './css/App.css'
import './css/Animations.css'

const App = () => {
	const tape = createRef('tape'),
		slider = createRef('slider')

	const [touchPosition, setTouchPosition] = useState(null), // Position of start touch in tape swipes
		[offset, setOffset] = useState(0) // Offset of tape, need to moving tape and showing selected slide

	// Swipes

	const onTouchStart = e => {
		const touchDown = e.touches[0].clientX // X coordinate - start of touch
		setTouchPosition(touchDown)

		setOffset(+tape.current.style.translate.slice(0, -2)) // watching the offset of tape and frees us from props drilling between components
	}

	const onTouchMove = e => {
		if (touchPosition === null) {
			return
		}

		const currentPosition = e.touches[0].clientX // X coordinate - current position of touch
		const direction = touchPosition - currentPosition // direction of swipe (next/prev)

		// swipe next
		if (direction > 10) {
			if (offset > -4096) {
				// Add transition where it's need
				if (offset === 0 || offset === -1024) {
					tape.current.style.transition = '1s all'
				} else {
					tape.current.style.transition = ''
				}
				// Change slides
				translateTape(offset - 1024)
				setOffset(offset - 1024)
			}
		}
		// swipe prev
		if (direction < -10) {
			if (offset < 0) {
				// Add transition where it's need
				if (offset === -2048 || offset === -1024) {
					tape.current.style.transition = '1s all'
				} else {
					tape.current.style.transition = ''
				}
				// Change slides
				translateTape(offset + 1024)
				setOffset(offset + 1024)
			}
		}
		setTouchPosition(null)
	}

	const translateTape = value => {
		// this condition needs for delete animation of swipe from third to fourth slide on button
		if (offset && offset === -2048 && value === -3072) {
			tape.current.style.transition = ''
		}
		tape.current.style.translate = `${value}px`
	}

	return (
		<div
			className='slider__wrapper'
			ref={slider}
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
		>
			<div className='slideTape' ref={tape}>
				<Slide1 translateTape={translateTape} />
				<Slide2 translateTape={translateTape} offset={offset} />
				<Slide3 translateTape={translateTape} />
				<Slide4
					translateTape={translateTape}
					data={{
						numbers: ['01', '02', '03'],
						txt: [
							'lorem ipsum dolor sit amet consesterur adipiscing elit',
							'Faucibus pulvinar elementum integer enim',
						],
						slideNum: 4,
					}}
				/>
				<Slide4
					translateTape={translateTape}
					data={{
						numbers: ['04', '05', '06'],
						txt: [
							'Mi bibendum neque egestas congue quisque egestas diam',
							'Venenatis lectus magna fringilla urna',
						],
						slideNum: 5,
					}}
				/>
			</div>
		</div>
	)
}

export default App
