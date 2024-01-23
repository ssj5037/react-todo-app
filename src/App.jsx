import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import Todos from './components/Todos';

export default function App() {
  const [filter, setFilter] = useState();
  const [totalTodos, setTotalTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [lastId, setLastId] = useState(localStorage.getItem('lastId') || 0);
  
  useEffect(() => {
    if (filter === undefined) setTodos(totalTodos);
    else setTodos(totalTodos.filter(d => d.done === filter));
  }, [filter, totalTodos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(totalTodos));
    localStorage.setItem('lastId', lastId);
  }, [totalTodos, lastId]);

  return (
    <div className='app'>
      <div className='todo'>
        <Header filter={ filter } setFilter={setFilter} />
        <Todos todos={todos} setTotalTodos={setTotalTodos} />
        <InputTodo setTotalTodos={setTotalTodos} lastId={lastId} setLastId={setLastId} />
      </div>
    </div>
  );
}
