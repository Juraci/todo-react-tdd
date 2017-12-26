import React from 'react';
import { Todo } from '../../types';

type Props = {
  todo: Todo,
  handleToggleTodo: (id: number) => void,
  handleRemoveTodo: (id: number) => void,
};

const TodoItem = ({ todo, handleToggleTodo, handleRemoveTodo }: Props) => (
  <li>
    <a onClick={handleRemoveTodo(todo.id)} href="#" className="remove-item">X</a>
    <input
      onClick={handleToggleTodo(todo.id)}
      type='checkbox'
      checked={todo.isComplete}/>
      {todo.description}
  </li>
);

export default TodoItem;
