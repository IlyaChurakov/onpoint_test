import '../css/Slide5.css'

const Slide5 = (props) => {
    return (
        <div className="slide slide__5">
            <div className='header'>
                <img className='header__btn' src="./icons/global/main.png" alt="header" onClick={() => props.toSlideWithoutAnim(0)}/>
                <div className='header__line'/>
                <div className='header__text'>PROJECT</div>
            </div>

            <div className='board'>
                <div className='board__close' onClick={() => props.toSlideWithoutAnim(-2048)}>
                    <div className='board__close_line1'></div>
                    <div className='board__close_line2'></div>
                </div> 
                <div className='board__subtitle'>ПРЕИМУЩЕСТВА</div>
                <div className='board__title'>BREND<span>XY</span></div>
                <ul>
                    <li className='numbers'>04</li>
                    <li className='txt'>Mi bibendum neque egestas congue quisque egestas diam</li>
                    <li className='numbers'>05</li>
                    <li className='txt'>Venenatis lectus magna fringilla urna</li>
                    <li className='numbers'>06</li>
                    <li className='txt'>Venenatis lectus magna fringilla urna</li>
                </ul>
                <div className='btns__wrapper'>
                    <img src="./icons/slide4/btn_left.png" alt="button" onClick={() => props.toSlideWithoutAnim(-3072)}/>
                    <div className='circle__pink'></div>
                    <div className='circle__pink'></div>
                    <img src="./icons/slide4/btn_right.png" alt="button" />
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
                alt="bubble"
            />
            <img 
                className='bubble1' 
                src='../icons/global/bubble1.png' 
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
                src='../icons/global/bubble2.png' 
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
                src='../icons/global/bubble3.png' 
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
                src='../icons/global/bubble4.png' 
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
                src='../icons/global/bubble5.png' 
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
                src='../icons/global/bubble6.png' 
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
                src='../icons/global/bubble7.png' 
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
                src='../icons/global/bubble8.png' 
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
                alt="onpoint"
            />
        </div>
    )
}

export default Slide5