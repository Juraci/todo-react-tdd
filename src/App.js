import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: '',
    };
  }

  handleInputChange = (evt) => {
    this.setState({currentTodo: evt.target.value});
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const currentTodos = this.state.todos;
    const newState = currentTodos.concat({
      id: currentTodos.length === 0 ? 0 : currentTodos[currentTodos.length -1].id + 1,
      description: this.state.currentTodo,
      isComplete: false,
    });
    this.setState({todos: newState, currentTodo: ''});
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>React Todos</h1>
        </header>
        <div className='Todo-App'>
          <form onSubmit={this.handleSubmit}>
            <input className='todo-description' type='text' value={this.state.currentTodo} onChange={this.handleInputChange}/>
            <input id='add-task' type='submit' value='Add'/>
          </form>
          <div className='Todo-List'>
            <ul>
              {this.state.todos.map(todo =>
                <li className='Todo-Item' key={todo.id}>
                  <input type='checkbox' defaultChecked={todo.isComplete}/>{todo.description}
               </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
