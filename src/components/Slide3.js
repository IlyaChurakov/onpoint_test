import '../css/Slide3.css'

const Slide3 = (props) => {
    return (
        <div className="slide slide__3">
            <div className='header'>
                <img className='header__btn' src="./icons/global/main.png" alt="header" onClick={() => props.toSlide(0)}/>
                <div className='header__line'/>
                <div className='header__text'>PROJECT</div>
            </div>

            <div className='board__transparent'>
                <div className='board__transparent_subtitle'>КЛЮЧЕВОЕ СООБЩЕНИЕ</div>
                <div className='board__transparent_title'>BREND<span>XY</span></div>

                <div className='board__group'>
                    <img id='plate' src="./icons/slide3/plate.png" alt="icon" />
                    <img id='calendar' src="./icons/slide3/calendar.png" alt="icon" />
                    <div className='big__board_in'>
                        Ehicula ipsum a arcu curvus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies
                    </div>
                    <div className='small__board_in'>
                        A arcu curvus vitae
                    </div>
                    <button className='pinkBtn' onClick={() => props.toSlideWithoutAnim(-3072)}>
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

            <img 
                src='./icons/global/bottle.png' 
                style={{
                    position: 'absolute', 
                    width: 231, 
                    bottom: 0, 
                    left: 52, 
                    zIndex: 5
                }}
                alt="bottle"
            />
            <img 
                className='bubble1' 
                src='./icons/global/bubble1.png' 
                style={{
                    position: 'absolute', 
                    width: 37, 
                    top: 65, 
                    left: 197, 
                    zIndex: 4
                }}
                alt="bubble"
            />
            <img 
                className='bubble2' 
                src='./icons/global/bubble2.png' 
                style={{
                    position: 'absolute', 
                    width: 67, 
                    top: 155, 
                    left: 183, 
                    zIndex: 6
                }}
                alt="bubble"
            />
            <img 
                className='bubble3' 
                src='./icons/global/bubble3.png' 
                style={{
                    position: 'absolute', 
                    width: 32, 
                    top: 212, 
                    left: 82, 
                    zIndex: 4
                }}
                alt="bubble"
            />
            <img 
                className='bubble4' 
                src='./icons/global/bubble4.png' 
                style={{
                    position: 'absolute', 
                    width: 105,
                    top: 325, 
                    left: 197, 
                    zIndex: 4
                }}
                alt="bubble"
            />
            <img 
                className='bubble5' 
                src='./icons/global/bubble5.png' 
                style={{
                    position: 'absolute', 
                    width: 30, 
                    bottom: 284, 
                    left: 10, 
                    zIndex: 6
                }}
                alt="bubble"
            />
            <img 
                className='bubble6' 
                src='./icons/global/bubble6.png' 
                style={{
                    position: 'absolute', 
                    width: 75, 
                    bottom: 140, 
                    left: 25, 
                    zIndex: 6
                }}
                alt="bubble"
            />
            <img 
                className='bubble7' 
                src='./icons/global/bubble7.png' 
                style={{
                    position: 'absolute', 
                    width: 54, 
                    bottom: 120, 
                    left: 250, 
                    zIndex: 4
                }}
                alt="bubble"
            />
            <img 
                className='bubble8' 
                src='./icons/global/bubble8.png' 
                style={{
                    position: 'absolute', 
                    width: 139,
                    bottom: 0, 
                    left: 188, 
                    zIndex: 6
                }}
                alt="bubble"
            />
            <img 
                src="./icons/global/shape1.png" 
                style={{
                    position: 'absolute', 
                    width: 57, 
                    bottom: 13, 
                    left: 70,
                    zIndex: 6
                }}
                alt="bubble"
            />
        </div>
    )
}

export default Slide3