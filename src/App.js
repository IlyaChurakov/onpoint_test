import react, {createRef, useEffect, useState} from 'react'
import './css/App.css';
import './css/Animations.css'

/* 
	Todo:
	- Анимации перелистывания
	сделано - Навигация по кнопкам на слайдах
	сделано - Скроллбар на втором слайде
	сделано- Подключить шрифт
	сделано - Детализировать верстку
	- Написать комментарии к коду
	*осталось сделать запуск анимаций только при переходе на нужный слайд - Анимации картинок
*/

function App() {

	const tape = createRef('tape'),
		firstSlide = createRef('firstSlide'),
		slider = createRef('slider'),
		scrollbar = createRef('scrollbar'),
		content = createRef('content'),
		container = createRef('container')


	const [touchPosition, setTouchPosition] = useState(null)
	const [offset, setOffset] = useState(0)

	const onTouchStart = (e) => {
		const touchDown = e.touches[0].clientX; // Координата X на которой нажали
	
		setTouchPosition(touchDown);
	}

	const onTouchMove = (e) => {
		if (touchPosition === null) {
		  	return;
		}
	
		const currentPosition = e.touches[0].clientX;
		const direction = touchPosition - currentPosition;

		let offs = offset

		if (direction > 10) { // Следующий слайд
			if (offset - slider.current.offsetWidth >= -4096) {
				offs = offset - slider.current.offsetWidth
				tape.current.style = `transform: translateX(${offs}px)`
				setOffset(offs)
			}
		} 
		if (direction < -10) { // Предыдущий слайд
			if (offset + slider.current.offsetWidth <= 0) {
				offs = offset + slider.current.offsetWidth
				tape.current.style = `transform: translateX(${offs}px)`
				setOffset(offs)
			}
		}

		setTouchPosition(null);
	}

	const [touchPositionScrollbar, setTouchPositionScrollbar] = useState(null)
	const [y, setY] = useState(0)

	const onTouchStartScrollBar = (e) => {
		const touchDown = e.touches[0].clientY

		setTouchPositionScrollbar(touchDown)

		setY(scrollbar.current.offsetTop) // На какой высоте находится scrollbar
	}

	const onTouchMoveScrollBar = (e) => {
		if (touchPositionScrollbar === null) {
			return
	  	}

		const currentPosition = e.touches[0].clientY
		const distance = currentPosition - touchPositionScrollbar // На сколько сместили scrollbar 

		let futurePosition = y + distance

		if (futurePosition <= -2) {
			futurePosition = -2
		}
		if (futurePosition >= 341) {
			futurePosition = 341
		}

		scrollbar.current.style = `top: ${futurePosition}px`
		content.current.scrollTop = (content.current.scrollHeight * scrollbar.current.offsetTop / container.current.clientHeight) * 1.1
	}

	const onScroll = () => {
		let top = content.current.scrollTop * container.current.clientHeight / (content.current.scrollHeight)
		scrollbar.current.style = `top: ${top}px`
	}

	const toSecondSlide = () => {
		tape.current.style = `transform: translateX(-1024px)`
		setOffset(-1024)
	}

	const toThirdSlide = () => {
		tape.current.style = `transform: translateX(-2048px)`
		setOffset(-2048)
	}

	const toNextSlide = () => {
		tape.current.style = `transform: translateX(-4096px)`
		setOffset(-4096)
	}

	const toPrevSlide = () => {
		tape.current.style = `transform: translateX(-3072px)`
		setOffset(-3072)
	}

	const toFourthSlide = () => {
		tape.current.style = `transform: translateX(-3072px)`
		setOffset(-3072)
	}

	const toFirstSlide = () => {
		tape.current.style = `transform: translateX(0px)`
		setOffset(0)
	}

	return (
		<div 
			className="wrapper" 
			ref={slider} 
			onTouchStart={onTouchStart} 
			onTouchMove={onTouchMove}
		>
			<div className="slideTape" ref={tape} style={{transform: 'translateX(${offset}%)'}}>

				<div className="slide slide-1" ref={firstSlide}>
					<div className='header'>
						<img className='header-btn' src="./icons/global/main.png" alt="header"/>
						<div className='header-line'/>
						<div className='header-text'>PROJECT</div>
					</div>
					<div className='hello-text'>ПРИВЕТ,</div>
					<div className='text'>
						ЭТО <span id='no'>НЕ</span> КОММЕРЧЕСКОЕ <span id='task'>ЗАДАНИЕ</span>
					</div>
					<button className='btn' onClick={toSecondSlide}>
						<div className='btn-arrow' >
							<div className='arrow'>
								<div className='arrow-line1'></div>
								<div className='arrow-line2'></div>
								<div className='arrow-line3'></div>
							</div>
						</div>
						<div className='btn-text'>Что дальше?</div>
					</button>
					<img src='./icons/slide1/sausage.png' style={{position: 'absolute', width: 125, top: 73, left: 0}}/>
					<img id='hedgehog1' src='./icons/slide1/hedgehog.png' style={{position: 'absolute', width: 105, top: 200, left: 863}}/>
					<img id='hedgehog2' src='./icons/slide1/hedgehog_down.png' style={{position: 'absolute', width: 225, bottom: 0, left: 544}}/>
					<img src='./icons/slide1/sperm.png' style={{position: 'absolute', width: 505, top: 168, left: 438}}/>
					<img src='./icons/slide1/ball_bg.png' style={{position: 'absolute', width: 67, top: 640, left: 372}}/>
					<img id='ball1' src='./icons/slide1/ball1.png' style={{position: 'absolute', width: 69, top: 500, left: 25, zIndex: 0}}/>
					<img src='./icons/slide1/sperm_bg.png' style={{position: 'absolute', width: 264, top: 612, left: 0}}/>
					<img id='ball2' src='./icons/slide1/ball2.png' style={{position: 'absolute', width: 63, top: 61, left: 745}}/>
					<img src='./icons/slide1/ball_2_bg.png' style={{position: 'absolute', width: 63, top: 37, left: 933}}/>
					<img src="./icons/global/shape1.png" style={{position: 'absolute', width: 57, bottom: 13, left: 70}}/>
				</div>

				<div className="slide slide-2">
					<div className='header'>
						<img className='header-btn' src="./icons/global/main.png" alt="header" onClick={toFirstSlide}/>
						<div className='header-line'/>
						<div className='header-text'>PROJECT</div>
					</div>
					<div className='hello-text'>ТЕКСТ <br/> СООБЩЕНИЯ</div>
					<div className='textfield' ref={content} onScroll={onScroll}>
						<span>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque odio, a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue et, pellentesque magna. Vivamus elementum urna rutrum, viverra turpis vitae, rhoncus magna. Quisque faucibus sem nec lorem maximus molestie sit amet eget nisl. Integer luctus eget nibh nec blandit. Pellentesque pretium ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi commodo orci at dui egestas euismod. Sed faucibus libero eu est tincidunt, id semper tortor faucibus. Nam a lectus urna. Curabitur lacus nibh, mollis quis vestibulum at, venenatis sit amet neque. In nec est nec est volutpat facilisis. Integer vitae velit tellus. Vivamus egestas pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris, eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget facilisis felis.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque odio, a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue et, pellentesque magna. Vivamus elementum urna rutrum, viverra turpis vitae, rhoncus magna. Quisque faucibus sem nec lorem maximus molestie sit amet eget nisl. Integer luctus eget nibh nec blandit. Pellentesque pretium ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi commodo orci at dui egestas euismod. Sed faucibus libero eu est tincidunt, id semper tortor faucibus. Nam a lectus urna. Curabitur lacus nibh, mollis quis vestibulum at, venenatis sit amet neque. In nec est nec est volutpat facilisis. Integer vitae velit tellus. Vivamus egestas pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris, eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget facilisis felis.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque odio, a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue et, pellentesque magna. Vivamus elementum urna rutrum, viverra turpis vitae, rhoncus magna. Quisque faucibus sem nec lorem maximus molestie sit amet eget nisl. Integer luctus eget nibh nec blandit. Pellentesque pretium ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi commodo orci at dui egestas euismod. Sed faucibus libero eu est tincidunt, id semper tortor faucibus. Nam a lectus urna. Curabitur lacus nibh, mollis quis vestibulum at, venenatis sit amet neque. In nec est nec est volutpat facilisis. Integer vitae velit tellus. Vivamus egestas pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris, eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget facilisis felis.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque odio, a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue et, pellentesque magna. Vivamus elementum urna rutrum, viverra turpis vitae, rhoncus magna. Quisque faucibus sem nec lorem maximus molestie sit amet eget nisl. Integer luctus eget nibh nec blandit. Pellentesque pretium ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi commodo orci at dui egestas euismod. Sed faucibus libero eu est tincidunt, id semper tortor faucibus. Nam a lectus urna. Curabitur lacus nibh, mollis quis vestibulum at, venenatis sit amet neque. In nec est nec est volutpat facilisis. Integer vitae velit tellus. Vivamus egestas pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris, eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget facilisis felis.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque odio, a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue et, pellentesque magna. Vivamus elementum urna rutrum, viverra turpis vitae, rhoncus magna. Quisque faucibus sem nec lorem maximus molestie sit amet eget nisl. Integer luctus eget nibh nec blandit. Pellentesque pretium ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi commodo orci at dui egestas euismod. Sed faucibus libero eu est tincidunt, id semper tortor faucibus. Nam a lectus urna. Curabitur lacus nibh, mollis quis vestibulum at, venenatis sit amet neque. In nec est nec est volutpat facilisis. Integer vitae velit tellus. Vivamus egestas pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris, eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget facilisis felis.
					</div>
					<img className='sperm1' id='sperm1' src='./icons/slide2/sperm1.png' style={{position: 'absolute', width: 656, top: 97, right: 0}}/>
					<img id='sperm2' src='./icons/slide2/sperm2.png' style={{position: 'absolute', width: 440, top: 97, right: 0}}/>
					<img id='sperm3' src='./icons/slide2/sperm3.png' style={{position: 'absolute', width: 312, top: 75, right: 0}}/>
					<img id='sperm4' src='./icons/slide2/sperm4.png' style={{position: 'absolute', width: 134, top: 413, right: 0}}/>
					<img id='sperm5' src='./icons/slide2/sperm5.png' style={{position: 'absolute', width: 136, top: 517, right: 0}}/>

					<img src="./icons/global/shape1.png" style={{position: 'absolute', width: 57, bottom: 13, left: 70}}/>

					<div id="scrollbar-container" ref={container} onTouchStart={onTouchStartScrollBar} onTouchMove={onTouchMoveScrollBar}>
						<div id="scrollbar" ref={scrollbar}></div>
					</div>

				</div>

				<div className="slide slide-3">
					<div className='header'>
						<img className='header-btn' src="./icons/global/main.png" alt="header" onClick={toFirstSlide}/>
						<div className='header-line'/>
						<div className='header-text'>PROJECT</div>
					</div>

					<div className='board-transparent'>
						<div className='board-transparent-subtitle'>КЛЮЧЕВОЕ СООБЩЕНИЕ</div>
						<div className='board-transparent-title'>BREND<span>XY</span></div>

						<div className='board-group'>
							<img id='plate' src="./icons/slide3/plate.png" alt="icon" />
							<img id='calendar' src="./icons/slide3/calendar.png" alt="icon" />
							<div className='big-board-in'>
								Ehicula ipsum a arcu curvus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies
							</div>
							<div className='small-board-in'>
								A arcu curvus vitae
							</div>
							<button className='pinkBtn' onClick={toFourthSlide}>
								<div className='blackBtn-in'>
									<div className='plus'>
										<div className='plus-line1'></div>
										<div className='plus-line2'></div>
									</div>
								</div>
								<div className='btn-text'>Подробнее</div>
							</button>
						</div>
					</div>

					<img src='./icons/global/bottle.png' style={{position: 'absolute', width: 231, bottom: 0, left: 52, zIndex: 5}}/>

					<img className='bubble1' src='./icons/global/bubble1.png' style={{position: 'absolute', width: 37, top: 65, left: 197, zIndex: 4}}/>
					<img className='bubble2' src='./icons/global/bubble2.png' style={{position: 'absolute', width: 67, top: 155, left: 183, zIndex: 6}}/>
					<img className='bubble3' src='./icons/global/bubble3.png' style={{position: 'absolute', width: 32, top: 212, left: 82, zIndex: 4}}/>
					<img className='bubble4' src='./icons/global/bubble4.png' style={{position: 'absolute', width: 105, top: 325, left: 197, zIndex: 4}}/>
					<img className='bubble5' src='./icons/global/bubble5.png' style={{position: 'absolute', width: 30, bottom: 284, left: 10, zIndex: 6}}/>
					<img className='bubble6' src='./icons/global/bubble6.png' style={{position: 'absolute', width: 75, bottom: 140, left: 25, zIndex: 6}}/>
					<img className='bubble7' src='./icons/global/bubble7.png' style={{position: 'absolute', width: 54, bottom: 120, left: 250, zIndex: 4}}/>
					<img className='bubble8' src='./icons/global/bubble8.png' style={{position: 'absolute', width: 139, bottom: 0, left: 188, zIndex: 6}}/>
					

					<img src="./icons/global/shape1.png" style={{position: 'absolute', width: 57, bottom: 13, left: 70}}/>
				</div>

				<div className="slide slide-4" >
					<div className='header'>
						<img className='header-btn' src="./icons/global/main.png" alt="header" onClick={toFirstSlide}/>
						<div className='header-line'/>
						<div className='header-text'>PROJECT</div>
					</div>

					<div className='board'>
						<div className='board-close' onClick={toThirdSlide}>
							<div className='board-close-line1'></div>
							<div className='board-close-line2'></div>
						</div> 
						<div className='board-subtitle'>ПРЕИМУЩЕСТВА</div>
						<div className='board-title'>BREND<span>XY</span></div>
						<ul>
							<li className='numbers'>01</li>
							<li className='txt'>lorem ipsum dolor sit amet consesterur adipiscing elit</li>
							<li className='numbers'>02</li>
							<li className='txt'>Faucibus pulvinar elementum integer enim</li>
							<li className='numbers'>03</li>
							<li className='txt'>Faucibus pulvinar elementum integer enim</li>
						</ul>
						<div className='btns-wrapper'>
							<img src="./icons/slide4/btn_left.png" alt="btn" />
							<div className='circle-pink'></div>
							<div className='circle-empty'></div>
							<img src="./icons/slide4/btn_right.png" alt="btn" onClick={toNextSlide}/>
						</div>
					</div>

					<img src='./icons/global/bottle.png' style={{position: 'absolute', width: 231, bottom: 0, left: 52, zIndex: 5}}/>

					<img className='bubble1' src='./icons/global/bubble1.png' style={{position: 'absolute', width: 37, top: 65, left: 197, zIndex: 4}}/>
					<img className='bubble2' src='./icons/global/bubble2.png' style={{position: 'absolute', width: 67, top: 155, left: 183, zIndex: 6}}/>
					<img className='bubble3' src='./icons/global/bubble3.png' style={{position: 'absolute', width: 32, top: 212, left: 82, zIndex: 4}}/>
					<img className='bubble4' src='./icons/global/bubble4.png' style={{position: 'absolute', width: 105, top: 325, left: 197, zIndex: 4}}/>
					<img className='bubble5' src='./icons/global/bubble5.png' style={{position: 'absolute', width: 30, bottom: 284, left: 10, zIndex: 6}}/>
					<img className='bubble6' src='./icons/global/bubble6.png' style={{position: 'absolute', width: 75, bottom: 140, left: 25, zIndex: 6}}/>
					<img className='bubble7' src='./icons/global/bubble7.png' style={{position: 'absolute', width: 54, bottom: 120, left: 250, zIndex: 4}}/>
					<img className='bubble8' src='./icons/global/bubble8.png' style={{position: 'absolute', width: 139, bottom: 0, left: 188, zIndex: 6}}/>

					<img src="./icons/global/shape1.png" style={{position: 'absolute', width: 57, bottom: 13, left: 70}}/>
				</div>

				<div className="slide slide-5">
					<div className='header'>
						<img className='header-btn' src="./icons/global/main.png" alt="header" onClick={toFirstSlide}/>
						<div className='header-line'/>
						<div className='header-text'>PROJECT</div>
					</div>

					<div className='board'>
						<div className='board-close' onClick={toThirdSlide}>
							<div className='board-close-line1'></div>
							<div className='board-close-line2'></div>
						</div> 
						<div className='board-subtitle'>ПРЕИМУЩЕСТВА</div>
						<div className='board-title'>BREND<span>XY</span></div>
						<ul>
							<li className='numbers'>04</li>
							<li className='txt'>Mi bibendum neque egestas congue quisque egestas diam</li>
							<li className='numbers'>05</li>
							<li className='txt'>Venenatis lectus magna fringilla urna</li>
							<li className='numbers'>06</li>
							<li className='txt'>Venenatis lectus magna fringilla urna</li>
						</ul>
						<div className='btns-wrapper'>
							<img src="./icons/slide4/btn_left.png" alt="btn" onClick={toPrevSlide}/>
							<div className='circle-pink'></div>
							<div className='circle-pink'></div>
							<img src="./icons/slide4/btn_right.png" alt="btn" />
						</div>
					</div>

					<img src='./icons/global/bottle.png' style={{position: 'absolute', width: 231, bottom: 0, left: 52, zIndex: 5}}/>

					<img className='bubble1' src='./icons/global/bubble1.png' style={{position: 'absolute', width: 37, top: 65, left: 197, zIndex: 4}}/>
					<img className='bubble2' src='./icons/global/bubble2.png' style={{position: 'absolute', width: 67, top: 155, left: 183, zIndex: 6}}/>
					<img className='bubble3' src='./icons/global/bubble3.png' style={{position: 'absolute', width: 32, top: 212, left: 82, zIndex: 4}}/>
					<img className='bubble4' src='./icons/global/bubble4.png' style={{position: 'absolute', width: 105, top: 325, left: 197, zIndex: 4}}/>
					<img className='bubble5' src='./icons/global/bubble5.png' style={{position: 'absolute', width: 30, bottom: 284, left: 10, zIndex: 6}}/>
					<img className='bubble6' src='./icons/global/bubble6.png' style={{position: 'absolute', width: 75, bottom: 140, left: 25, zIndex: 6}}/>
					<img className='bubble7' src='./icons/global/bubble7.png' style={{position: 'absolute', width: 54, bottom: 120, left: 250, zIndex: 4}}/>
					<img className='bubble8' src='./icons/global/bubble8.png' style={{position: 'absolute', width: 139, bottom: 0, left: 188, zIndex: 6}}/>

					<img src="./icons/global/shape1.png" style={{position: 'absolute', width: 57, bottom: 13, left: 70}}/>
				</div>
			</div>
		</div>
	);
}

export default App;
