import React, { useEffect, useRef, useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import styled from './Todo.module.css'

export default function Todo({data, onUpdate, onDelete}) {
    const { id, todo, done } = data;
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(todo);
    const inputFocus = useRef(null);

    useEffect(() => {
        setChecked(done);
    }, [done]);

    useEffect(() => {
        if (edit) inputFocus.current?.focus();
    },[edit])
    
    const handleCheckboxChange = () => {
        setChecked(prev => {
            onUpdate({id, todo, done: !prev})
            return !prev;
        });
    }

    const handleTextChange = (e) => setEditTodo(e.target.value);

    const handleUpdate = () => {
        setEdit(prev => {
            if (prev) onUpdate({ id, todo: editTodo, done });
            return !prev;
        });
    }

    const handleDelete = () => {
        onDelete({ id });
    }

    return (
        <div className={styled.wrap}>
            {
                !edit ?
                    <>
                        <input className={styled.checkbox} id={`todo${id}`} type="checkbox" checked={checked} value={checked} onChange={handleCheckboxChange} />
                        <label className={styled.todo} htmlFor={`todo${id}`}>{todo}</label>
                    </>
                    :
                    <>
                        <input
                            className={styled.edit}
                            type='text'
                            ref={inputFocus}
                            value={editTodo}
                            onChange={handleTextChange}
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

