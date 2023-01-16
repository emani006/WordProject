import React, { Component } from 'react'
import Word from './Word'

export class Words extends Component {
    render() {
        return (
            <main>
                {this.props.words.map(el => (
                    <Word key={el.id} word={el}/>
                ))}
            </main>
        )
    }
}

export default Words