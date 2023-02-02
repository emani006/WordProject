import React, {useState}  from 'react'

export default function Card(props) {
    let classname = 'show-mean';
    let buttonName = 'Translate';
    let buttonClassName = 'show-button';
    const [isActive, setActive] = useState(props.isActive);

    const handleClick = () => {
        setActive (!isActive);
    };

    if (isActive === true) {
        classname+='__show';
        buttonClassName += '__hide';
    }

        return (
        <div className='card'>
            <h1 className='word-english'>{props.word.english}</h1>
            <p>{props.word.transcription}</p>
            <h3 className={classname}>{props.word.russian}</h3>
            <button className={buttonClassName} onClick={handleClick}>{buttonName}</button>
        </div>
        )
}