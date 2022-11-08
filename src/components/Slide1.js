import '../css/Slide1.css'
import Header from './Header'
import Logo from './Logo'

const Slide1 = ({ translateTape }) => {
	return (
		<div className='slide slide__1'>
			<Header translateTape={translateTape} />

			<div className='hello__text'>ПРИВЕТ,</div>

			<div className='text'>
				ЭТО <span id='no'>НЕ</span> КОММЕРЧЕСКОЕ <span id='task'>ЗАДАНИЕ</span>
			</div>

			<button className='btn' onClick={() => translateTape(-1024)}>
				<div className='btn__arrow'>
					<div className='arrow'>
						<div className='arrow__line1'></div>
						<div className='arrow__line2'></div>
						<div className='arrow__line3'></div>
					</div>
				</div>
				<div className='btn__text'>Что дальше?</div>
			</button>

			<img
				src='./icons/slide1/sausage.png'
				style={{
					position: 'absolute',
					width: 125,
					top: 73,
					left: 0,
				}}
				alt='bacteria'
			/>
			<img
				id='hedgehog1'
				src='./icons/slide1/hedgehog.png'
				style={{
					position: 'absolute',
					width: 105,
					top: 200,
					left: 863,
				}}
				alt='bacteria'
			/>
			<img
				id='hedgehog2'
				src='./icons/slide1/hedgehog_down.png'
				style={{
					position: 'absolute',
					width: 225,
					bottom: 0,
					left: 544,
				}}
				alt='bacteria'
			/>
			<img
				src='./icons/slide1/sperm.png'
				style={{
					position: 'absolute',
					width: 505,
					top: 168,
					left: 438,
				}}
				alt='sperm'
			/>
			<img
				src='./icons/slide1/ball_bg.png'
				style={{
					position: 'absolute',
					width: 67,
					top: 640,
					left: 372,
				}}
				alt='bacteria'
			/>
			<img
				id='ball1'
				src='./icons/slide1/ball1.png'
				style={{
					position: 'absolute',
					width: 69,
					top: 500,
					left: 25,
					zIndex: 0,
				}}
				alt='bacteria'
			/>
			<img
				src='./icons/slide1/sperm_bg.png'
				style={{
					position: 'absolute',
					width: 264,
					top: 612,
					left: 0,
				}}
				alt='sperm'
			/>
			<img
				id='ball2'
				src='./icons/slide1/ball2.png'
				style={{
					position: 'absolute',
					width: 63,
					top: 61,
					left: 745,
				}}
				alt='bacteria'
			/>
			<img
				src='./icons/slide1/ball_2_bg.png'
				style={{
					position: 'absolute',
					width: 63,
					top: 37,
					left: 933,
				}}
				alt='bacteria'
			/>
			<Logo />
		</div>
	)
}

export default Slide1
