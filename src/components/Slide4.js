import '../css/Slide4.css'
import Header from './Header'
import Logo from './Logo'
import Bottle from './Bottle'

const Slide4 = ({ translateTape, data }) => {
	return (
		<div className='slide slide__4'>
			<Header translateTape={translateTape} />

			<div className='board'>
				<div className='board__close' onClick={() => translateTape(-2048)}>
					<div className='board__close_line1'></div>
					<div className='board__close_line2'></div>
				</div>
				<div className='board__subtitle'>ПРЕИМУЩЕСТВА</div>
				<div className='board__title'>
					BREND<span>XY</span>
				</div>
				<ul>
					<li className='numbers'>{data.numbers[0]}</li>
					<li className='txt'>{data.txt[0]}</li>
					<li className='numbers'>{data.numbers[1]}</li>
					<li className='txt'>{data.txt[1]}</li>
					<li className='numbers'>{data.numbers[2]}</li>
					<li className='txt'>{data.txt[1]}</li>
				</ul>
				<div className='btns__wrapper'>
					<img
						src='./icons/slide4/btn_left.png'
						alt='button'
						onClick={() => translateTape(-3072)}
					/>
					<div className='circle__pink'></div>
					{data.slideNum === 4 ? (
						<div className='circle__empty'></div>
					) : (
						<div className='circle__pink'></div>
					)}
					<img
						src='./icons/slide4/btn_right.png'
						alt='button'
						onClick={() => translateTape(-4096)}
					/>
				</div>
			</div>

			<Bottle />

			<Logo />
		</div>
	)
}

export default Slide4
