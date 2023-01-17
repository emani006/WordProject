import React, { Component } from 'react'

export class TableOne extends Component {
    render() {
        const {id, english, transcription, russian} = this.props.words;
        console.log('words', this.props.words);
        return (
        <div className='table'>
            <div>{id}</div>
            <div>{english}</div>
            <div>{transcription}</div>
            <div>{russian}</div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
        )
    }
}

export default TableOne