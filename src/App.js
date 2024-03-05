import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './views/Nav';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/Countdown';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';
import YoutubeSearch from './views/YoutubeSearch';

const App = () => {

  //state
  let [address, setAddress] = useState('');
  let [todos, setTodos] = useState([
    { id: 'todo1', name: 'Đi chợ', type: 'Duy' },
    { id: 'todo2', name: 'Nấu cơm', type: 'Duy' },
    { id: 3, name: 'Rửa bát', type: 'Gấu' },
    { id: 4, name: 'Học bài', type: 'Gấu' }
  ]);

  // useEffect(() => {
  //   console.log('Component did mount App.js');
  // }, []);

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
    //console.log(event.target.value);
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((todo, index) => todo.id !== id);
    setTodos(currentTodos);
  }

  const timeUp = () => {
    alert('Time up!');
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path='/' exact>
              <Covid />
            </Route>
            <Route path='/timer'>
              <CountDown timeUp={timeUp} />
              <span>------------------------</span>
              <NewCountDown timeUp={timeUp} />
            </Route>
            <Route path='/todo'>
              <Todo
                todos={todos}
                title='All todos'
                deleteDataTodo={deleteDataTodo}
              />
              <Todo
                todos={todos.filter((todo, index) => todo.type === 'Duy')}
                title='Duy Todos'
                deleteDataTodo={deleteDataTodo}
              />
              <input type='text' value={address} onChange={(event) => handleChangeInput(event)}></input>
              <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
            </Route>
            <Route path='/blog' exact>
              <Blog />
            </Route>
            <Route path='/blog/:id' >
              <DetailBlog />
            </Route>
            <Route path='/add-new-blog' >
              <AddNewBlog />
            </Route>
            <Route path='/secret' >
              <YoutubeSearch />
            </Route>
            <Route path='*' >
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
