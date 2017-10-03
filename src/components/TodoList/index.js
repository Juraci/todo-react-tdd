import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = (props) => (
  <div className='Todo-List'>
    <ul>
      {props.todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
    </ul>
  </div>
);

export default TodoList;
