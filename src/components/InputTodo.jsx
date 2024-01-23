import React, { useState } from 'react';
import styled from './InputTodo.module.css'

export default function InputTodo({setTotalTodos, lastId, setLastId}) {
    const [newTodo, setNewTodo] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (newTodo.length < 1) return;
        const newItem = {
            id: lastId,
            todo: newTodo,
            done: false
        };
        setTotalTodos(prev => [...prev, newItem]);
        setLastId(prev => +prev + 1);
        setNewTodo('');
    }
    return (
        <form onSubmit={handleSubmit} className={styled.wrap}>
            <input className={styled.input} placeholder='새로운 할 일' value={newTodo} onChange={(e)=>setNewTodo(e.target.value.trimStart())}></input>
            <button className={styled.button}></button>
        </form>
    );
}

