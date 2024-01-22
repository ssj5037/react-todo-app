import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className='app'>
      <div className='todo'>
        <Header />
        <Todos />
        <InputTodo />
      </div>
    </div>
  );
}

export default App;
