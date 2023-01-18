import React, { Component } from 'react'
import Word from './Word'

export class Words extends Component {
    render() {

    const getClick = () => {
        
    }
    
        return (
            <main>
                {this.props.words.map(el => (
                    <Word key={el.id} word={el} getClick={getClick}/>
                ))}
            </main>
        )
    }
}

export default Words