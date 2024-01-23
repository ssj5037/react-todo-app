import React from 'react';
import Todo from './Todo';
import styled from './Todos.module.css'

export default function Todos({todos, setTotalTodos}) {
    return (
        <div className={styled.wrap}>
            {
                todos.map(todo=> <Todo key={todo.id} data={todo} setTotalTodos={setTotalTodos} />)
            }
        </div>
    );
}

