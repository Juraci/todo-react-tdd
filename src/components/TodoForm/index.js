// @flow

import React from 'react';

type Props = {
  handleSubmit: () => void,
  handleInputChange: () => void,
  currentTodo: string,
};

const TodoForm = ({ handleSubmit, currentTodo, handleInputChange }: Props) => (
  <form onSubmit={handleSubmit}>
    <input className='todo-description' type='text' value={currentTodo} onChange={handleInputChange}/>
    <input id='add-task' type='submit' value='Add'/>
  </form>
);

export default TodoForm;
