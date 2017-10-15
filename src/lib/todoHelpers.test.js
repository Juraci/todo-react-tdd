import { addTodo, findById, toggleTodo, updateTodo } from './todoHelpers';

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

test('findById should return the expected item from the array', () => {
    const startTodos = [
      { id: 1, description: 'one', isComplete: false },
      { id: 2, description: 'two', isComplete: false },
      { id: 3, description: 'three', isComplete: false },
    ];

    const expected = { id: 2, description: 'two', isComplete: false };

    expect(findById(2, startTodos)).toEqual(expected);
});

test('toggleTodo should toggle the isComplete prop of a todo', () =>{
    const startTodo =  { id: 1, description: 'one', isComplete: false };
    const expected =  { id: 1, description: 'one', isComplete: true };

    expect(toggleTodo(startTodo)).toEqual(expected);
});

test('toggleTodo should not mutate the original todo', () =>{
    const startTodo =  { id: 1, description: 'one', isComplete: false };

    expect(toggleTodo(startTodo)).not.toBe(startTodo);
});

test('updateTodo should uptate an item by id', () => {
    const startTodos = [
      { id: 1, description: 'one', isComplete: false },
      { id: 2, description: 'two', isComplete: false },
      { id: 3, description: 'three', isComplete: false },
    ];

    const updatedTodo = { id: 2, description: 'two', isComplete: true };

    const expectedTodos = [
      { id: 1, description: 'one', isComplete: false },
      { id: 2, description: 'two', isComplete: true },
      { id: 3, description: 'three', isComplete: false },
    ];

    expect(updateTodo(startTodos, updatedTodo)).toEqual(expectedTodos);
});

test('updateTodo should not mutate the original array', () => {
    const startTodos = [
      { id: 1, description: 'one', isComplete: false },
      { id: 2, description: 'two', isComplete: false },
      { id: 3, description: 'three', isComplete: false },
    ];

    const updatedTodo = { id: 2, description: 'two', isComplete: true };

    expect(updateTodo(startTodos, updatedTodo)).not.toBe(startTodos);
});
