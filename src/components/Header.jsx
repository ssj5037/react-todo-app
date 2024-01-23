import React from 'react';
import { FiMoon, FiSun } from "react-icons/fi";
import styled from './Header.module.css';

export default function Header({ filter, setFilter, darkTheme, setDarkTheme }) {

    return (
        <header className={styled.header}>
            <div className={styled.mode} onClick={()=>setDarkTheme(prev=>prev === 'dark'? 'light' : 'dark')}>
                {darkTheme === 'dark' ? <FiSun /> :  <FiMoon />}
            </div>
            <div className={styled.filter}>
                <span onClick={() => setFilter(undefined)} className={`${filter === undefined ? `${styled.active}`: ''}`}>전체</span>
                <span onClick={() => setFilter(false)} className={`${filter === false ? `${styled.active}` : ''}`}>할 것</span>
                <span onClick={() => setFilter(true)} className={`${filter ? `${styled.active}` : ''}`}>한 것</span>
            </div>
        </header>
    );
}

