import React, { Component } from 'react';
import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import { addTodo } from './lib/todoHelpers';

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
    const newTodo = {
      id: currentTodos.length === 0 ? 0 : currentTodos[currentTodos.length -1].id + 1,
      description: this.state.currentTodo,
      isComplete: false,
    };

    const newState = addTodo(currentTodos, newTodo);
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
          <TodoForm
            handleSubmit={this.handleSubmit}
            currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
          />
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
