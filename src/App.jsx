import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import Todos from './components/Todos';

export default function App() {
  const [filter, setFilter] = useState();
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('todo-darkTheme'));
  const [totalTodos, setTotalTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [lastId, setLastId] = useState(localStorage.getItem('lastId') || 0);
  
  useEffect(() => {
    if (filter === undefined) setTodos(totalTodos);
    else setTodos(totalTodos.filter(d => d.done === filter));
  }, [filter, totalTodos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(totalTodos));
  }, [totalTodos]);
  
  useEffect(() => {
    localStorage.setItem('lastId', lastId);
  }, [lastId]);

  useEffect(() => {
    localStorage.setItem('todo-darkTheme', darkTheme);
  }, [darkTheme]);

  return (
    <div className={`app ${darkTheme === 'dark' ? 'dark' : 'light'}`}>
      <div className='todo'>
        <Header filter={ filter } setFilter={setFilter} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Todos todos={todos} setTotalTodos={setTotalTodos} />
        <InputTodo setTotalTodos={setTotalTodos} lastId={lastId} setLastId={setLastId} />
      </div>
    </div>
  );
}
