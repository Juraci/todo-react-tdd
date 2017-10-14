import React from 'react';
import { Todo } from '../../types';

const TodoItem = ({ todo }: Todo) => (
  <li className='Todo-Item'>
    <input type='checkbox' defaultChecked={todo.isComplete}/>{todo.description}
  </li>
);

export default TodoItem;
