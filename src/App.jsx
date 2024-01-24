import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import Todos from './components/Todos';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [filter, setFilter] = useState();
  // X : useState(getTodos()) -> 컴포넌트가 렌더링 될 때 마다 초기값 함수 매번 실행 (값은 useState가 내부적으로 가지고 있는 값을 사용한다.)
  // O : useState(getTodos) -> 초기값이 필요할 경우에만 실행됨.
  // 함수의 레퍼런스만 전달해 주기 때문에
  const [todos, setTodos] = useState(getTodos);
  const filtered = getFilterTodos(todos, filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const handleInsert = (inserted) =>
    setTodos(prev => [...prev, inserted]);
  const handleUpdate = (updated) =>
    setTodos(prev => prev.map(todo => todo.id === updated.id ? updated : todo));
  const handleDelete = (deleted) =>
    setTodos(prev => prev.filter(todo => todo.id !== deleted.id));

  return (
    <ThemeProvider>
      <Header filter={ filter } onFilter={setFilter} />
      <Todos todos={filtered} onUpdate={handleUpdate} onDelete={handleDelete} />
      <InputTodo onInsert={handleInsert} />
    </ThemeProvider>
  );
}

function getTodos() {
  return JSON.parse(localStorage.getItem('todos')) || []
}

function getFilterTodos(todos, filter) {
  if (filter === undefined) return todos;
  else return todos.filter(todo => todo.done === filter);
}