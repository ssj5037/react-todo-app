import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import styled from './Todo.module.css'

export default function Todo() {
    return (
        <div className={styled.wrap}>
            <input className={styled.checkbox} id='todo' type="checkbox" />
            <label className={styled.todo} htmlFor='todo'>공부하기</label>
            <button className={styled.button}><FaTrashAlt /></button>
        </div>
    );
}

