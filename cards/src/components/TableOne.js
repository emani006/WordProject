//import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// export class TableOne extends Component {
//     render() {
//         console.log(this.props.item);
//         return (
//             <div className="table table-sm table-bordered">
//                 <div>{this.props.item.id}</div>
//                 <div>{this.props.item.english}</div>
//                 <div>{this.props.item.transcription}</div>
//                 <div>{this.props.item.russian}</div>
//                 <button>Edit</button>
//                 <button>Delete</button>
//             </div>
//             )
//     }
// }

// export default TableOne


function TableOne({item}){
    return (
    <div className='table__container'>
        <div className="table">
                <div>{item.id}</div>
                <div>{item.english}</div>
                <div>{item.transcription}</div>
                <div>{item.russian}</div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
    </div>
            )
        }

export default TableOne