import React, {useState}  from 'react'

export default function Card(props) {
    let classname = 'show-mean';
    let buttonName = 'Click to translate';
    let buttonClassName = 'show-button';
    let [isActive, setActive] = useState(props.isActive);

    const handleClick = () => {
        setActive (!isActive);
    }

    const notShow = () => {
        setActive (isActive = false);
    }

    if (isActive === true) {
        classname+='__show';
        buttonClassName += '__hide';
    }

        return (
        <div className='card' onMouseLeave={notShow} >
            <h1 className='word-english'>{props.word.english}</h1>
            <p>{props.word.transcription}</p>
            <h3 className={classname}>{props.word.russian}</h3>
            <button className={buttonClassName} onClick={handleClick}>{buttonName}</button>
        </div>
        )
}