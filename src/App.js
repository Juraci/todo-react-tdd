import React, { Component } from 'react';
import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import {
  addTodo,
  findById,
  toggleTodo,
  updateTodo,
  removeTodo,
} from './lib/todoHelpers';
import { pipe } from './lib/utils';

class App extends Component {
  state = {
    todos: this.props.todos || [],
    currentTodo: '',
    errorMessage: '',
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
    this.setState({todos: newState, currentTodo: '', errorMessage: ''});
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({ errorMessage: 'Description is required'});
  }

  handleToggleTodo = (id) => () => {
    const newTodo = pipe(findById, toggleTodo)(id, this.state.todos);
    this.setState({ todos: updateTodo(this.state.todos, newTodo)});
  }

  handleRemoveTodo = (id) => (evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({ todos: updatedTodos });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const errorNode = this.state.errorMessage ? <div className='error'>{this.state.errorMessage}</div> : null;

    return (
      <div className='App'>
        <div className='Todo-App'>
          <TodoForm
            handleSubmit={submitHandler}
            currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
          />
          {errorNode}
          <TodoList
            todos={this.state.todos}
            handleToggleTodo={this.handleToggleTodo}
            handleRemoveTodo={this.handleRemoveTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
