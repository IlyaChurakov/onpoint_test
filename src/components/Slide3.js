import '../css/Slide3.css'
import Header from './Header'
import Logo from './Logo'
import Bottle from './Bottle'

const Slide3 = ({ translateTape }) => {
	return (
		<div className='slide slide__3'>
			<Header translateTape={translateTape} />

			<div className='board__transparent'>
				<div className='board__transparent_subtitle'>КЛЮЧЕВОЕ СООБЩЕНИЕ</div>
				<div className='board__transparent_title'>
					BREND<span>XY</span>
				</div>

				<div className='board__group'>
					<img id='plate' src='./icons/slide3/plate.png' alt='icon' />
					<img id='calendar' src='./icons/slide3/calendar.png' alt='icon' />
					<div className='big__board_in'>
						Ehicula ipsum a arcu curvus vitae. Eu non diam phasellus vestibulum
						lorem sed risus ultricies
					</div>
					<div className='small__board_in'>A arcu curvus vitae</div>
					<button className='pinkBtn' onClick={() => translateTape(-3072)}>
						<div className='blackBtn__in'>
							<div className='plus'>
								<div className='plus__line1'></div>
								<div className='plus__line2'></div>
							</div>
						</div>
						<div className='btn__text'>Подробнее</div>
					</button>
				</div>
			</div>

			<Bottle />
			<Logo />
		</div>
	)
}

export default Slide3
