// import React, {useState} from 'react'
import React from 'react'
import Row from './Row';

export default function TableInput({item}) {
    return (
    <div className='table__container'>
        <table>
            <thead className='table__header'>
                <tr>
                    <th className='table__cell'>#</th>
                    <th className='table__cell'>English</th>
                    <th className='table__cell'>Transcription</th>
                    <th className='table__cell'>Russian</th>
                    <th className='table__cell'></th>
                </tr> 
            </thead>
            <tbody >
                {item.map(elem => {
                    return <Row key={elem.id} id={elem.id} english={elem.english} transcription={elem.transcription} russian={elem.russian} isActive={elem.isActive}></Row>
                })}
            </tbody>
        </table>
    </div>
    )
}
