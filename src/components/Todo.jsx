import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import styled from './Todo.module.css'

export default function Todo({data}) {
    const { id, todo, done } = data;
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(done);
    }, [done]);
    const handleChange = () => setChecked(prev => !prev);
    return (
        <div className={styled.wrap}>
            <input className={styled.checkbox} id={`todo${id}`} type="checkbox" value={checked} onChange={handleChange} />
            <label className={styled.todo} htmlFor={`todo${id}`}>{todo}</label>
            <button className={styled.button}><FaTrashAlt /></button>
        </div>
    );
}

