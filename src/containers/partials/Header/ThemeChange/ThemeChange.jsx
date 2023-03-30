import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styled from './ThemeChange.module.scss';

const ThemeChange = () => {
    return (
        <div className={styled.themeIcon}>
            <button><DarkModeIcon /></button>
            <button><LightModeIcon /></button>
        </div>
    );
}

export default ThemeChange;