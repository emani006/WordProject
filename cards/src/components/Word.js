import React, { Component } from 'react'

export class Word extends Component {
    render() {
        return (
        <div className='card'>
            <h1 className='word-english'>{this.props.word.english}</h1>
            <p>{this.props.word.transcription}</p>
            <h3>{this.props.word.russian}</h3>
            <button className='show-mean'>Translate</button>
        </div>
        )
    }
}

export default Word