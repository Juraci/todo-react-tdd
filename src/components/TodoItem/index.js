import React from 'react';
import { Todo } from '../../types';

type Props = {
  todo: Todo,
  handleToggleTodo: (id: number) => void,
};

const TodoItem = ({ todo, handleToggleTodo }: Props) => (
  <li>
    <input onClick={handleToggleTodo(todo.id)} type='checkbox' checked={todo.isComplete}/>{todo.description}
  </li>
);

export default TodoItem;
