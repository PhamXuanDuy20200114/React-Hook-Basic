import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Nav from './views/Nav';
import Todo from './views/Todo';

const App = () => {

  //state
  let [name, setName] = useState('Gấu Gấu');
  let [address, setAddress] = useState('');
  let [todos, setTodos] = useState([
    { id: 'todo1', name: 'Đi chợ', type: 'Duy' },
    { id: 'todo2', name: 'Nấu cơm', type: 'Duy' },
    { id: 3, name: 'Rửa bát', type: 'Gấu' },
    { id: 4, name: 'Học bài', type: 'Gấu' }
  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert('Please enter Todo name!');
      return;
    }
    let newTodo = { id: 'abc', name: address };
    setTodos([...todos, newTodo]);
    setAddress('');
  }

  const handleChangeInput = (event) => {
    setAddress(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello world with {name}
        </h1>
        <Todo
          todos={todos}
          title='All todos'
        />
        <Todo
          todos={todos.filter((todo, index) => todo.type === 'Duy')}
          title='Duy Todos'
        />
        <input type='text' value={address} onChange={(event) => handleChangeInput(event)}></input>
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
