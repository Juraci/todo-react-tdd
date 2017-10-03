import React from 'react';

const TodoItem = (props) => (
  <li className='Todo-Item'>
    <input type='checkbox' defaultChecked={props.todo.isComplete}/>{props.todo.description}
  </li>
);

export default TodoItem;
