// @flow

import React from 'react';
import { EventHandler } from '../../../types';

type Props = {
  handleSubmit: () => void,
  handleInputChange: EventHandler,
  currentTodo: string,
};

export const TodoForm = ({ handleSubmit, currentTodo, handleInputChange }: Props) => (
  <form onSubmit={handleSubmit}>
    <input className='todo-description' type='text' value={currentTodo} onChange={handleInputChange}/>
    <input id='add-task' type='submit' value='Add'/>
  </form>
);
