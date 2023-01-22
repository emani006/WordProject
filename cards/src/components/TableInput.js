import React, {useState} from 'react'
import Trow from './Trow'
import Tinput from './Tinput';

export default function TableInput({item}) {
    const [isActive, setActive] = useState(item.isActive);

    const handleChange = () => {
        setActive (!isActive);
        console.log(isActive);
    };

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
            <tbody onClick={handleChange}>
            {item.map(elem => {
                if (isActive === true) return <Tinput key={elem.id} isActive={elem.isActive} elem={elem}/>
                else return <Trow key={elem.id} isActive={elem.isActive} elem={elem}/>
                }
            )}
            </tbody>
        </table>
    </div>
    )
}
