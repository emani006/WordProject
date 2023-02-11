import React from 'react'

export default function CardBack(props){
    return(
        <div className='card'>
            <h1 className='word-english'>{props.word.english}</h1>
            <p>Flip card to check</p>
        </div>
    )
}