import React from 'react';
import Todo from './Todo';
import styled from './Todos.module.css'

export default function Todos() {
    return (
        <div className={styled.wrap}>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
        </div>
    );
}

