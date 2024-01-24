import React from 'react';
import { FiMoon, FiSun } from "react-icons/fi";
import styled from './Header.module.css';
import { useTheme } from '../context/ThemeContext';

export default function Header({ filter, onFilter }) {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className={styled.header}>
            <div className={styled.mode} onClick={toggleTheme}>
                {theme === 'dark' ? <FiSun /> :  <FiMoon />}
            </div>
            <div className={styled.filter}>
                <span onClick={() => onFilter(undefined)} className={`${filter === undefined ? `${styled.active}`: ''}`}>전체</span>
                <span onClick={() => onFilter(false)} className={`${filter === false ? `${styled.active}` : ''}`}>할 것</span>
                <span onClick={() => onFilter(true)} className={`${filter ? `${styled.active}` : ''}`}>한 것</span>
            </div>
        </header>
    );
}

