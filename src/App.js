import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>React Todos</h1>
        </header>
        <div className='Todo-App'>
          <form>
            <input className='todo-description' type='text'/>
            <input id='add-task' type='submit' value='Add'/>
          </form>
          <div className='Todo-List'>
            <ul>
              <li className='Todo-Item' state='todo'><input type='checkbox'/>Learn JSX</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
