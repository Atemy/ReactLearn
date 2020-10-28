import React from 'react';
import MyFirstButton from './MyFirstButton';

const Header = () => {
    return (
        <header className='header'>
            <img src='logo.png' alt='птичка'></img>
            <MyFirstButton />
        </header>
    )
}

export default Header;