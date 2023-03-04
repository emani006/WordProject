import React from 'react'

export default function CardMini(props,ref) {
    let classname = 'show-mean';
    let buttonName = 'Click to translate';
    // let buttonClassName = 'show-button';
    // let [isActive, setActive] = useState(props.isActive);


    // const handleClick = (e) => {
    //     setActive (!isActive);
    //     props.handleWordCounter();
    //     getButtonDisabled();
    // }

    // const notShow = () => {
    //     setActive (isActive = false);
    // }

    // if (isActive === true) {
    //     classname+='__show';
    //     buttonClassName += '__hide';
    // }

    // const buttonRef = useRef();

    // useEffect(() => {
    //     buttonRef.current.focus();
    // })

    // const FancyButton = React.forwardRef((props,ref) => (
    //     <button ref={buttonRef} className={buttonClassName} onClick={handleClick}>{props.children}</button>
    //     ));
        
    return (
        <div className='cardMini'>
            <h1 className='wordEnglishMini'>{props.word.english}</h1>
            <p>{props.word.transcription}</p>
            <h3 className={classname}>{props.word.russian}</h3>
            {/* <FancyButton ref={buttonRef}>{buttonName}</FancyButton> */}
            <button className='showButtonMini'>{buttonName}</button>
        </div>
        )
}