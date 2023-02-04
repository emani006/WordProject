import React, {useState} from 'react'

export default function Row(elem){
    const [isActive, setActive] = useState(elem.isActive);
    // let [english, setEnglish] = useState(elem.english);
    // let [russian, setRussian] = useState(elem.russian);
    // let [transcription, setTranscription] = useState(elem.transcription);

    let rowClassName='table_row';
    let inputClassName='table_row_input';

    const handleTableChange = () => {
        setActive (!isActive);
        console.log(isActive);
        console.log(elem.id);
    };

    // const changeInput = (event) =>{
    //     console.log(event.targe.value);
    //     
    // }

    // const submitChange = (event) => {
    //     event.preventDefault();
    // }


    if (!isActive) return(<tr key={elem.id} className={rowClassName} >
                            <td className='table__cell'>
                                {elem.id}
                            </td>
                            <td className='table__cell'> 
                                {elem.english}
                            </td>
                            <td className='table__cell'>
                                {elem.transcription}
                            </td>
                            <td className='table__cell'>
                                {elem.russian}
                            </td>
                            <td className='table__cell'>
                                <button className='table__button e' onClick={handleTableChange}>Edit</button>
                                <button className='table__button d'>Delete</button>
                            </td>
                        </tr>
                )
    else return(<tr key={elem.id} className={inputClassName}>
                    <td className='table__cell'>
                        {elem.id}
                    </td>
                        <td className='table__cell'>
                            <input name='eng' type='text' defaultValue={elem.english}/>
                        </td>
                        <td className='table__cell'>
                            <input name='spell' type='text' defaultValue={elem.transcription}/>
                        </td>
                        <td className='table__cell'>
                            <input name='rus' type='text' defaultValue={elem.russian}/>
                        </td>
                        <td className='table__cell'>
                            <button className='table__button s'>Save</button>
                            <button className='table__button c' onClick={handleTableChange}>Cancel</button>
                        </td>
                </tr>
    )
} 