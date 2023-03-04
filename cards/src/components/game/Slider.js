import React, { useState } from 'react'
import Card from './Card'
// import CardFlipFlop from './CardFlipFlop'
import wordlist from '../wordlist'
// import CardClass from './CardClass'
import CardMini from './CardMini';


export default function Slider(props) {
    const [current, setCurrent] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [isLearned, setLearned] = useState(false);

    // let wordsLearnedArray = [];

    // const previousCard = () => {
    //     setCurrent(current - 1);
    // }
    // const nextCard = () => {
    //     setCurrent(current + 1);
    // }

    const [items] = useState (props.words);


    // const previousCard = () => setCurrent((prevState) => ({ current : prevState.current - 1 }));
    // const nextCard = () => setCurrent((prevState) => ({ current : prevState.current + 1 }));


    const previousCard = () => setCurrent((prevState) => ( prevState - 1 ));
    const nextCard = () => setCurrent((prevState) => ( prevState + 1 ));


    // альтернатива, если закончился массив выводимых слов
    const loading = <div className="loading">That's all, folks! 
                        <div>
                            To step back, use PREVIOUS CARD button
                        </div>
                    </div>;


    // подсчет кликов по кнопке 'Click to translate'
    const handleWordCounter = () => {
        setWordCount(wordCount + 1);
        // console.log('isLearned changed:' + isLearned);
        // setLearned(isLearned = true);
        if (isLearned === false){
            setWordCount(wordCount + 1);
            setLearned(true);
        } else {
            setLearned(false);
        }
        console.log('isLearned changed:' + isLearned);
    }

    // классы для компонента Card
    const classname = 'show-mean';
    const buttonClassName = 'show-button';


    return (
<div className="cardContainer">

    <div className='learned-words'>
        <p>Number of words learned today: {wordCount}</p>
    </div>

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
            {items && items.length && (current < wordlist.length) > 0 ? <Card key={items.id} word={items[current]} classname={classname} buttonClassName={buttonClassName} handleWordCounter={handleWordCounter}/> : loading}
                <div>
                    {items && items.length > 0 && (current < wordlist.length) ? (
                        <div >
                            Card {current + 1} of {items.length}
                        </div>) : ("")}
                </div>
        </div>

        {/* button next */}
        <div className="navig">
            {current <= wordlist.length - 1 ? (
                <button onClick={nextCard}>Next card &raquo; </button>
                ) : (
                <button className="disabled" disabled>
                    Next card
                </button>
                )}
        </div>
        </main>
    </div>

    <div className='words-group'>
        <div className='wordsBox wordsUnknown'>
            <div className='wordsUnknown'>Unknown</div>
        </div>

        <div className='wordsBox'>
                {current+1 < items.length ? <CardMini className='cardMini' key={items.id} word={items[current+1]}/> : ''}
            <div className=' wordsRemain'>
                <p>Remain</p>
                <div>
                    {items && items.length > 0 && (current < wordlist.length) ? (
                            <div >
                                Cards to study: {items.length - current - 1}
                            </div>) : (<div >
                                Cards to study: {items.length - current}
                            </div>)}
                </div>
            </div>
        </div>

        <div className='wordsBox wordsKnown'>
            <div className='wordsKnown'>Known</div>
        </div>
    </div>
</div>
        )
}