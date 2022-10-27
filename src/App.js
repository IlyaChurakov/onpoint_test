import react, {createRef} from 'react'
import './App.css';

function App() {

	const tape = createRef('tape')
	const scrollbar = createRef('scrollbar')
	const content = createRef('content')
	const container = createRef('container')

	let offset = 0

	const actionLeftBtn = () => {

		if (offset !== 0) {
			offset += 20
			tape.current.style = `transform: translateX(${offset}%)`
		}
		console.log(offset)
	}

	const actionRightBtn = () => {
		if (offset !== -80) {
			offset -= 20
			tape.current.style = `transform: translateX(${offset}%)`
		}
		console.log(offset)
	}

	const takeScrollbar = () => {
		scrollbar.current.style.top = `${test++}px`
	}
	const moveScrollbar = () => {
		scrollbar.current.style.top = `${test + 10}px`
	}
	const takeoffScrollbar = () => {
		// scrollbar.
	}

	return (
		<div className="wrapper">
			<button className="leftBtn" onClick={actionLeftBtn}>{'<'}</button>
			<button className="rightBtn" onClick={actionRightBtn}>{'>'}</button>
			<div className="slideTape" ref={tape}>

				<div className="slide slide-1">
					<div className='header'>
						<img className='header-btn' src="./icons/global/main.png" alt="header" />
						<div className='header-line'/>
						<div className='header-text'>PROJECT</div>
					</div>
					<div className='hello-text'>ПРИВЕТ,</div>
					<div className='text'>
						ЭТО НЕ КОММЕРЧЕСКОЕ <span>ЗАДАНИЕ</span>
					</div>
					<button className='btn'>
						<div className='btn-arrow'>

						</div>
						<div className='btn-text'>Что дальше?</div>
					</button>
					<img src='./icons/slide1/sausage.png' style={{position: 'absolute', width: 125, top: 73, left: 0}}/>
					<img src='./icons/slide1/hedgehog.png' style={{position: 'absolute', width: 105, top: 200, left: 863}}/>
					<img src='./icons/slide1/hedgehog_down.png' style={{position: 'absolute', width: 225, bottom: 0, left: 544}}/>
					<img src='./icons/slide1/sperm.png' style={{position: 'absolute', width: 505, top: 183, left: 433}}/>
					<img src='./icons/slide1/ball_bg.png' style={{position: 'absolute', width: 67, top: 640, left: 372}}/>
					<img src='./icons/slide1/ball1.png' style={{position: 'absolute', width: 69, top: 500, left: 25, zIndex: 0}}/>
					<img src='./icons/slide1/sperm_bg.png' style={{position: 'absolute', width: 264, top: 612, left: 0}}/>
					<img src='./icons/slide1/ball2.png' style={{position: 'absolute', width: 63, top: 61, left: 745}}/>
					<img src='./icons/slide1/ball_2_bg.png' style={{position: 'absolute', width: 63, top: 37, left: 933}}/>
				</div>

				<div className="slide slide-2">
					<div className='header'>
						<img className='header-btn' src="./icons/global/main.png" alt="header" />
						<div className='header-line'/>
						<div className='header-text'>PROJECT</div>
					</div>
					<div className='hello-text'>ТЕКСТ <br/> СООБЩЕНИЯ</div>
					<div className='textfield' ref={content}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque odio, a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue et, pellentesque magna. Vivamus elementum urna rutrum, viverra turpis vitae, rhoncus magna. Quisque faucibus sem nec lorem maximus molestie sit amet eget nisl. Integer luctus eget nibh nec blandit. Pellentesque pretium ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi commodo orci at dui egestas euismod. Sed faucibus libero eu est tincidunt, id semper tortor faucibus. Nam a lectus urna. Curabitur lacus nibh, mollis quis vestibulum at, venenatis sit amet neque. In nec est nec est volutpat facilisis. Integer vitae velit tellus. Vivamus egestas pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris, eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget facilisis felis.
					</div>
					<img className='sperm' src='./icons/slide2/sperm1.png' style={{position: 'absolute', width: 656, top: 97, right: 0}}/>
					<img src='./icons/slide2/sperm2.png' style={{position: 'absolute', width: 440, top: 97, right: 0}}/>
					<img src='./icons/slide2/sperm3.png' style={{position: 'absolute', width: 312, top: 75, right: 0}}/>
					<img src='./icons/slide2/sperm4.png' style={{position: 'absolute', width: 134, top: 413, right: 0}}/>
					<img src='./icons/slide2/sperm5.png' style={{position: 'absolute', width: 136, top: 517, right: 0}}/>

					<div id="scrollbar-container" ref={container}>
						<div id="scrollbar"ref={scrollbar} onMouseDown={takeScrollbar} onMouseMove={moveScrollbar} onMouseUp={takeoffScrollbar}></div>
					</div>

				</div>

				<div className="slide slide-3">
					<div className='header'>
						<img className='header-btn' src="./icons/global/main.png" alt="header" />
						<div className='header-line'/>
						<div className='header-text'>PROJECT</div>
					</div>

					<div className='board-transparent'>
						<div className='board-transparent-subtitle'>КЛЮЧЕВОЕ СООБЩЕНИЕ</div>
						<div className='board-transparent-title'>BRENDXY</div>

						<div className='board-group'>
							<img id='plate' src="./icons/slide3/plate.png" alt="icon" />
							<img id='calendar' src="./icons/slide3/calendar.png" alt="icon" />
							<div className='big-board-in'>
								Ehicula ipsum a arcu curvus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies
							</div>
							<div className='small-board-in'>
								A arcu curvus vitae
							</div>
							<button className='pinkBtn'>
								<button className='blackBtn-in'>

								</button>
								<div className='btn-text'>Подробнее</div>
							</button>
						</div>
					</div>

					<img src='./icons/slide4/flakon.png' style={{position: 'absolute', width: 318, top: 65, left: 10}}/>
				</div>

				<div className="slide slide-4" >
					<div className='header'>
						<img className='header-btn' src="./icons/global/main.png" alt="header" />
						<div className='header-line'/>
						<div className='header-text'>PROJECT</div>
					</div>

					<div className='board'>
						<div className='board-close'>
							<div className='board-close-line1'></div>
							<div className='board-close-line2'></div>
						</div> 
						<div className='board-subtitle'>ПРЕИМУЩЕСТВА</div>
						<div className='board-title'>BRENDXY</div>
						<ul>
							<li className='numbers'>01</li>
							<li>lorem ipsum dolor sit amet consesterur adipiscing elit</li>
							<li className='numbers'>02</li>
							<li>lorem ipsum dolor sit amet consesterur</li>
							<li className='numbers'>03</li>
							<li>lorem ipsum dolor sit amet consesterur</li>
						</ul>
						<div className='btns-wrapper'>
							<img src="./icons/slide4/btn_left.png" alt="btn" />
							<div className='circle-pink'></div>
							<div className='circle-empty'></div>
							<img src="./icons/slide4/btn_right.png" alt="btn" />
						</div>
					</div>

					<img src='./icons/slide4/flakon.png' style={{position: 'absolute', width: 318, top: 65, left: 10}}/>
				</div>

				<div className="slide slide-5">
					<div className='header'>
						<img className='header-btn' src="./icons/global/main.png" alt="header" />
						<div className='header-line'/>
						<div className='header-text'>PROJECT</div>
					</div>

					<div className='board'>
						<div className='board-close'>
							<div className='board-close-line1'></div>
							<div className='board-close-line2'></div>
						</div> 
						<div className='board-subtitle'>ПРЕИМУЩЕСТВА</div>
						<div className='board-title'>BRENDXY</div>
						<ul>
							<li className='numbers'>04</li>
							<li>Mi bibendum neque egestas congue quisque egestas diam</li>
							<li className='numbers'>05</li>
							<li>lorem ipsum dolor sit amet consesterur</li>
							<li className='numbers'>06</li>
							<li>lorem ipsum dolor sit amet consesterur</li>
						</ul>
						<div className='btns-wrapper'>
							<img src="./icons/slide4/btn_left.png" alt="btn" />
							<div className='circle-pink'></div>
							<div className='circle-pink'></div>
							<img src="./icons/slide4/btn_right.png" alt="btn" />
						</div>
					</div>

					<img src='./icons/slide4/flakon.png' style={{position: 'absolute', width: 318, top: 65, left: 10}}/>
				</div>
			</div>
		</div>
	);
}

export default App;
