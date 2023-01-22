export default function Trow({elem}){
    return(
            <tr key={elem.id}>
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
                    <button className='table__button e'>Edit</button>
                    <button className='table__button d'>Delete</button>
                </td>
            </tr>
    )
}