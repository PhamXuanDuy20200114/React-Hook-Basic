import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

const App = () => {

  //state
  let [name, setName] = useState('Gấu Gấu');
  let [address, setAddress] = useState('');

  const handleEventClick = (event) => {
    setName(address);
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
        <p>
          Hello {name}
        </p>
        <input type='text' value={address} onChange={(event) => handleChangeInput(event)}></input>
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
