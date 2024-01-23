import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import styled from './Todos.module.css'

export default function Todos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('data/todos.json')
            .then(res => res.json())
            .then(data => setTodos(data));
    },[])
    return (
        <div className={styled.wrap}>
            {
                todos.map(todo=> <Todo key={todo.id} data={todo} />)
            }
        </div>
    );
}

