import React from 'react';
import logo from './logo.svg';
import './App.css';
import University from './action/openAPI/University';


function App() {
  const [view, setView] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul onClick={(e) => setView(!view)}>
          학교 목록{" "}
          {
            view
            ?  'Up'
            :  'Down'
          }
          {
            view && <University />
          }
        </ul>
        <ul onClick={(e) => setView(!view)}>
          {

          }
        </ul>
      </header>
    </div>
  );
}

export default App;
