import React, {useState} from 'react'
import Trow from './Trow'
import Tinput from './Tinput';

export default function Row(elem){
    const [isActive, setActive] = useState(elem.isActive);

    const handleChange = () => {
        setActive (!isActive);
        console.log(isActive);
    };
    if (isActive === false) return(<Trow key={elem.id} isActive={elem.isActive} elem={elem} onclick={handleChange}/>) 
        else return (<Tinput key={elem.id} isActive={elem.isActive} elem={elem} onclick={handleChange}/>)
    //)
}