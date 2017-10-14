// @flow

import React from 'react';
import TodoItem from '../TodoItem';
import { TodoCollection } from '../../types';

const TodoList = ({ todos }: TodoCollection) => (
  <div className='Todo-List'>
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
    </ul>
  </div>
);

export default TodoList;
