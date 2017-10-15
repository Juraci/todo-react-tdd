const addTodo = (list, item) => [...list, item];

const findById = (itemId, list) => list.find(item => item.id === itemId);

const toggleTodo = todo => ({...todo, isComplete: !todo.isComplete});

const updateTodo = (list, updatedItem) => {
  const index = list.findIndex(item => item.id === updatedItem.id);
  list.splice(index, 1, updatedItem);
  return list.slice();
};

export { addTodo, findById, toggleTodo, updateTodo };
