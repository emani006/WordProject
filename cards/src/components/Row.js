import React, {useState} from 'react'
import wordlist from './wordlist';

export default function Row(elem){
    const [isActive, setActive] = useState(elem.isActive);
    const [english, setEnglish] = useState(elem.english);
    const [russian, setRussian] = useState(elem.russian);
    const [transcription, setTranscription] = useState(elem.transcription);
    const [id] = useState(elem.id);

    const changeWord = () => {
        let newWord = {
            id: id,
            english: english,
            russian: russian,
            transcription: transcription
        };
        
        let word = wordlist.find(item => item.id === id);
        
        let wordIndex = wordlist.indexOf(wordlist.find(item => item.id === id),0);
        wordlist[wordIndex]= word;
        handleTableChange();

        console.log(word);
        console.log(wordIndex);
        console.log(wordlist[wordIndex]);
        console.log(newWord);
        console.log(wordlist);
    }

    const deleteWord = () => {
        let word = wordlist.find(item => item.id === id);
        console.log(word);
        console.log(word.id);

        let i = wordlist.indexOf(word);
        wordlist.splice(i, 1);
        console.log(wordlist);
    }

    let rowClassName='table_row';
    let inputClassName='table_row_input';

    const handleTableChange = () => {
        setActive (!isActive);
        console.log(isActive);
        console.log(elem.id);
    };

    if (!isActive) return(<tr key={elem.id} className={rowClassName} >
                            <td className='table__cell'>
                                {elem.id}
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
                                <button className='table__button e' onClick={handleTableChange}>Edit</button>
                                <button className='table__button d' onClick={deleteWord}>Delete</button>
                            </td>
                        </tr>
                )
    else return(<tr key={elem.id} className={inputClassName}>
                    <td className='table__cell'>
                        {elem.id}
                    </td>
                        <td className='table__cell'>
                            <input name='eng' type='text' value={english} onChange={(event) => setEnglish(event.target.value)}/>
                        </td>
                        <td className='table__cell'>
                            <input name='spell' type='text' value={transcription} onChange={(event) => setTranscription(event.target.value)}/>
                        </td>
                        <td className='table__cell'>
                            <input name='rus' type='text' value={russian} onChange={(event) => setRussian(event.target.value)}/>
                        </td>
                        <td className='table__cell'>
                            <button className='table__button s' onClick={changeWord}>Save</button>
                            <button className='table__button c' onClick={handleTableChange}>Cancel</button>
                        </td>
                </tr>
    )
} 