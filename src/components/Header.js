import React from 'react'

const Header = ({ funcToMove, toSlide }) => {
	return (
		<div className='header'>
			<img
				className='header__btn'
				src='./icons/global/main.png'
				alt='header'
				onClick={() => funcToMove(toSlide)}
			/>
			<div className='header__line' />
			<div className='header__text'>PROJECT</div>
		</div>
	)
}

export default Header
