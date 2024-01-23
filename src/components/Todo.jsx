import React, { useEffect, useRef, useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import styled from './Todo.module.css'

export default function Todo({data, setTotalTodos}) {
    const { id, todo, done } = data;
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(todo);
    const inputFocus = useRef(null);

    useEffect(() => {
        setChecked(done);
    }, [done, setTotalTodos]);

    useEffect(() => {
        if (edit) inputFocus.current?.focus();
    },[edit])
    
    const handleChange = () => {
        setChecked(prev => !prev);
        setTotalTodos(prev => prev.map(item => item.id === id ? { ...item, done: !item.done}: item));
    }

    const handleUpdate = () => {
        setEdit(prev => {
            if (prev) {
                setTotalTodos(prev => prev.map(item => item.id === id ? { ...item, todo: editTodo}: item));
            }
            return !prev;
        });
    }

    const handleDelete = () => {
        setTotalTodos(prev => prev.filter(item => item.id !== id));
    }

    return (
        <div className={styled.wrap}>
            {
                !edit ?
                    <>
                        <input className={styled.checkbox} id={`todo${id}`} type="checkbox" checked={checked} value={checked} onChange={handleChange} />
                        <label className={styled.todo} htmlFor={`todo${id}`}>{todo}</label>
                    </>
                    :
                    <>
                        <input
                            className={styled.edit}
                            type='text'
                            ref={inputFocus}
                            value={editTodo}
                            onChange={(e) => setEditTodo(e.target.value)}
                            onKeyUp={(e) => { if (e.key === 'Enter') handleUpdate(); }}
                        />
                    </>
            }
            <div className={styled.buttons}>
                {!done && <button className={styled.button} onClick={handleUpdate}><FaEdit /></button>}
                <button className={styled.button} onClick={handleDelete}><FaTrashAlt /></button>
            </div>
        </div>
    );
}

