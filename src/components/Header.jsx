import React from 'react';
import { FiSun } from "react-icons/fi";
import styled from './Header.module.css';

export default function Header() {
    return (
        <header className={styled.header}>
            <div className={styled.mode}>
                <FiSun />
            </div>
            <div className={styled.filter}>
                <span className={styled.active}>All</span>
                <span>Active</span>
                <span>Completed</span>
            </div>
        </header>
    );
}

