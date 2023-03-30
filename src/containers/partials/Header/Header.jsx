import React from 'react';
import ThemeChange from './ThemeChange/ThemeChange';
import { styled } from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <h1>Todo list</h1>
            <ThemeChange />
        </header>
    );
}

export default Header;