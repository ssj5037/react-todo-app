import React, { useState } from 'react';
import styled from './InputTodo.module.css'
import { v4 as uuid } from 'uuid';

export default function InputTodo({onInsert}) {
    const [newTodo, setNewTodo] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newTodo.length < 1) return;
        const newItem = {
            id: uuid(),
            todo: newTodo,
            done: false
        };
        onInsert(newItem);
        setNewTodo('');
    }
    return (
        <form onSubmit={handleSubmit} className={styled.wrap}>
            <input className={styled.input} placeholder='새로운 할 일' value={newTodo} onChange={(e)=>setNewTodo(e.target.value.trimStart())}></input>
            <button className={styled.button}></button>
        </form>
    );
}

