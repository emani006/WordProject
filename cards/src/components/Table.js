import React from 'react'
import wordlist from './wordlist'

export default function Table() {
    return (
    <div>
        <table className="table table-sm table-bordered">
            <thead className='thead-light'>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">English</th>
                    <th scope="col">Transcription</th>
                    <th scope="col">Russian</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        {wordlist.map(elem => {
                            return <li key={elem.id}>{elem.id}</li>;
                        })}
                    </th>
                    <td>
                        {wordlist.map(elem => {
                            return <li key={elem.id}>{elem.english}</li>;
                        })}
                    </td>
                    <td>
                        {wordlist.map(elem => {
                            return <li key={elem.id}>{elem.transcription}</li>;
                        })}
                    </td>
                    <td>
                        {wordlist.map(elem => {
                            return <li key={elem.id}>{elem.russian}</li>;
                        })}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
