import { createRef, useState } from 'react'
import '../css/Slide2.css'
import Header from './Header'
import Logo from './Logo'

const Slide2 = props => {
	const scrollbar = createRef('scrollbar'), // DOM element of scrollbar thumb
		content = createRef('content'), // DOM element of scrollbar content block
		container = createRef('container') // DOM element of scrollbar track

	const [touchPositionScrollbar, setTouchPositionScrollbar] = useState(null) // Y coordinate of start touch
	const [y, setY] = useState(0)

	const onTouchStartScrollBar = e => {
		const touchDown = e.touches[0].clientY // Position of start touch

		setTouchPositionScrollbar(touchDown)
		setY(scrollbar.current.offsetTop) // Position of thumb in track
	}

	// Control classes of animations

	let toggleClass = false

	if (props.offset === -1024) {
		toggleClass = true
	} else {
		toggleClass = false
	}

	const onTouchMoveScrollBar = e => {
		if (touchPositionScrollbar === null) {
			return
		}

		const currentPosition = e.touches[0].clientY
		const distance = currentPosition - touchPositionScrollbar // Offset of scrollbar

		let futurePosition = y + distance

		if (futurePosition <= -2) {
			futurePosition = -2
		}
		if (futurePosition >= 341) {
			futurePosition = 341
		}

		scrollbar.current.style = `top: ${futurePosition}px`
		content.current.scrollTop =
			((content.current.scrollHeight * scrollbar.current.offsetTop) /
				container.current.clientHeight) *
			1.1
	}

	// Change the position of scrollbar thumb when scrolling content block

	const onScroll = () => {
		let top =
			(content.current.scrollTop * container.current.clientHeight) /
			content.current.scrollHeight
		scrollbar.current.style = `top: ${top}px`
	}

	return (
		<div className='slide slide__2'>
			<Header translateTape={props.translateTape} />
			<div className='hello__text'>
				ТЕКСТ <br /> СООБЩЕНИЯ
			</div>
			<div className='textfield' ref={content} onScroll={onScroll}>
				<span>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit.
				Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque odio,
				a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue et,
				pellentesque magna. Vivamus elementum urna rutrum, viverra turpis vitae,
				rhoncus magna. Quisque faucibus sem nec lorem maximus molestie sit amet
				eget nisl. Integer luctus eget nibh nec blandit. Pellentesque pretium
				ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi commodo
				orci at dui egestas euismod. Sed faucibus libero eu est tincidunt, id
				semper tortor faucibus. Nam a lectus urna. Curabitur lacus nibh, mollis
				quis vestibulum at, venenatis sit amet neque. In nec est nec est
				volutpat facilisis. Integer vitae velit tellus. Vivamus egestas
				pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris,
				eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget
				facilisis felis. Lorem ipsum dolor sit amet, consectetur adipiscing
				elit. Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque
				odio, a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue
				et, pellentesque magna. Vivamus elementum urna rutrum, viverra turpis
				vitae, rhoncus magna. Quisque faucibus sem nec lorem maximus molestie
				sit amet eget nisl. Integer luctus eget nibh nec blandit. Pellentesque
				pretium ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi
				commodo orci at dui egestas euismod. Sed faucibus libero eu est
				tincidunt, id semper tortor faucibus. Nam a lectus urna. Curabitur lacus
				nibh, mollis quis vestibulum at, venenatis sit amet neque. In nec est
				nec est volutpat facilisis. Integer vitae velit tellus. Vivamus egestas
				pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris,
				eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget
				facilisis felis. Lorem ipsum dolor sit amet, consectetur adipiscing
				elit. Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque
				odio, a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue
				et, pellentesque magna. Vivamus elementum urna rutrum, viverra turpis
				vitae, rhoncus magna. Quisque faucibus sem nec lorem maximus molestie
				sit amet eget nisl. Integer luctus eget nibh nec blandit. Pellentesque
				pretium ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi
				commodo orci at dui egestas euismod. Sed faucibus libero eu est
				tincidunt, id semper tortor faucibus. Nam a lectus urna. Curabitur lacus
				nibh, mollis quis vestibulum at, venenatis sit amet neque. In nec est
				nec est volutpat facilisis. Integer vitae velit tellus. Vivamus egestas
				pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris,
				eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget
				facilisis felis. Lorem ipsum dolor sit amet, consectetur adipiscing
				elit. Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque
				odio, a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue
				et, pellentesque magna. Vivamus elementum urna rutrum, viverra turpis
				vitae, rhoncus magna. Quisque faucibus sem nec lorem maximus molestie
				sit amet eget nisl. Integer luctus eget nibh nec blandit. Pellentesque
				pretium ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi
				commodo orci at dui egestas euismod. Sed faucibus libero eu est
				tincidunt, id semper tortor faucibus. Nam a lectus urna. Curabitur lacus
				nibh, mollis quis vestibulum at, venenatis sit amet neque. In nec est
				nec est volutpat facilisis. Integer vitae velit tellus. Vivamus egestas
				pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris,
				eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget
				facilisis felis. Lorem ipsum dolor sit amet, consectetur adipiscing
				elit. Mauris semper rhoncus orci quis posuere. Phasellus ultricies neque
				odio, a tempus ipsum congue id. Vivamus a ante tincidunt, molestie augue
				et, pellentesque magna. Vivamus elementum urna rutrum, viverra turpis
				vitae, rhoncus magna. Quisque faucibus sem nec lorem maximus molestie
				sit amet eget nisl. Integer luctus eget nibh nec blandit. Pellentesque
				pretium ligula vitae augue dictum, eget lobortis lectus feugiat. Morbi
				commodo orci at dui egestas euismod. Sed faucibus libero eu est
				tincidunt, id semper tortor faucibus. Nam a lectus urna. Curabitur lacus
				nibh, mollis quis vestibulum at, venenatis sit amet neque. In nec est
				nec est volutpat facilisis. Integer vitae velit tellus. Vivamus egestas
				pellentesque leo, id pharetra nisi blandit ut. Suspendisse magna mauris,
				eleifend in gravida vitae, lobortis sit amet nulla. Nullam eget
				facilisis felis.
			</div>
			<img
				className={toggleClass ? 'sperm__anim1' : ''}
				src='./icons/slide2/sperm1.png'
				style={{
					position: 'absolute',
					width: 656,
					top: 97,
					right: 0,
				}}
				alt='sperm'
			/>
			<img
				className={toggleClass ? 'sperm__anim2' : ''}
				src='./icons/slide2/sperm2.png'
				style={{
					position: 'absolute',
					width: 440,
					top: 97,
					right: 0,
				}}
				alt='sperm'
			/>
			<img
				className={toggleClass ? 'sperm__anim3' : ''}
				src='./icons/slide2/sperm3.png'
				style={{
					position: 'absolute',
					width: 312,
					top: 75,
					right: 0,
				}}
				alt='sperm'
			/>
			<img
				className={toggleClass ? 'sperm__anim4' : ''}
				src='./icons/slide2/sperm4.png'
				style={{
					position: 'absolute',
					width: 134,
					top: 413,
					right: 0,
				}}
				alt='sperm'
			/>
			<img
				className={toggleClass ? 'sperm__anim5' : ''}
				src='./icons/slide2/sperm5.png'
				style={{
					position: 'absolute',
					width: 136,
					top: 517,
					right: 0,
				}}
				alt='sperm'
			/>
			<Logo />

			<div
				id='scrollbar__container'
				ref={container}
				onTouchStart={onTouchStartScrollBar}
				onTouchMove={onTouchMoveScrollBar}
			>
				<div id='scrollbar' ref={scrollbar}></div>
			</div>
		</div>
	)
}

export default Slide2
