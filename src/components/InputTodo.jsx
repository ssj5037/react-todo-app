import React from 'react';
import styled from './InputTodo.module.css'

export default function InputTodo() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className={styled.wrap}>
            <input className={styled.input} placeholder='Add Todo'></input>
            <button className={styled.button}>Add</button>
        </form>
    );
}

