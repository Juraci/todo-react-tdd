import { addTodo } from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
    const startTodos = [
      { id: 1, description: 'one', isComplete: false },
      { id: 2, description: 'two', isComplete: false },
    ];

    const newTodo = { id: 3, description: 'three', isComplete: false };

    const expected = [
      { id: 1, description: 'one', isComplete: false },
      { id: 2, description: 'two', isComplete: false },
      { id: 3, description: 'three', isComplete: false },
    ];

    expect(addTodo(startTodos, newTodo)).toEqual(expected);
});

test('addTodo should add mutate the existing todo array', () => {
    const startTodos = [
      { id: 1, description: 'one', isComplete: false },
      { id: 2, description: 'two', isComplete: false },
    ];

    const newTodo = { id: 3, description: 'three', isComplete: false };

    const expected = [
      { id: 1, description: 'one', isComplete: false },
      { id: 2, description: 'two', isComplete: false },
      { id: 3, description: 'three', isComplete: false },
    ];

    expect(addTodo(startTodos, newTodo)).not.toBe(startTodos);
});
