import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import Todos from './components/Todos';

function App() {
  const [filter, setFilter] = useState();
  const [totalTodos, setTotalTodos] = useState(initTodos);
  const [todos, setTodos] = useState(initTodos);
  
  useEffect(() => {
    if (filter === undefined) setTodos(totalTodos);
    else setTodos(totalTodos.filter(d => d.done === filter));
  }, [filter, totalTodos]);


  return (
    <div className='app'>
      <div className='todo'>
        <Header filter={ filter } setFilter={setFilter} />
        <Todos todos={todos} setTotalTodos={setTotalTodos} />
        <InputTodo setTotalTodos={setTotalTodos} />
      </div>
    </div>
  );
}

export default App;

let initTodos = [
  {
    "id": 1,
    "todo": "공부하기",
    "done": false
  },
  {
    "id": 2,
    "todo": "청소하기",
    "done": false
  },
  {
    "id": 3,
    "todo": "밥먹기",
    "done": false
  }
];