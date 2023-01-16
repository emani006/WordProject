import React from 'react'

function Header(){
    return(
        <header>
            <div className='top'>
                <div className='logo'></div>
                <span className='motto'>Learn English easy with our cards</span>
                <ul className='nav'>
                    <li>About</li>
                    <li>Sign-in</li>
                    <li>Sign-up</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;