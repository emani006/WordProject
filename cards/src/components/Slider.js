import React, {useState} from 'react'
import Card from './Card'
// import CardFlipFlop from './CardFlipFlop'
import wordlist from '../components/wordlist'
// import CardClass from './CardClass'

export default function Slider(props) {
    const [current, setCurrent] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    
    function previousCard() {
        setCurrent(current - 1);
    }
    function nextCard() {
        setCurrent(current + 1);
    }

    const [items] = useState (props.words);

    // альтернатива, если закончился массив выводимых слов
    const loading = <div className="loading">Loading card...</div>;

    const handleWordCounter = () => {
        setWordCount(wordCount + 1);
    }

    return (
<div className="cardContainer">
    <div className="cardBox">
        <main>

        {/* buttons previous */}
        <div className="navig">
            {current > 0 ? (
                <button onClick={previousCard}> &laquo; Previous card</button>
                ) : (
                <button className="disabled" disabled>
                    Previous card
                </button>
                )}
        </div>

        {/* show Card or loading text */}
        <div>
            {items && items.length > 0 ? <Card key={items.id} word={items[current]} handleWordCounter={handleWordCounter}/> : loading}
                <div>
                    {items && items.length > 0 ? (
                        <div >
                            Card {current + 1} of {items.length}
                        </div>) : ("")}
                </div>
        </div>

        {/* button next */}
        <div className="navig">
            {current < wordlist.length - 1 ? (
                <button onClick={nextCard}>Next card &raquo; </button>
                ) : (
                <button className="disabled" disabled>
                    Next card
                </button>
                )}
        </div>
        <div className=''>
            <p>Number of words learned: {wordCount}</p>
        </div>

        </main>
    </div>
    </div>
        )
}