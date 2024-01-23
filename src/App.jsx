import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import Todos from './components/Todos';

export default function App() {
  const [filter, setFilter] = useState();
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('todo-darkTheme'));
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const filtered = getFilterTodos(todos, filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  useEffect(() => {
    localStorage.setItem('todo-darkTheme', darkTheme);
  }, [darkTheme]);

  const handleTheme = () => setDarkTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const handleInsert = (inserted) =>
    setTodos(prev => [...prev, inserted]);
  
  const handleUpdate = (updated) =>
    setTodos(prev => prev.map(todo => todo.id === updated.id ? updated : todo));
  
  const handleDelete = (deleted) =>
    setTodos(prev => prev.map(todo => todo.id !== deleted.id));

  return (
    <div className={`app ${darkTheme}`}>
      <div className='todo'>
        <Header filter={ filter } onFilter={setFilter} darkTheme={darkTheme} onChangeTheme={handleTheme} />
        <Todos todos={filtered} onUpdate={handleUpdate} onDelete={handleDelete} />
        <InputTodo onInsert={handleInsert} />
      </div>
    </div>
  );
}

function getFilterTodos(todos, filter) {
  if (filter === undefined) return todos;
  else return todos.filter(todo => todo.done === filter);
}