import React, { useState } from 'react'
import wordlist from '../wordlist';

export default function Row(elem){
    const [isActive, setActive] = useState(elem.isActive);
    const [id] = useState(elem.id);
    const [english, setEnglish] = useState(elem.english);
    const [russian, setRussian] = useState(elem.russian);
    const [transcription, setTranscription] = useState(elem.transcription);
    let [isValid, setValid] = useState(false);


    let rowClassName='table_row';
    let inputClassName='table_row_input';

    let tableInputClassName = 'table__cell';

    const changeWord = () => {
        let newWord = {
            id: id,
            english: english,
            russian: russian,
            transcription: transcription
        };
        

        let wordIndex = wordlist.indexOf(wordlist.find(item => item.id === id),0);


        if (english !== '' && russian !== '' && transcription!== ''){
            wordlist[wordIndex]= newWord;

            setValid(isValid = true);
            handleTableChange();
            console.log('isValid saveWord ' + isValid);
        } else {
            setValid(isValid = false);
        }
        setValid(isValid = false);
    }


    const deleteWord = () => {
        let wordToBeDeleted = wordlist.find(item => item.id === id);
        console.log(wordToBeDeleted);

        let i = wordlist.indexOf(wordToBeDeleted);
        wordlist.splice(i, 1);
        console.log(wordlist);
        setValid(false);
    }


    const handleTableChange = () => {
        setActive (!isActive);
    };


    const cancelAction = () => {
        let wordToBeCancelled = wordlist.find(item => item.id === id);
        let i = wordlist.indexOf(wordToBeCancelled);


        console.log(wordlist[i].english);
        console.log(wordlist[i].russian);
        console.log(wordlist[i].transcription);

        // возвращение предыдущего сохраненного значения
        if (wordlist[i].english !== ''){
            setEnglish(wordlist[i].english);
        }
        if (wordlist[i].russian !== '' ){
            setRussian(wordlist[i].russian);
        }
        if (wordlist[i].transcription !== '' ){
            setTranscription(wordlist[i].transcription);        
        }
        setActive (!isActive);
    };
    

    if (!isActive) return(<tr key={elem.id} className={rowClassName} >
                            <td className='table__cell'>
                                {id}
                            </td>
                            <td className='table__cell'> 
                                {english}
                            </td>
                            <td className='table__cell'>
                                {transcription}
                            </td>
                            <td className='table__cell'>
                                {russian}
                            </td>
                            <td className='table__cell'>
                                <button className='table__button editButton' onClick={handleTableChange}>Edit</button>
                                <button className='table__button deleteButton' onClick={deleteWord}>Delete</button>
                            </td>
                        </tr>
                )
    else return(<tr key={elem.id} className={inputClassName}>
                    <td className='table__cell'>
                        {elem.id}
                    </td>
                        <td className={tableInputClassName}>
                            <input name='eng' type='text' required value={english} onChange={(event) => setEnglish(event.target.value)}/>
                        </td>
                        <td className={tableInputClassName}>
                            <input name='spell' type='text' required value={transcription} onChange={(event) => setTranscription(event.target.value)}/>
                        </td>
                        <td className={tableInputClassName}>
                            <input name='rus' type='text' required value={russian} onChange={(event) => setRussian(event.target.value)}/>
                        </td>
                        <td className='table__cell'>
                            <button className='table__button saveButton' disabled={isValid} onClick={changeWord}>Save</button>
                            <button className='table__button cancelButton' onClick={cancelAction}>Cancel</button>
                        </td>
                </tr>
    )
} 