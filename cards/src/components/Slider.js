import React from 'react'
// import Card from './Card'
import CardFlipFlop from './CardFlipFlop'

export default function Slider(props) {
        return (
            <div className='sliderStack'>
                <div className='card'>
                {props.words.map(el => (
                    <CardFlipFlop key={el.id} word={el}/>
                ))}
                </div>
            </div>
        )
}