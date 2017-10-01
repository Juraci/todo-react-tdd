import React from 'react';

const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input className='todo-description' type='text' value={props.currentTodo} onChange={props.handleInputChange}/>
    <input id='add-task' type='submit' value='Add'/>
  </form>
);

export default TodoForm;
