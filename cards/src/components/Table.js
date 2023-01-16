import React from 'react'
import wordlist from './wordlist'

export default function Table() {
    return (
    <div>
        <table className="table table-sm table-striped">
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
                            return <li>{elem.id}</li>;
                        })}
                    </th>
                    <td>
                        {wordlist.map(elem => {
                            return <li>{elem.english}</li>;
                        })}
                    </td>
                    <td>
                        {wordlist.map(elem => {
                            return <li>{elem.transcription}</li>;
                        })}
                    </td>
                    <td>
                        {wordlist.map(elem => {
                            return <li>{elem.russian}</li>;
                        })}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
