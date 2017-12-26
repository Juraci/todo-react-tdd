// @flow
import React from 'react';
import TodoItem from '../TodoItem';
import { TodoCollection } from '../../types';

type Props = {
  todos: TodoCollection,
  handleToggleTodo: (id: number) => void,
  handleRemoveTodo: (id: number) => void,
};

const TodoList = ({ todos, handleToggleTodo, handleRemoveTodo }: Props) => (
  <div className='Todo-List'>
    <ul>
      {todos.map(todo =>
        <TodoItem
          className='Todo-Item'
          key={todo.id}
          todo={todo}
          handleToggleTodo={handleToggleTodo}
          handleRemoveTodo={handleRemoveTodo}
        />)}
    </ul>
  </div>
);

export default TodoList;
