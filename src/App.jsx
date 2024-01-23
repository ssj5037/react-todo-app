import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import Todos from './components/Todos';

function App() {
  const [filter, setFilter] = useState();
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch('data/todos.json')
      .then(res => res.json())
        .then(data => {
            if (filter === undefined) setTodos(data);
            else setTodos(data.filter(d => d.done === filter));
        });
  }, [filter]);


  return (
    <div className='app'>
      <div className='todo'>
        <Header filter={ filter } setFilter={setFilter} />
        <Todos todos={todos} />
        <InputTodo />
      </div>
    </div>
  );
}

export default App;
