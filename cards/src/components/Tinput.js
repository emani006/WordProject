export default function Tinput({elem}){
    return(
            <tr key={elem.id} className='table__row_input'>
                <td className='table__cell'>
                    {elem.id}
                </td>
                <td className='table__cell'>
                    <input type='text' value={elem.english}/>
                </td>
                <td className='table__cell'>
                    <input type='text' value={elem.transcription}/>
                </td>
                <td className='table__cell'>
                    <input type='text' value={elem.russian}/>
                </td>
                <td className='table__cell'>
                    <button className='table__button s'>Save</button>
                    <button className='table__button c'>Cancel</button>
                </td>
            </tr>
    )
}