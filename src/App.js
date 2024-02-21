import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const App = () => {

  const handleEventClick = () => {
    console.log('Hello Gấu Gấu');
  }

  const handleChangeInput = () => {
    console.log('Hello Gấu Gấu Bumrung');
  }
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Gấu Gấu
        </p>
        <input type='text' value="Gau Gau" onChange={() => handleChangeInput()}></input>
        <button type='button' onClick={() => handleEventClick()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
