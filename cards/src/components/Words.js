import React, { Component } from 'react'
import Card from './Card'

export default class Words extends Component {
    render() {

        return (
            <main>
                {this.props.words.map(el => (
                    <Card key={el.id} word={el} />
                ))}
            </main>
        )
    }
}